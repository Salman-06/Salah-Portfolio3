import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import ExpertiseSection from "@/components/sections/expertise";
import HeroSection from "@/components/sections/hero";
import ProjectsSection from "@/components/sections/projects";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <div className="container px-4 md:px-6">
        <AboutSection />
        <Separator className="my-16" />
        <ExpertiseSection />
        <Separator className="my-16" />
        <ProjectsSection />
        <Separator className="my-16" />
        <ContactSection />
      </div>
    </div>
  );
}
