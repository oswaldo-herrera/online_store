"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

// import { useIsMobile } from "@/hooks/use-mobile"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const MenuList= () => {
  //const isMobile = useIsMobile()

  return (
    <NavigationMenu >
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre Nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                    href="/"
                  >
                    <div className="mb-2 text-lg font-medium sm:mt-4">
                      Agricola Emsa
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Tu Aliado Digital para el Campo. Soluciones y Productos de Alto Rendimiento.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/cart" title="Tienda">
                Accede y revisa tu carrito de compras
              </ListItem>
              {/* <ListItem href="/offers" title="Ofertas">
                Sección dedicada a promociones y descuentos especiales
              </ListItem> */}
              {/* <ListItem href="/docs/primitives/typography" title="Información Util">
                Aqui encontraras informacion importante o avisos sobre los productos
              </ListItem> */}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categorias</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem
                  //key={component.title}
                  // title={component.title}
                  title="Cortadoras"
                  href="/category/cortadora"
                >
                  Aqui encontraras todo tipo de cortadoras
                </ListItem>
              <ListItem
                  //key={component.title}
                  // title={component.title}
                  title="Sierra"
                  href="/category/sierra-1"
                >
                  Aqui encontraras todo tipo de sierras
              </ListItem>
              <ListItem
                  //key={component.title}
                  // title={component.title}
                  title="Bomba"
                  href="/category/bomba"
                >
                  Aqui encontraras todo tipo de bombas
                </ListItem>
              {/* {components.map((component) => (
                <ListItem
                  key={component.title}
                  // title={component.title}
                  title="Cortadoras"
                  href="/category/cortadora"
                >
                  Aqui encontraras todo tipo de cortadoras
                </ListItem>
              ))} */}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/accesorios">Docs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem> */}
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>Accesorios</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              {/* <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Components</div>
                    <div className="text-muted-foreground">
                      Browse all components in the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Documentation</div>
                    <div className="text-muted-foreground">
                      Learn how to use the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Blog</div>
                    <div className="text-muted-foreground">
                      Read our latest blog posts.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li> */}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Components</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Documentation</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Blocks</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        {/* <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleHelpIcon />
                    Backlog
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleIcon />
                    To Do
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleCheckIcon />
                    Done
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MenuList;

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Producto 1",
    href: "/category/",
    description:
      "Descrpción del producto",
  },
  {
    title: "Producto 2",
    href: "/category/p2",
    description:
      "Descrpción del producto",
  },
  {
    title: "Producto 3",
    href: "/category/p3",
    description:
      "Descrpción del producto",
  },
  {
    title: "Producto 4",
    href: "/category/p4",
    description: "Descrpción del producto",
  },
  {
    title: "Producto 5",
    href: "/category/p5",
    description:
      "Descrpción del producto",
  },
  {
    title: "Producto 6",
    href: "/category/p6",
    description:
      "Descrpción del producto",
  },
]

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}


