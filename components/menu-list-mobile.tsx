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
                <Link className="block" href="/mision">Misión</Link>
                <Link className="block" href="/vision">Visión</Link>
                <Link className="block" href="/category/cortadora">Cortadora</Link>
                <Link className="block" href="/category/bomba">Bomba</Link>
                <Link className="block" href="/cart">Carrito de Compras</Link>
                
            </PopoverContent>
        </Popover>
     );
}
 
export default ItemsMenuMobile;