"use client";

import React from "react";
import { TabProps } from "@/components/Tabs/Tab/types";

const Tab: React.FC<TabProps> = ({ title, component }) => {
  return <div>{component}</div>;
};

export default Tab;
