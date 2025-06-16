
import React from 'react';
import { Card, CardContent } from './ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Development Certificate",
      company: "Edlivky Coding Academy",
      period: "2023 - 2024",
      description: "Led team projects, built real-world solutions",
      skills: ["Team Leadership", "Project Management", "Full-stack Development"]
    },
    {
      title: "Modern Stack Proficiency",
      company: "Self-directed Learning",
      period: "2022 - Present",
      description: "React, Next.js, Tailwind CSS, Supabase, Firebase, REST APIs",
      skills: ["React", "Next.js", "Tailwind CSS", "Database Design"]
    },
    {
      title: "AI & Automation",
      company: "Personal Projects",
      period: "2023 - Present", 
      description: "Lovable AI, Cursor, Windsurf, Replit AI",
      skills: ["AI Integration", "Automation", "Rapid Prototyping"]
    },
    {
      title: "Rapid Prototyping",
      company: "Freelance & Personal",
      period: "2022 - Present",
      description: "Delivering MVPs and polished products with speed and precision",
      skills: ["MVP Development", "Client Relations", "Agile Methodology"]
    }
  ];

  return (
    <section id="experience" className="relative z-10">
      <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-8 text-center" data-aos="fade-up">
        Experience
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {experiences.map((exp, index) => (
          <Card 
            key={index}
            className="bg-gray-800/50 dark:bg-gray-700/50 border-gray-700 dark:border-gray-600 backdrop-blur-sm hover:bg-gray-800/70 dark:hover:bg-gray-700/70 transition-all duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <CardContent className="p-4">
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-white dark:text-gray-100">
                    {exp.title}
                  </h3>
                  <p className="text-emerald-400 font-semibold text-sm">
                    {exp.company}
                  </p>
                  <p className="text-gray-400 dark:text-gray-300 text-xs">
                    {exp.period}
                  </p>
                </div>
                
                <p className="text-gray-300 dark:text-gray-200 leading-relaxed text-sm">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {exp.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 bg-emerald-400/20 text-emerald-400 rounded-full text-xs font-medium border border-emerald-400/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;
