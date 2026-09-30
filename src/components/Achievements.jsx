import React, { useState } from 'react';
import { 
  Trophy, 
  Award, 
  Flame, 
  BookOpen, 
  Calendar, 
  CheckCircle2, 
  PlusCircle, 
  Sparkles, 
  ExternalLink 
} from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Certifications', 'Hackathons', 'Courses', 'Awards & Honors'];

  // Flatten or filter items based on category
  const allItems = achievementsData.flatMap(cat => 
    cat.items.map(item => ({ ...item, categoryName: cat.category }))
  );

  const displayedItems = selectedCategory === 'All'
    ? allItems
    : allItems.filter(item => item.categoryName === selectedCategory);

  const getCategoryIcon = (catName) => {
    switch(catName) {
      case 'Certifications': return Award;
      case 'Hackathons': return Flame;
      case 'Courses': return BookOpen;
      case 'Awards & Honors': return Trophy;
      default: return Sparkles;
    }
  };

  const getCategoryColor = (catName) => {
    switch(catName) {
      case 'Certifications': return 'from-cyan-500 to-blue-600 text-cyan-400';
      case 'Hackathons': return 'from-rose-500 to-amber-500 text-amber-400';
      case 'Courses': return 'from-indigo-500 to-purple-600 text-indigo-400';
      case 'Awards & Honors': return 'from-amber-400 to-yellow-500 text-yellow-400';
      default: return 'from-slate-500 to-slate-700 text-slate-300';
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones & Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Achievements &{' '}
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-cyan-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            A growing record of certifications, hackathon participation, specialized coursework, and honors.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-amber-500 to-cyan-600 text-white shadow-md shadow-amber-500/20'
                    : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {displayedItems.map((item, idx) => {
            const Icon = getCategoryIcon(item.categoryName);
            const colorClass = getCategoryColor(item.categoryName);

            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/30 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-lg"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60">
                        <Icon className="w-5 h-5 text-amber-400" />
                      </div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        {item.categoryName}
                      </span>
                    </div>

                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-amber-300 border border-amber-500/20">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="font-heading font-bold text-white text-lg group-hover:text-amber-300 transition-colors mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-cyan-400 mb-3">
                    {item.issuer}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Footer status & date */}
                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 font-medium text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {item.status}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    {item.date}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Customizable Placeholder Note for Parag */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-indigo-950/30 border border-dashed border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shrink-0">
              <PlusCircle className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Easily Expandable Section</h4>
              <p className="text-xs text-slate-400">
                You can easily add new certificates, hackathon honors, courses, and project awards anytime in <code className="text-cyan-300 bg-slate-800 px-1.5 py-0.5 rounded">src/data/portfolioData.js</code>.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600/80 hover:bg-indigo-600 transition-colors shrink-0"
          >
            Invite to Hackathon
          </a>
        </div>

      </div>
    </section>
  );
}
