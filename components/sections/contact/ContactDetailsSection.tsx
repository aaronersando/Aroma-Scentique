"use client";

import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactInfoCard from "@/components/cards/ContactInfoCard";
import ContactForm from "@/components/forms/ContactForm";
import { colors } from "@/lib/colors";

const ContactDetailsSection = () => {
  const contactInfo = [
    {
      id: 1,
      icon: Mail,
      title: "Email",
      subtitle: "For general inquiries:",
      content: "contact@aromascentique.com",
      link: "mailto:contact@aromascentique.com",
    },
    {
      id: 2,
      icon: Phone,
      title: "Phone",
      subtitle: "Customer Service:",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      id: 3,
      icon: MapPin,
      title: "Location",
      subtitle: "123 Fragrance Lane",
      content: "Suite 101\nNew York, NY 10001\nUnited States",
      link: null,
    },
    {
      id: 4,
      icon: Clock,
      title: "Hours",
      subtitle: "Monday - Friday:",
      content: "9:00 AM - 6:00 PM EST\n\nSaturday:\n10:00 AM - 4:00 PM EST",
      link: null,
    },
  ];

  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: colors.secondary }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info) => (
            <ContactInfoCard key={info.id} {...info} />
          ))}
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Map and Boutique Info */}
          <div>
            <div
              className="rounded-2xl overflow-hidden mb-8 border-2"
              style={{ borderColor: colors.gold }}
            >
              <div
                className="w-full h-80 flex items-center justify-center"
                style={{ backgroundColor: colors.accentSecondary }}
              >
                <MapPin size={48} style={{ color: colors.goldDark }} />
                <p
                  className="ml-4 font-inter text-lg"
                  style={{ color: colors.primary }}
                >
                  Google Maps would be embedded here
                </p>
              </div>
            </div>

            <div
              className="p-8 rounded-2xl border-2"
              style={{
                backgroundColor: colors.card,
                borderColor: colors.gold,
              }}
            >
              <h3
                className="text-2xl font-playfair font-bold mb-4"
                style={{ color: colors.primary }}
              >
                Visit Our{" "}
                <span style={{ color: colors.goldDark }}>Boutique</span>
              </h3>
              <p
                className="text-base font-inter mb-6 leading-relaxed"
                style={{ color: colors.foreground }}
              >
                Experience our fragrances in person at our flagship boutique in
                New York. Our knowledgeable staff will guide you through our
                collections and help you find your perfect scent.
              </p>
              <p
                className="text-base font-inter mb-4 leading-relaxed"
                style={{ color: colors.foreground }}
              >
                We also offer personalized consultations by appointment, where
                our fragrance specialists can help you discover scents that
                complement your unique preferences and personality.
              </p>
              <div className="mt-6">
                <h4
                  className="text-lg font-playfair font-semibold mb-3"
                  style={{ color: colors.primary }}
                >
                  Special Services
                </h4>
                <ul className="space-y-2">
                  <li
                    className="text-sm font-inter flex items-start"
                    style={{ color: colors.mutedForeground }}
                  >
                    <span className="mr-2" style={{ color: colors.goldDark }}>
                      •
                    </span>
                    Custom fragrance consultations
                  </li>
                  <li
                    className="text-sm font-inter flex items-start"
                    style={{ color: colors.mutedForeground }}
                  >
                    <span className="mr-2" style={{ color: colors.goldDark }}>
                      •
                    </span>
                    Perfume workshops (weekends only)
                  </li>
                  <li
                    className="text-sm font-inter flex items-start"
                    style={{ color: colors.mutedForeground }}
                  >
                    <span className="mr-2" style={{ color: colors.goldDark }}>
                      •
                    </span>
                    Private shopping appointments
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetailsSection;
