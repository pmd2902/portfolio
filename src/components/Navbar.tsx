import React, { useState, useEffect } from 'react'
import { sound } from '../lib/sound'
import {
  Compass,
  Layers,
  Cpu,
  FolderGit2,
  Send,
  Bot,
  Volume2,
  VolumeX,
  Menu,
  X,
  Download,
  Terminal,
} from 'lucide-react'

interface NavbarProps {
  onOpenAIModal: () => void
  onOpenCvModal: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAIModal, onOpenCvModal }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    const updateClock = () => {
      const now = new Date()
      // Display Ho Chi Minh City UTC+7 time
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Ho_Chi_Minh',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
      setCurrentTime(`${timeStr} UTC+7`)
    }
    updateClock()
    const timer = setInterval(updateClock, 1000)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(timer)
    }
  }, [])

  const toggleSound = () => {
    const nextState = sound.toggle()
    setSoundEnabled(nextState)
  }

  const navLinks = [
    { label: 'Profile', href: '#mission-profile', icon: Compass, code: '01' },
    { label: 'Constellation', href: '#constellation', icon: Cpu, code: '02' },
    { label: 'Mission Log', href: '#mission-log', icon: Layers, code: '03' },
    { label: 'Missions', href: '#missions', icon: FolderGit2, code: '04' },
    { label: 'Comms', href: '#comms', icon: Send, code: '05' },
  ]

  const handleNavClick = (href: string) => {
    sound.playBlip(750)
    setMobileMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#020617]/85 backdrop-blur-md border-b border-sky-500/15 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Callsign */}
        <a
          href="#orbital-command"
          onClick={() => sound.playBlip(900)}
          className="group flex items-center gap-3 text-left focus:outline-none"
        >
          <div className="relative w-9 h-9 rounded-lg bg-sky-950/60 border border-sky-400/30 flex items-center justify-center transition-all duration-300 group-hover:border-sky-400 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.4)]">
            <span className="text-sky-400 font-mono font-bold text-xs">PMD</span>
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-75" />
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-semibold text-slate-100 tracking-tight text-sm sm:text-base group-hover:text-sky-300 transition-colors">
                PHAN MINH DUC
              </span>
              <span className="hidden xl:inline-block font-mono text-[10px] px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                ORBIT NOMINAL
              </span>
            </div>
            <p className="text-[11px] font-mono text-slate-400 hidden sm:block">
              MIDDLE FRONT-END DEV &bull; {currentTime}
            </p>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <button
              key={link.code}
              onClick={() => handleNavClick(link.href)}
              className="px-3 py-1.5 rounded-md text-xs font-mono text-slate-300 hover:text-white hover:bg-sky-500/10 border border-transparent hover:border-sky-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span className="text-sky-400 text-[10px]">{link.code}.</span>
              <span>{link.label}</span>
            </button>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Audio Synthesizer toggle */}
          <button
            onClick={toggleSound}
            aria-label={soundEnabled ? 'Mute sound telemetry' : 'Enable sound telemetry'}
            title={soundEnabled ? 'Mute audio' : 'Enable audio feedback'}
            className="p-2 rounded-md border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-sky-300 hover:border-sky-500/30 transition-all text-xs flex items-center gap-1"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-sky-400 animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

          {/* AI Mission Control Quick Launcher */}
          <button
            onClick={() => {
              sound.playTransmission()
              onOpenAIModal()
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono text-sky-300 bg-sky-950/40 border border-sky-500/30 hover:border-sky-400 hover:bg-sky-900/40 hover:shadow-[0_0_15px_rgba(56,189,248,0.25)] transition-all cursor-pointer"
          >
            <Bot className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
            <span className="hidden sm:inline">AI CONTROL</span>
            <span className="sm:hidden">AI</span>
          </button>

          {/* Download CV */}
          <button
            onClick={() => {
              sound.playSuccess()
              onOpenCvModal()
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium text-slate-950 bg-sky-400 hover:bg-sky-300 hover:shadow-[0_0_16px_rgba(56,189,248,0.4)] transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">CV DOSSIER</span>
            <span className="sm:hidden">CV</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => {
              sound.playBlip(600)
              setMobileMenuOpen(!mobileMenuOpen)
            }}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-md border border-slate-800 bg-slate-900/80 text-slate-300 hover:text-sky-400 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 mt-2 bg-[#030712]/95 backdrop-blur-xl border-b border-sky-500/20 shadow-2xl">
          <div className="flex flex-col gap-2 pt-2">
            <div className="text-[11px] font-mono text-sky-400/80 uppercase px-3 py-1 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" />
              Navigation Subsystems
            </div>
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <button
                  key={link.code}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-sm font-mono text-slate-200 hover:bg-sky-500/10 hover:text-sky-300 border border-transparent hover:border-sky-500/20 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-sky-400" />
                    <span>{link.label}</span>
                  </div>
                  <span className="text-xs text-sky-500/60 font-mono">[{link.code}]</span>
                </button>
              )
            })}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400 px-3">
              <span>LOCAL ORBIT: {currentTime}</span>
              <span className="text-emerald-400">ONLINE</span>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
