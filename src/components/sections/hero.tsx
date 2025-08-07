import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown, MoveRight } from "lucide-react";
import Globe from "../globe";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <Globe />
      <div className="container px-4 md:px-6 z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="animate-fade-in-up">
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
              Salah
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-headline font-medium text-primary">
              Full Stack Developer
            </p>
          </div>
          <p
            className="max-w-[700px] text-foreground/80 md:text-xl animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            I craft elegant and efficient solutions that bring ideas to life on the web. Passionate about building beautiful, functional, and user-centric digital experiences.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <Button asChild size="lg">
              <Link href="#projects">
                View My Work
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="h-6 w-6 text-foreground/50" />
      </div>
    </section>
  );
};

export default HeroSection;
