import React, { useState, useEffect } from 'react'
import { PROJECTS_DATA } from '../data/profile'
import type { ProjectMission } from '../data/profile'
import { sound } from '../lib/sound'
import { useTheme } from '../context/ThemeContext'
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
  const { isLight } = useTheme()
  const [selectedMission, setSelectedMission] = useState<ProjectMission | null>(null)

  // Accessibility: Escape key listener & background scroll lock
  useEffect(() => {
    if (!selectedMission) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        sound.playBlip(600)
        setSelectedMission(null)
      }
    }
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedMission])

  const handleOpenCaseStudy = (mission: ProjectMission) => {
    sound.playTransmission()
    setSelectedMission(mission)
  }

  const handleCloseCaseStudy = () => {
    sound.playBlip(600)
    setSelectedMission(null)
  }

  return (
    <section
      id="missions"
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
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Section // 04</span>
            </div>
            <h2
              className={`text-3xl sm:text-5xl font-heading font-bold tracking-tight ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}
            >
              DISCOVERED MISSIONS
            </h2>
            <p
              className={`text-sm sm:text-base font-mono mt-1 ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              Featured Production Architectures, Cross-Platform Desktop & Enterprise Platforms
            </p>
          </div>
          <div className={`font-mono text-xs ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            FLAGSHIP DEPLOYMENTS:{' '}
            <span className={`font-semibold ${isLight ? 'text-amber-700 font-bold' : 'text-sky-300'}`}>
              {PROJECTS_DATA.length} PROJECTS
            </span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((mission) => {
            return (
              <div
                key={mission.id}
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                aria-label={`Xem chi tiết case study dự án ${mission.name}`}
                onClick={() => handleOpenCaseStudy(mission)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleOpenCaseStudy(mission)
                  }
                }}
                className={`group rounded-2xl border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 ${
                  isLight
                    ? 'bg-white hover:bg-amber-50/20 border-amber-200/90 hover:border-amber-400 shadow-sm hover:shadow-xl hover:-translate-y-1'
                    : 'glass-panel border-sky-500/20 hover:border-sky-400/60 hover:shadow-2xl hover:shadow-sky-950/60 hover:-translate-y-1'
                }`}
              >
                <div className="space-y-4">
                  {/* Card Header with Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`font-mono text-xs px-2.5 py-1 rounded font-bold border ${
                        isLight
                          ? 'bg-amber-100 text-amber-800 border-amber-300'
                          : 'bg-sky-500/10 text-sky-400 border-sky-500/30'
                      }`}
                    >
                      {mission.code}
                    </span>
                    <span
                      className={`text-[11px] font-mono border px-2 py-0.5 rounded ${
                        isLight
                          ? 'text-slate-600 border-amber-200 bg-amber-50/60'
                          : 'text-slate-400 border-slate-800'
                      }`}
                    >
                      {mission.period}
                    </span>
                  </div>

                  <div>
                    <h3
                      className={`text-xl font-heading font-bold transition-colors ${
                        isLight
                          ? 'text-slate-900 group-hover:text-amber-700'
                          : 'text-white group-hover:text-sky-300'
                      }`}
                    >
                      {mission.name}
                    </h3>
                    <p
                      className={`text-xs font-mono mt-0.5 ${
                        isLight ? 'text-amber-700 font-semibold' : 'text-sky-300'
                      }`}
                    >
                      {mission.subtitle} &bull; {mission.company}
                    </p>
                  </div>

                  <p
                    className={`text-xs sm:text-sm font-sans line-clamp-3 leading-relaxed ${
                      isLight ? 'text-slate-600' : 'text-slate-300'
                    }`}
                  >
                    {mission.description}
                  </p>

                  {/* Telemetry Metric Highlights */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {mission.telemetry.map((t, idx) => (
                      <div
                        key={idx}
                        className={`p-2.5 rounded-lg border ${
                          isLight
                            ? 'bg-amber-50/70 border-amber-200/80 text-slate-800'
                            : 'bg-slate-900/80 border-slate-800/80'
                        }`}
                      >
                        <span
                          className={`block text-[9px] font-mono uppercase truncate ${
                            isLight ? 'text-slate-500' : 'text-slate-400'
                          }`}
                        >
                          {t.label}
                        </span>
                        <span
                          className={`text-xs font-mono font-bold truncate block mt-0.5 ${
                            isLight ? 'text-amber-700' : 'text-sky-300'
                          }`}
                        >
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
                          className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono border ${
                            isLight
                              ? 'bg-white text-slate-800 border-amber-200/90 shadow-xs'
                              : 'bg-slate-900 text-slate-300 border border-slate-800 group-hover:border-sky-500/20'
                          }`}
                        >
                          {TechIcon && <TechIcon className="w-3.5 h-3.5 shrink-0" />}
                          <span>{tech}</span>
                        </span>
                      )
                    })}
                    {mission.technologies.length > 5 && (
                      <span className={`text-[10px] font-mono ${isLight ? 'text-slate-500' : 'text-slate-500'}`}>
                        +{mission.technologies.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div
                  className={`pt-6 mt-6 border-t flex items-center justify-between ${
                    isLight ? 'border-amber-200/70' : 'border-slate-800/80'
                  }`}
                >
                  <span
                    className={`text-xs font-mono transition-colors ${
                      isLight ? 'text-slate-600' : 'text-slate-400 group-hover:text-white'
                    }`}
                  >
                    Role:{' '}
                    <span className={isLight ? 'text-amber-700 font-semibold' : 'text-sky-300'}>
                      {mission.role}
                    </span>
                  </span>
                  <div
                    className={`inline-flex items-center gap-1.5 text-xs font-mono font-semibold group-hover:translate-x-1 transition-transform ${
                      isLight ? 'text-amber-700' : 'text-sky-400'
                    }`}
                  >
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
          <div
            onClick={handleCloseCaseStudy}
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-xl animate-fade-in overflow-y-auto ${
              isLight ? 'bg-black/40 backdrop-blur-sm' : 'bg-[#020617]/90'
            }`}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="case-study-title"
              className={`relative w-full max-w-3xl rounded-2xl border p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto my-8 shadow-2xl ${
                isLight
                  ? 'bg-[#fdfbf7] text-slate-900 border-amber-300 shadow-amber-950/20'
                  : 'glass-panel-glow border-sky-400/40 shadow-sky-950 text-white'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseCaseStudy}
                title="Đóng Case Study (Esc)"
                aria-label="Đóng Case Study"
                className={`absolute top-6 right-6 min-w-[40px] min-h-[40px] p-2 rounded-lg border transition-colors flex items-center justify-center cursor-pointer ${
                  isLight
                    ? 'border-amber-200 text-slate-500 hover:text-slate-900 hover:border-amber-400 bg-white shadow-xs'
                    : 'border-slate-800 text-slate-400 hover:text-white hover:border-sky-400'
                }`}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-10">
                <div
                  className={`inline-flex items-center gap-2 px-2.5 py-1 rounded text-xs font-mono border ${
                    isLight
                      ? 'bg-amber-100 text-amber-800 border-amber-300 font-bold'
                      : 'bg-sky-950/80 border border-sky-400/30 text-sky-300'
                  }`}
                >
                  <Radio className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
                  <span>CASE STUDY DOSSIER: {selectedMission.code}</span>
                </div>
                <h3 id="case-study-title" className={`text-2xl sm:text-3xl font-heading font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  {selectedMission.name}
                </h3>
                <p className={`text-sm font-mono ${isLight ? 'text-amber-700 font-semibold' : 'text-sky-300'}`}>
                  {selectedMission.subtitle} &bull; {selectedMission.company} ({selectedMission.period})
                </p>
              </div>

              {/* Telemetry Metrics Bar */}
              <div
                className={`grid grid-cols-2 ${
                  selectedMission.telemetry.length >= 4 ? 'sm:grid-cols-4' : 'sm:grid-cols-3'
                } gap-3 p-3.5 rounded-xl border ${
                  isLight
                    ? 'bg-amber-50/70 border-amber-200/90 text-slate-800'
                    : 'bg-slate-900/80 border border-slate-800'
                }`}
              >
                {selectedMission.telemetry.map((t, i) => (
                  <div key={i} className="font-mono">
                    <span className={`text-[10px] uppercase block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      {t.label}
                    </span>
                    <span className={`text-sm font-bold ${isLight ? 'text-amber-700' : 'text-sky-300'}`}>
                      {t.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Case Study Deep Dive Breakdown */}
              <div className="space-y-6 text-sm">
                {/* Challenge */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-rose-600 flex items-center gap-2 font-bold">
                    <Shield className="w-4 h-4 text-rose-600" />
                    THE CHALLENGE
                  </h4>
                  <p
                    className={`leading-relaxed font-sans p-4 rounded-xl border ${
                      isLight
                        ? 'bg-white border-amber-200/80 text-slate-700 shadow-xs'
                        : 'text-slate-300 bg-slate-900/50 border-slate-800'
                    }`}
                  >
                    {selectedMission.caseStudy.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="space-y-2">
                  <h4 className={`text-xs font-mono uppercase tracking-wider flex items-center gap-2 font-bold ${isLight ? 'text-amber-700' : 'text-sky-400'}`}>
                    <Sparkles className="w-4 h-4" />
                    TECHNICAL ARCHITECTURE & SOLUTION
                  </h4>
                  <p
                    className={`leading-relaxed font-sans p-4 rounded-xl border ${
                      isLight
                        ? 'bg-white border-amber-200/80 text-slate-700 shadow-xs'
                        : 'text-slate-300 bg-slate-900/50 border-slate-800'
                    }`}
                  >
                    {selectedMission.caseStudy.solution}
                  </p>
                </div>

                {/* Architecture Model */}
                <div className="space-y-2">
                  <h4 className={`text-xs font-mono uppercase tracking-wider flex items-center gap-2 font-bold ${isLight ? 'text-indigo-700' : 'text-indigo-400'}`}>
                    <Cpu className="w-4 h-4" />
                    SYSTEM ARCHITECTURE
                  </h4>
                  <p
                    className={`leading-relaxed font-sans p-4 rounded-xl border ${
                      isLight
                        ? 'bg-white border-amber-200/80 text-slate-700 shadow-xs'
                        : 'text-slate-300 bg-slate-900/50 border-slate-800'
                    }`}
                  >
                    {selectedMission.caseStudy.architecture}
                  </p>
                </div>

                {/* Business & Performance Impact */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-600 flex items-center gap-2 font-bold">
                    <Activity className="w-4 h-4" />
                    VERIFIED MISSION IMPACT
                  </h4>
                  <p
                    className={`leading-relaxed font-sans p-4 rounded-xl border font-medium ${
                      isLight
                        ? 'bg-emerald-50/60 border-emerald-300 text-emerald-950'
                        : 'text-slate-200 bg-slate-900/50 border-emerald-500/20'
                    }`}
                  >
                    {selectedMission.caseStudy.impact}
                  </p>
                </div>

                {/* Key Achievements Checklist */}
                <div className="space-y-2 pt-2">
                  <h4 className={`text-xs font-mono uppercase tracking-wider flex items-center gap-2 font-bold ${isLight ? 'text-amber-700' : 'text-sky-400'}`}>
                    <CheckCircle2 className="w-4 h-4" />
                    ROLE & KEY DELIVERABLES
                  </h4>
                  <ul className="space-y-2">
                    {selectedMission.achievements.map((item, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                          isLight ? 'text-slate-700' : 'text-slate-300'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                            isLight ? 'bg-amber-600' : 'bg-sky-400'
                          }`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
