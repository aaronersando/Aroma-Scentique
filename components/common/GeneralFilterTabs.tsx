"use client";

import React from "react";
import { motion } from "motion/react";
import { colors } from "@/lib/colors";

interface GeneralFilterTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "all", label: "All Products" },
  { id: "newarrivals", label: "New Arrivals" },
  { id: "bestsellers", label: "Best Sellers" },
  { id: "featured", label: "Featured" },
];

const GeneralFilterTabs: React.FC<GeneralFilterTabsProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-3 justify-center">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="relative px-6 py-3 rounded-full font-montserrat text-sm md:text-base font-medium transition-colors"
            style={{
              color: activeTab === tab.id ? colors.background : colors.primary,
              backgroundColor:
                activeTab === tab.id ? colors.goldDark : "transparent",
              border: `2px solid ${
                activeTab === tab.id ? colors.goldDark : colors.border
              }`,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: colors.goldDark }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default GeneralFilterTabs;
