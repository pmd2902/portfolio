import React, { useState } from 'react'
import { SKILLS_DATA } from '../data/profile'
import type { SkillItem } from '../data/profile'
import { sound } from '../lib/sound'
import { useTheme } from '../context/ThemeContext'
import { REAL_TECH_ICON_MAP } from './TechIcons'
import {
  Cpu,
  Info,
  X,
  Code,
} from 'lucide-react'

export const TechConstellation: React.FC = () => {
  const { isLight } = useTheme()
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null)

  // Accessibility: Escape key dismiss for active skill detail
  React.useEffect(() => {
    if (!activeSkill) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        sound.playBlip(600)
        setActiveSkill(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeSkill])

  const categories = [
    'All',
    'Languages',
    'Frameworks',
    'State & Data',
    'Architecture',
    'UI & Styling',
    'Tools & DevOps',
  ]

  const filteredSkills =
    selectedCategory === 'All'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === selectedCategory)

  const handleSkillClick = (skill: SkillItem) => {
    sound.playBlip(920)
    setActiveSkill(skill)
  }

  return (
    <section
      id="constellation"
      className={`py-24 relative px-4 sm:px-6 lg:px-8 border-t ${
        isLight ? 'border-amber-200/80' : 'border-sky-500/10'
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
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
              <Cpu className="w-3.5 h-3.5" />
              <span>Section // 02</span>
            </div>
            <h2
              className={`text-3xl sm:text-5xl font-heading font-bold tracking-tight ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}
            >
              TECHNOLOGY CONSTELLATION
            </h2>
            <p
              className={`text-sm sm:text-base font-mono mt-1 ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              Interactive Flight Capability Matrix & Official Technology Constellations
            </p>
          </div>
          <div className={`font-mono text-xs ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            TOTAL CONSTELLATIONS:{' '}
            <span className={`font-semibold ${isLight ? 'text-amber-700 font-bold' : 'text-sky-300'}`}>
              {SKILLS_DATA.length} SYSTEMS
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Bộ lọc nhóm công nghệ">
          {categories.map((category) => {
            const isSelected = selectedCategory === category
            return (
              <button
                key={category}
                aria-pressed={isSelected}
                onClick={() => {
                  sound.playBlip(700)
                  setSelectedCategory(category)
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  isSelected
                    ? isLight
                      ? 'bg-amber-600 text-white font-bold shadow-md shadow-amber-600/30'
                      : 'bg-sky-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(56,189,248,0.35)]'
                    : isLight
                    ? 'bg-white text-slate-700 border border-amber-200/90 hover:border-amber-400 hover:text-amber-900 hover:bg-amber-50 shadow-xs'
                    : 'bg-slate-900/70 text-slate-300 border border-slate-800 hover:border-sky-500/30 hover:text-white'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        {/* Skills Constellation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => {
            const IconComponent = REAL_TECH_ICON_MAP[skill.name] || Code
            const isSelected = activeSkill?.name === skill.name

            return (
              <div
                key={skill.name}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                aria-label={`Xem chi tiết công nghệ ${skill.name}`}
                onClick={() => handleSkillClick(skill)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleSkillClick(skill)
                  }
                }}
                className={`relative group p-4 rounded-xl border transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 ${
                  isSelected
                    ? isLight
                      ? 'bg-amber-50/80 border-amber-500 shadow-md shadow-amber-500/20'
                      : 'bg-sky-950/70 border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.3)]'
                    : isLight
                    ? 'bg-white hover:bg-amber-50/30 border-amber-200/90 hover:border-amber-400 shadow-xs hover:shadow-md hover:-translate-y-1'
                    : 'bg-slate-900/60 hover:bg-slate-900/90 border-slate-800 hover:border-sky-500/40 hover:-translate-y-1'
                }`}
              >
                {/* Glowing Star Point in top right */}
                {skill.highlight && (
                  <div className="absolute top-3 right-3 flex items-center gap-1">
                    <span
                      className={`w-1.5 h-1.5 rounded-full animate-ping opacity-75 ${
                        isLight ? 'bg-amber-500' : 'bg-sky-400'
                      }`}
                    />
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isLight ? 'bg-amber-500' : 'bg-sky-400'
                      }`}
                    />
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-xl border flex items-center justify-center p-2 transition-all shrink-0 ${
                      isLight
                        ? 'bg-amber-50 border-amber-200/90 group-hover:border-amber-400 group-hover:shadow-[0_0_12px_rgba(245,158,11,0.25)]'
                        : 'bg-slate-950/90 border-slate-800/90 group-hover:border-sky-400/50 group-hover:shadow-[0_0_18px_rgba(56,189,248,0.25)]'
                    }`}
                  >
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <div className="min-w-0">
                    <h3
                      className={`text-sm font-heading font-semibold transition-colors truncate ${
                        isLight
                          ? 'text-slate-900 group-hover:text-amber-700'
                          : 'text-white group-hover:text-sky-300'
                      }`}
                    >
                      {skill.name}
                    </h3>
                    <span
                      className={`text-[10px] font-mono uppercase block ${
                        isLight ? 'text-slate-500' : 'text-slate-400'
                      }`}
                    >
                      {skill.category}
                    </span>
                  </div>
                </div>

                <p
                  className={`text-xs mt-3 font-sans line-clamp-2 leading-relaxed ${
                    isLight ? 'text-slate-600' : 'text-slate-400'
                  }`}
                >
                  {skill.description}
                </p>

                <div
                  className={`mt-3 pt-2 border-t flex items-center justify-between text-[11px] font-mono ${
                    isLight ? 'border-amber-100 text-amber-700' : 'border-slate-800/80 text-sky-400/90'
                  }`}
                >
                  <span>{skill.proficiency}</span>
                  <span
                    className={`transition-colors text-[10px] ${
                      isLight
                        ? 'text-slate-500 group-hover:text-amber-700'
                        : 'text-slate-500 group-hover:text-sky-400'
                    }`}
                  >
                    INSPECT &rarr;
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Selected Skill Detail Inspector Drawer */}
        {activeSkill && (
          <div
            className={`p-6 rounded-2xl border space-y-4 animate-fade-in relative ${
              isLight
                ? 'bg-white border-amber-300 shadow-xl shadow-amber-950/10'
                : 'glass-panel-glow border-sky-400/40'
            }`}
          >
            <button
              onClick={() => {
                sound.playBlip(600)
                setActiveSkill(null)
              }}
              title="Đóng thông tin chi tiết (Esc)"
              aria-label="Đóng thông tin chi tiết công nghệ"
              className={`absolute top-5 right-5 min-w-[38px] min-h-[38px] p-2 rounded-lg border transition-colors flex items-center justify-center cursor-pointer ${
                isLight
                  ? 'border-amber-200 text-slate-500 hover:text-slate-900 hover:border-amber-400 bg-white shadow-xs'
                  : 'border-slate-800 text-slate-400 hover:text-white hover:border-sky-500/40'
              }`}
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-4">
              <div
                className={`w-14 h-14 rounded-2xl border flex items-center justify-center p-3 shadow-lg ${
                  isLight
                    ? 'bg-amber-50 border-amber-300 text-amber-700 shadow-amber-950/10'
                    : 'bg-slate-950 border-sky-400/40 shadow-sky-950/50'
                }`}
              >
                {React.createElement(REAL_TECH_ICON_MAP[activeSkill.name] || Code, {
                  className: 'w-8 h-8',
                })}
              </div>
              <div>
                <div
                  className={`text-xs font-mono uppercase flex items-center gap-2 ${
                    isLight ? 'text-amber-700 font-bold' : 'text-sky-400'
                  }`}
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>CONSTELLATION NODE TELEMETRY</span>
                </div>
                <h3
                  className={`text-xl sm:text-2xl font-heading font-bold ${
                    isLight ? 'text-slate-900' : 'text-white'
                  }`}
                >
                  {activeSkill.name}
                </h3>
              </div>
            </div>

            <p
              className={`text-sm leading-relaxed font-sans max-w-3xl ${
                isLight ? 'text-slate-700' : 'text-slate-200'
              }`}
            >
              {activeSkill.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
              <div
                className={`p-3 rounded-lg border ${
                  isLight ? 'bg-amber-50/70 border-amber-200/80 text-slate-800' : 'bg-slate-900/80 border-slate-800'
                }`}
              >
                <span className={`block text-[10px] uppercase ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Domain Category
                </span>
                <span className={`font-semibold ${isLight ? 'text-amber-700' : 'text-sky-300'}`}>
                  {activeSkill.category}
                </span>
              </div>
              <div
                className={`p-3 rounded-lg border ${
                  isLight ? 'bg-amber-50/70 border-amber-200/80 text-slate-800' : 'bg-slate-900/80 border-slate-800'
                }`}
              >
                <span className={`block text-[10px] uppercase ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Application Depth
                </span>
                <span className={`font-semibold ${isLight ? 'text-emerald-600' : 'text-emerald-400'}`}>
                  {activeSkill.proficiency}
                </span>
              </div>
              <div
                className={`p-3 rounded-lg border ${
                  isLight ? 'bg-amber-50/70 border-amber-200/80 text-slate-800' : 'bg-slate-900/80 border-slate-800'
                }`}
              >
                <span className={`block text-[10px] uppercase ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Production Verification
                </span>
                <span className={`font-semibold ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>
                  Active in CV Missions
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
