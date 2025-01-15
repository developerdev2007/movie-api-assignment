// import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme/themeProvider";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const { setTheme } = useTheme();

  return (
    <header className="overflow-hidden w-full min-h-[60px] max-h-[64px] bg-gray-400  dark:bg-gray-800 dark:text-white">
      <nav className="mx-auto max-w-2xl flex justify-around items-center h-full px-4 py-2 ">
        <Link to="/" className="flex items-center gap-x-2">
          <div className="text-2xl dark:text-white">Movie App</div>
        </Link>
        <ul className="list-none flex gap-x-6 justify-around  ">
          <Link to="/many">
            <li className="text-xl border-black dark:border-white/90 px-4 py-2 hover:fade-in-10 hover:border-b-2 hover:animate-in ">
              Many
            </li>
          </Link>
          <Link to="/one">
            <li className="text-xl border-black dark:border-white/90 px-4 py-2 hover:fade-in-10 hover:border-b-2 hover:animate-in ">
              One
            </li>
          </Link>
        </ul>

        <div className="flex items-center justify-center px-2 py-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-black dark:text-white" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-black dark:text-white" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Header;
