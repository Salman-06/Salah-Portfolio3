import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Server, Settings } from "lucide-react";
import {
  IconNextjs,
  IconReact,
  IconTailwind,
  IconNodejs,
  IconMongodb,
  IconPostgresql,
  IconGit,
  IconDocker,
  IconFigma,
  IconTypescript
} from "@/components/icons";

const skills = [
  {
    category: "Frontend",
    icon: <Code className="w-6 h-6" />,
    items: [
      { name: "React", icon: <IconReact /> },
      { name: "Next.js", icon: <IconNextjs /> },
      { name: "TypeScript", icon: <IconTypescript /> },
      { name: "Tailwind CSS", icon: <IconTailwind /> },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    items: [
      { name: "Node.js", icon: <IconNodejs /> },
      { name: "Express.js", icon: <IconNodejs /> },
    ],
  },
  {
    category: "Databases",
    icon: <Database className="w-6 h-6" />,
    items: [
      { name: "MongoDB", icon: <IconMongodb /> },
      { name: "PostgreSQL", icon: <IconPostgresql /> },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: <Settings className="w-6 h-6" />,
    items: [
      { name: "Git", icon: <IconGit /> },
      { name: "Docker", icon: <IconDocker /> },
      { name: "Figma", icon: <IconFigma /> },
    ],
  },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise">
      <div className="text-center space-y-4 mb-12">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">My Expertise</h2>
        <p className="max-w-2xl mx-auto text-foreground/80 md:text-lg">
          A glimpse into the technologies and tools I use to bring projects to life.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skillCategory, index) => (
          <Card key={skillCategory.category} className="animate-fade-in-up border-border/60 hover:border-primary/80 transition-colors duration-300 hover:shadow-lg" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardHeader className="flex flex-row items-center gap-4">
              {skillCategory.icon}
              <CardTitle className="font-headline text-xl">{skillCategory.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {skillCategory.items.map((item) => (
                  <li key={item.name} className="flex items-center gap-3">
                    <div className="w-6 h-6 text-primary">{item.icon}</div>
                    <span className="font-medium">{item.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;
