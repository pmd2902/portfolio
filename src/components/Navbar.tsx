import React, { useState, useEffect } from 'react'
import { sound } from '../lib/sound'
import { useTheme } from '../context/ThemeContext'
import {
  Compass,
  Layers,
  Cpu,
  FolderGit2,
  Send,
  Bot,
  Menu,
  X,
  Download,
  Terminal,
  Sun,
  Moon,
} from 'lucide-react'

interface NavbarProps {
  onOpenAIModal: () => void
  onOpenCvModal: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAIModal, onOpenCvModal }) => {
  const { isLight, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const sectionIds = ['mission-profile', 'constellation', 'mission-log', 'missions', 'comms']
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      // Active section scroll spy calculation
      const scrollPosition = window.scrollY + 180
      let current = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = `#${id}`
            break
          }
        }
      }
      setActiveSection(current)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)
    handleScroll()

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
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
      clearInterval(timer)
    }
  }, [])

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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
        ? isLight
          ? 'bg-[#fdfbf7]/90 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-md shadow-amber-950/5'
          : 'bg-[#020617]/85 backdrop-blur-md border-b border-sky-500/15 py-3 shadow-lg shadow-black/40'
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
          <div
            className={`relative w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-300 ${isLight
              ? 'bg-amber-100/90 border-amber-400/50 text-amber-700 group-hover:border-amber-500 group-hover:shadow-[0_0_12px_rgba(245,158,11,0.3)]'
              : 'bg-sky-950/60 border-sky-400/30 text-sky-400 group-hover:border-sky-400 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.4)]'
              }`}
          >
            <span className="font-mono font-bold text-xs">PMD</span>
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-75" />
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span
                className={`font-heading font-semibold tracking-tight text-sm sm:text-base transition-colors ${isLight
                  ? 'text-slate-900 group-hover:text-amber-700'
                  : 'text-slate-100 group-hover:text-sky-300'
                  }`}
              >
                PHAN MINH DUC
              </span>
              <span
                className={`hidden xl:inline-block font-mono text-[10px] px-1.5 py-0.5 rounded border ${isLight
                  ? 'bg-amber-100 text-amber-700 border-amber-300'
                  : 'bg-sky-500/10 text-sky-400 border-sky-500/20'
                  }`}
              >
                ORBIT NOMINAL
              </span>
            </div>
            <p
              className={`text-[11px] font-mono hidden sm:block ${isLight ? 'text-slate-500' : 'text-slate-400'
                }`}
            >
              MIDDLE FRONT-END DEV &bull; {currentTime}
            </p>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href
            return (
              <button
                key={link.code}
                onClick={() => handleNavClick(link.href)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative px-3 py-1.5 rounded-md text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer border ${
                  isActive
                    ? isLight
                      ? 'text-amber-900 bg-amber-500/15 border-amber-400/70 font-semibold shadow-xs'
                      : 'text-sky-300 bg-sky-950/70 border-sky-400/50 font-semibold shadow-[0_0_12px_rgba(56,189,248,0.25)]'
                    : isLight
                    ? 'text-slate-700 hover:text-slate-900 hover:bg-amber-500/10 border-transparent hover:border-amber-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-sky-500/10 border-transparent hover:border-sky-500/20'
                }`}
              >
                <span
                  className={`text-[10px] ${
                    isActive
                      ? isLight
                        ? 'text-amber-700 font-bold'
                        : 'text-sky-300 font-bold'
                      : isLight
                      ? 'text-amber-600'
                      : 'text-sky-400'
                  }`}
                >
                  {link.code}.
                </span>
                <span>{link.label}</span>
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-2 right-2 h-[2px] rounded-full ${
                      isLight ? 'bg-amber-600' : 'bg-sky-400'
                    }`}
                  />
                )}
              </button>
            )
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle Button (Solar Flare Light / Deep Cosmos Dark) */}
          <button
            onClick={toggleTheme}
            aria-label={isLight ? 'Switch to Deep Space Night' : 'Switch to Solar Flare Daylight'}
            title={isLight ? 'Chuyển sang Chế độ Tối (Deep Cosmos)' : 'Chuyển sang Chế độ Sáng (Solar Flare)'}
            className={`min-w-[40px] min-h-[40px] p-2 rounded-md border transition-all text-xs flex items-center justify-center cursor-pointer ${isLight
              ? 'border-amber-400/60 bg-amber-100 text-amber-700 hover:bg-amber-200/80 shadow-xs'
              : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-amber-400 hover:border-amber-400/30'
              }`}
          >
            {isLight ? (
              <Moon className="w-4 h-4 text-amber-700 transition-transform duration-300 hover:-rotate-12" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
            )}
          </button>

          {/* AI Mission Control Quick Launcher */}
          <button
            onClick={() => {
              sound.playTransmission()
              onOpenAIModal()
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 min-h-[38px] rounded-md text-xs font-mono transition-all cursor-pointer border ${isLight
              ? 'text-amber-900 bg-amber-500/15 border-amber-400/60 hover:bg-amber-500/25 hover:border-amber-500 shadow-xs'
              : 'text-sky-300 bg-sky-950/40 border-sky-500/30 hover:border-sky-400 hover:bg-sky-900/40 hover:shadow-[0_0_15px_rgba(56,189,248,0.25)]'
              }`}
          >
            <Bot className={`w-3.5 h-3.5 animate-pulse ${isLight ? 'text-amber-600' : 'text-sky-400'}`} />
            <span className="hidden sm:inline">AI CONTROL</span>
            <span className="sm:hidden">AI</span>
          </button>

          {/* Download CV */}
          <button
            onClick={() => {
              sound.playSuccess()
              onOpenCvModal()
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 min-h-[38px] rounded-md text-xs font-mono font-medium transition-all cursor-pointer ${isLight
              ? 'text-white bg-amber-600 hover:bg-amber-700 shadow-sm shadow-amber-600/30'
              : 'text-slate-950 bg-sky-400 hover:bg-sky-300 hover:shadow-[0_0_16px_rgba(56,189,248,0.4)]'
              }`}
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
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            className={`lg:hidden min-w-[44px] min-h-[44px] p-2 rounded-md border focus:outline-none flex items-center justify-center cursor-pointer ${isLight
              ? 'border-amber-300 bg-amber-50 text-slate-800 hover:text-amber-700'
              : 'border-slate-800 bg-slate-900/80 text-slate-300 hover:text-sky-400'
              }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className={`lg:hidden px-4 pt-3 pb-6 mt-2 backdrop-blur-xl border-b shadow-2xl ${isLight
            ? 'bg-[#fdfbf7]/98 border-amber-500/25 text-slate-800'
            : 'bg-[#030712]/95 border-sky-500/20'
            }`}
        >
          <div className="flex flex-col gap-2 pt-2">
            <div
              className={`text-[11px] font-mono uppercase px-3 py-1 flex items-center gap-2 ${isLight ? 'text-amber-700' : 'text-sky-400/80'
                }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              Navigation Subsystems
            </div>
            {navLinks.map((link) => {
              const Icon = link.icon
              const isActive = activeSection === link.href
              return (
                <button
                  key={link.code}
                  onClick={() => handleNavClick(link.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-sm font-mono transition-all border ${
                    isActive
                      ? isLight
                        ? 'text-amber-900 bg-amber-100/90 border-amber-300 font-semibold'
                        : 'text-sky-200 bg-sky-950/70 border-sky-400/40 font-semibold'
                      : isLight
                      ? 'text-slate-800 hover:bg-amber-500/10 hover:text-amber-800 border-transparent hover:border-amber-500/20'
                      : 'text-slate-200 hover:bg-sky-500/10 hover:text-sky-300 border-transparent hover:border-sky-500/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? (isLight ? 'text-amber-700' : 'text-sky-300') : (isLight ? 'text-amber-600' : 'text-sky-400')}`} />
                    <span>{link.label}</span>
                  </div>
                  <span
                    className={`text-xs font-mono ${
                      isActive
                        ? isLight
                          ? 'text-amber-800 font-bold'
                          : 'text-sky-300 font-bold'
                        : isLight
                        ? 'text-amber-600/70'
                        : 'text-sky-500/60'
                    }`}
                  >
                    [{link.code}]
                  </span>
                </button>
              )
            })}
            <div
              className={`pt-3 border-t flex items-center justify-between text-xs font-mono px-3 ${isLight ? 'border-amber-200 text-slate-600' : 'border-slate-800/80 text-slate-400'
                }`}
            >
              <span>ORBIT THEME:</span>
              <button
                onClick={toggleTheme}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded border cursor-pointer text-xs ${isLight
                  ? 'bg-amber-100 border-amber-300 text-amber-800 font-semibold'
                  : 'bg-slate-900 border-slate-700 text-slate-200'
                  }`}
              >
                {isLight ? (
                  <Moon className="w-3.5 h-3.5 text-amber-700" />
                ) : (
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                )}
                <span>{isLight ? 'Solar Flare (Sáng)' : 'Deep Cosmos (Tối)'}</span>
              </button>
            </div>
            <div
              className={`flex items-center justify-between text-xs font-mono px-3 ${isLight ? 'text-slate-500' : 'text-slate-400'
                }`}
            >
              <span>LOCAL ORBIT: {currentTime}</span>
              <span className="text-emerald-500 font-bold">ONLINE</span>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
