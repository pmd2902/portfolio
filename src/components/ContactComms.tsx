import React, { useState } from 'react'
import { PROFILE } from '../data/profile'
import { sound } from '../lib/sound'
import { useTheme } from '../context/ThemeContext'
import confetti from 'canvas-confetti'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import {
  Send,
  Mail,
  Phone,
  Copy,
  Check,
  Radio,
  ExternalLink,
  ShieldCheck,
  Terminal,
  Sparkles,
} from 'lucide-react'

export const ContactComms: React.FC = () => {
  const { isLight } = useTheme()
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null)
  const [senderName, setSenderName] = useState('')
  const [senderEmail, setSenderEmail] = useState('')
  const [message, setMessage] = useState('')
  const [transmissionStatus, setTransmissionStatus] = useState<string | null>(null)

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text)
    sound.playSuccess()
    setCopiedType(type)
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.8 },
      colors: isLight ? ['#d97706', '#f59e0b', '#fbbf24'] : ['#38bdf8', '#60a5fa', '#ffffff'],
    })
    setTimeout(() => setCopiedType(null), 2500)
  }

  const handleDispatch = (e: React.FormEvent) => {
    e.preventDefault()
    sound.playSuccess()
    setTransmissionStatus('ENCRYPTING & TRANSMITTING VIA ORBITAL RELAY...')

    // Trigger celebratory particle effect
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 },
      colors: isLight ? ['#d97706', '#10b981', '#f59e0b'] : ['#38bdf8', '#34d399', '#ffffff'],
    })

    setTimeout(() => {
      // Open mail client with prefilled subject & body
      const subject = encodeURIComponent(`Mission Inquiry from ${senderName || 'Developer Explorer'}`)
      const body = encodeURIComponent(
        `Pilot Phan Minh Duc,\n\n${message}\n\nSender Transmission Origin:\nName: ${senderName}\nEmail: ${senderEmail}`
      )
      window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`

      setTransmissionStatus('TRANSMISSION DISPATCHED TO PMDPHAN@GMAIL.COM ✓')
      setTimeout(() => setTransmissionStatus(null), 5000)
    }, 1200)
  }

  return (
    <section
      id="comms"
      className={`py-24 relative px-4 sm:px-6 lg:px-8 border-t ${isLight ? 'border-amber-500/20' : 'border-sky-500/10'
        }`}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6 ${isLight ? 'border-amber-200/80' : 'border-sky-500/15'
            }`}
        >
          <div>
            <div
              className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-1 ${isLight ? 'text-amber-600' : 'text-sky-400'
                }`}
            >
              <Send className="w-3.5 h-3.5" />
              <span>Section // 05</span>
            </div>
            <h2
              className={`text-3xl sm:text-5xl font-heading font-bold tracking-tight ${isLight ? 'text-slate-900' : 'text-white'
                }`}
            >
              ESTABLISH CONNECTION
            </h2>
            <p
              className={`text-sm sm:text-base font-mono mt-1 ${isLight ? 'text-slate-600' : 'text-slate-400'
                }`}
            >
              Direct Orbital Comms & Secure Communication Frequency
            </p>
          </div>
          <div
            className={`font-mono text-xs ${isLight ? 'text-slate-600' : 'text-slate-400'
              }`}
          >
            COMMS RELAY: <span className="text-emerald-500 font-semibold">ONLINE (STANDBY)</span>
          </div>
        </div>

        {/* CTA Lead Banner */}
        <div
          className={`p-8 rounded-3xl text-center space-y-3 relative overflow-hidden transition-all ${isLight
              ? 'bg-white/95 border border-amber-300/80 shadow-lg shadow-amber-900/5'
              : 'glass-panel-glow border border-sky-400/30'
            }`}
        >
          <div
            className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] pointer-events-none ${isLight ? 'bg-amber-400/15' : 'bg-sky-500/10'
              }`}
          />
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono ${isLight
                ? 'bg-amber-100 text-amber-800 border border-amber-300'
                : 'bg-sky-950/80 border border-sky-400/30 text-sky-300'
              }`}
          >
            <Radio className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
            READY FOR NEXT FLIGHT
          </div>
          <h3
            className={`text-3xl sm:text-4xl font-heading font-extrabold ${isLight ? 'text-slate-900' : 'text-white'
              }`}
          >
            Let's build something extraordinary.
          </h3>
          <p
            className={`text-sm sm:text-base font-sans max-w-2xl mx-auto ${isLight ? 'text-slate-600' : 'text-slate-300'
              }`}
          >
            Whether you need a high-frequency UI architect, a cross-platform Electron engineer, or a technical lead for micro-frontends, I'm ready to collaborate.
          </p>
        </div>

        {/* Grid: Direct Transmission Channels vs Message Dispatch Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-4">
            <div
              className={`text-xs font-mono uppercase tracking-wider flex items-center gap-2 ${isLight ? 'text-slate-600' : 'text-slate-400'
                }`}
            >
              <ShieldCheck className={`w-4 h-4 ${isLight ? 'text-amber-600' : 'text-sky-400'}`} />
              VERIFIED FLIGHT COORDINATES
            </div>

            {/* Email Channel Card */}
            <div
              className={`p-5 rounded-2xl border transition-all space-y-2 ${isLight
                  ? 'bg-white/95 border-amber-200/90 shadow-sm hover:border-amber-400'
                  : 'glass-panel border-slate-800 hover:border-sky-500/40'
                }`}
            >
              <div
                className={`flex items-center justify-between text-xs font-mono ${isLight ? 'text-slate-500' : 'text-slate-400'
                  }`}
              >
                <span
                  className={`flex items-center gap-1.5 ${isLight ? 'text-amber-700 font-medium' : 'text-sky-400'
                    }`}
                >
                  <Mail className="w-4 h-4" />
                  PRIMARY TRANSMISSION (EMAIL)
                </span>
                <span className="text-emerald-500 font-semibold">ENCRYPTED</span>
              </div>
              <div className="flex items-center justify-between gap-3 pt-1">
                <a
                  href={`mailto:${PROFILE.email}`}
                  onClick={() => sound.playBlip(700)}
                  className={`text-base sm:text-lg font-mono font-semibold transition-colors truncate ${isLight
                      ? 'text-slate-900 hover:text-amber-700'
                      : 'text-white hover:text-sky-300'
                    }`}
                >
                  {PROFILE.email}
                </a>
                <button
                  onClick={() => handleCopy(PROFILE.email, 'email')}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 ${isLight
                      ? 'border-amber-300 bg-amber-100 hover:bg-amber-200 text-amber-900'
                      : 'border-slate-700 bg-slate-800 hover:bg-sky-500/20 text-slate-300 hover:text-sky-300'
                    }`}
                >
                  {copiedType === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied ✓</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Phone Channel Card */}
            <div
              className={`p-5 rounded-2xl border transition-all space-y-2 ${isLight
                  ? 'bg-white/95 border-amber-200/90 shadow-sm hover:border-amber-400'
                  : 'glass-panel border-slate-800 hover:border-sky-500/40'
                }`}
            >
              <div
                className={`flex items-center justify-between text-xs font-mono ${isLight ? 'text-slate-500' : 'text-slate-400'
                  }`}
              >
                <span
                  className={`flex items-center gap-1.5 ${isLight ? 'text-amber-700 font-medium' : 'text-sky-400'
                    }`}
                >
                  <Phone className="w-4 h-4" />
                  DIRECT VOICE / CELL
                </span>
                <span className="text-emerald-500 font-semibold">AVAILABLE</span>
              </div>
              <div className="flex items-center justify-between gap-3 pt-1">
                <a
                  href={`tel:${PROFILE.phoneRaw}`}
                  onClick={() => sound.playBlip(700)}
                  className={`text-base sm:text-lg font-mono font-semibold transition-colors ${isLight
                      ? 'text-slate-900 hover:text-amber-700'
                      : 'text-white hover:text-sky-300'
                    }`}
                >
                  {PROFILE.phone}
                </a>
                <button
                  onClick={() => handleCopy(PROFILE.phoneRaw, 'phone')}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 ${isLight
                      ? 'border-amber-300 bg-amber-100 hover:bg-amber-200 text-amber-900'
                      : 'border-slate-700 bg-slate-800 hover:bg-sky-500/20 text-slate-300 hover:text-sky-300'
                    }`}
                >
                  {copiedType === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied ✓</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Cards: GitHub & LinkedIn */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playBlip(700)}
                className={`p-4 rounded-xl border transition-all flex items-center justify-between group ${isLight
                    ? 'bg-white/95 border-amber-200/90 hover:border-amber-400 shadow-sm'
                    : 'glass-panel border-slate-800 hover:border-sky-500/40'
                  }`}
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon
                    className={`w-5 h-5 transition-colors ${isLight
                        ? 'text-slate-700 group-hover:text-amber-700'
                        : 'text-slate-300 group-hover:text-sky-400'
                      }`}
                  />
                  <div className="text-left font-mono">
                    <div
                      className={`text-xs font-semibold ${isLight ? 'text-slate-900' : 'text-white'
                        }`}
                    >
                      GitHub
                    </div>
                    <div className={`text-[10px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      @{PROFILE.githubUsername}
                    </div>
                  </div>
                </div>
                <ExternalLink
                  className={`w-4 h-4 transition-colors ${isLight
                      ? 'text-slate-400 group-hover:text-amber-700'
                      : 'text-slate-500 group-hover:text-sky-400'
                    }`}
                />
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playBlip(700)}
                className={`p-4 rounded-xl border transition-all flex items-center justify-between group ${isLight
                    ? 'bg-white/95 border-amber-200/90 hover:border-amber-400 shadow-sm'
                    : 'glass-panel border-slate-800 hover:border-sky-500/40'
                  }`}
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon
                    className={`w-5 h-5 transition-colors ${isLight
                        ? 'text-blue-600 group-hover:text-blue-700'
                        : 'text-sky-400 group-hover:text-sky-300'
                      }`}
                  />
                  <div className="text-left font-mono">
                    <div
                      className={`text-xs font-semibold ${isLight ? 'text-slate-900' : 'text-white'
                        }`}
                    >
                      LinkedIn
                    </div>
                    <div className={`text-[10px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      minh-duc-phan
                    </div>
                  </div>
                </div>
                <ExternalLink
                  className={`w-4 h-4 transition-colors ${isLight
                      ? 'text-slate-400 group-hover:text-amber-700'
                      : 'text-slate-500 group-hover:text-sky-400'
                    }`}
                />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Message Transmission Console */}
          <div className="lg:col-span-7">
            <div
              className={`p-6 sm:p-8 rounded-2xl border space-y-5 transition-all ${isLight
                  ? 'bg-white/95 border-amber-200/90 shadow-md shadow-amber-900/5'
                  : 'glass-panel border-sky-500/25'
                }`}
            >
              <div
                className={`flex items-center justify-between border-b pb-3 ${isLight ? 'border-amber-100' : 'border-slate-800'
                  }`}
              >
                <div
                  className={`text-xs font-mono uppercase flex items-center gap-2 ${isLight ? 'text-amber-700 font-medium' : 'text-sky-400'
                    }`}
                >
                  <Terminal className="w-4 h-4" />
                  DISPATCH SUB-ROUTINE
                </div>
                <div
                  className={`text-[11px] font-mono ${isLight ? 'text-slate-500' : 'text-slate-400'
                    }`}
                >
                  PROTOCOL: <span className="text-emerald-500 font-semibold">RFC-5322</span>
                </div>
              </div>

              <form onSubmit={handleDispatch} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      className={`text-xs font-mono ${isLight ? 'text-slate-700 font-medium' : 'text-slate-300'
                        }`}
                    >
                      EXPLORER / CALLSIGN
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name / Team"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm font-mono transition-colors focus:outline-none ${isLight
                          ? 'bg-amber-50/50 border-amber-200 text-slate-900 placeholder:text-slate-400 focus:border-amber-500'
                          : 'bg-slate-900/80 border-slate-800 focus:border-sky-400 text-white placeholder:text-slate-600'
                        }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      className={`text-xs font-mono ${isLight ? 'text-slate-700 font-medium' : 'text-slate-300'
                        }`}
                    >
                      RETURN FREQUENCY (EMAIL)
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@domain.com"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm font-mono transition-colors focus:outline-none ${isLight
                          ? 'bg-amber-50/50 border-amber-200 text-slate-900 placeholder:text-slate-400 focus:border-amber-500'
                          : 'bg-slate-900/80 border-slate-800 focus:border-sky-400 text-white placeholder:text-slate-600'
                        }`}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    className={`text-xs font-mono ${isLight ? 'text-slate-700 font-medium' : 'text-slate-300'
                      }`}
                  >
                    MISSION TRANSMISSION (MESSAGE)
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your project, role, or team requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm font-sans transition-colors resize-none focus:outline-none ${isLight
                        ? 'bg-amber-50/50 border-amber-200 text-slate-900 placeholder:text-slate-400 focus:border-amber-500'
                        : 'bg-slate-900/80 border-slate-800 focus:border-sky-400 text-white placeholder:text-slate-600'
                      }`}
                  />
                </div>

                {transmissionStatus && (
                  <div
                    className={`p-3 rounded-lg border text-xs font-mono animate-fade-in flex items-center gap-2 ${isLight
                        ? 'bg-amber-100/90 border-amber-300 text-amber-900'
                        : 'bg-sky-950/80 border-sky-400/40 text-sky-300'
                      }`}
                  >
                    <Sparkles className="w-4 h-4 text-emerald-500" />
                    <span>{transmissionStatus}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className={`w-full py-3.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${isLight
                      ? 'bg-amber-600 text-white hover:bg-amber-500 shadow-md shadow-amber-900/20'
                      : 'bg-sky-400 text-slate-950 hover:bg-sky-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.45)]'
                    }`}
                >
                  <Send className="w-4 h-4" />
                  TRANSMIT ORBITAL MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
