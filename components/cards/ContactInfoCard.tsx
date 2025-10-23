import React from "react";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { colors } from "@/lib/colors";

interface ContactInfoCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  content: string;
  link: string | null;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  icon: Icon,
  title,
  subtitle,
  content,
  link,
}) => {
  const CardWrapper = link ? "a" : "div";
  const cardProps = link ? { href: link } : {};

  return (
    <CardWrapper {...cardProps}>
      <Card
        className="border-2 h-full transition-all duration-300 hover:shadow-lg"
        style={{
          backgroundColor: colors.card,
          borderColor: colors.border,
        }}
      >
        <CardContent className="p-6 text-center">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
            style={{ backgroundColor: colors.goldLight }}
          >
            <Icon size={28} style={{ color: colors.goldDark }} />
          </div>
          <h3
            className="text-xl font-playfair font-bold mb-2"
            style={{ color: colors.primary }}
          >
            {title}
          </h3>
          <p
            className="text-sm font-inter mb-3"
            style={{ color: colors.mutedForeground }}
          >
            {subtitle}
          </p>
          <p
            className="text-sm font-inter whitespace-pre-line"
            style={{ color: colors.foreground }}
          >
            {content}
          </p>
        </CardContent>
      </Card>
    </CardWrapper>
  );
};

export default ContactInfoCard;
