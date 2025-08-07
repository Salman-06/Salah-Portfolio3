import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const projects = [
  {
    title: "House Of MM",
    description: "A sleek eCommerce platform built to make shopping for trendy dresses effortless. From product listings to secure checkout, this project blends style with functionality, giving users a smooth and modern shopping experience.",
    image: "/houseofmm.png",
    tags: ["Next.js", "React", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://houseofmm.in/",
    githubUrl: "#",
    imageHint: "ecommerce website",
  },
  {
    title: "Gowtham Multi-Speciality Hospital",
    description: "A fully responsive and informative website created for a trusted medical institution. It includes sections like About Hospital, Doctor Profiles, and Appointment Booking – giving patients everything they need to connect with quality healthcare, right from their screens.",
    image: "/gowtham.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    liveUrl: "https://gowthamhospital.com/",
    githubUrl: "#",
    imageHint: "dashboard app",
  },
  {
    title: "Ashmii",
    description: "Designed to reflect luxury living and architectural finesse, this site showcases Ashmii’s elegant interior and exterior projects. Visual storytelling meets web precision – perfect for turning visitors into leads.",
    image: "/ashmii.png",
    tags: ["Next.js", "Firebase", "GenAI", "TypeScript"],
    liveUrl: "https://ashmii.com/",
    githubUrl: "#",
    imageHint: "blog article",
  },
  {
    title: "Erode Association of Architects",
    description: "An official showcase platform for the Erode architecture community. It highlights member activities, project showcases, and association news – all wrapped in a professional design that represents the creative minds of the city.",
    image: "/eaa.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveUrl: "https://erode-association-architecture.vercel.app/",
    githubUrl: "#",
    imageHint: "portfolio website",
  },
  {
    title: "Precicraft CNC Works",
    description: "This project delivers a clean and professional interface for CNC machining services. With galleries, service listings, and company insights, it's crafted to impress both clients and collaborators.",
    image: "/precicraft.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveUrl: "https://precicraft-cnc-works.vercel.app/",
    githubUrl: "#",
    imageHint: "portfolio website",
  },
  {
    title: "Met Studio",
    description: "A dual-purpose web platform featuring a stylish product catalog on the front end and a powerful admin panel behind the scenes. It simplifies product management while maintaining a polished look for the public view.",
    image: "/met studio.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveUrl: "https://metropolitan-studio.vercel.app/",
    githubUrl: "#",
    imageHint: "portfolio website",
  },
  {
    title: " GKR Hi-Tech Heavy Engineering",
    description: "This site showcases the precision and scale of heavy engineering projects. Built with clarity and detail in mind, it allows potential clients to view services, past works, and technical capabilities with ease.",
    image: "/gkr.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveUrl: "https://gkr-hi-tech-heavy-engineering.vercel.app/",
    githubUrl: "#",
    imageHint: "portfolio website",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="text-center space-y-4 mb-12">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">My Projects</h2>
        <p className="max-w-2xl mx-auto text-foreground/80 md:text-lg">
          Here are some of the projects I've worked on. Explore them to see my skills in action.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={project.title} className="flex flex-col overflow-hidden animate-fade-in-up border-border/60 hover:border-primary/80 transition-colors duration-300 hover:shadow-lg" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardHeader>
              <div className="aspect-video relative overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                  data-ai-hint={project.imageHint}
                />
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardTitle className="font-headline text-2xl mb-2">{project.title}</CardTitle>
              <p className="text-foreground/80 mb-4">{project.description}</p>
            </CardContent>
            <CardFooter className="flex justify-end gap-4">
              <Button asChild>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" /> Live
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
