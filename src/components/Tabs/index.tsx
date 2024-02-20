"use client";

import React, { useState } from "react";
import { TabsProps } from "@/components/Tabs/types";
import style from "./styles.module.scss";
import clsx from "clsx";

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className={style.tabs}>
      {Array.isArray(children) ? (
        <>
          {children.map((tab, index) => (
            <button
              key={index}
              className={clsx({
                [style.tab]: true,
                [style.active]: index === currentTab,
              })}
              onClick={() => setCurrentTab(index)}
            >
              {tab.props.title}
            </button>
          ))}
          <hr className={style.line} />
          {children.map(
            (tab, index) => currentTab === index && <div key={index}>{tab}</div>
          )}
        </>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default Tabs;
