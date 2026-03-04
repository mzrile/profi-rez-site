const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const serviceLabels: Record<string, string> = {
  rezanje: "Rezanje betona",
  busenje: "Bušenje betona",
  "busenje-frezanje": "Bušenje i frezanje betona",
  ojacanja: "Ojačanja metalnom konstrukcijom",
  rusenje: "Rušenje objekata",
  ostalo: "Ostalo",
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, service, message } = await req.json();

    if (!name || !email || !phone || !service || !message) {
      return new Response(JSON.stringify({ error: 'Sva polja su obavezna' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    const serviceLabel = serviceLabels[service] || service;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'PROFI-REZ Kontakt <onboarding@resend.dev>',
        to: ['info@profi-rez.hr'],
        subject: `Novi upit - ${serviceLabel}`,
        html: `
          <h2>Novi upit s web stranice</h2>
          <p><strong>Ime / Tvrtka:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone}</p>
          <p><strong>Usluga:</strong> ${serviceLabel}</p>
          <p><strong>Poruka:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
        reply_to: email,
      }),
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error('Resend error:', errorData);
      throw new Error('Failed to send email');
    }

    const data = await res.json();
    return new Response(JSON.stringify({ success: true, id: data.id }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: 'Greška pri slanju poruke' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
