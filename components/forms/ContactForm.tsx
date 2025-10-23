"use client";

import React, { useState } from "react";
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

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
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

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-inter font-medium mb-2"
            style={{ color: colors.primary }}
          >
            Your Name
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
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
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
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
            Subject
          </label>
          <Select
            value={formData.subject}
            onValueChange={(value) =>
              setFormData({ ...formData, subject: value })
            }
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
              <SelectItem value="general">General Inquiry</SelectItem>
              <SelectItem value="order">Order Question</SelectItem>
              <SelectItem value="product">Product Information</SelectItem>
              <SelectItem value="partnership">
                Partnership Opportunity
              </SelectItem>
              <SelectItem value="feedback">Feedback</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-inter font-medium mb-2"
            style={{ color: colors.primary }}
          >
            Your Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleChange}
            required
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
          className="w-full font-montserrat uppercase tracking-wide text-sm py-6 rounded-md hover:opacity-90 transition-opacity"
          style={{
            backgroundColor: colors.brown,
            color: colors.primaryForeground,
          }}
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
