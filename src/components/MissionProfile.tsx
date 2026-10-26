import React from 'react'
import { PROFILE, EDUCATION_DATA } from '../data/profile'
import { useTheme } from '../context/ThemeContext'
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
  const { isLight } = useTheme()

  return (
    <section
      id="mission-profile"
      className={`py-24 relative px-4 sm:px-6 lg:px-8 border-t ${
        isLight ? 'border-amber-500/20' : 'border-sky-500/10'
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6 ${
            isLight ? 'border-amber-200/80' : 'border-sky-500/15'
          }`}
        >
          <div>
            <div
              className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-1 ${
                isLight ? 'text-amber-600' : 'text-sky-400'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Section // 01</span>
            </div>
            <h2
              className={`text-3xl sm:text-5xl font-heading font-bold tracking-tight ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}
            >
              MISSION PROFILE
            </h2>
            <p
              className={`text-sm sm:text-base font-mono mt-1 ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              Astronaut Flight Credentials & Engineering Specialization
            </p>
          </div>
          <div
            className={`text-left md:text-right font-mono text-xs ${
              isLight ? 'text-slate-600' : 'text-slate-400'
            }`}
          >
            <div>
              STATUS: <span className="text-emerald-500 font-semibold">NOMINAL</span>
            </div>
            <div>
              COORDINATES:{' '}
              <span className={isLight ? 'text-amber-700 font-medium' : 'text-sky-300'}>
                {PROFILE.coordinates}
              </span>
            </div>
          </div>
        </div>

        {/* Grid: Mission Narrative & Core Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Statement Box */}
          <div className="lg:col-span-7 space-y-6">
            <div
              className={`p-6 sm:p-8 rounded-2xl space-y-5 transition-all ${
                isLight
                  ? 'bg-white/95 border border-amber-200/90 shadow-md shadow-amber-900/5'
                  : 'glass-panel hud-border'
              }`}
            >
              <div
                className={`flex items-center justify-between border-b pb-4 ${
                  isLight ? 'border-amber-100' : 'border-slate-800'
                }`}
              >
                <div
                  className={`text-xs font-mono flex items-center gap-2 ${
                    isLight ? 'text-amber-600 font-semibold' : 'text-sky-400'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  SUMMARY MANIFEST
                </div>
                <div
                  className={`text-xs font-mono ${
                    isLight ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  TENURE:{' '}
                  <span className={isLight ? 'text-slate-900 font-bold' : 'text-white'}>
                    {PROFILE.experienceYears}
                  </span>
                </div>
              </div>

              <blockquote
                className={`text-base sm:text-lg leading-relaxed font-normal ${
                  isLight ? 'text-slate-700' : 'text-slate-200'
                }`}
              >
                "{PROFILE.summary}"
              </blockquote>

              {/* Specialization breakdown chips */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  className={`p-3.5 rounded-xl flex items-start gap-3 transition-colors ${
                    isLight
                      ? 'bg-amber-50/70 border border-amber-200/90 text-slate-800'
                      : 'bg-slate-900/60 border border-sky-500/15'
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg border ${
                      isLight
                        ? 'bg-amber-100/90 border-amber-300 text-amber-700'
                        : 'bg-sky-950/80 border-sky-500/30 text-sky-400'
                    }`}
                  >
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3
                      className={`text-xs font-mono font-semibold uppercase ${
                        isLight ? 'text-slate-900' : 'text-white'
                      }`}
                    >
                      Real-Time UI Telemetry
                    </h3>
                    <p
                      className={`text-xs mt-0.5 ${
                        isLight ? 'text-slate-600' : 'text-slate-400'
                      }`}
                    >
                      High-frequency updates, BroadcastChannel, and virtualized macro rendering.
                    </p>
                  </div>
                </div>

                <div
                  className={`p-3.5 rounded-xl flex items-start gap-3 transition-colors ${
                    isLight
                      ? 'bg-amber-50/70 border border-amber-200/90 text-slate-800'
                      : 'bg-slate-900/60 border border-sky-500/15'
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg border ${
                      isLight
                        ? 'bg-amber-100/90 border-amber-300 text-amber-700'
                        : 'bg-sky-950/80 border-sky-500/30 text-sky-400'
                    }`}
                  >
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h3
                      className={`text-xs font-mono font-semibold uppercase ${
                        isLight ? 'text-slate-900' : 'text-white'
                      }`}
                    >
                      Micro-Frontend Architecture
                    </h3>
                    <p
                      className={`text-xs mt-0.5 ${
                        isLight ? 'text-slate-600' : 'text-slate-400'
                      }`}
                    >
                      Module Federation across enterprise identity and gaming desktop shells.
                    </p>
                  </div>
                </div>

                <div
                  className={`p-3.5 rounded-xl flex items-start gap-3 transition-colors ${
                    isLight
                      ? 'bg-amber-50/70 border border-amber-200/90 text-slate-800'
                      : 'bg-slate-900/60 border border-sky-500/15'
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg border ${
                      isLight
                        ? 'bg-amber-100/90 border-amber-300 text-amber-700'
                        : 'bg-sky-950/80 border-sky-500/30 text-sky-400'
                    }`}
                  >
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h3
                      className={`text-xs font-mono font-semibold uppercase ${
                        isLight ? 'text-slate-900' : 'text-white'
                      }`}
                    >
                      Native Hardware Bridge
                    </h3>
                    <p
                      className={`text-xs mt-0.5 ${
                        isLight ? 'text-slate-600' : 'text-slate-400'
                      }`}
                    >
                      Connecting Electron/Web with hardware middleware and C# companion drivers.
                    </p>
                  </div>
                </div>

                <div
                  className={`p-3.5 rounded-xl flex items-start gap-3 transition-colors ${
                    isLight
                      ? 'bg-amber-50/70 border border-amber-200/90 text-slate-800'
                      : 'bg-slate-900/60 border border-sky-500/15'
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg border ${
                      isLight
                        ? 'bg-amber-100/90 border-amber-300 text-amber-700'
                        : 'bg-sky-950/80 border-sky-500/30 text-sky-400'
                    }`}
                  >
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3
                      className={`text-xs font-mono font-semibold uppercase ${
                        isLight ? 'text-slate-900' : 'text-white'
                      }`}
                    >
                      Cross-Border Agility
                    </h3>
                    <p
                      className={`text-xs mt-0.5 ${
                        isLight ? 'text-slate-600' : 'text-slate-400'
                      }`}
                    >
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
            <div
              className={`p-6 rounded-2xl border space-y-4 transition-all ${
                isLight
                  ? 'bg-white/95 border-amber-200/90 shadow-md shadow-amber-900/5'
                  : 'glass-panel border-sky-500/20'
              }`}
            >
              <div
                className={`text-xs font-mono tracking-wider uppercase flex items-center justify-between border-b pb-3 ${
                  isLight ? 'border-amber-100 text-amber-700' : 'border-slate-800 text-sky-400'
                }`}
              >
                <span>FLIGHT SPECIFICATIONS</span>
                <span className="text-emerald-500 font-semibold">ACTIVE</span>
              </div>

              <dl className="space-y-3 font-mono text-xs">
                <div
                  className={`flex items-center justify-between py-1 border-b ${
                    isLight ? 'border-amber-100/70' : 'border-slate-900'
                  }`}
                >
                  <dt className={isLight ? 'text-slate-500' : 'text-slate-400'}>PILOT NAME</dt>
                  <dd className={`font-semibold ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                    {PROFILE.name}
                  </dd>
                </div>
                <div
                  className={`flex items-center justify-between py-1 border-b ${
                    isLight ? 'border-amber-100/70' : 'border-slate-900'
                  }`}
                >
                  <dt className={isLight ? 'text-slate-500' : 'text-slate-400'}>PRIMARY ROLE</dt>
                  <dd className={`font-semibold ${isLight ? 'text-amber-700' : 'text-sky-300'}`}>
                    {PROFILE.title}
                  </dd>
                </div>
                <div
                  className={`flex items-center justify-between py-1 border-b ${
                    isLight ? 'border-amber-100/70' : 'border-slate-900'
                  }`}
                >
                  <dt className={isLight ? 'text-slate-500' : 'text-slate-400'}>CURRENT BASE</dt>
                  <dd className={isLight ? 'text-slate-800' : 'text-slate-200'}>S3Corp</dd>
                </div>
                <div
                  className={`flex items-center justify-between py-1 border-b ${
                    isLight ? 'border-amber-100/70' : 'border-slate-900'
                  }`}
                >
                  <dt className={isLight ? 'text-slate-500' : 'text-slate-400'}>LOCATION</dt>
                  <dd className={isLight ? 'text-slate-800' : 'text-slate-200'}>
                    {PROFILE.location}
                  </dd>
                </div>
                <div
                  className={`flex items-center justify-between py-1 border-b ${
                    isLight ? 'border-amber-100/70' : 'border-slate-900'
                  }`}
                >
                  <dt className={isLight ? 'text-slate-500' : 'text-slate-400'}>
                    INTERNATIONAL TEAM
                  </dt>
                  <dd className={isLight ? 'text-slate-800' : 'text-slate-200'}>
                    Singapore Agile Pods
                  </dd>
                </div>
                <div className="flex items-center justify-between py-1">
                  <dt className={isLight ? 'text-slate-500' : 'text-slate-400'}>
                    WORKING LANGUAGE
                  </dt>
                  <dd className={isLight ? 'text-slate-800' : 'text-slate-200'}>
                    English (Cross-border proficiency)
                  </dd>
                </div>
              </dl>
            </div>

            {/* Education Dossier */}
            <div
              className={`p-6 rounded-2xl border space-y-3 transition-all ${
                isLight
                  ? 'bg-white/95 border-amber-200/90 shadow-md shadow-amber-900/5'
                  : 'glass-panel border-sky-500/20'
              }`}
            >
              <div
                className={`text-xs font-mono tracking-wider uppercase flex items-center gap-2 border-b pb-3 ${
                  isLight ? 'border-amber-100 text-amber-700' : 'border-slate-800 text-sky-400'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>FLIGHT ACADEMY // EDUCATION</span>
              </div>

              <div className="space-y-2">
                <div
                  className={`text-sm font-heading font-semibold ${
                    isLight ? 'text-slate-900' : 'text-white'
                  }`}
                >
                  {EDUCATION_DATA.institution}
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span
                    className={`px-2 py-0.5 rounded border ${
                      isLight
                        ? 'bg-amber-100 text-amber-800 border-amber-300'
                        : 'bg-sky-500/10 text-sky-300 border-sky-500/30'
                    }`}
                  >
                    {EDUCATION_DATA.degree}
                  </span>
                  <span className={isLight ? 'text-slate-500' : 'text-slate-400'}>
                    {EDUCATION_DATA.period}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 pt-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>Graduation Grade: {EDUCATION_DATA.grade}</span>
                </div>
                <p
                  className={`text-xs font-sans pt-1 leading-relaxed ${
                    isLight ? 'text-slate-600' : 'text-slate-400'
                  }`}
                >
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
