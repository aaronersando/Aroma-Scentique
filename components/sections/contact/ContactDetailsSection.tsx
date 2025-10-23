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
      content: "aromascentiqueph@gmail.com",
      link: "mailto:aromascentiqueph@gmail.com",
    },
    {
      id: 2,
      icon: Phone,
      title: "Phone",
      subtitle: "Customer Service:",
      content: "09696410409",
      link: "tel:09696410409",
    },
    {
      id: 3,
      icon: MapPin,
      title: "Location",
      subtitle: "Visit Us",
      content: "Rufina Golden Village, Malolos \nCity, Bulacan",
      link: null,
    },
    {
      id: 4,
      icon: Clock,
      title: "Hours",
      subtitle: "Everyday",
      content: "8:00 AM - 5:00 PM",
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.864355603947!2d120.81494977487743!3d14.832869085681436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396523069434785%3A0xf9ae9c0c6c2e9aa5!2sRufina%20Golden%20Village!5e0!3m2!1sen!2sph!4v1761227197067!5m2!1sen!2sph"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-80"
              />
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
