"use client";

import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";
import { GrActions as Sun } from "react-icons/gr";
import { MENU } from "@/layouts/Sidebar/sidebar.data";
import cn from "clsx";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <Image src="/logo.svg" alt={"logo"} priority width={70} height={70} />
      <div>
        {MENU.map((item) => (
          <Link
            href={item.url}
            key={item.url}
            className={cn({ [styles.active]: pathname === item.url })}
          >
            <item.icon size={25} />
          </Link>
        ))}
      </div>
      <div>
        <Sun size={25} />
      </div>
    </aside>
  );
};

export default Sidebar;
