"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Code2 } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = ({ isMobile = false }) => (
    <>
      {navLinks.map((link) => (
        <Button
          key={link.href}
          variant="link"
          asChild
          className={`font-medium text-foreground/80 hover:text-foreground transition-colors ${isMobile ? "w-full justify-start text-lg" : ""}`}
        >
          <Link href={link.href} onClick={() => isMobile && setMobileMenuOpen(false)}>
            {link.label}
          </Link>
        </Button>
      ))}
    </>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-headline text-lg font-bold">
            <Code2 className="h-6 w-6 text-primary" />
            <span>Salah</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <NavLinks />
            <ThemeToggle />
          </nav>

          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-4 py-8">
                  <NavLinks isMobile />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
