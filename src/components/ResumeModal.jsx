import React from 'react';
import { X, Printer, Download, Mail, MapPin, GraduationCap, Code2, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, educationData, skillsData, projectsData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl my-8 text-left max-h-[90vh] overflow-y-auto">
        
        {/* Top Controls */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              Student Resume Profile
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              type="button"
              className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="pt-6 space-y-6">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-heading font-extrabold text-white">
                {personalInfo.name}
              </h2>
              <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                {personalInfo.tagline}
              </p>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {personalInfo.location} • {personalInfo.college}
              </p>
            </div>

            <div className="space-y-1 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-2">
                <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:underline">
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="pt-4 border-t border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
              Career Objective / Profile Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalInfo.extendedBio}
            </p>
          </div>

          {/* Education */}
          <div className="pt-4 border-t border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" /> Education
            </h3>
            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div key={idx} className="text-xs sm:text-sm">
                  <div className="flex items-center justify-between font-bold text-white">
                    <span>{edu.degree}</span>
                    <span className="text-xs text-slate-400 font-normal">{edu.period}</span>
                  </div>
                  <div className="text-cyan-300 font-medium text-xs mb-1">
                    {edu.institution}, {edu.location}
                  </div>
                  <p className="text-xs text-slate-400 mb-2">
                    {edu.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.relevantLearningAreas.map((area, i) => (
                      <span key={i} className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="pt-4 border-t border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
              <Code2 className="w-4 h-4" /> Technical & Professional Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              {skillsData.map((skill, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <span className="font-semibold text-white block">{skill.name}</span>
                  <span className="text-[11px] text-cyan-300">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="pt-4 border-t border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
              Key Projects
            </h3>
            <div className="space-y-3">
              {projectsData.map((proj) => (
                <div key={proj.id} className="text-xs sm:text-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">{proj.title}</span>
                    <span className="text-[10px] text-cyan-300 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/40">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    {proj.shortDescription}
                  </p>
                  <div className="text-[11px] text-slate-400 mt-1">
                    <span className="font-medium text-slate-300">Tech: </span>
                    {proj.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
