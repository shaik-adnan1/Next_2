"use client";

import { PRODUCT_CATEGORIES } from "@/src/config";
import { useState } from "react";
import NavItem from "../navItem/Navitem";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

    const isAnyOpen = activeIndex !== null;


  return (
    <div className='flex gap-4 h-full'>
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };

        const isOpen = i === activeIndex;
        return <NavItem category={category} handleOpen={handleOpen} isAnyOpen={isAnyOpen} isOpen={isOpen} key={category.value} />
      })}
    </div>
  );
};

export default NavItems;
