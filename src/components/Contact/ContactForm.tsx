import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().trim().min(2, "Ime mora sadržavati najmanje 2 znaka").max(100),
  email: z.string().trim().email("Unesite ispravnu email adresu").max(255),
  phone: z.string().trim().min(9, "Unesite ispravan broj telefona").max(20),
  service: z.string().min(1, "Molimo odaberite vrstu usluge"),
  message: z.string().trim().min(10, "Poruka mora sadržavati najmanje 10 znakova").max(1000),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to send');
      }

      toast.success("Poruka uspješno poslana!", {
        description: "Javit ćemo Vam se u najkraćem mogućem roku.",
      });
      form.reset();
    } catch (error) {
      toast.error("Greška pri slanju poruke", {
        description: "Molimo pokušajte ponovno ili nas kontaktirajte telefonom.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card p-6 md:p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-card-foreground">Pošaljite upit</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ime i prezime / Tvrtka</FormLabel>
                <FormControl>
                  <Input placeholder="Vaše ime ili naziv tvrtke" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kontakt email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="vas@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kontakt telefon</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+385 xx xxx xxxx" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Vrsta usluge</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Odaberite uslugu" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="rezanje">Rezanje betona</SelectItem>
                    <SelectItem value="busenje">Bušenje betona</SelectItem>
                    <SelectItem value="brusenje-frezanje">Brušenje i frezanje betona</SelectItem>
                    <SelectItem value="ojacanja">Ojačanja metalnom konstrukcijom</SelectItem>
                    <SelectItem value="rusenje">Rušenje objekata</SelectItem>
                    <SelectItem value="ostalo">Ostalo</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Poruka</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Opišite vaše potrebe..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Šaljem..." : "Pošalji upit"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
