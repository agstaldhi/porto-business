"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const formProps = Object.fromEntries(formData);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          ...formProps,
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""
        })
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        formElement.reset();
      } else {
        console.error("Error", data);
        setIsSubmitting(false);
        alert(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setIsSubmitting(false);
      alert("Failed to submit form. Please check your connection.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen px-4 py-16 md:py-24 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 md:mb-24 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Let's talk.</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Whether you have a specific project in mind or just want to explore possibilities, I'm here to help.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24">
        {/* Contact Info CTA */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-2 space-y-8"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-2">Direct Contact</h3>
            <p className="text-muted-foreground mb-8">
              Prefer to reach out directly? Choose your preferred channel below. I typically respond within 24 hours.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:businessagst@gmail.com"
              className="flex items-center p-4 rounded-xl border border-border bg-card/50 hover:bg-muted transition-colors group"
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-foreground/10 mr-4 group-hover:bg-foreground group-hover:text-background transition-colors">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">Email Me</p>
                <p className="text-sm text-muted-foreground">businessagst@gmail.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/6285655761600"
              target="_blank"
              rel="noreferrer"
              className="flex items-center p-4 rounded-xl border border-border bg-card/50 hover:bg-muted transition-colors group"
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-green-500/20 text-green-600 mr-4 group-hover:bg-green-500 group-hover:text-emerald-950 transition-colors">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">WhatsApp</p>
                <p className="text-sm text-muted-foreground">085655761600</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-3"
        >
          <div className="rounded-2xl border border-border bg-card p-6 md:p-10 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 h-full space-y-4"
              >
                <div className="h-16 w-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-4">
                  <Send className="h-8 w-8" />
                </div>
                <h4 className="text-2xl font-bold">Message Sent!</h4>
                <p className="text-muted-foreground">
                  Thanks for reaching out. I'll get back to you shortly.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-6"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Name
                    </label>
                    <Input id="name" name="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="john@company.com" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Subject
                  </label>
                  <Input id="subject" name="subject" placeholder="Project Inquiry: New Website" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, timeline, and goals..."
                    className="min-h-[150px] resize-y"
                    required
                  />
                </div>

                <Button type="submit" className="w-full h-12 text-base" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="mr-2 h-4 w-4 rounded-full border-2 border-background border-t-foreground/30"
                      />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
