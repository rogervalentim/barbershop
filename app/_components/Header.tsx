"use client"

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import SideMenu from "./side-menu";
import Link from "next/link";

const Header = () => {
    return (
        <Card>
            <CardContent className="p-5 flex justify-between flex-row items-center">
            <Link href="/">
              <Image src="/logo.png" alt="FSW Barber" height={18}  width={120}/>
            </Link>
            <Sheet>
            <SheetTrigger asChild>
            <Button variant="outline" size="icon">
                <MenuIcon size={16}/>
            </Button>
            </SheetTrigger>
            <SheetContent className="p-0">
                <SideMenu />
            </SheetContent>
            </Sheet>

            </CardContent>
        </Card>
    );
}
 
export default Header;