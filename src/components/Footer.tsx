import React from 'react'
import { PROFILE } from '../data/profile'
import { sound } from '../lib/sound'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { ChevronUp, Mail, Phone } from 'lucide-react'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sound.playBlip(950)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-sky-500/15 bg-[#020617]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Column: Brand & Coordinates */}
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-heading font-bold text-white tracking-tight">
              {PROFILE.name}
            </span>
            <span className="text-slate-500">&bull;</span>
            <span className="font-mono text-xs text-sky-400">CALLSIGN: {PROFILE.callsign}</span>
          </div>
          <p className="text-xs font-mono text-slate-400">
            {PROFILE.title} &bull; {PROFILE.location} ({PROFILE.coordinates})
          </p>
        </div>

        {/* Middle Column: Social Chips */}
        <div className="flex items-center gap-3">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-sky-500/40 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-300 hover:border-sky-500/40 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Email Transmission"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-300 hover:border-sky-500/40 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={`tel:${PROFILE.phoneRaw}`}
            aria-label="Phone Frequency"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-300 hover:border-sky-500/40 transition-colors"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>

        {/* Right Column: Back to top button */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
            ORBIT APEX REACHED
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Return to orbital top"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-sky-500/30 bg-sky-950/40 text-sky-300 hover:bg-sky-900/50 hover:text-white transition-all text-xs font-mono cursor-pointer"
          >
            <span>APEX</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
