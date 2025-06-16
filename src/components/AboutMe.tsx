
import React from 'react';
import { Card, CardContent } from './ui/card';

const AboutMe = () => {
  return (
    <section id="about" className="relative z-10">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="space-y-4" data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-6" data-aos="fade-up">
            About Me
          </h2>
          
          <div className="space-y-3 text-gray-300 dark:text-gray-200 leading-relaxed">
            <p data-aos="fade-up" data-aos-delay="100">
              Hi, I'm <span className="text-emerald-400 font-semibold">Iboi Benjamin</span> — a Software Engineer 
              passionate about building clean, responsive, and scalable web applications.
            </p>
            
            <p data-aos="fade-up" data-aos-delay="200">
              I hold a Frontend Development Certificate from Edlivky Coding Academy, where I led team projects and 
              developed real-world solutions.
            </p>
            
            <p data-aos="fade-up" data-aos-delay="300">
              Outside of coding, I explore new frameworks, contribute to open source, and experiment with AI and 
              3D web experiences.
            </p>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="400">
          <Card className="bg-gray-800/50 dark:bg-gray-700/50 border-gray-700/50 dark:border-gray-600/50 overflow-hidden backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="relative w-80 h-96 rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/6b3df2a3-7a59-459a-8a1d-8226c0112a82.png" 
                  alt="Iboi Benjamin Oriaifo"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Gradient overlay for better integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                
                {/* Decorative border */}
                <div className="absolute inset-0 border-2 border-emerald-400/20 rounded-xl pointer-events-none"></div>
                
                {/* Decorative elements */}
                <div className="absolute top-3 right-3 w-12 h-12 bg-emerald-400/10 rounded-full backdrop-blur-sm"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-emerald-400/20 rounded-full backdrop-blur-sm"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
