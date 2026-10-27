import React from 'react'
import { PROFILE, WORK_EXPERIENCE, EDUCATION_DATA } from '../data/profile'
import { sound } from '../lib/sound'
import { useTheme } from '../context/ThemeContext'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import {
  X,
  ExternalLink,
  Download,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'

interface CVDossierModalProps {
  isOpen: boolean
  onClose: () => void
}

export const CVDossierModal: React.FC<CVDossierModalProps> = ({ isOpen, onClose }) => {
  const { isLight } = useTheme()
  const [isDownloading, setIsDownloading] = React.useState(false)

  if (!isOpen) return null

  const handleDownloadPdf = async (e?: React.MouseEvent) => {
    if (e) e.preventDefault()
    sound.playSuccess()
    setIsDownloading(true)
    try {
      const response = await fetch(PROFILE.cvPdfPath)
      const blob = await response.blob()
      const pdfBlob = new Blob([blob], { type: 'application/pdf' })
      const url = window.URL.createObjectURL(pdfBlob)
      const link = document.createElement('a')
      link.style.display = 'none'
      link.href = url
      link.setAttribute('download', 'Phan_Minh_Duc_CV_Frontend_Developer.pdf')
      document.body.appendChild(link)
      link.click()
      setTimeout(() => {
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
        setIsDownloading(false)
      }, 1000)
    } catch (err) {
      console.error('Download error:', err)
      const fallbackLink = document.createElement('a')
      fallbackLink.href = PROFILE.cvPdfPath
      fallbackLink.setAttribute('download', 'Phan_Minh_Duc_CV_Frontend_Developer.pdf')
      fallbackLink.click()
      setIsDownloading(false)
    }
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 animate-fade-in overflow-y-auto ${
        isLight ? 'bg-black/40 backdrop-blur-sm' : 'bg-[#020617]/90 backdrop-blur-xl'
      }`}
    >
      <div
        className={`relative w-full max-w-4xl rounded-2xl border p-6 sm:p-10 my-8 shadow-2xl max-h-[90vh] overflow-y-auto space-y-8 transition-colors ${
          isLight
            ? 'bg-[#fdfbf7] border-amber-300 text-slate-900'
            : 'bg-slate-950 border-sky-400/40 text-slate-100'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div
          className={`flex items-center justify-between border-b pb-4 ${
            isLight ? 'border-amber-200' : 'border-slate-800'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span
              className={`font-mono text-xs uppercase font-semibold tracking-wider ${
                isLight ? 'text-amber-700' : 'text-sky-400'
              }`}
            >
              OFFICIAL CV DOSSIER // PHAN MINH DUC
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPdf}
              disabled={isDownloading}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs ${
                isLight
                  ? 'bg-amber-600 text-white hover:bg-amber-500'
                  : 'bg-sky-400 text-slate-950 hover:bg-sky-300'
              }`}
              title="Tải trực tiếp file CV PDF chính thức"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isDownloading ? 'Downloading...' : 'Download Official PDF'}</span>
            </button>
            <a
              href={PROFILE.cvPdfPath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playSuccess()}
              className={`p-1.5 rounded-lg border transition-colors flex items-center justify-center ${
                isLight
                  ? 'border-amber-200 text-slate-600 hover:text-slate-900 hover:border-amber-400'
                  : 'border-slate-800 text-slate-400 hover:text-white hover:border-sky-400'
              }`}
              title="Xem trước file PDF trên tab mới"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={() => {
                sound.playBlip(600)
                onClose()
              }}
              className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                isLight
                  ? 'border-amber-200 text-slate-600 hover:text-slate-900 hover:border-amber-400'
                  : 'border-slate-800 text-slate-400 hover:text-white hover:border-sky-400'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Header */}
        <div
          className={`text-center space-y-2 border-b pb-6 ${
            isLight ? 'border-amber-200' : 'border-slate-800'
          }`}
        >
          <h1
            className={`text-3xl sm:text-4xl font-heading font-extrabold tracking-tight ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}
          >
            {PROFILE.name}
          </h1>
          <h2
            className={`text-base sm:text-lg font-mono uppercase tracking-widest font-semibold ${
              isLight ? 'text-amber-700' : 'text-sky-400'
            }`}
          >
            {PROFILE.title}
          </h2>
          <div
            className={`flex flex-wrap items-center justify-center gap-4 text-xs font-mono pt-2 ${
              isLight ? 'text-slate-600' : 'text-slate-300'
            }`}
          >
            <span className="flex items-center gap-1">
              <Mail className={`w-3.5 h-3.5 ${isLight ? 'text-amber-600' : 'text-sky-400'}`} />
              {PROFILE.email}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Phone className={`w-3.5 h-3.5 ${isLight ? 'text-amber-600' : 'text-sky-400'}`} />
              {PROFILE.phone}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <MapPin className={`w-3.5 h-3.5 ${isLight ? 'text-amber-600' : 'text-sky-400'}`} />
              {PROFILE.location}
            </span>
          </div>
          <div
            className={`flex flex-wrap items-center justify-center gap-4 text-xs font-mono pt-1 ${
              isLight ? 'text-amber-700' : 'text-sky-400/90'
            }`}
          >
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              {PROFILE.linkedin}
            </a>
            <span>&bull;</span>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              {PROFILE.github}
            </a>
          </div>
        </div>

        {/* Summary */}
        <div className="space-y-2">
          <h3
            className={`text-xs font-mono uppercase font-bold tracking-wider ${
              isLight ? 'text-amber-700' : 'text-sky-400'
            }`}
          >
            SUMMARY
          </h3>
          <p
            className={`text-xs sm:text-sm leading-relaxed font-sans ${
              isLight ? 'text-slate-700' : 'text-slate-300'
            }`}
          >
            {PROFILE.summary}
          </p>
        </div>

        {/* Technical Skills */}
        <div className="space-y-3">
          <h3
            className={`text-xs font-mono uppercase font-bold tracking-wider ${
              isLight ? 'text-amber-700' : 'text-sky-400'
            }`}
          >
            TECHNICAL SKILLS
          </h3>
          <div
            className={`space-y-2 text-xs font-sans ${
              isLight ? 'text-slate-700' : 'text-slate-300'
            }`}
          >
            <div>
              <strong className={`font-mono ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Languages:{' '}
              </strong>
              TypeScript, JavaScript (ES6+), English (Intermediate – working proficiency in cross-border teams)
            </div>
            <div>
              <strong className={`font-mono ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Frameworks/Libraries:{' '}
              </strong>
              React.js, Next.js, Electron.js
            </div>
            <div>
              <strong className={`font-mono ${isLight ? 'text-slate-900' : 'text-white'}`}>
                State Management & Data:{' '}
              </strong>
              Redux (Redux Toolkit), Zustand, RESTful APIs, WebSocket
            </div>
            <div>
              <strong className={`font-mono ${isLight ? 'text-slate-900' : 'text-white'}`}>
                UI & Styling:{' '}
              </strong>
              Tailwind CSS, Shadcn/ui, React Bits, Material UI (MUI), Responsive & Accessible Design
            </div>
            <div>
              <strong className={`font-mono ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Architecture & Optimization:{' '}
              </strong>
              Micro-Frontend (Module Federation), High-Frequency Rendering Optimization, Code Splitting, BroadcastChannel
            </div>
            <div>
              <strong className={`font-mono ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Tools, CI/CD & Testing:{' '}
              </strong>
              Git, Docker, Jenkins (CI/CD), Postman, JMeter, Jira, Bitbucket
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="space-y-6">
          <h3
            className={`text-xs font-mono uppercase font-bold tracking-wider ${
              isLight ? 'text-amber-700' : 'text-sky-400'
            }`}
          >
            WORK EXPERIENCE
          </h3>

          <div className="space-y-6">
            {WORK_EXPERIENCE.map((exp) => (
              <div
                key={exp.id}
                className={`space-y-3 border-l-2 pl-4 ${
                  isLight ? 'border-amber-300' : 'border-slate-800'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span
                      className={`font-heading font-bold text-base ${
                        isLight ? 'text-slate-900' : 'text-white'
                      }`}
                    >
                      {exp.company}
                    </span>
                    <span className={isLight ? 'text-amber-300 mx-2' : 'text-slate-400 mx-2'}>
                      |
                    </span>
                    <span
                      className={`font-mono text-xs font-semibold ${
                        isLight ? 'text-amber-700' : 'text-sky-300'
                      }`}
                    >
                      {exp.role}
                    </span>
                  </div>
                  <span className={`text-xs font-mono ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                    {exp.period}
                  </span>
                </div>

                {exp.projects.map((proj, pIdx) => (
                  <div key={pIdx} className="space-y-2 pt-1">
                    <div
                      className={`text-xs font-mono font-semibold ${
                        isLight ? 'text-slate-800' : 'text-slate-200'
                      }`}
                    >
                      Project: {proj.name}
                    </div>
                    <ul className="space-y-1.5 pl-2">
                      {proj.bullets.map((b, bIdx) => (
                        <li
                          key={bIdx}
                          className={`text-xs flex items-start gap-2 ${
                            isLight ? 'text-slate-700' : 'text-slate-300'
                          }`}
                        >
                          <span
                            className={`mt-1 ${
                              isLight ? 'text-amber-600' : 'text-sky-400'
                            }`}
                          >
                            •
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="space-y-3">
          <h3
            className={`text-xs font-mono uppercase font-bold tracking-wider ${
              isLight ? 'text-amber-700' : 'text-sky-400'
            }`}
          >
            EDUCATION
          </h3>
          <div
            className={`border-l-2 pl-4 space-y-1 text-xs ${
              isLight ? 'border-amber-300' : 'border-slate-800'
            }`}
          >
            <div
              className={`font-heading font-bold text-sm ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}
            >
              {EDUCATION_DATA.institution} |{' '}
              <span className={`font-mono ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                {EDUCATION_DATA.period}
              </span>
            </div>
            <div className={isLight ? 'text-slate-700' : 'text-slate-300'}>
              Degree: {EDUCATION_DATA.degree}
            </div>
            <div className="text-emerald-600 font-mono font-medium">
              Graduation Grade: {EDUCATION_DATA.grade}
            </div>
          </div>
        </div>

        {/* Footer download action */}
        <div
          className={`pt-4 border-t flex flex-wrap justify-between items-center gap-3 text-xs font-mono ${
            isLight ? 'border-amber-200 text-slate-500' : 'border-slate-800 text-slate-400'
          }`}
        >
          <span>Official CV Dossier &bull; Phan Minh Duc</span>
          <button
            onClick={handleDownloadPdf}
            disabled={isDownloading}
            className={`flex items-center gap-1.5 underline cursor-pointer font-medium ${
              isLight ? 'text-amber-700 hover:text-amber-800' : 'text-sky-400 hover:text-sky-300'
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            {isDownloading ? 'Downloading PDF...' : 'Download Official CV (PDF)'}
          </button>
        </div>
      </div>
    </div>
  )
}
