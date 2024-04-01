"use client"

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { signIn } from "next-auth/react";


export function UserNav() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="rounded-full border px-2 py-2 lg:px-4 flex items-center gap-x-3">
            <MenuIcon className="2-6 h-6 lg:w-5 lg:h-5"/>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
              alt="image of user" 
              className="rounded-full h-8 w-8 hidden lg:block"
            />
          </div>
        </DropdownMenuTrigger>  
        <DropdownMenuContent 
          align="end"
          className="w-[200px]"
        >
          <DropdownMenuItem>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Login
          </DropdownMenuItem>

        </DropdownMenuContent>
      </DropdownMenu>      
    </div>
  );
};