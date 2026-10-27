import React from 'react'
import { PROFILE } from '../data/profile'
import { sound } from '../lib/sound'
import { useTheme } from '../context/ThemeContext'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { ChevronUp, Mail, Phone } from 'lucide-react'

export const Footer: React.FC = () => {
  const { isLight } = useTheme()

  const scrollToTop = () => {
    sound.playBlip(950)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      className={`relative py-12 px-4 sm:px-6 lg:px-8 border-t transition-colors ${
        isLight
          ? 'bg-[#fdfbf7] border-amber-500/20'
          : 'bg-[#020617]/90 border-sky-500/15 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Column: Brand & Coordinates */}
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span
              className={`font-heading font-bold tracking-tight ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}
            >
              {PROFILE.name}
            </span>
            <span className={isLight ? 'text-amber-300' : 'text-slate-500'}>&bull;</span>
            <span
              className={`font-mono text-xs ${
                isLight ? 'text-amber-700 font-medium' : 'text-sky-400'
              }`}
            >
              CALLSIGN: {PROFILE.callsign}
            </span>
          </div>
          <p
            className={`text-xs font-mono ${
              isLight ? 'text-slate-600' : 'text-slate-400'
            }`}
          >
            {PROFILE.title} &bull; {PROFILE.location} ({PROFILE.coordinates})
          </p>
        </div>

        {/* Middle Column: Social Chips */}
        <div className="flex items-center gap-2.5">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className={`min-w-[44px] min-h-[44px] rounded-lg border transition-colors flex items-center justify-center ${
              isLight
                ? 'bg-amber-100/80 border-amber-200 text-slate-700 hover:text-amber-700 hover:border-amber-400 shadow-xs'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-sky-500/40'
            }`}
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className={`min-w-[44px] min-h-[44px] rounded-lg border transition-colors flex items-center justify-center ${
              isLight
                ? 'bg-amber-100/80 border-amber-200 text-blue-600 hover:text-blue-700 hover:border-amber-400 shadow-xs'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-sky-300 hover:border-sky-500/40'
            }`}
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Email Transmission"
            className={`min-w-[44px] min-h-[44px] rounded-lg border transition-colors flex items-center justify-center ${
              isLight
                ? 'bg-amber-100/80 border-amber-200 text-amber-700 hover:text-amber-900 hover:border-amber-400 shadow-xs'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-sky-300 hover:border-sky-500/40'
            }`}
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href={`tel:${PROFILE.phoneRaw}`}
            aria-label="Phone Frequency"
            className={`min-w-[44px] min-h-[44px] rounded-lg border transition-colors flex items-center justify-center ${
              isLight
                ? 'bg-amber-100/80 border-amber-200 text-emerald-700 hover:text-emerald-900 hover:border-amber-400 shadow-xs'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-sky-300 hover:border-sky-500/40'
            }`}
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>

        {/* Right Column: Back to top button */}
        <div className="flex items-center gap-3">
          <span
            className={`text-[11px] font-mono hidden sm:inline ${
              isLight ? 'text-slate-500' : 'text-slate-500'
            }`}
          >
            ORBIT APEX REACHED
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Return to orbital top"
            className={`min-h-[44px] flex items-center gap-1.5 px-3.5 py-2 rounded-lg border text-xs font-mono cursor-pointer transition-all ${
              isLight
                ? 'border-amber-300 bg-amber-100 text-amber-800 hover:bg-amber-200 hover:text-amber-900 shadow-xs'
                : 'border-sky-500/30 bg-sky-950/40 text-sky-300 hover:bg-sky-900/50 hover:text-white'
            }`}
          >
            <span>APEX</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
