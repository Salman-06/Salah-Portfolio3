import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section id="contact" className="text-center">
      <div className="space-y-4 mb-12">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">Get In Touch</h2>
        <p className="max-w-2xl mx-auto text-foreground/80 md:text-lg">
          I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open.
        </p>
      </div>
      <div className="flex flex-col items-center gap-8">
        <Button asChild size="lg" className="text-lg px-8 py-6">
          <a href="mailto:salah240618@gmail.com">Say Hello</a>
        </Button>
        <div className="flex items-center gap-6">
          <Link href="#" aria-label="Github">
            <Github className="w-8 h-8 text-foreground/80 hover:text-primary transition-colors" />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <Linkedin className="w-8 h-8 text-foreground/80 hover:text-primary transition-colors" />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Twitter className="w-8 h-8 text-foreground/80 hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
