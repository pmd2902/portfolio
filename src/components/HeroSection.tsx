import React, { useState } from 'react'
import { PROFILE } from '../data/profile'
import { sound } from '../lib/sound'
import { useTheme } from '../context/ThemeContext'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import {
  Mail,
  Phone,
  Compass,
  Download,
  Copy,
  Check,
  Radio,
  ExternalLink,
  ChevronDown,
  ShieldCheck,
  Activity,
} from 'lucide-react'

interface HeroSectionProps {
  onOpenCvModal: () => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCvModal }) => {
  const { isLight } = useTheme()
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleCopy = (text: string, type: 'email' | 'phone', e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(text)
    sound.playSuccess()
    setCopiedType(type)
    setTimeout(() => setCopiedType(null), 2500)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePos({ x, y })
  }

  return (
    <section
      id="orbital-command"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Orbital Rings & Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[850px] sm:h-[850px] rounded-full border border-sky-500/10 pointer-events-none animate-spin-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] sm:w-[620px] sm:h-[620px] rounded-full border border-dashed border-sky-400/15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Hero Mission Dossier */}
        <div className="lg:col-span-7 text-left space-y-6">
          {/* Mission Status Badge */}
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono shadow-sm backdrop-blur-md border ${
              isLight
                ? 'bg-amber-100/80 border-amber-300 text-amber-900'
                : 'bg-sky-950/60 border-sky-500/25 text-sky-300'
            }`}
          >
            <Radio className={`w-3.5 h-3.5 animate-pulse ${isLight ? 'text-amber-600' : 'text-emerald-400'}`} />
            <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>MISSION CONTROL:</span>
            <span className={`font-semibold ${isLight ? 'text-amber-800' : 'text-sky-200'}`}>ORBIT ACTIVE</span>
            <span className={`hidden sm:inline ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>&bull;</span>
            <span className={`hidden sm:inline ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>EXP: 4 YEARS</span>
          </div>

          {/* Heading with Astronaut / Developer Identity */}
          <div className="space-y-2">
            <p className={`text-xs sm:text-sm font-mono tracking-widest uppercase font-semibold ${isLight ? 'text-amber-700' : 'text-sky-400'}`}>
              DEVELOPER DOSSIER
            </p>
            <h1 className={`text-4xl sm:text-6xl xl:text-7xl font-heading font-extrabold tracking-tight leading-[1.08] ${isLight ? 'text-slate-900' : 'text-white'}`}>
              Hi, I'm{' '}
              <span
                className={`text-transparent bg-clip-text ${
                  isLight
                    ? 'bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700'
                    : 'bg-gradient-to-r from-sky-400 via-sky-200 to-indigo-300'
                }`}
              >
                {PROFILE.name}
              </span>
            </h1>
            <h2 className={`text-xl sm:text-2xl font-heading font-medium flex items-center gap-2 ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
              <span className={`font-mono text-lg font-bold ${isLight ? 'text-amber-600' : 'text-sky-400'}`}>[ROLE]</span>
              {PROFILE.title}
            </h2>
          </div>

          {/* Mission Statement */}
          <p className={`text-base sm:text-lg leading-relaxed font-sans max-w-2xl font-light ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
            {PROFILE.summary}
          </p>

          {/* Telemetry Quick Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {PROFILE.stats.map((stat, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-lg border transition-all group ${
                  isLight
                    ? 'bg-white/95 border-amber-200/90 hover:border-amber-400 shadow-xs'
                    : 'glass-panel border-sky-500/15 hover:border-sky-500/35'
                }`}
              >
                <div
                  className={`text-lg sm:text-xl font-mono font-bold transition-colors ${
                    isLight ? 'text-slate-900 group-hover:text-amber-700' : 'text-white group-hover:text-sky-300'
                  }`}
                >
                  {stat.value}
                </div>
                <div className={`text-[10px] font-mono uppercase tracking-wider ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Primary Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <a
              href="#mission-profile"
              onClick={() => sound.playBlip(800)}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-mono font-semibold transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${
                isLight
                  ? 'bg-amber-600 text-white hover:bg-amber-700 shadow-sm shadow-amber-600/30'
                  : 'bg-sky-400 text-slate-950 hover:bg-sky-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.45)]'
              }`}
            >
              <Compass className="w-4 h-4" />
              Explore My Universe
            </a>

            <button
              onClick={() => {
                sound.playSuccess()
                onOpenCvModal()
              }}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-mono transition-all cursor-pointer border ${
                isLight
                  ? 'text-slate-800 bg-white hover:bg-amber-50 border-amber-300 hover:border-amber-400 shadow-xs'
                  : 'text-slate-200 bg-slate-900/80 hover:bg-slate-800 border-sky-500/25 hover:border-sky-400/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]'
              }`}
            >
              <Download className={`w-4 h-4 ${isLight ? 'text-amber-600' : 'text-sky-400'}`} />
              Download CV Dossier
            </button>
          </div>

          {/* Verified Contact & Social Links (All Real & Clickable) */}
          <div className={`pt-4 border-t ${isLight ? 'border-amber-200' : 'border-slate-800/80'}`}>
            <div className={`text-xs font-mono mb-3 flex items-center gap-2 ${isLight ? 'text-slate-600 font-semibold' : 'text-slate-400'}`}>
              <ShieldCheck className={`w-3.5 h-3.5 ${isLight ? 'text-amber-600' : 'text-sky-400'}`} />
              DIRECT TRANSMISSION CHANNELS:
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {/* GitHub */}
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playBlip(700)}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono border transition-all group ${
                  isLight
                    ? 'text-slate-700 bg-white hover:bg-amber-50 border-amber-200 hover:border-amber-400 hover:text-amber-900 shadow-xs'
                    : 'text-slate-300 bg-slate-900/60 hover:bg-sky-950/60 border-slate-800 hover:border-sky-500/40 hover:text-white'
                }`}
              >
                <GithubIcon className={`w-4 h-4 transition-colors ${isLight ? 'text-slate-600 group-hover:text-amber-600' : 'text-slate-400 group-hover:text-sky-400'}`} />
                <span>github.com/pmd2902</span>
                <ExternalLink className={`w-3 h-3 ${isLight ? 'text-slate-400 group-hover:text-amber-600' : 'text-slate-500 group-hover:text-sky-400'}`} />
              </a>

              {/* LinkedIn */}
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playBlip(700)}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono border transition-all group ${
                  isLight
                    ? 'text-slate-700 bg-white hover:bg-amber-50 border-amber-200 hover:border-amber-400 hover:text-amber-900 shadow-xs'
                    : 'text-slate-300 bg-slate-900/60 hover:bg-sky-950/60 border-slate-800 hover:border-sky-500/40 hover:text-white'
                }`}
              >
                <LinkedinIcon className={`w-4 h-4 ${isLight ? 'text-amber-600' : 'text-sky-400'}`} />
                <span>LinkedIn Profile</span>
                <ExternalLink className={`w-3 h-3 ${isLight ? 'text-slate-400 group-hover:text-amber-600' : 'text-slate-500 group-hover:text-sky-400'}`} />
              </a>

              {/* Email */}
              <div className={`inline-flex items-center rounded-md border transition-all ${
                isLight
                  ? 'border-amber-200 bg-white hover:border-amber-400 shadow-xs'
                  : 'border-slate-800 bg-slate-900/60 hover:border-sky-500/40'
              }`}>
                <a
                  href={`mailto:${PROFILE.email}`}
                  onClick={() => sound.playBlip(700)}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono ${
                    isLight ? 'text-slate-700 hover:text-amber-800' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Mail className={`w-3.5 h-3.5 ${isLight ? 'text-amber-600' : 'text-sky-400'}`} />
                  <span>{PROFILE.email}</span>
                </a>
                <button
                  onClick={(e) => handleCopy(PROFILE.email, 'email', e)}
                  title="Copy email to clipboard"
                  className={`px-2 py-1.5 border-l transition-colors cursor-pointer ${
                    isLight ? 'border-amber-200 hover:text-amber-700 text-slate-500' : 'border-slate-800 hover:text-sky-400 text-slate-400'
                  }`}
                >
                  {copiedType === 'email' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className={`inline-flex items-center rounded-md border transition-all ${
                isLight
                  ? 'border-amber-200 bg-white hover:border-amber-400 shadow-xs'
                  : 'border-slate-800 bg-slate-900/60 hover:border-sky-500/40'
              }`}>
                <a
                  href={`tel:${PROFILE.phoneRaw}`}
                  onClick={() => sound.playBlip(700)}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono ${
                    isLight ? 'text-slate-700 hover:text-amber-800' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Phone className={`w-3.5 h-3.5 ${isLight ? 'text-amber-600' : 'text-sky-400'}`} />
                  <span>{PROFILE.phone}</span>
                </a>
                <button
                  onClick={(e) => handleCopy(PROFILE.phoneRaw, 'phone', e)}
                  title="Copy phone to clipboard"
                  className={`px-2 py-1.5 border-l transition-colors cursor-pointer ${
                    isLight ? 'border-amber-200 hover:text-amber-700 text-slate-500' : 'border-slate-800 hover:text-sky-400 text-slate-400'
                  }`}
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {copiedType && (
              <p className="text-xs font-mono text-emerald-600 mt-2 flex items-center gap-1.5 font-semibold">
                <Check className="w-3.5 h-3.5" />
                {copiedType === 'email' ? 'Email copied ✓' : 'Phone number copied ✓'}
              </p>
            )}
          </div>
        </div>

        {/* Right Column: Space & Astronaut Interactive Visual Stage */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <div
            className="relative w-full max-w-[420px] aspect-square transition-transform duration-200 ease-out"
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg)`,
            }}
          >
            {/* Celestial Planet Layer in Background */}
            <div
              className={`absolute -top-10 -right-10 w-44 h-44 rounded-full overflow-hidden border pointer-events-none transition-transform duration-300 ${
                isLight
                  ? 'border-amber-400/30 shadow-[0_0_35px_rgba(245,158,11,0.25)] opacity-90'
                  : 'border-sky-400/20 shadow-[0_0_40px_rgba(56,189,248,0.2)] opacity-85'
              }`}
              style={{
                transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`,
              }}
            >
              <img
                src="/planet.jpg"
                alt="Exoplanet orbit"
                className="w-full h-full object-cover animate-spin-slow"
              />
            </div>

            {/* Astronaut Vessel Visual Container */}
            <div
              className={`relative w-full h-full rounded-2xl p-2.5 overflow-hidden transition-all duration-300 group border ${
                isLight
                  ? 'bg-white/95 border-amber-300/80 shadow-xl shadow-amber-950/10'
                  : 'glass-panel-glow border-sky-400/30 shadow-2xl shadow-sky-950/80'
              }`}
            >
              {/* Inner HUD targeting brackets */}
              <div
                className={`absolute top-4 left-4 z-20 font-mono text-[10px] flex items-center gap-1.5 ${
                  isLight ? 'text-amber-800 font-semibold' : 'text-sky-400/80'
                }`}
              >
                <Activity className="w-3.5 h-3.5 text-emerald-500" />
                <span>PILOT: PHAN MINH DUC</span>
              </div>
              <div
                className={`absolute top-4 right-4 z-20 font-mono text-[10px] ${
                  isLight ? 'text-amber-800' : 'text-sky-400/80'
                }`}
              >
                <span>COORD: 10.82°N, 106.63°E</span>
              </div>

              {/* Astronaut image with floating animation */}
              <div className="w-full h-full rounded-xl overflow-hidden relative animate-float">
                <img
                  src="/astronaut.jpg"
                  alt="Astronaut Phan Minh Duc exploring developer universe"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle vignette overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent ${
                    isLight ? 'from-amber-950/20 opacity-30' : 'from-[#020617] opacity-60'
                  }`}
                />
              </div>

              {/* Live Orbital Telemetry Overlay Cards */}
              <div
                className={`absolute bottom-5 left-5 right-5 z-20 p-3 rounded-lg backdrop-blur-md border space-y-1.5 transition-transform duration-300 ${
                  isLight
                    ? 'bg-white/95 border-amber-300/80 text-slate-800 shadow-md'
                    : 'bg-slate-950/85 border-sky-400/25 text-slate-200'
                }`}
                style={{
                  transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
                }}
              >
                <div
                  className={`flex items-center justify-between text-[11px] font-mono ${
                    isLight ? 'text-slate-600' : 'text-slate-400'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    HARDWARE MIDDLEWARE LINK
                  </span>
                  <span className={isLight ? 'text-amber-700 font-bold' : 'text-sky-300 font-semibold'}>
                    BROADCASTCHANNEL
                  </span>
                </div>
                <div className={`text-xs font-mono ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                  Current Deployment:{' '}
                  <span className={isLight ? 'text-amber-700 font-semibold' : 'text-sky-400 font-semibold'}>
                    Synapse 4 (Razer)
                  </span>
                </div>
                <div className={`w-full rounded-full h-1 overflow-hidden ${isLight ? 'bg-amber-100' : 'bg-slate-800'}`}>
                  <div
                    className={`h-1 rounded-full w-[88%] animate-pulse ${
                      isLight ? 'bg-amber-500' : 'bg-sky-400'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Corner floating telemetry satellite tag */}
            <div
              className={`absolute -bottom-4 -left-4 px-3 py-1.5 rounded-lg border font-mono text-[11px] shadow-xl hidden sm:block ${
                isLight
                  ? 'bg-white/95 border-amber-300 text-amber-800 font-semibold shadow-amber-950/5'
                  : 'glass-panel border-sky-400/30 text-sky-300'
              }`}
              style={{
                transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`,
              }}
            >
              ⚡ ~15% UI Lag Reduction
            </div>
          </div>
        </div>
      </div>

      {/* Downward Scroll Indicator */}
      <a
        href="#mission-profile"
        onClick={() => sound.playBlip(600)}
        className="mt-12 group flex flex-col items-center gap-2 text-xs font-mono text-slate-500 hover:text-sky-400 transition-colors"
      >
        <span className="tracking-widest uppercase text-[10px]">Scroll To Navigate Universe</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-sky-400" />
      </a>
    </section>
  )
}
