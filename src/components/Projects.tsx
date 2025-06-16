
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "NFT Art Marketplace",
      description: "Web3 platform for artists to mint/sell NFTs with advanced royalties tracking and management.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      category: "Web3",
      stats: "200+ testnet txns, 40% faster debugging",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Rare Home Decor (E-commerce)",
      description: "AI-augmented online store with real-time inventory management and intelligent product recommendations.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      category: "AI Powered",
      stats: "30% faster UI development, 99.8% uptime",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Starlite Micro Lender",
      description: "Loan management system with AI-validated forms and intelligent risk assessment.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      category: "FinTech",
      stats: "65% fewer form errors",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Edlivky Coding Academy",
      description: "Responsive educational platform with optimized mobile performance and interactive learning modules.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop",
      category: "Education",
      stats: "40% mobile performance boost",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Web3':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'AI Powered':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'FinTech':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Education':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="projects" className="relative z-10 py-16">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-4">
          Projects
        </h2>
        <p className="text-gray-400 dark:text-gray-300 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills in web development, 
          AI integration, and modern technologies.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card 
            key={project.id}
            className="bg-gray-800/50 dark:bg-gray-700/50 border-gray-700 dark:border-gray-600 backdrop-blur-sm hover:bg-gray-800/70 dark:hover:bg-gray-700/70 transition-all duration-300 hover:scale-105 overflow-hidden group"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
                  {project.category}
                </span>
              </div>
            </div>
            
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white dark:text-gray-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 dark:text-gray-200 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="text-emerald-400 text-xs font-medium">
                  {project.stats}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 bg-gray-500/10 border-gray-500/30 text-gray-400 hover:bg-gray-500/20"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
