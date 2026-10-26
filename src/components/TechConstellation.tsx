import React, { useState } from 'react'
import { SKILLS_DATA } from '../data/profile'
import type { SkillItem } from '../data/profile'
import { sound } from '../lib/sound'
import { REAL_TECH_ICON_MAP } from './TechIcons'
import {
  Cpu,
  Info,
  X,
  Code,
} from 'lucide-react'

export const TechConstellation: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null)

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
    <section id="constellation" className="py-24 relative px-4 sm:px-6 lg:px-8 border-t border-sky-500/10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-sky-500/15 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest mb-1">
              <Cpu className="w-3.5 h-3.5" />
              <span>Section // 02</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
              TECHNOLOGY CONSTELLATION
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-mono mt-1">
              Interactive Flight Capability Matrix & Official Technology Constellations
            </p>
          </div>
          <div className="font-mono text-xs text-slate-400">
            TOTAL CONSTELLATIONS: <span className="text-sky-300 font-semibold">{SKILLS_DATA.length} SYSTEMS</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((category) => {
            const isSelected = selectedCategory === category
            return (
              <button
                key={category}
                onClick={() => {
                  sound.playBlip(700)
                  setSelectedCategory(category)
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-sky-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(56,189,248,0.35)]'
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
                onClick={() => handleSkillClick(skill)}
                className={`relative group p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-sky-950/70 border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.3)]'
                    : 'bg-slate-900/60 hover:bg-slate-900/90 border-slate-800 hover:border-sky-500/40 hover:-translate-y-1'
                }`}
              >
                {/* Glowing Star Point in top right */}
                {skill.highlight && (
                  <div className="absolute top-3 right-3 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping opacity-75" />
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-slate-950/90 border border-slate-800/90 flex items-center justify-center p-2 group-hover:border-sky-400/50 group-hover:shadow-[0_0_18px_rgba(56,189,248,0.25)] transition-all shrink-0">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-heading font-semibold text-white group-hover:text-sky-300 transition-colors truncate">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">
                      {skill.category}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mt-3 font-sans line-clamp-2 leading-relaxed">
                  {skill.description}
                </p>

                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-sky-400/90">
                  <span>{skill.proficiency}</span>
                  <span className="text-slate-500 group-hover:text-sky-400 transition-colors text-[10px]">
                    INSPECT →
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Selected Skill Detail Inspector Drawer */}
        {activeSkill && (
          <div className="glass-panel-glow p-6 rounded-2xl border border-sky-400/40 space-y-4 animate-fade-in relative">
            <button
              onClick={() => setActiveSkill(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:border-sky-500/40 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-sky-400/40 flex items-center justify-center p-3 shadow-lg shadow-sky-950/50">
                {React.createElement(REAL_TECH_ICON_MAP[activeSkill.name] || Code, {
                  className: 'w-8 h-8',
                })}
              </div>
              <div>
                <div className="text-xs font-mono text-sky-400 uppercase flex items-center gap-2">
                  <Info className="w-3.5 h-3.5" />
                  <span>CONSTELLATION NODE TELEMETRY</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                  {activeSkill.name}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-200 leading-relaxed font-sans max-w-3xl">
              {activeSkill.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase">Domain Category</span>
                <span className="text-sky-300 font-semibold">{activeSkill.category}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase">Application Depth</span>
                <span className="text-emerald-400 font-semibold">{activeSkill.proficiency}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase">Production Verification</span>
                <span className="text-slate-200 font-semibold">Active in CV Missions</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
