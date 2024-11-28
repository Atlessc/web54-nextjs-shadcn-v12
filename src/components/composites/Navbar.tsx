import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link";

const NavBar = () => {

  return (
    <div className="flex w-full justify-between px-3 py-3 bg">

      <h1 className="font-bold text-2xl">
        <Link
          href="/"
          prefetch={true}
        >
          Company Name
        </Link>
      </h1>

      <NavigationMenu>
        <NavigationMenuList>

          <NavigationMenuItem>

            <NavigationMenuTrigger>Men</NavigationMenuTrigger>

            <NavigationMenuContent className="flex flex-col px-2 py-2">
              <NavigationMenuLink className="text-md">
                Shirts
              </NavigationMenuLink>
              <NavigationMenuLink className="text-md">
                Pants
              </NavigationMenuLink>
            </NavigationMenuContent>

          </NavigationMenuItem>

          <NavigationMenuItem>

            <NavigationMenuTrigger>Women</NavigationMenuTrigger>

            <NavigationMenuContent className="flex flex-col px-2 py-2">
              <NavigationMenuLink className="text-md">
                Shirts
              </NavigationMenuLink>
              <NavigationMenuLink className="text-md">
                Pants
              </NavigationMenuLink>
            </NavigationMenuContent>

          </NavigationMenuItem>

          <Link
            href="/about"
            prefetch={true}
          >
            <NavigationMenuItem
              className="px-4 py-2 hover:bg-gray-100 rounded-md h-9 text-md"
            >
              About
            </NavigationMenuItem>
          </Link>

          <Link
            href="/contact"
            prefetch={true}
          >

            <NavigationMenuItem
              className="px-4 py-2 hover:bg-gray-100 rounded-md h-9 text-md"
            >
              Contact
            </NavigationMenuItem>
          </Link>

        </NavigationMenuList>
      </NavigationMenu>

    </div>
  )
};

export default NavBar;