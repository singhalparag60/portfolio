import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  X, 
  Laptop, 
  Bot, 
  Clock, 
  ArrowRight 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Icon / Accent mapping for project cards
  const projectVisuals = {
    1: {
      icon: Laptop,
      gradient: "from-cyan-500/20 via-sky-500/10 to-indigo-600/20",
      accent: "text-cyan-400",
      border: "hover:border-cyan-500/50",
      tag: "Live Experience"
    },
    2: {
      icon: Bot,
      gradient: "from-purple-500/20 via-indigo-500/10 to-blue-600/20",
      accent: "text-purple-400",
      border: "hover:border-purple-500/50",
      tag: "AI & GenAI"
    },
    3: {
      icon: Clock,
      gradient: "from-amber-500/20 via-orange-500/10 to-rose-600/20",
      accent: "text-amber-400",
      border: "hover:border-amber-500/50",
      tag: "Productivity"
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Projects &{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Creations
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Selected projects demonstrating practical engineering, artificial intelligence integrations, and productivity tooling.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => {
            const visual = projectVisuals[project.id] || projectVisuals[1];
            const Icon = visual.icon;

            return (
              <div
                key={project.id}
                className={`flex flex-col justify-between rounded-3xl bg-slate-900/60 border border-slate-800/80 ${visual.border} backdrop-blur-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-xl group text-left`}
              >
                <div>
                  {/* Visual Header / Banner */}
                  <div className={`relative h-48 bg-gradient-to-br ${visual.gradient} p-6 flex flex-col justify-between border-b border-slate-800/80 overflow-hidden`}>
                    
                    {/* Background abstract grid & circles */}
                    <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/5 blur-xl group-hover:scale-125 transition-transform" />
                    
                    <div className="flex items-center justify-between z-10">
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-900/80 text-white border border-white/10 backdrop-blur-md">
                        {visual.tag}
                      </span>
                      <span className="text-xs font-mono text-slate-400 bg-slate-900/50 px-2 py-0.5 rounded">
                        0{project.id}
                      </span>
                    </div>

                    <div className="z-10 flex items-end justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Icon className={`w-6 h-6 ${visual.accent}`} />
                      </div>
                      <span className="text-xs font-semibold text-slate-300 bg-slate-900/60 px-2.5 py-1 rounded-lg border border-white/5">
                        {project.metric}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {project.shortDescription}
                    </p>

                    {/* Technologies Used */}
                    <div className="mb-6">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                        Technologies Used:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-cyan-200 border border-slate-700/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 pt-0 border-t border-slate-800/60 flex items-center gap-3 mt-auto">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 transition-all duration-200"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                    aria-label="View Code on GitHub"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto text-left">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mt-2">
                  {selectedProject.title}
                </h3>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Project Overview
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Key Capabilities & Architecture
                </h4>
                <div className="space-y-2">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-800 text-cyan-300 border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View GitHub Repo</span>
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-cyan-300 hover:text-white bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-colors"
                  >
                    <span>Discuss Project</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Close
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
