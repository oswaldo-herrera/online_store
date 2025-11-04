import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import Link from "next/link";

const ItemsMenuMobile = () => {
    return ( 
        <Popover>
            <PopoverTrigger>
                <Menu/>
            </PopoverTrigger>
            <PopoverContent>
                <Link className="block" href="/categories/">Desmalezadora</Link>
                <Link className="block" href="/categories/">Podadora</Link>
                <Link className="block" href="/categories/">Sierra</Link>
                
            </PopoverContent>
        </Popover>
     );
}
 
export default ItemsMenuMobile;