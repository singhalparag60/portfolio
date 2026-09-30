import React, { useState } from 'react';
import { 
  Code2, 
  Palette, 
  FileCode2, 
  Terminal, 
  Cpu, 
  Sparkles, 
  Globe, 
  Zap, 
  Check, 
  Layers
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Map icon string names to components
const iconMap = {
  Code2: Code2,
  Palette: Palette,
  FileCode2: FileCode2,
  Terminal: Terminal,
  Cpu: Cpu,
  Sparkles: Sparkles,
  Globe: Globe,
  Zap: Zap
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Web Development', 'AI & Innovation', 'Programming & AI', 'Productivity & Tools'];

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category.toLowerCase().includes(activeCategory.toLowerCase()) || activeCategory.toLowerCase().includes(s.category.toLowerCase()));

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Skills &{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Competencies
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            A comprehensive overview of the technologies, intelligent frameworks, and productivity systems I utilize.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, idx) => {
            const Icon = iconMap[skill.iconName] || Code2;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between text-left shadow-lg hover:shadow-cyan-950/30"
              >
                {/* Top Corner Gradient Glow on Hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${skill.color} p-[1.5px] shadow-md group-hover:scale-110 transition-transform`}>
                      <div className="w-full h-full bg-[#0a0f1d] rounded-[10px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-cyan-300">
                      {skill.level}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <h3 className="font-heading font-bold text-white text-xl group-hover:text-cyan-300 transition-colors mb-1">
                    {skill.name}
                  </h3>
                  <span className="text-xs text-slate-400 font-medium block mb-3">
                    {skill.category}
                  </span>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    {skill.description}
                  </p>
                </div>

                <div>
                  {/* Progress Bar */}
                  <div className="space-y-1.5 mb-4">
                    <div className="flex justify-between text-[11px] font-medium text-slate-400">
                      <span>Proficiency</span>
                      <span className="text-cyan-300 font-semibold">{skill.percentage}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
                    {skill.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Learning Mindset Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-cyan-950/30 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Continual Skills Upgrading</h4>
              <p className="text-xs text-slate-400">
                Constantly expanding expertise with new frontend libraries, Python AI packages, and cloud integrations.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-cyan-300 hover:text-white bg-slate-800/80 hover:bg-cyan-600/30 border border-cyan-500/30 transition-all shrink-0"
          >
            See Skills in Action
          </a>
        </div>

      </div>
    </section>
  );
}
