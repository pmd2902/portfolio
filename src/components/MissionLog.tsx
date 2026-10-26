import React, { useState } from 'react'
import { WORK_EXPERIENCE } from '../data/profile'
import type { WorkExperience } from '../data/profile'
import { sound } from '../lib/sound'
import { useTheme } from '../context/ThemeContext'
import {
  Layers,
  MapPin,
  Calendar,
  CheckCircle,
  ChevronRight,
  Terminal,
  Activity,
  Cpu,
} from 'lucide-react'
import { REAL_TECH_ICON_MAP } from './TechIcons'

export const MissionLog: React.FC = () => {
  const { isLight } = useTheme()
  const [expandedId, setExpandedId] = useState<string>('s3corp')

  const toggleExpand = (id: string) => {
    sound.playBlip(750)
    setExpandedId(expandedId === id ? '' : id)
  }

  return (
    <section
      id="mission-log"
      className={`py-24 relative px-4 sm:px-6 lg:px-8 border-t ${
        isLight ? 'border-amber-200/80' : 'border-sky-500/10'
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6 ${
            isLight ? 'border-amber-200' : 'border-sky-500/15'
          }`}
        >
          <div>
            <div
              className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-1 ${
                isLight ? 'text-amber-700 font-bold' : 'text-sky-400'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Section // 03</span>
            </div>
            <h2
              className={`text-3xl sm:text-5xl font-heading font-bold tracking-tight ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}
            >
              MISSION LOG
            </h2>
            <p
              className={`text-sm sm:text-base font-mono mt-1 ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              Chronological Career Flight Logs & Enterprise Deployments
            </p>
          </div>
          <div className={`font-mono text-xs ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            TOTAL MISSIONS:{' '}
            <span className={`font-semibold ${isLight ? 'text-amber-700 font-bold' : 'text-sky-300'}`}>
              {WORK_EXPERIENCE.length} STATIONS
            </span>
          </div>
        </div>

        {/* Timeline Container */}
        <div
          className={`relative pl-6 sm:pl-10 space-y-10 before:content-[''] before:absolute before:top-4 before:bottom-4 before:left-[11px] sm:before:left-[19px] before:w-[2px] ${
            isLight
              ? 'before:bg-gradient-to-b before:from-amber-500 before:via-amber-300 before:to-amber-100'
              : 'before:bg-gradient-to-b before:from-sky-400 before:via-sky-900 before:to-slate-800'
          }`}
        >
          {WORK_EXPERIENCE.map((mission: WorkExperience, index: number) => {
            const isExpanded = expandedId === mission.id
            const missionNum = `0${WORK_EXPERIENCE.length - index}`

            return (
              <div key={mission.id} className="relative group">
                {/* Timeline Orb Beacon */}
                <div
                  className={`absolute -left-[30px] sm:-left-[38px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    mission.isCurrent
                      ? isLight
                        ? 'border-amber-500 bg-amber-50 text-amber-700 shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                        : 'border-sky-400 bg-sky-950 text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.6)]'
                      : isLight
                      ? 'border-amber-300 bg-white text-slate-500 group-hover:border-amber-500'
                      : 'border-slate-700 bg-slate-900 text-slate-400 group-hover:border-sky-500/50'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      mission.isCurrent
                        ? isLight
                          ? 'bg-amber-600 animate-ping'
                          : 'bg-sky-400 animate-ping'
                        : isLight
                        ? 'bg-amber-400'
                        : 'bg-slate-500'
                    }`}
                  />
                </div>

                {/* Mission Card */}
                <div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? isLight
                        ? 'border-amber-400/80 shadow-xl shadow-amber-950/10 bg-white'
                        : 'border-sky-500/35 shadow-xl shadow-sky-950/40 bg-slate-950/80 glass-panel'
                      : isLight
                      ? 'border-amber-200/90 bg-white/85 hover:border-amber-400 hover:shadow-md'
                      : 'border-slate-800/80 hover:border-sky-500/30 glass-panel'
                  }`}
                >
                  {/* Card Header (Clickable to toggle) */}
                  <div
                    onClick={() => toggleExpand(mission.id)}
                    className="p-5 sm:p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                  >
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                        <span
                          className={`px-2 py-0.5 rounded font-bold border ${
                            isLight
                              ? 'bg-amber-100 text-amber-800 border-amber-300'
                              : 'bg-sky-500/10 text-sky-400 border-sky-500/25'
                          }`}
                        >
                          MISSION {missionNum}
                        </span>
                        {mission.isCurrent && (
                          <span
                            className={`px-2 py-0.5 rounded font-semibold border flex items-center gap-1 ${
                              isLight
                                ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                                : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25'
                            }`}
                          >
                            <Activity className="w-3 h-3" />
                            CURRENT STATION
                          </span>
                        )}
                        <span className={`flex items-center gap-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                          <Calendar className={`w-3.5 h-3.5 ${isLight ? 'text-amber-600' : 'text-slate-500'}`} />
                          {mission.period}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 pt-1">
                        <h3
                          className={`text-xl sm:text-2xl font-heading font-bold transition-colors ${
                            isLight
                              ? 'text-slate-900 group-hover:text-amber-700'
                              : 'text-white group-hover:text-sky-300'
                          }`}
                        >
                          {mission.company}
                        </h3>
                        <span className={`hidden sm:inline ${isLight ? 'text-amber-400' : 'text-slate-500'}`}>
                          &bull;
                        </span>
                        <span className={`text-sm sm:text-base font-mono ${isLight ? 'text-amber-700 font-semibold' : 'text-sky-300'}`}>
                          {mission.role}
                        </span>
                      </div>

                      <div className={`flex items-center gap-2 text-xs font-mono pt-0.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                        <MapPin className={`w-3.5 h-3.5 ${isLight ? 'text-amber-600' : 'text-slate-500'}`} />
                        <span>{mission.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end md:self-center">
                      <span className={`text-xs font-mono hidden sm:inline ${isLight ? 'text-amber-700 font-bold' : 'text-sky-400/80'}`}>
                        {isExpanded ? 'COLLAPSE DOSSIER' : 'EXPAND DOSSIER'}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-transform duration-300 ${
                          isLight
                            ? isExpanded
                              ? 'rotate-90 text-amber-700 border-amber-400 bg-amber-50'
                              : 'border-amber-200 text-slate-500 bg-white'
                            : isExpanded
                            ? 'rotate-90 text-sky-400 border-sky-400/30'
                            : 'border-slate-800 text-slate-400'
                        }`}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Card Expanded Content */}
                  {isExpanded && (
                    <div
                      className={`px-5 sm:px-6 pb-6 pt-2 border-t space-y-6 animate-fade-in ${
                        isLight ? 'border-amber-200' : 'border-slate-800/80'
                      }`}
                    >
                      <p className={`text-sm sm:text-base leading-relaxed font-sans ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                        {mission.description}
                      </p>

                      {/* Project Sub-sections */}
                      <div className="space-y-4">
                        {mission.projects.map((proj, pIdx) => (
                          <div
                            key={pIdx}
                            className={`p-4 sm:p-5 rounded-xl border space-y-3 ${
                              isLight
                                ? 'bg-amber-50/70 border-amber-200/90 shadow-xs'
                                : 'bg-slate-900/70 border-slate-800'
                            }`}
                          >
                            <div
                              className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-2 ${
                                isLight ? 'border-amber-200/80' : 'border-slate-800/80'
                              }`}
                            >
                              <h4
                                className={`text-sm sm:text-base font-heading font-bold flex items-center gap-2 ${
                                  isLight ? 'text-slate-900' : 'text-white'
                                }`}
                              >
                                <Terminal className={`w-4 h-4 ${isLight ? 'text-amber-600' : 'text-sky-400'}`} />
                                {proj.name}
                              </h4>
                            </div>

                            <p className={`text-xs sm:text-sm font-sans ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                              {proj.overview}
                            </p>

                            <ul className="space-y-2 pt-1">
                              {proj.bullets.map((bullet, bIdx) => (
                                <li
                                  key={bIdx}
                                  className={`text-xs sm:text-sm flex items-start gap-2.5 leading-relaxed ${
                                    isLight ? 'text-slate-700' : 'text-slate-300'
                                  }`}
                                >
                                  <CheckCircle
                                    className={`w-4 h-4 shrink-0 mt-0.5 ${
                                      isLight ? 'text-amber-600' : 'text-sky-400'
                                    }`}
                                  />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>

                            {/* Tech Stack Pills */}
                            <div
                              className={`pt-3 flex flex-wrap items-center gap-1.5 border-t ${
                                isLight ? 'border-amber-200/60' : 'border-slate-800/60'
                              }`}
                            >
                              <span
                                className={`text-[10px] font-mono uppercase mr-1 flex items-center gap-1 ${
                                  isLight ? 'text-slate-600' : 'text-slate-500'
                                }`}
                              >
                                <Cpu className="w-3 h-3" />
                                Payload:
                              </span>
                              {proj.stack.map((tech, tIdx) => {
                                const TechIcon = REAL_TECH_ICON_MAP[tech]
                                return (
                                  <span
                                    key={tIdx}
                                    className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono border ${
                                      isLight
                                        ? 'bg-white text-slate-800 border-amber-200/90 shadow-xs'
                                        : 'bg-sky-950/60 text-sky-300 border-sky-500/20'
                                    }`}
                                  >
                                    {TechIcon && <TechIcon className="w-3.5 h-3.5 shrink-0" />}
                                    <span>{tech}</span>
                                  </span>
                                )
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
