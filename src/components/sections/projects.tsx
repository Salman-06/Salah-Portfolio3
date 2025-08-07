import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack, feature-rich e-commerce application with a modern UI, payment gateway integration, and a comprehensive admin dashboard for managing products, orders, and users.",
    image: "https://placehold.co/600x400",
    tags: ["Next.js", "React", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    imageHint: "ecommerce website",
  },
  {
    title: "Project Management Tool",
    description: "A collaborative project management tool inspired by Trello and Jira. Features include drag-and-drop task boards, real-time updates with WebSockets, and user authentication.",
    image: "https://placehold.co/600x400",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    liveUrl: "#",
    githubUrl: "#",
    imageHint: "dashboard app",
  },
  {
    title: "AI-Powered Blogging Platform",
    description: "A blogging platform where users can write and share articles. Integrated with a GenAI API to assist with content creation, summarization, and tag generation.",
    image: "https://placehold.co/600x400",
    tags: ["Next.js", "Firebase", "GenAI", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    imageHint: "blog article",
  },
  {
    title: "Personal Portfolio",
    description: "A sleek, responsive personal portfolio website (the one you're on right now!) built to showcase my skills and projects, featuring a dark/light mode toggle and smooth animations.",
    image: "https://placehold.co/600x400",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveUrl: "#",
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
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
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
