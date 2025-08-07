import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  IconHtml5,
  IconCss3,
  IconJavascript,
  IconReact,
  IconMysql
} from "@/components/icons";

const ExpertiseSection = () => {
  return (
    <section id="expertise">
      <div className="flex flex-col items-center text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8">Expertise</h2>
        <div className="flex items-center gap-4 mb-4 text-foreground">
          <div className="w-8 h-8">
            <IconHtml5 />
          </div>
          <div className="w-8 h-8">
            <IconCss3 />
          </div>
          <div className="w-8 h-8">
            <IconJavascript />
          </div>
          <div className="w-8 h-8">
            <IconReact />
          </div>
          <div className="w-8 h-8">
            <IconMysql />
          </div>
        </div>
        <h3 className="font-headline text-2xl font-semibold mb-4">
          Full Stack Web Development
        </h3>
        <p className="max-w-3xl text-foreground/80 md:text-lg mb-6">
          With over 7+ years of hands-on experience as a Full Stack Web Developer, I bring more to the table than just buzzwords and boilerplate code. I specialize in building seamless, responsive, and performance-driven web applications — from scratch to launch and beyond.
        </p>
        <div className="flex items-center gap-4">
          <span className="text-foreground/80">Tech stack:</span>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">HTML</Badge>
            <Badge variant="secondary">CSS</Badge>
            <Badge variant="secondary">JS</Badge>
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">MYSQL</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
