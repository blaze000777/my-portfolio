
import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative z-10 py-16">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Contact
        </h2>
        <p className="text-emerald-400 text-xl mb-2" data-aos="fade-up" data-aos-delay="100">
          Ready to get started on your project?
        </p>
        <p className="text-gray-300 text-lg" data-aos="fade-up" data-aos-delay="200">
          Contact me now for a Free consultation.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-16" data-aos="fade-up" data-aos-delay="300">
        <Card className="bg-gradient-to-r from-emerald-500 to-emerald-600 border-none text-white hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 flex items-center gap-4">
            <Mail size={32} />
            <div>
              <p className="text-lg font-semibold">iboibenjamin@gmail.com</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-pink-500 to-pink-600 border-none text-white hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 flex items-center gap-4">
            <Phone size={32} />
            <div>
              <p className="text-lg font-semibold">(+234) 8123456789</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="400">
        <h3 className="text-2xl font-bold text-white text-center mb-8">
          Get in touch using the form
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div data-aos="fade-up" data-aos-delay="500">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 rounded-full px-6 py-4 text-lg"
              required
            />
          </div>
          
          <div data-aos="fade-up" data-aos-delay="600">
            <Textarea
              name="message"
              placeholder="Send a message to get started."
              value={formData.message}
              onChange={handleInputChange}
              className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 rounded-2xl px-6 py-4 text-lg min-h-[120px] resize-none"
              required
            />
          </div>
          
          <div className="text-center" data-aos="fade-up" data-aos-delay="700">
            <Button
              type="submit"
              className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
