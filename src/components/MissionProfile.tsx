import React from 'react'
import { PROFILE, EDUCATION_DATA } from '../data/profile'
import {
  Compass,
  GraduationCap,
  Award,
  Globe2,
  Cpu,
  Layers,
  Sparkles,
  Zap,
} from 'lucide-react'

export const MissionProfile: React.FC = () => {
  return (
    <section id="mission-profile" className="py-24 relative px-4 sm:px-6 lg:px-8 border-t border-sky-500/10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-sky-500/15 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest mb-1">
              <Compass className="w-3.5 h-3.5" />
              <span>Section // 01</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
              MISSION PROFILE
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-mono mt-1">
              Astronaut Flight Credentials & Engineering Specialization
            </p>
          </div>
          <div className="text-left md:text-right font-mono text-xs text-slate-400">
            <div>STATUS: <span className="text-emerald-400 font-semibold">NOMINAL</span></div>
            <div>COORDINATES: <span className="text-sky-300">{PROFILE.coordinates}</span></div>
          </div>
        </div>

        {/* Grid: Mission Narrative & Core Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Statement Box */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl hud-border space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="text-xs font-mono text-sky-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-sky-400" />
                  SUMMARY MANIFEST
                </div>
                <div className="text-xs font-mono text-slate-400">
                  TENURE: <span className="text-white">{PROFILE.experienceYears}</span>
                </div>
              </div>

              <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                "{PROFILE.summary}"
              </blockquote>

              {/* Specialization breakdown chips */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-sky-500/15 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-sky-950/80 border border-sky-500/30 text-sky-400">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono font-semibold text-white uppercase">Real-Time UI Telemetry</h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      High-frequency updates, BroadcastChannel, and virtualized macro rendering.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-sky-500/15 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-sky-950/80 border border-sky-500/30 text-sky-400">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono font-semibold text-white uppercase">Micro-Frontend Architecture</h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Module Federation across enterprise identity and gaming desktop shells.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-sky-500/15 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-sky-950/80 border border-sky-500/30 text-sky-400">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono font-semibold text-white uppercase">Native Hardware Bridge</h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Connecting Electron/Web with hardware middleware and C# companion drivers.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-sky-500/15 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-sky-950/80 border border-sky-500/30 text-sky-400">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono font-semibold text-white uppercase">Cross-Border Agility</h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Direct collaboration with Singapore engineering teams and Jenkins CI/CD.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission Parameters & Education Dossier */}
          <div className="lg:col-span-5 space-y-6">
            {/* Flight Specs Card */}
            <div className="glass-panel p-6 rounded-2xl border border-sky-500/20 space-y-4">
              <div className="text-xs font-mono text-sky-400 tracking-wider uppercase flex items-center justify-between border-b border-slate-800 pb-3">
                <span>FLIGHT SPECIFICATIONS</span>
                <span className="text-emerald-400">ACTIVE</span>
              </div>

              <dl className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between py-1 border-b border-slate-900">
                  <dt className="text-slate-400">PILOT NAME</dt>
                  <dd className="text-slate-100 font-semibold">{PROFILE.name}</dd>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-900">
                  <dt className="text-slate-400">PRIMARY ROLE</dt>
                  <dd className="text-sky-300 font-semibold">{PROFILE.title}</dd>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-900">
                  <dt className="text-slate-400">CURRENT BASE</dt>
                  <dd className="text-slate-200">S3Corp</dd>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-900">
                  <dt className="text-slate-400">LOCATION</dt>
                  <dd className="text-slate-200">{PROFILE.location}</dd>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-900">
                  <dt className="text-slate-400">INTERNATIONAL TEAM</dt>
                  <dd className="text-slate-200">Singapore Agile Pods</dd>
                </div>
                <div className="flex items-center justify-between py-1">
                  <dt className="text-slate-400">WORKING LANGUAGE</dt>
                  <dd className="text-slate-200">English (Cross-border proficiency)</dd>
                </div>
              </dl>
            </div>

            {/* Education Dossier */}
            <div className="glass-panel p-6 rounded-2xl border border-sky-500/20 space-y-3">
              <div className="text-xs font-mono text-sky-400 tracking-wider uppercase flex items-center gap-2 border-b border-slate-800 pb-3">
                <GraduationCap className="w-4 h-4 text-sky-400" />
                <span>FLIGHT ACADEMY // EDUCATION</span>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-heading font-semibold text-white">
                  {EDUCATION_DATA.institution}
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/30">
                    {EDUCATION_DATA.degree}
                  </span>
                  <span className="text-slate-400">{EDUCATION_DATA.period}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 pt-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>Graduation Grade: {EDUCATION_DATA.grade}</span>
                </div>
                <p className="text-xs text-slate-400 font-sans pt-1">
                  Foundations in Information Technology, modular software engineering, computer systems, and architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
