import React from 'react'
import { PROFILE, WORK_EXPERIENCE, EDUCATION_DATA } from '../data/profile'
import { sound } from '../lib/sound'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import {
  X,
  Printer,
  Download,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'

interface CVDossierModalProps {
  isOpen: boolean
  onClose: () => void
}

export const CVDossierModal: React.FC<CVDossierModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  const handlePrint = () => {
    sound.playSuccess()
    window.print()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#020617]/90 backdrop-blur-xl animate-fade-in overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-slate-950 rounded-2xl border border-sky-400/40 p-6 sm:p-10 my-8 shadow-2xl max-h-[90vh] overflow-y-auto text-slate-100 space-y-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="font-mono text-xs uppercase text-sky-400 font-semibold tracking-wider">
              OFFICIAL CV DOSSIER // PHAN MINH DUC
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-sky-400 text-slate-950 hover:bg-sky-300 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={() => {
                sound.playBlip(600)
                onClose()
              }}
              className="p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:border-sky-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Header */}
        <div className="text-center space-y-2 border-b border-slate-800 pb-6">
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            {PROFILE.name}
          </h1>
          <h2 className="text-base sm:text-lg font-mono text-sky-400 uppercase tracking-widest font-semibold">
            {PROFILE.title}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-300 pt-2">
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              {PROFILE.email}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              {PROFILE.phone}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              {PROFILE.location}
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-sky-400/90 pt-1">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              {PROFILE.linkedin}
            </a>
            <span>&bull;</span>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              {PROFILE.github}
            </a>
          </div>
        </div>

        {/* Summary */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono uppercase font-bold text-sky-400 tracking-wider">
            SUMMARY
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            {PROFILE.summary}
          </p>
        </div>

        {/* Technical Skills */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase font-bold text-sky-400 tracking-wider">
            TECHNICAL SKILLS
          </h3>
          <div className="space-y-2 text-xs font-sans text-slate-300">
            <div>
              <strong className="text-white font-mono">Languages: </strong>
              TypeScript, JavaScript (ES6+), English (Intermediate – working proficiency in cross-border teams)
            </div>
            <div>
              <strong className="text-white font-mono">Frameworks/Libraries: </strong>
              React.js, Next.js, Electron.js
            </div>
            <div>
              <strong className="text-white font-mono">State Management & Data: </strong>
              Redux (Redux Toolkit), Zustand, RESTful APIs, WebSocket
            </div>
            <div>
              <strong className="text-white font-mono">UI & Styling: </strong>
              Tailwind CSS, Shadcn/ui, React Bits, Material UI (MUI), Responsive & Accessible Design
            </div>
            <div>
              <strong className="text-white font-mono">Architecture & Optimization: </strong>
              Micro-Frontend (Module Federation), High-Frequency Rendering Optimization, Code Splitting, BroadcastChannel
            </div>
            <div>
              <strong className="text-white font-mono">Tools, CI/CD & Testing: </strong>
              Git, Docker, Jenkins (CI/CD), Postman, JMeter, Jira, Bitbucket
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="space-y-6">
          <h3 className="text-xs font-mono uppercase font-bold text-sky-400 tracking-wider">
            WORK EXPERIENCE
          </h3>

          <div className="space-y-6">
            {WORK_EXPERIENCE.map((exp) => (
              <div key={exp.id} className="space-y-3 border-l-2 border-slate-800 pl-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-heading font-bold text-white text-base">
                      {exp.company}
                    </span>
                    <span className="text-slate-400 mx-2">|</span>
                    <span className="text-sky-300 font-mono text-xs font-semibold">
                      {exp.role}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                </div>

                {exp.projects.map((proj, pIdx) => (
                  <div key={pIdx} className="space-y-2 pt-1">
                    <div className="text-xs font-mono font-semibold text-slate-200">
                      Project: {proj.name}
                    </div>
                    <ul className="space-y-1.5 pl-2">
                      {proj.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="text-xs text-slate-300 flex items-start gap-2">
                          <span className="text-sky-400 mt-1">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase font-bold text-sky-400 tracking-wider">
            EDUCATION
          </h3>
          <div className="border-l-2 border-slate-800 pl-4 space-y-1 text-xs">
            <div className="font-heading font-bold text-white text-sm">
              {EDUCATION_DATA.institution} | <span className="font-mono text-slate-400">{EDUCATION_DATA.period}</span>
            </div>
            <div className="text-slate-300">Degree: {EDUCATION_DATA.degree}</div>
            <div className="text-emerald-400 font-mono">Graduation Grade: {EDUCATION_DATA.grade}</div>
          </div>
        </div>

        {/* Footer print action */}
        <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-xs font-mono text-slate-400">
          <span>Single Source of Truth &bull; Phan Minh Duc</span>
          <button
            onClick={handlePrint}
            className="text-sky-400 hover:text-sky-300 flex items-center gap-1 underline"
          >
            <Download className="w-3.5 h-3.5" />
            Save as PDF / Print
          </button>
        </div>
      </div>
    </div>
  )
}
