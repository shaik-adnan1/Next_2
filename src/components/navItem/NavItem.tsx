import { PRODUCT_CATEGORIES } from "@/src/config";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/src/lib/utils";

type Category = typeof PRODUCT_CATEGORIES[number]

interface NavItemProps {
    category: Category,
    handleOpen: () => void,
    isOpen: boolean,
    isAnyOpen: boolean
}

const NavItem = ({isAnyOpen, category, isOpen, handleOpen}: NavItemProps) => {
  return <div className='flex'>
    <div className="relative flex items-center">
        <Button className="gap-1.5" onClick={handleOpen} variant={isOpen ? 'secondary' : 'ghost'}>{category.label}</Button>
        <ChevronDown className={cn("h-4 w-4 transition-all text-muted-foreground", {
            "-rotate-100": isOpen,
        })}/>
    </div>
  </div>;
};

export default NavItem;
