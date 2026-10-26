import React, { useState } from 'react'
import { PROJECTS_DATA } from '../data/profile'
import type { ProjectMission } from '../data/profile'
import { sound } from '../lib/sound'
import {
  FolderGit2,
  Cpu,
  ArrowRight,
  Shield,
  Activity,
  CheckCircle2,
  X,
  Radio,
  Sparkles,
} from 'lucide-react'
import { REAL_TECH_ICON_MAP } from './TechIcons'

export const ProjectMissions: React.FC = () => {
  const [selectedMission, setSelectedMission] = useState<ProjectMission | null>(null)

  const handleOpenCaseStudy = (mission: ProjectMission) => {
    sound.playTransmission()
    setSelectedMission(mission)
  }

  const handleCloseCaseStudy = () => {
    sound.playBlip(600)
    setSelectedMission(null)
  }

  return (
    <section id="missions" className="py-24 relative px-4 sm:px-6 lg:px-8 border-t border-sky-500/10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-sky-500/15 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest mb-1">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Section // 04</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
              MISSIONS / PROJECTS
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-mono mt-1">
              Deep-Space Engineering Deployments & Case Studies
            </p>
          </div>
          <div className="font-mono text-xs text-slate-400">
            DISCOVERED MISSIONS: <span className="text-sky-300 font-semibold">{PROJECTS_DATA.length} FLIGHTS</span>
          </div>
        </div>

        {/* Missions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS_DATA.map((mission: ProjectMission) => {
            return (
              <div
                key={mission.id}
                onClick={() => handleOpenCaseStudy(mission)}
                className="group relative glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800/90 hover:border-sky-400/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
              >
                {/* Top Mission Code & Badge */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                    <span className="text-xs font-mono text-sky-400 tracking-wider">
                      [{mission.code}]
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-sky-950 text-sky-300 border border-sky-500/30">
                      {mission.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-sky-300 transition-colors">
                      {mission.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-slate-400 mt-1">
                      {mission.subtitle} &bull; <span className="text-sky-400/90">{mission.company}</span>
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed font-sans line-clamp-3">
                    {mission.description}
                  </p>

                  {/* Telemetry Highlights */}
                  <div className="grid grid-cols-3 gap-2 py-2">
                    {mission.telemetry.map((t, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80"
                      >
                        <span className="block text-[9px] font-mono text-slate-400 uppercase truncate">
                          {t.label}
                        </span>
                        <span className="text-xs font-mono font-bold text-sky-300 truncate block mt-0.5">
                          {t.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {mission.technologies.slice(0, 5).map((tech, tIdx) => {
                      const TechIcon = REAL_TECH_ICON_MAP[tech]
                      return (
                        <span
                          key={tIdx}
                          className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800 group-hover:border-sky-500/20"
                        >
                          {TechIcon && <TechIcon className="w-3.5 h-3.5 shrink-0" />}
                          <span>{tech}</span>
                        </span>
                      )
                    })}
                    {mission.technologies.length > 5 && (
                      <span className="text-[10px] font-mono text-slate-500">
                        +{mission.technologies.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 group-hover:text-white transition-colors">
                    Role: <span className="text-sky-300">{mission.role}</span>
                  </span>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 font-semibold group-hover:translate-x-1 transition-transform">
                    <span>Inspect Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Detailed Case Study Modal */}
        {selectedMission && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#020617]/90 backdrop-blur-xl animate-fade-in overflow-y-auto">
            <div
              className="relative w-full max-w-3xl glass-panel-glow rounded-2xl border border-sky-400/40 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto my-8 shadow-2xl shadow-sky-950"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseCaseStudy}
                className="absolute top-6 right-6 p-2 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:border-sky-400 transition-colors cursor-pointer"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-10">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-sky-950/80 border border-sky-400/30 text-xs font-mono text-sky-300">
                  <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  <span>CASE STUDY DOSSIER: {selectedMission.code}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  {selectedMission.name}
                </h3>
                <p className="text-sm font-mono text-sky-300">
                  {selectedMission.subtitle} &bull; {selectedMission.company} ({selectedMission.period})
                </p>
              </div>

              {/* Telemetry Metrics Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                {selectedMission.telemetry.map((t, i) => (
                  <div key={i} className="font-mono">
                    <span className="text-[10px] text-slate-400 uppercase block">{t.label}</span>
                    <span className="text-sm font-bold text-sky-300">{t.value}</span>
                  </div>
                ))}
              </div>

              {/* Case Study Deep Dive Breakdown */}
              <div className="space-y-6 text-sm">
                {/* Challenge */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-rose-400 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-rose-400" />
                    THE CHALLENGE
                  </h4>
                  <p className="text-slate-300 leading-relaxed font-sans bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                    {selectedMission.caseStudy.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-sky-400" />
                    TECHNICAL ARCHITECTURE & SOLUTION
                  </h4>
                  <p className="text-slate-300 leading-relaxed font-sans bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                    {selectedMission.caseStudy.solution}
                  </p>
                </div>

                {/* Architecture Model */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-indigo-400" />
                    SYSTEM ARCHITECTURE
                  </h4>
                  <p className="text-slate-300 leading-relaxed font-sans bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                    {selectedMission.caseStudy.architecture}
                  </p>
                </div>

                {/* Business & Performance Impact */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-emerald-400" />
                    VERIFIED MISSION IMPACT
                  </h4>
                  <p className="text-slate-200 leading-relaxed font-sans bg-slate-900/50 p-4 rounded-xl border border-emerald-500/20 font-medium">
                    {selectedMission.caseStudy.impact}
                  </p>
                </div>

                {/* Key Achievements Checklist */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    ROLE & KEY DELIVERABLES
                  </h4>
                  <ul className="space-y-2">
                    {selectedMission.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-slate-300 text-xs sm:text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono text-slate-400 uppercase">Deployed Technologies:</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedMission.technologies.map((t, idx) => {
                      const TechIcon = REAL_TECH_ICON_MAP[t]
                      return (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-sky-950/80 text-sky-300 border border-sky-500/30"
                        >
                          {TechIcon && <TechIcon className="w-4 h-4 shrink-0" />}
                          <span>{t}</span>
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Close Footer CTA */}
              <div className="pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={handleCloseCaseStudy}
                  className="px-5 py-2.5 rounded-lg text-xs font-mono font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
                >
                  Close Dossier
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
