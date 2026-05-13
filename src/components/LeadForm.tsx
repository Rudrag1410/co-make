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
import { Mail, Phone, User, Send, Building } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number"),
  propertyType: z.string().min(1, "Please select a property type"),
  budget: z.string().min(1, "Please select your budget"),
  message: z.string().optional(),
});

export function LeadForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      propertyType: "",
      budget: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert("Thank you! Our consultant will contact you shortly.");
  }

  return (
    <section className="py-14 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-emerald-950/5 -skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-emerald-950 mb-6"
            >
              Get a Private <br />
              <span className="italic text-gold">Consultation</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-emerald-950/60 text-sm mb-10 max-w-sm leading-relaxed"
            >
              Our expert advisors at Comake Homes are ready to help you find the perfect property 
              that matches your lifestyle and investment goals in Dubai.
            </motion.p>

            <div className="space-y-5">
              {[
                { icon: Phone, title: "Call Us 24/7", value: "+971 58 116 1051" },
                { icon: Mail, title: "Email Us", value: "comakehomes88@gmail.com" },
                { icon: Building, title: "Visit Our Office", value: "Office No# 517, Al Barsha 1 Building, Dubai" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-950/5 flex items-center justify-center text-gold">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-emerald-950/40 text-[8px] uppercase font-bold tracking-widest">{item.title}</p>
                    <p className="text-emerald-950 text-sm font-bold">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-emerald-950 p-7 md:p-10 rounded-[1.5rem] shadow-2xl border border-white/5"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/50 text-[9px] font-bold uppercase tracking-widest">Full Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gold w-3.5 h-3.5" />
                            <Input
                              placeholder="John Doe"
                              className="bg-white/5 border-white/5 text-white pl-11 py-5 rounded-lg focus:ring-gold text-xs"
                              {...field}
                            />
                          </div>
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
                        <FormLabel className="text-white/50 text-[9px] font-bold uppercase tracking-widest">Email Address</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gold w-3.5 h-3.5" />
                            <Input
                              placeholder="john@example.com"
                              className="bg-white/5 border-white/5 text-white pl-11 py-5 rounded-lg focus:ring-gold text-xs"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/50 text-[9px] font-bold uppercase tracking-widest">Phone Number</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gold w-3.5 h-3.5" />
                            <Input
                              placeholder="+971 58 116 1051"
                              className="bg-white/5 border-white/5 text-white pl-11 py-5 rounded-lg focus:ring-gold text-xs"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="propertyType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/50 text-[9px] font-bold uppercase tracking-widest">Interest</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-gold w-3.5 h-3.5 z-10" />
                            <select 
                              className="w-full bg-white/5 border border-white/5 text-white pl-11 py-2.5 rounded-lg focus:ring-gold outline-none appearance-none text-xs"
                              {...field}
                            >
                              <option value="" disabled className="bg-emerald-950">Select Type</option>
                              <option value="villa" className="bg-emerald-950">Luxury Villa</option>
                              <option value="apartment" className="bg-emerald-950">Penthouse</option>
                              <option value="offplan" className="bg-emerald-950">Off-Plan</option>
                            </select>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit" className="w-full bg-gold hover:bg-gold/90 text-emerald-950 font-bold py-5 rounded-lg text-[10px] tracking-[0.2em] group">
                  SEND ENQUIRY
                  <Send className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
                <p className="text-center text-white/20 text-[8px] uppercase font-bold tracking-widest mt-4">
                  By clicking send, you agree to our privacy policy.
                </p>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
