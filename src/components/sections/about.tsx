import { Button } from "../ui/button";
import { Download } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="flex justify-center">
        <div className="md:col-span-2 space-y-6 animate-fade-in-up max-w-4xl text-center" style={{ animationDelay: '0.2s' }}>
          <h2 className="font-headline text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="text-foreground/80 text-lg space-y-4">
            <p>
              Hey there! I&apos;m Salah, a passionate and slightly sleep-deprived Full Stack Developer who’s been coding through chaos since 2018. Armed with a B.Sc. in Computer Science from Rathinam College of Arts and Science, I’ve been on a mission to make the internet a more functional (and better-looking) place, one website at a time.
            </p>
            <p>
              My journey in tech is driven by a relentless curiosity and a love for solving complex problems. I thrive in collaborative environments and I'm always eager to learn new technologies and methodologies to build better, faster, and more scalable applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
