import { useState } from 'react'
import { StarfieldCanvas } from './components/StarfieldCanvas'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { MissionProfile } from './components/MissionProfile'
import { TechConstellation } from './components/TechConstellation'
import { MissionLog } from './components/MissionLog'
import { ProjectMissions } from './components/ProjectMissions'
import { CareerTimeline } from './components/CareerTimeline'
import { ContactComms } from './components/ContactComms'
import { Footer } from './components/Footer'
import { AIMissionControlModal } from './components/AIMissionControlModal'
import { CVDossierModal } from './components/CVDossierModal'
import './App.css'

function App() {
  const [isAIModalOpen, setIsAIModalOpen] = useState(false)
  const [isCvModalOpen, setIsCvModalOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-100 overflow-x-hidden selection:bg-sky-500/30 selection:text-sky-200">
      {/* Dynamic Starfield Atmosphere */}
      <StarfieldCanvas />

      {/* Persistent Navigation */}
      <Navbar
        onOpenAIModal={() => setIsAIModalOpen(true)}
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      {/* Main Mission Journey Flow */}
      <main className="relative z-10 flex flex-col">
        {/* Orbital Command Hero */}
        <HeroSection onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* Section 01: Mission Profile (About) */}
        <MissionProfile />

        {/* Section 02: Technology Constellation (Skills) */}
        <TechConstellation />

        {/* Section 03: Mission Log (Work Experience) */}
        <MissionLog />

        {/* Section 04: Discovered Missions (Projects & Case Studies) */}
        <ProjectMissions />

        {/* Career Flight Path / Trajectory */}
        <CareerTimeline />

        {/* Section 05: Establish Connection (Contact Comms) */}
        <ContactComms />
      </main>

      {/* Space Footer */}
      <Footer />

      {/* AI Mission Control Copilot Modal */}
      <AIMissionControlModal
        isOpen={isAIModalOpen}
        onClose={() => setIsAIModalOpen(false)}
      />

      {/* CV Dossier & Print/Download Modal */}
      <CVDossierModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  )
}

export default App
