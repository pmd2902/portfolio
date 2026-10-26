import React, { useState } from 'react'
import { PROFILE } from '../data/profile'
import { sound } from '../lib/sound'
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/25 text-xs font-mono text-sky-300 shadow-sm backdrop-blur-md">
            <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span className="text-slate-400">MISSION CONTROL:</span>
            <span className="font-semibold text-sky-200">ORBIT ACTIVE</span>
            <span className="hidden sm:inline text-slate-500">&bull;</span>
            <span className="hidden sm:inline text-slate-400">EXP: 4 YEARS</span>
          </div>

          {/* Heading with Astronaut / Developer Identity */}
          <div className="space-y-2">
            <p className="text-xs sm:text-sm font-mono text-sky-400 tracking-widest uppercase">
              DEVELOPER DOSSIER
            </p>
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading font-extrabold tracking-tight text-white leading-[1.08]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-200 to-indigo-300">{PROFILE.name}</span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-heading font-medium text-slate-300 flex items-center gap-2">
              <span className="text-sky-400 font-mono text-lg">[ROLE]</span>
              {PROFILE.title}
            </h2>
          </div>

          {/* Mission Statement */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl font-light">
            {PROFILE.summary}
          </p>

          {/* Telemetry Quick Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {PROFILE.stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-panel p-3 rounded-lg border border-sky-500/15 hover:border-sky-500/35 transition-all group"
              >
                <div className="text-lg sm:text-xl font-mono font-bold text-white group-hover:text-sky-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-mono font-semibold bg-sky-400 text-slate-950 hover:bg-sky-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.45)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Compass className="w-4 h-4" />
              Explore My Universe
            </a>

            <button
              onClick={() => {
                sound.playSuccess()
                onOpenCvModal()
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-mono text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-sky-500/25 hover:border-sky-400/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-sky-400" />
              Download CV Dossier
            </button>
          </div>

          {/* Verified Contact & Social Links (All Real & Clickable) */}
          <div className="pt-4 border-t border-slate-800/80">
            <div className="text-xs font-mono text-slate-400 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              DIRECT TRANSMISSION CHANNELS:
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {/* GitHub */}
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playBlip(700)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono text-slate-300 bg-slate-900/60 hover:bg-sky-950/60 border border-slate-800 hover:border-sky-500/40 hover:text-white transition-all group"
              >
                <GithubIcon className="w-4 h-4 text-slate-400 group-hover:text-sky-400 transition-colors" />
                <span>github.com/pmd2902</span>
                <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-sky-400" />
              </a>

              {/* LinkedIn */}
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playBlip(700)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono text-slate-300 bg-slate-900/60 hover:bg-sky-950/60 border border-slate-800 hover:border-sky-500/40 hover:text-white transition-all group"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-400" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-sky-400" />
              </a>

              {/* Email */}
              <div className="inline-flex items-center rounded-md border border-slate-800 bg-slate-900/60 hover:border-sky-500/40 transition-all">
                <a
                  href={`mailto:${PROFILE.email}`}
                  onClick={() => sound.playBlip(700)}
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-white"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  <span>{PROFILE.email}</span>
                </a>
                <button
                  onClick={(e) => handleCopy(PROFILE.email, 'email', e)}
                  title="Copy email to clipboard"
                  className="px-2 py-1.5 border-l border-slate-800 hover:text-sky-400 text-slate-400 transition-colors"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="inline-flex items-center rounded-md border border-slate-800 bg-slate-900/60 hover:border-sky-500/40 transition-all">
                <a
                  href={`tel:${PROFILE.phoneRaw}`}
                  onClick={() => sound.playBlip(700)}
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-white"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>{PROFILE.phone}</span>
                </a>
                <button
                  onClick={(e) => handleCopy(PROFILE.phoneRaw, 'phone', e)}
                  title="Copy phone to clipboard"
                  className="px-2 py-1.5 border-l border-slate-800 hover:text-sky-400 text-slate-400 transition-colors"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {copiedType && (
              <p className="text-xs font-mono text-emerald-400 mt-2 flex items-center gap-1.5">
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
              className="absolute -top-10 -right-10 w-44 h-44 rounded-full overflow-hidden border border-sky-400/20 shadow-[0_0_40px_rgba(56,189,248,0.2)] opacity-85 pointer-events-none transition-transform duration-300"
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
            <div className="relative w-full h-full rounded-2xl p-2.5 glass-panel-glow border border-sky-400/30 overflow-hidden shadow-2xl shadow-sky-950/80 group">
              {/* Inner HUD targeting brackets */}
              <div className="absolute top-4 left-4 z-20 font-mono text-[10px] text-sky-400/80 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                <span>PILOT: PHAN MINH DUC</span>
              </div>
              <div className="absolute top-4 right-4 z-20 font-mono text-[10px] text-sky-400/80">
                <span>COORD: 10.82°N, 106.63°E</span>
              </div>

              {/* Astronaut image with floating animation */}
              <div className="w-full h-full rounded-xl overflow-hidden relative animate-float">
                <img
                  src="/astronaut.jpg"
                  alt="Astronaut Phan Minh Duc exploring developer universe"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle dark vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
              </div>

              {/* Live Orbital Telemetry Overlay Cards */}
              <div
                className="absolute bottom-5 left-5 right-5 z-20 p-3 rounded-lg bg-slate-950/85 backdrop-blur-md border border-sky-400/25 space-y-1.5 transition-transform duration-300"
                style={{
                  transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
                }}
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    HARDWARE MIDDLEWARE LINK
                  </span>
                  <span className="text-sky-300 font-semibold">BROADCASTCHANNEL</span>
                </div>
                <div className="text-xs font-mono text-slate-200">
                  Current Deployment: <span className="text-sky-400 font-semibold">Synapse 4 (Razer)</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1 overflow-hidden">
                  <div className="bg-sky-400 h-1 rounded-full w-[88%] animate-pulse" />
                </div>
              </div>
            </div>

            {/* Corner floating telemetry satellite tag */}
            <div
              className="absolute -bottom-4 -left-4 glass-panel px-3 py-1.5 rounded-lg border border-sky-400/30 font-mono text-[11px] text-sky-300 shadow-xl hidden sm:block"
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
