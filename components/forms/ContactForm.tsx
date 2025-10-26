"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { colors } from "@/lib/colors";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending your message..." });

    try {
      // Initialize EmailJS with your public key
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      console.log("📧 Sending emails with params:", {
        service: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        template1: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        template2: process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
        params: templateParams,
      });

      // Send FIRST email: Notification to FOUNDER
      console.log("📤 Sending founder notification...");
      const founderResponse = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams
      );
      console.log("✅ Founder notification sent:", founderResponse);

      // Send SECOND email: Auto-reply to CUSTOMER
      console.log("📤 Sending customer auto-reply...");
      const customerResponse = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID!,
        templateParams
      );
      console.log("✅ Customer auto-reply sent:", customerResponse);

      setStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. Check your email for confirmation.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: "idle", message: "" });
      }, 5000);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("❌ EmailJS Error Details:", {
        error,
        text: error?.text,
        status: error?.status,
        message: error?.message,
        stack: error?.stack,
      });

      // More specific error messages
      let errorMessage = "Oops! Something went wrong. ";

      if (error?.text?.includes("template")) {
        errorMessage +=
          "There's an issue with our email template configuration. ";
      } else if (error?.text?.includes("service")) {
        errorMessage += "There's an issue with our email service. ";
      } else if (error?.status === 403) {
        errorMessage += "Access denied. Please check email configuration. ";
      } else if (error?.status === 412) {
        errorMessage += "Template variables mismatch. ";
      }

      errorMessage +=
        "Please try again or email us directly at aromascentiqueph@gmail.com";

      setStatus({
        type: "error",
        message: errorMessage,
      });

      // Clear error message after 8 seconds (longer for detailed error)
      setTimeout(() => {
        setStatus({ type: "idle", message: "" });
      }, 8000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="p-8 rounded-2xl border-2"
      style={{
        backgroundColor: colors.card,
        borderColor: colors.gold,
      }}
    >
      <h3
        className="text-2xl font-playfair font-bold mb-6"
        style={{ color: colors.primary }}
      >
        Send Us a <span style={{ color: colors.goldDark }}>Message</span>
      </h3>

      {/* Status Messages */}
      {status.type !== "idle" && (
        <div
          className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
            status.type === "success"
              ? "bg-green-50 border border-green-200"
              : status.type === "error"
              ? "bg-red-50 border border-red-200"
              : "bg-blue-50 border border-blue-200"
          }`}
        >
          {status.type === "loading" && (
            <Loader2
              className="w-5 h-5 animate-spin shrink-0 mt-0.5"
              style={{ color: colors.goldDark }}
            />
          )}
          {status.type === "success" && (
            <CheckCircle2
              className="w-5 h-5 shrink-0 mt-0.5"
              style={{ color: "#16a34a" }}
            />
          )}
          {status.type === "error" && (
            <AlertCircle
              className="w-5 h-5 shrink-0 mt-0.5"
              style={{ color: "#dc2626" }}
            />
          )}
          <p
            className={`text-sm font-inter ${
              status.type === "success"
                ? "text-green-800"
                : status.type === "error"
                ? "text-red-800"
                : "text-blue-800"
            }`}
          >
            {status.message}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-inter font-medium mb-2"
            style={{ color: colors.primary }}
          >
            Your Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={status.type === "loading"}
            className="w-full font-inter"
            style={{
              borderColor: colors.border,
              backgroundColor: colors.background,
            }}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-inter font-medium mb-2"
            style={{ color: colors.primary }}
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status.type === "loading"}
            className="w-full font-inter"
            style={{
              borderColor: colors.border,
              backgroundColor: colors.background,
            }}
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-inter font-medium mb-2"
            style={{ color: colors.primary }}
          >
            Subject <span className="text-red-500">*</span>
          </label>
          <Select
            value={formData.subject}
            onValueChange={(value) =>
              setFormData({ ...formData, subject: value })
            }
            disabled={status.type === "loading"}
            required
          >
            <SelectTrigger
              className="w-full font-inter"
              style={{
                borderColor: colors.border,
                backgroundColor: colors.background,
              }}
            >
              <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="General Inquiry">General Inquiry</SelectItem>
              <SelectItem value="Order Question">Order Question</SelectItem>
              <SelectItem value="Product Information">
                Product Information
              </SelectItem>
              <SelectItem value="Partnership Opportunity">
                Partnership Opportunity
              </SelectItem>
              <SelectItem value="Feedback">Feedback</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-inter font-medium mb-2"
            style={{ color: colors.primary }}
          >
            Your Message <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={status.type === "loading"}
            rows={6}
            className="w-full font-inter resize-none"
            style={{
              borderColor: colors.border,
              backgroundColor: colors.background,
            }}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={status.type === "loading"}
          className="w-full font-montserrat uppercase tracking-wide text-sm py-6 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            backgroundColor: colors.brown,
            color: colors.primaryForeground,
          }}
        >
          {status.type === "loading" ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending Message...
            </span>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
