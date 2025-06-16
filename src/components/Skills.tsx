
import React from 'react';
import { Card, CardContent } from './ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", level: 5, color: "#E34F26" },
        { name: "CSS3", level: 5, color: "#1572B6" },
        { name: "JavaScript", level: 4, color: "#F7DF1E" },
        { name: "TypeScript", level: 4, color: "#3178C6" },
        { name: "React", level: 4, color: "#61DAFB" },
      ]
    },
    {
      title: "Backend & Tools", 
      skills: [
        { name: "Node.js", level: 3, color: "#339933" },
        { name: "PHP", level: 3, color: "#777BB4" },
        { name: "Next.js", level: 4, color: "#000000" },
        { name: "Tailwind", level: 5, color: "#06B6D4" },
        { name: "Bootstrap", level: 4, color: "#7952B3" },
      ]
    },
    {
      title: "Database & Cloud",
      skills: [
        { name: "Supabase", level: 3, color: "#3ECF8E" },
        { name: "Firebase", level: 3, color: "#FFCA28" },
        { name: "Git", level: 4, color: "#F05032" },
        { name: "REST APIs", level: 4, color: "#FF6B35" },
      ]
    }
  ];

  const renderStars = (level) => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`text-sm ${i < level ? 'text-yellow-400' : 'text-gray-600 dark:text-gray-500'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section id="skills" className="relative z-10">
      <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-8 text-center">
        Main Skills
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <Card 
            key={categoryIndex}
            className="bg-gray-800/50 dark:bg-gray-700/50 border-gray-700 dark:border-gray-600 backdrop-blur-sm hover:bg-gray-800/70 dark:hover:bg-gray-700/70 transition-all duration-300"
          >
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white group-hover:scale-110 transition-transform duration-200"
                          style={{ backgroundColor: skill.color }}
                        >
                          {skill.name.charAt(0)}
                        </div>
                        <span className="text-gray-200 dark:text-gray-100 text-sm">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 ml-7">
                      {renderStars(skill.level)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
