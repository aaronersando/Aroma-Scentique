"use client";

import React from "react";
import { colors } from "@/lib/colors";

interface GeneralFilterTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const GeneralFilterTabs: React.FC<GeneralFilterTabsProps> = ({
  activeTab,
  onTabChange,
}) => {
  const tabs = [
    { id: "all", label: "ALL PRODUCTS" },
    { id: "newarrivals", label: "NEW ARRIVALS" }, // Added new tab
    { id: "bestsellers", label: "BEST SELLERS" },
    { id: "featured", label: "FEATURED" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className="px-6 py-3 font-montserrat text-xs md:text-sm font-semibold uppercase tracking-wide rounded-md transition-all duration-300"
          style={{
            backgroundColor:
              activeTab === tab.id ? colors.brown : "transparent",
            color:
              activeTab === tab.id ? colors.primaryForeground : colors.brown,
            border: `2px solid ${colors.brown}`,
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default GeneralFilterTabs;
