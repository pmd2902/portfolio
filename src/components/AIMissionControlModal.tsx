import React, { useState, useRef, useEffect } from 'react'
import { askMissionControlAI } from '../lib/ai'
import type { ChatMessage } from '../lib/ai'
import { sound } from '../lib/sound'
import {
  Bot,
  Send,
  X,
  Sparkles,
  Terminal,
  User,
  Trash2,
  Key,
} from 'lucide-react'

interface AIMissionControlModalProps {
  isOpen: boolean
  onClose: () => void
}

export const AIMissionControlModal: React.FC<AIMissionControlModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      sender: 'assistant',
      text:
        'Xin chào! Tôi là Trợ lý AI Mission Control của Phan Minh Đức.\n' +
        'Tôi có toàn bộ dữ liệu CV và dự án của Đức (Synapse 4, CIC, Edocsign, Smartlog, Tech stack, v.v.).\n' +
        'Bạn có thể hỏi bất kỳ thông tin nào bằng Tiếng Việt hoặc Tiếng Anh!',
      timestamp: 'NOW',
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showKeyConfig, setShowKeyConfig] = useState(false)
  const [apiKeyInput, setApiKeyInput] = useState('')
  const [hasApiKey, setHasApiKey] = useState(false)
  const [keySavedToast, setKeySavedToast] = useState(false)
  const chatBottomRef = useRef<HTMLDivElement | null>(null)

  const samplePrompts = [
    'Đức có vai trò gì trong Synapse 4?',
    'Làm thế nào để giảm 15% UI lag?',
    'Dự án Căn cước công dân (CIC) làm những gì?',
    'Dự án Edocsign giảm 30% bundle load ra sao?',
    'Kỹ năng công nghệ chính của Đức?',
    'Thông tin liên hệ & phỏng vấn Đức?',
    'Tell me about his Electron experience',
  ]

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedKey = localStorage.getItem('orbital_gemini_api_key')
      if (savedKey) {
        setHasApiKey(true)
        setApiKeyInput(savedKey)
      }
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen])

  if (!isOpen) return null

  const handleSaveApiKey = (e: React.FormEvent) => {
    e.preventDefault()
    if (apiKeyInput.trim()) {
      localStorage.setItem('orbital_gemini_api_key', apiKeyInput.trim())
      setHasApiKey(true)
    } else {
      localStorage.removeItem('orbital_gemini_api_key')
      setHasApiKey(false)
    }
    sound.playSuccess()
    setKeySavedToast(true)
    setTimeout(() => {
      setKeySavedToast(false)
      setShowKeyConfig(false)
    }, 1500)
  }

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || input
    if (!textToSend.trim() || isTyping) return

    sound.playTransmission()
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }

    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    // Simulate orbital AI telemetry processing
    setTimeout(async () => {
      const answer = await askMissionControlAI(textToSend)
      sound.playBlip(1050)
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
      setMessages((prev) => [...prev, aiMsg])
      setIsTyping(false)
    }, 400)
  }

  const handleClear = () => {
    sound.playBlip(600)
    setMessages([
      {
        id: 'init-cleared',
        sender: 'assistant',
        text: 'Hộp thoại đã được dọn sạch. Mời bạn đặt câu hỏi tiếp theo!',
        timestamp: 'NOW',
      },
    ])
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#020617]/90 backdrop-blur-xl animate-fade-in">
      <div
        className="relative w-full max-w-2xl h-[620px] max-h-[90vh] glass-panel-glow rounded-2xl border border-sky-400/40 flex flex-col overflow-hidden shadow-2xl shadow-sky-950"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b border-sky-500/20 bg-slate-950/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-950 border border-sky-400/30 flex items-center justify-center text-sky-400">
              <Bot className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-bold text-white text-sm sm:text-base">
                  AI MISSION CONTROL
                </h3>
                <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                  {hasApiKey ? 'LIVE GEMINI 3.8 FLASH' : 'GROUNDED CV ENGINE'}
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-400">
                Trợ lý Kỹ thuật &bull; 100% Thông tin chính xác từ CV
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {/* LLM Key Setup Button */}
            <button
              onClick={() => setShowKeyConfig(!showKeyConfig)}
              title="Cấu hình Google Gemini API Key để chat tự do"
              className={`p-1.5 rounded-lg border text-xs font-mono flex items-center gap-1 transition-colors ${
                hasApiKey
                  ? 'border-emerald-500/40 bg-emerald-950/40 text-emerald-300'
                  : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-sky-300'
              }`}
            >
              <Key className="w-3.5 h-3.5" />
              <span className="text-[10px] hidden sm:inline">{hasApiKey ? 'API Key Active' : 'API Key'}</span>
            </button>

            <button
              onClick={handleClear}
              title="Clear chat buffer"
              className="p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                sound.playBlip(600)
                onClose()
              }}
              title="Close modal"
              className="p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:border-sky-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* API Key Drawer (Optional) */}
        {showKeyConfig && (
          <div className="p-3 bg-sky-950/90 border-b border-sky-400/30 text-xs font-mono animate-fade-in space-y-2">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-[11px] text-slate-300">
              <span>
                Nhập API Key để chat tự do (Google Gemini hoặc OpenAI):
              </span>
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noreferrer"
                className="text-sky-400 hover:text-sky-300 underline font-semibold flex items-center gap-1"
              >
                Lấy Key miễn phí tại Google AI Studio &rarr;
              </a>
            </div>

            <form onSubmit={handleSaveApiKey} className="flex flex-col sm:flex-row items-center gap-2">
              <input
                type="password"
                placeholder="Dán AIzaSy... hoặc sk-... (để trống để dùng Offline Engine)"
                value={apiKeyInput}
                onChange={(e) => setApiKeyInput(e.target.value)}
                className="flex-1 w-full sm:w-auto px-2.5 py-1.5 rounded bg-slate-900 border border-slate-700 text-white text-xs font-mono focus:border-sky-400 focus:outline-none placeholder:text-slate-500"
              />
              <div className="flex items-center gap-1.5 w-full sm:w-auto shrink-0 justify-end">
                <button
                  type="submit"
                  className="px-3 py-1.5 rounded bg-sky-400 text-slate-950 font-bold hover:bg-sky-300 transition-colors cursor-pointer text-xs"
                >
                  {keySavedToast ? 'Đã lưu ✓' : 'Lưu Key'}
                </button>
                {hasApiKey && (
                  <button
                    type="button"
                    onClick={() => {
                      localStorage.removeItem('orbital_gemini_api_key')
                      setApiKeyInput('')
                      setHasApiKey(false)
                      sound.playBlip(500)
                    }}
                    className="px-2.5 py-1.5 rounded bg-rose-950/60 text-rose-300 border border-rose-800/60 hover:bg-rose-900/60 transition-colors cursor-pointer text-xs"
                  >
                    Xóa Key (Về Offline)
                  </button>
                )}
              </div>
            </form>
            <p className="text-[10px] text-slate-400">
              * Ưu tiên kích hoạt model: <strong>Gemini 3.8 Flash</strong> (Google DeepMind thế hệ mới, hỗ trợ suy luận logic nhanh). Bạn chỉ cần dán key từ Google AI Studio hoặc OpenAI.
            </p>
          </div>
        )}

        {/* Suggested Quick Prompts */}
        <div className="px-4 py-2 bg-slate-900/60 border-b border-slate-800/80 overflow-x-auto flex items-center gap-2 scrollbar-none">
          <span className="text-[10px] font-mono text-sky-400 shrink-0 flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            GỢI Ý:
          </span>
          {samplePrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-950/80 text-slate-300 hover:text-sky-300 hover:bg-sky-950/60 border border-slate-800 hover:border-sky-500/30 whitespace-nowrap transition-all cursor-pointer"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Chat History Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${
                msg.sender === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`w-7 h-7 rounded-lg shrink-0 flex items-center justify-center text-xs font-mono border ${
                  msg.sender === 'user'
                    ? 'bg-sky-500 text-slate-950 border-sky-400'
                    : 'bg-slate-900 text-sky-400 border-sky-500/20'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Terminal className="w-3.5 h-3.5" />}
              </div>

              <div
                className={`max-w-[85%] rounded-xl p-3.5 text-xs sm:text-sm font-sans leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-sky-500/20 text-slate-100 border border-sky-500/40 rounded-tr-none'
                    : 'bg-slate-900/80 text-slate-200 border border-slate-800 rounded-tl-none whitespace-pre-line'
                }`}
              >
                {msg.text}
                <div
                  className={`mt-1.5 text-[9px] font-mono ${
                    msg.sender === 'user' ? 'text-sky-300/80 text-right' : 'text-slate-500'
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400 pl-10">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              <span>Đang truy xuất dữ liệu quỹ đạo...</span>
            </div>
          )}
          <div ref={chatBottomRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-slate-950/90 border-t border-slate-800/90">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Hỏi bất kỳ thông tin gì về kinh nghiệm, Synapse 4, kỹ năng của Đức..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-sky-400 focus:outline-none text-xs sm:text-sm text-white font-mono placeholder:text-slate-500 transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="px-4 py-2.5 rounded-xl font-mono text-xs font-semibold bg-sky-400 text-slate-950 hover:bg-sky-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">GỬI</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
