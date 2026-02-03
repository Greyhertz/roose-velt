import Link from "next/link";
import { Button } from "./ui/button";
import { Home, Sprout } from "lucide-react";
import { Modetoggle } from "./mode-toggle";

export function Navbar(){
    return(
        <div>
            <nav className="sticky top-0  border-b border-gray-700 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 p-4">
               
               <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
             
               {/* logo */}
                <div className="flex items-center">
                    <Link href="/" className="text-xl font-bold text-primary">
                    PlantWay
                    </Link>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <Button variant="ghost" className="flex items-center gap-2" asChild>
                        <Link href="/plants">
                        <Sprout className="w-4 h-4"/>
                        <span className="hidden lg:inline">Plants</span>
                        </Link>
                    </Button>

                     <Button variant="ghost" className="flex items-center gap-2" asChild>
                        <Link href="/">
                        <Home className="w-4 h-4"/>
                        <span className="hidden lg:inline">Home</span>
                        </Link>
                    </Button>
                    <Modetoggle />
                      </div>
                </div>
                 </div>
             </nav>
        </div>
      
    )

}
