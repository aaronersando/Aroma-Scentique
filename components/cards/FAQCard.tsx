import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { colors } from "@/lib/colors";

interface FAQCardProps {
  question: string;
  answer: string;
}

const FAQCard: React.FC<FAQCardProps> = ({ question, answer }) => {
  return (
    <Card
      className="border-2 h-full"
      style={{
        backgroundColor: colors.card,
        borderColor: colors.gold,
      }}
    >
      <CardContent className="p-6">
        <div
          className="w-12 h-1 mb-4"
          style={{ backgroundColor: colors.gold }}
        />
        <h4
          className="text-lg font-playfair font-semibold mb-3"
          style={{ color: colors.primary }}
        >
          {question}
        </h4>
        <p
          className="text-sm font-inter leading-relaxed"
          style={{ color: colors.foreground }}
        >
          {answer}
        </p>
      </CardContent>
    </Card>
  );
};

export default FAQCard;
