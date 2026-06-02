"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
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
import { Mail, Phone, User, Send, Building, ChevronDown } from "lucide-react";
import { CountryCodeSelect } from "@/components/CountryCodeSelect";

const formFieldClassName =
  "h-11 w-full rounded-lg border border-white/10 !bg-white/5 text-sm text-white shadow-none placeholder:text-white/40 focus-visible:border-gold/40 focus-visible:ring-2 focus-visible:ring-gold/25 dark:!bg-white/5 dark:!border-white/10 sm:h-auto sm:min-h-[44px] sm:py-4 sm:text-xs md:py-5 pl-11 pr-4";

const formLabelClassName =
  "text-white/55 text-[10px] sm:text-[9px] font-bold uppercase tracking-[0.14em] sm:tracking-widest";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  countryCode: z.string().min(1, "Required"),
  phone: z.string().min(5, "Invalid phone number"),
  propertyType: z.string().min(1, "Please select a property type"),
  message: z.string().optional(),
});

export function LeadForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      countryCode: "+971",
      phone: "",
      propertyType: "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.fullName,
          email: values.email,
          countryCode: values.countryCode,
          phone: values.phone,
          propertyType: values.propertyType,
          message: values.message,
          action: "Lead Form Submission",
          sourcePage: window.location.pathname,
        }),
      });

      if (!response.ok) throw new Error("Failed to submit");

      form.reset();
      alert("Thank you! Our consultant will contact you shortly.");
    } catch (error) {
      console.error(error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-10 sm:py-14 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-slate-950/5 -skew-x-12 translate-x-1/2 hidden sm:block" />

      <div className="container mx-auto px-3 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-12 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-3"
            >
              Start Your Journey
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-950 mb-4 sm:mb-6"
            >
              Get a Private{" "}
              <span className="italic text-gold">Consultation</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-950/60 text-sm mb-6 sm:mb-10 max-w-sm leading-relaxed"
            >
              Our expert advisors at Comake Homes are ready to help you find the
              perfect property that matches your lifestyle and investment goals
              in Dubai.
            </motion.p>

            <div className="space-y-4 sm:space-y-5">
              {[
                {
                  icon: Phone,
                  title: "Call Us 24/7",
                  value: "+971 58 116 1051",
                  href: "tel:+971581161051",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  value: "Info@comakehomes.com",
                  href: "mailto:Info@comakehomes.com",
                },
                {
                  icon: Building,
                  title: "Visit Our Office",
                  value: "Office No# 517, Al Barsha 1 Building, Dubai",
                  href: "https://maps.google.com/?q=Office+No+517,+Al+Barsha+1+Building,+Dubai",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                >
                  <a
                    href={item.href}
                    target={item.icon === Building ? "_blank" : undefined}
                    rel={
                      item.icon === Building ? "noopener noreferrer" : undefined
                    }
                    className="flex items-start sm:items-center space-x-3 cursor-pointer group hover:opacity-80 transition-opacity min-w-0"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full bg-slate-950/5 flex items-center justify-center text-gold group-hover:bg-gold/10 transition-colors">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-slate-950/45 text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.14em] sm:tracking-[0.18em] mb-0.5">
                        {item.title}
                      </p>
                      <p className="text-slate-950 text-sm sm:text-[15px] font-semibold tracking-wide group-hover:text-gold transition-colors leading-snug break-words">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-[calc(100%+1.5rem)] -mx-3 sm:w-full sm:mx-0 bg-slate-950 p-4 sm:p-7 md:p-10 rounded-xl md:rounded-[1.5rem] shadow-2xl border border-white/5 [color-scheme:dark]"
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3.5 sm:space-y-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem className="gap-1.5">
                        <FormLabel className={formLabelClassName}>
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-gold w-3.5 h-3.5 pointer-events-none" />
                            <Input
                              placeholder="John Doe"
                              className={formFieldClassName}
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="gap-1.5">
                        <FormLabel className={formLabelClassName}>
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-gold w-3.5 h-3.5 pointer-events-none" />
                            <Input
                              placeholder="john@example.com"
                              className={formFieldClassName}
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5">
                  <div className="flex gap-2">
                    <FormField
                      control={form.control}
                      name="countryCode"
                      render={({ field }) => (
                        <FormItem className="gap-1.5 w-[35%] sm:w-[30%]">
                          <FormLabel className={formLabelClassName}>
                            Country Code
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <CountryCodeSelect
                                className={`${formFieldClassName} px-3 !pl-3`}
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="gap-1.5 flex-1">
                          <FormLabel className={formLabelClassName}>
                            Phone Number
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Phone className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-gold w-3.5 h-3.5 pointer-events-none" />
                              <Input
                                type="number"
                                placeholder="58 116 1051"
                                className={formFieldClassName}
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="propertyType"
                    render={({ field }) => (
                      <FormItem className="gap-1.5">
                        <FormLabel className={formLabelClassName}>
                          Interest
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Building className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-gold w-3.5 h-3.5 z-10 pointer-events-none" />
                            <select
                              className={`${formFieldClassName} appearance-none pr-10 cursor-pointer ${!field.value ? "text-white/40" : ""}`}
                              {...field}
                            >
                              <option
                                value=""
                                disabled
                                className="bg-slate-950 text-white/50"
                              >
                                Select Type
                              </option>
                              <option value="villa" className="bg-slate-950 text-white">
                                Luxury Villa
                              </option>
                              <option
                                value="apartment"
                                className="bg-slate-950 text-white"
                              >
                                Penthouse
                              </option>
                              <option value="offplan" className="bg-slate-950 text-white">
                                Off-Plan
                              </option>
                            </select>
                            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/70 pointer-events-none" />
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-gold/90 text-slate-950 font-bold py-3.5 sm:py-5 rounded-lg text-[10px] tracking-[0.15em] sm:tracking-[0.2em] group min-h-[48px] mt-1 disabled:opacity-70"
                >
                  {isSubmitting ? "SENDING..." : "SEND ENQUIRY"}
                  {!isSubmitting && <Send className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </Button>
                <p className="text-center text-white/25 text-[8px] sm:text-[8px] uppercase font-bold tracking-[0.12em] sm:tracking-widest mt-2 sm:mt-4 pb-0">
                  By clicking send, you agree to our privacy policy.
                </p>
              </form>
            </Form>
          </motion.div>
        </div>

        {/* Modon Interactive 3D Map - Short Footer Size */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:space-x-3 mb-4 sm:mb-6">
            <span className="bg-gold/15 border border-gold/30 text-gold text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.12em] sm:tracking-widest px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-sm shrink-0">
              Interactive Map
            </span>
            <span className="text-slate-950 font-serif text-xl sm:text-lg font-bold leading-tight">
              Explore Modon World
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-[calc(100%+1.5rem)] -mx-3 sm:w-full sm:mx-0 rounded-xl sm:rounded-2xl md:rounded-[2rem] overflow-hidden border border-slate-950/10 shadow-[0_20px_60px_rgba(0,0,0,0.15)] bg-slate-950 relative"
          >
            <iframe
              src="https://world.modon.com/abu-dhabi/"
              className="w-full h-[min(420px,58vh)] sm:h-[45vh] md:h-[400px] border-none"
              title="Modon Interactive Real Estate Map"
              allowFullScreen
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
