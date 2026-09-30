import React from 'react';
import { User, BookOpen, Brain, Code, Zap, Target, Sparkles, MapPin, GraduationCap, Laptop } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "B.Tech Student",
      subtitle: personalInfo.college,
      desc: "Balancing strong computer science theory with hands-on software development.",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Brain,
      title: "AI Enthusiast",
      subtitle: "Machine Learning & LLMs",
      desc: "Exploring how modern neural networks and AI models augment human potential.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Code,
      title: "Web Developer",
      subtitle: "Modern Frontend Stack",
      desc: "Building accessible, ultra-responsive web applications using React & Tailwind.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Zap,
      title: "Digital Productivity",
      subtitle: "Systems & Optimization",
      desc: "Designing focused workflows, automating repetitive tasks, and shipping with precision.",
      color: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Crafting Ideas into{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Real-World Code
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            A student-friendly introduction to who I am, what drives my curiosity, and how I approach technology.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600" />
              
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-4 flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>Passionate Explorer of Future Tech</span>
              </h3>

              <div className="space-y-4 text-slate-300 leading-relaxed text-base font-normal">
                <p>
                  Hello! I am <strong className="text-cyan-300 font-semibold">{personalInfo.name}</strong>, a dedicated B.Tech student at{' '}
                  <strong className="text-white font-semibold">{personalInfo.college}</strong>. My journey in technology began with a genuine wonder for how software powers modern life and has evolved into an active pursuit of modern web development and artificial intelligence.
                </p>

                <p>
                  As an aspiring technologist, I do not just consume technology—I love deconstructing how it works under the hood. Whether it's training algorithms, implementing modular frontend interfaces with React, or testing cutting-edge Generative AI workflows, my goal is always to build clean, functional, and user-centric products.
                </p>

                <p>
                  Beyond pure programming, I have a deep appreciation for <span className="text-indigo-300 font-medium">Digital Productivity</span>. I apply system thinking to study routines, project management, and developer tooling—ensuring every project is organized, documented, and built for lasting impact.
                </p>
              </div>

              {/* Quick Details Badges */}
              <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <span className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-cyan-400" /> University
                  </span>
                  <p className="text-sm font-semibold text-white">{personalInfo.college}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Location
                  </span>
                  <p className="text-sm font-semibold text-white">{personalInfo.location}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                    <Laptop className="w-3.5 h-3.5 text-cyan-400" /> Status
                  </span>
                  <p className="text-sm font-semibold text-emerald-400">Available for Hire</p>
                </div>
              </div>
            </div>

            {/* Guiding Principles */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/20 via-slate-900/40 to-indigo-950/20 border border-slate-800/80">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-300 mb-3 flex items-center gap-2">
                <Target className="w-4 h-4 text-cyan-400" />
                My Core Philosophy
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed italic">
                "Theory provides the map, but practical execution builds the road. I focus on learning cutting-edge tools and immediately applying them to tangible, real-world solutions."
              </p>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 text-left">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.color} p-[1.5px] shrink-0 shadow-lg group-hover:scale-105 transition-transform`}>
                      <div className="w-full h-full bg-[#0a0f1d] rounded-[10px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs font-medium text-cyan-400/90 mb-1.5">
                        {item.subtitle}
                      </p>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
