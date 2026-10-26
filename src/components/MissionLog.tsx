import React, { useState } from 'react'
import { WORK_EXPERIENCE } from '../data/profile'
import type { WorkExperience } from '../data/profile'
import { sound } from '../lib/sound'
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
  const [expandedId, setExpandedId] = useState<string>('s3corp')

  const toggleExpand = (id: string) => {
    sound.playBlip(750)
    setExpandedId(expandedId === id ? '' : id)
  }

  return (
    <section id="mission-log" className="py-24 relative px-4 sm:px-6 lg:px-8 border-t border-sky-500/10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-sky-500/15 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest mb-1">
              <Layers className="w-3.5 h-3.5" />
              <span>Section // 03</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
              MISSION LOG
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-mono mt-1">
              Chronological Career Flight Logs & Enterprise Deployments
            </p>
          </div>
          <div className="font-mono text-xs text-slate-400">
            TOTAL MISSIONS: <span className="text-sky-300 font-semibold">{WORK_EXPERIENCE.length} STATIONS</span>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 space-y-10 before:content-[''] before:absolute before:top-4 before:bottom-4 before:left-[11px] sm:before:left-[19px] before:w-[2px] before:bg-gradient-to-b before:from-sky-400 before:via-sky-900 before:to-slate-800">
          {WORK_EXPERIENCE.map((mission: WorkExperience, index: number) => {
            const isExpanded = expandedId === mission.id
            const missionNum = `0${WORK_EXPERIENCE.length - index}`

            return (
              <div key={mission.id} className="relative group">
                {/* Timeline Orb Beacon */}
                <div
                  className={`absolute -left-[30px] sm:-left-[38px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    mission.isCurrent
                      ? 'border-sky-400 bg-sky-950 text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.6)]'
                      : 'border-slate-700 bg-slate-900 text-slate-400 group-hover:border-sky-500/50'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      mission.isCurrent ? 'bg-sky-400 animate-ping' : 'bg-slate-500'
                    }`}
                  />
                </div>

                {/* Mission Card */}
                <div
                  className={`glass-panel rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? 'border-sky-500/35 shadow-xl shadow-sky-950/40 bg-slate-950/80'
                      : 'border-slate-800/80 hover:border-sky-500/30'
                  }`}
                >
                  {/* Card Header (Clickable to toggle) */}
                  <div
                    onClick={() => toggleExpand(mission.id)}
                    className="p-5 sm:p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                  >
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                        <span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 font-bold border border-sky-500/25">
                          MISSION {missionNum}
                        </span>
                        {mission.isCurrent && (
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/25 flex items-center gap-1">
                            <Activity className="w-3 h-3" />
                            CURRENT STATION
                          </span>
                        )}
                        <span className="text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          {mission.period}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 pt-1">
                        <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-sky-300 transition-colors">
                          {mission.company}
                        </h3>
                        <span className="text-slate-500 hidden sm:inline">&bull;</span>
                        <span className="text-sm sm:text-base font-mono text-sky-300">
                          {mission.role}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{mission.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end md:self-center">
                      <span className="text-xs font-mono text-sky-400/80 hidden sm:inline">
                        {isExpanded ? 'COLLAPSE DOSSIER' : 'EXPAND DOSSIER'}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-lg border border-slate-800 flex items-center justify-center text-slate-400 transition-transform duration-300 ${
                          isExpanded ? 'rotate-90 text-sky-400 border-sky-400/30' : ''
                        }`}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Card Expanded Content */}
                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-800/80 space-y-6 animate-fade-in">
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                        {mission.description}
                      </p>

                      {/* Project Sub-sections */}
                      <div className="space-y-4">
                        {mission.projects.map((proj, pIdx) => (
                          <div
                            key={pIdx}
                            className="p-4 sm:p-5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-2">
                              <h4 className="text-sm sm:text-base font-heading font-bold text-white flex items-center gap-2">
                                <Terminal className="w-4 h-4 text-sky-400" />
                                {proj.name}
                              </h4>
                            </div>

                            <p className="text-xs sm:text-sm text-slate-400 font-sans">
                              {proj.overview}
                            </p>

                            <ul className="space-y-2 pt-1">
                              {proj.bullets.map((bullet, bIdx) => (
                                <li
                                  key={bIdx}
                                  className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed"
                                >
                                  <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>

                            {/* Tech Stack Pills */}
                            <div className="pt-3 flex flex-wrap items-center gap-1.5 border-t border-slate-800/60">
                              <span className="text-[10px] font-mono text-slate-500 uppercase mr-1 flex items-center gap-1">
                                <Cpu className="w-3 h-3" />
                                Payload:
                              </span>
                              {proj.stack.map((tech, tIdx) => {
                                const TechIcon = REAL_TECH_ICON_MAP[tech]
                                return (
                                  <span
                                    key={tIdx}
                                    className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono bg-sky-950/60 text-sky-300 border border-sky-500/20"
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
