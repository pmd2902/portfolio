import React from 'react'
import { sound } from '../lib/sound'
import {
  Rocket,
  GraduationCap,
  Code2,
  Bug,
  KeyRound,
  Gamepad2,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

export const CareerTimeline: React.FC = () => {
  const steps = [
    {
      year: '2018 – 2022',
      stage: 'FLIGHT ACADEMY',
      title: 'Engineer’s Degree in IT',
      org: 'HCM City University of Natural Resources & Env',
      desc: 'Graduated with Good degree. Formed core CS fundamentals, algorithms, system architecture.',
      icon: GraduationCap,
      badge: 'FOUNDATION',
    },
    {
      year: '05/2021 – 08/2021',
      stage: 'FIRST EXPEDITION',
      title: 'Frontend Intern',
      org: 'LOFIVN Company',
      desc: 'Responsive web portal engineering, cross-browser compatibility, UI consistency & SEO.',
      icon: Code2,
      badge: 'INTERNSHIP',
    },
    {
      year: '06/2022 – 09/2022',
      stage: 'SYSTEM HARDENING',
      title: 'Web Manual Tester',
      org: 'SMARTLOG',
      desc: 'API testing with Postman, JMeter load & stress testing. Built QA mindset for defect-free architecture.',
      icon: Bug,
      badge: 'QA & RELIABILITY',
    },
    {
      year: '10/2022 – 01/2025',
      stage: 'ENTERPRISE ORBIT',
      title: 'Frontend Developer',
      org: 'VTC Smarttech',
      desc: 'CIC identity platform with Micro-Frontend & WebSockets; Edocsign with ~30% bundle load reduction; C# hardware bridge client.',
      icon: KeyRound,
      badge: 'IDENTITY & SAAS',
    },
    {
      year: '02/2025 – PRESENT',
      stage: 'FLAGSHIP MISSION',
      title: 'Frontend Developer & Macro Lead',
      org: 'S3Corp (Synapse 4)',
      desc: 'Macro Module Frontend Lead for Razer Synapse 4 desktop app. BroadcastChannel hardware bridge, ~15% UI lag reduction, Singapore agile teams.',
      icon: Gamepad2,
      badge: 'CURRENT FLIGHT',
      highlight: true,
    },
    {
      year: 'FUTURE',
      stage: 'NEXT HORIZON',
      title: 'Senior Frontend Architect',
      org: 'Global Innovation & Real-Time Ecosystems',
      desc: 'Scaling high-concurrency real-time client systems, WebGL/Wasm, and high-impact distributed teams.',
      icon: Rocket,
      badge: 'DESTINATION',
      isFuture: true,
    },
  ]

  return (
    <section className="py-20 relative px-4 sm:px-6 lg:px-8 border-t border-sky-500/10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-sky-500/15 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest mb-1">
              <Rocket className="w-3.5 h-3.5" />
              <span>Trajectory // Flight Path</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
              CAREER TRAJECTORY
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-mono mt-1">
              Visual Progression From Academy to Flagship Desktop Lead
            </p>
          </div>
          <div className="font-mono text-xs text-slate-400">
            TRAJECTORY: <span className="text-emerald-400 font-semibold">ASCENDING</span>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={idx}
                onMouseEnter={() => sound.playBlip(950)}
                className={`glass-panel p-6 rounded-2xl border transition-all duration-300 relative group flex flex-col justify-between ${
                  step.highlight
                    ? 'border-sky-400/50 bg-sky-950/40 shadow-[0_0_25px_rgba(56,189,248,0.2)]'
                    : step.isFuture
                    ? 'border-dashed border-sky-500/30 bg-slate-900/30'
                    : 'border-slate-800 hover:border-sky-500/30'
                }`}
              >
                {/* Step Stage & Year */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      {step.stage}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                        step.highlight
                          ? 'bg-sky-400 text-slate-950'
                          : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {step.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                        step.highlight
                          ? 'bg-sky-400 text-slate-950 border-sky-300'
                          : 'bg-slate-900 text-sky-400 border-slate-800'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-400">{step.year}</div>
                      <h3 className="text-base font-heading font-bold text-white group-hover:text-sky-300 transition-colors">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <div className="text-xs font-mono text-sky-400/90 font-medium">
                    {step.org}
                  </div>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed pt-1">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>STAGE 0{idx + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-sky-400 opacity-60 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
