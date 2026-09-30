import { ArrowRight, Mail, Sparkles, Terminal, Code2, Download, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/15 to-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                Open for Internships & Projects
              </span>
            </div>

            {/* Name & Tagline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl font-heading font-semibold text-cyan-200/90 tracking-wide flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>{personalInfo.tagline}</span>
              </p>
            </div>

            {/* Short Professional Introduction */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/80 hover:border-cyan-500/40 shadow-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-900/40 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Resume Overview</span>
              </button>
            </div>

            {/* Socials & Highlights Quick Bar */}
            <div className="pt-6 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Find me on:</span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="font-medium text-slate-200">College:</span>
                <span className="text-cyan-400 font-semibold">{personalInfo.college}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Tech Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md w-full">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-1000"></div>

              {/* Card Container */}
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 shadow-2xl p-6 backdrop-blur-xl">
                
                {/* Code Window Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>parag.config.json</span>
                  </div>
                  <div className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    Active
                  </div>
                </div>

                {/* Profile Snapshot Header */}
                <div className="flex items-center gap-4 mb-5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/60">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[2px] shadow-md shadow-cyan-500/20 shrink-0">
                    <div className="w-full h-full bg-[#0b1222] rounded-[10px] flex items-center justify-center">
                      <Code2 className="w-7 h-7 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-slate-100 text-lg">
                      Parag Singhal
                    </h3>
                    <p className="text-xs text-cyan-400 font-medium">
                      B.Tech Undergraduate @ JECRC
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Jaipur, India
                    </p>
                  </div>
                </div>

                {/* Code representation */}
                <div className="font-mono text-xs text-left space-y-2 bg-[#060a12] p-4 rounded-xl border border-slate-900 text-slate-300">
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-cyan-300">studentProfile</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-400">"Parag Singhal"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">role:</span>{' '}
                    <span className="text-emerald-400">"B.Tech Student"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">university:</span>{' '}
                    <span className="text-emerald-400">"JECRC University"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">interests:</span> [
                    <span className="text-amber-300">"AI"</span>,{' '}
                    <span className="text-amber-300">"Web Dev"</span>,{' '}
                    <span className="text-amber-300">"Productivity"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">passion:</span>{' '}
                    <span className="text-emerald-400">"Building real-world solutions"</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* Interactive Pills */}
                <div className="mt-5 grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-left">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Specialization</span>
                    <span className="font-semibold text-slate-200">AI & Web Engineering</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-left">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Stack</span>
                    <span className="font-semibold text-slate-200">Python • React • Tailwind</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
