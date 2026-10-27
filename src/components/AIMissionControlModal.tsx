import React, { useState, useRef, useEffect } from 'react'
import { askMissionControlAI } from '../lib/ai'
import type { ChatMessage } from '../lib/ai'
import { sound } from '../lib/sound'
import { useTheme } from '../context/ThemeContext'
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
  const { isLight } = useTheme()
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

  // Accessibility: Escape key dismiss & background scroll lock
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        sound.playBlip(600)
        onClose()
      }
    }
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

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
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 animate-fade-in ${
        isLight ? 'bg-black/40 backdrop-blur-sm' : 'bg-[#020617]/90 backdrop-blur-xl'
      }`}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="ai-mission-control-title"
        className={`relative w-full max-w-2xl h-[620px] max-h-[90vh] rounded-2xl border flex flex-col overflow-hidden shadow-2xl transition-all ${
          isLight
            ? 'bg-[#fdfbf7] border-amber-300 shadow-amber-900/10'
            : 'glass-panel-glow border-sky-400/40 shadow-sky-950'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className={`p-4 border-b flex items-center justify-between ${
            isLight
              ? 'bg-amber-50/80 border-amber-200'
              : 'bg-slate-950/80 border-sky-500/20'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <div
              className={`w-8 h-8 rounded-lg border flex items-center justify-center ${
                isLight
                  ? 'bg-amber-100 border-amber-300 text-amber-700'
                  : 'bg-sky-950 border-sky-400/30 text-sky-400'
              }`}
            >
              <Bot className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3
                  id="ai-mission-control-title"
                  className={`font-heading font-bold text-sm sm:text-base ${
                    isLight ? 'text-slate-900' : 'text-white'
                  }`}
                >
                  AI MISSION CONTROL
                </h3>
                <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 border border-emerald-500/25">
                  {hasApiKey ? 'LIVE GEMINI 3.8 FLASH' : 'GROUNDED CV ENGINE'}
                </span>
              </div>
              <p className={`text-[11px] font-mono ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                Trợ lý Kỹ thuật &bull; 100% Thông tin chính xác từ CV
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {/* LLM Key Setup Button */}
            <button
              onClick={() => setShowKeyConfig(!showKeyConfig)}
              title="Cấu hình Google Gemini API Key để chat tự do"
              aria-label="Cấu hình Google Gemini API Key"
              className={`min-h-[38px] px-2.5 py-1.5 rounded-lg border text-xs font-mono flex items-center gap-1 transition-colors cursor-pointer ${
                hasApiKey
                  ? 'border-emerald-500/40 bg-emerald-100/80 text-emerald-800'
                  : isLight
                  ? 'border-amber-200 bg-white text-slate-700 hover:text-amber-800 shadow-xs'
                  : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-sky-300'
              }`}
            >
              <Key className="w-3.5 h-3.5" />
              <span className="text-[10px] hidden sm:inline">{hasApiKey ? 'API Key Active' : 'API Key'}</span>
            </button>

            <button
              onClick={handleClear}
              title="Clear chat buffer"
              aria-label="Xóa nội dung đoạn chat"
              className={`min-w-[38px] min-h-[38px] p-2 rounded-lg border transition-colors flex items-center justify-center cursor-pointer ${
                isLight
                  ? 'border-amber-200 bg-white text-slate-600 hover:text-slate-900 hover:border-amber-400 shadow-xs'
                  : 'border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              <Trash2 className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                sound.playBlip(600)
                onClose()
              }}
              title="Đóng hộp thoại (Esc)"
              aria-label="Đóng hộp thoại AI Mission Control"
              className={`min-w-[38px] min-h-[38px] p-2 rounded-lg border transition-colors flex items-center justify-center cursor-pointer ${
                isLight
                  ? 'border-amber-200 bg-white text-slate-600 hover:text-slate-900 hover:border-amber-400 shadow-xs'
                  : 'border-slate-800 text-slate-400 hover:text-white hover:border-sky-400'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* API Key Drawer (Optional) */}
        {showKeyConfig && (
          <div
            className={`p-3 border-b text-xs font-mono animate-fade-in space-y-2 ${
              isLight
                ? 'bg-amber-100/70 border-amber-300 text-slate-800'
                : 'bg-sky-950/90 border-sky-400/30 text-slate-300'
            }`}
          >
            <div
              className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-[11px] ${
                isLight ? 'text-slate-700' : 'text-slate-300'
              }`}
            >
              <span>
                Nhập API Key để chat tự do (Google Gemini hoặc OpenAI):
              </span>
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noreferrer"
                className={`underline font-semibold flex items-center gap-1 ${
                  isLight ? 'text-amber-800 hover:text-amber-900' : 'text-sky-400 hover:text-sky-300'
                }`}
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
                className={`flex-1 w-full sm:w-auto px-2.5 py-1.5 rounded text-xs font-mono focus:outline-none ${
                  isLight
                    ? 'bg-white border border-amber-300 text-slate-900 placeholder:text-slate-400 focus:border-amber-500'
                    : 'bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500 focus:border-sky-400'
                }`}
              />
              <div className="flex items-center gap-1.5 w-full sm:w-auto shrink-0 justify-end">
                <button
                  type="submit"
                  className={`px-3 py-1.5 rounded font-bold transition-colors cursor-pointer text-xs ${
                    isLight
                      ? 'bg-amber-600 text-white hover:bg-amber-500 shadow-xs'
                      : 'bg-sky-400 text-slate-950 hover:bg-sky-300'
                  }`}
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
                    className="px-2.5 py-1.5 rounded bg-rose-100 text-rose-800 border border-rose-300 hover:bg-rose-200 transition-colors cursor-pointer text-xs"
                  >
                    Xóa Key (Về Offline)
                  </button>
                )}
              </div>
            </form>
            <p className={`text-[10px] ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              * Ưu tiên kích hoạt model: <strong>Gemini 3.8 Flash</strong> (Google DeepMind thế hệ mới, hỗ trợ suy luận logic nhanh). Bạn chỉ cần dán key từ Google AI Studio hoặc OpenAI.
            </p>
          </div>
        )}

        {/* Suggested Quick Prompts */}
        <div
          className={`px-4 py-2 border-b overflow-x-auto flex items-center gap-2 scrollbar-none ${
            isLight
              ? 'bg-amber-50/60 border-amber-200/80'
              : 'bg-slate-900/60 border-slate-800/80'
          }`}
        >
          <span
            className={`text-[10px] font-mono shrink-0 flex items-center gap-1 ${
              isLight ? 'text-amber-700 font-semibold' : 'text-sky-400'
            }`}
          >
            <Sparkles className="w-3 h-3" />
            GỢI Ý:
          </span>
          {samplePrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-mono border whitespace-nowrap transition-all cursor-pointer ${
                isLight
                  ? 'bg-white text-slate-700 hover:text-amber-800 hover:border-amber-400 shadow-xs border-amber-200'
                  : 'bg-slate-950/80 text-slate-300 hover:text-sky-300 hover:bg-sky-950/60 border-slate-800 hover:border-sky-500/30'
              }`}
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
                    ? isLight
                      ? 'bg-amber-600 text-white border-amber-500 shadow-xs'
                      : 'bg-sky-500 text-slate-950 border-sky-400'
                    : isLight
                    ? 'bg-amber-100 text-amber-700 border-amber-200'
                    : 'bg-slate-900 text-sky-400 border-sky-500/20'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Terminal className="w-3.5 h-3.5" />}
              </div>

              <div
                className={`max-w-[85%] rounded-xl p-3.5 text-xs sm:text-sm font-sans leading-relaxed ${
                  msg.sender === 'user'
                    ? isLight
                      ? 'bg-amber-600 text-white rounded-tr-none shadow-xs'
                      : 'bg-sky-500/20 text-slate-100 border border-sky-500/40 rounded-tr-none'
                    : isLight
                    ? 'bg-white text-slate-800 border border-amber-200/90 rounded-tl-none shadow-xs whitespace-pre-line'
                    : 'bg-slate-900/80 text-slate-200 border border-slate-800 rounded-tl-none whitespace-pre-line'
                }`}
              >
                {msg.text}
                <div
                  className={`mt-1.5 text-[9px] font-mono ${
                    msg.sender === 'user'
                      ? isLight
                        ? 'text-amber-200 text-right'
                        : 'text-sky-300/80 text-right'
                      : isLight
                      ? 'text-slate-400'
                      : 'text-slate-500'
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div
              className={`flex items-center gap-2 text-xs font-mono pl-10 ${
                isLight ? 'text-amber-700' : 'text-sky-400'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full animate-ping ${
                  isLight ? 'bg-amber-600' : 'bg-sky-400'
                }`}
              />
              <span>Đang truy xuất dữ liệu quỹ đạo...</span>
            </div>
          )}
          <div ref={chatBottomRef} />
        </div>

        {/* Input Bar */}
        <div
          className={`p-3 border-t ${
            isLight
              ? 'bg-amber-50/80 border-amber-200'
              : 'bg-slate-950/90 border-slate-800/90'
          }`}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              aria-label="Nhập câu hỏi kỹ thuật về kinh nghiệm của Đức"
              placeholder="Hỏi bất kỳ thông tin gì về kinh nghiệm, Synapse 4, kỹ năng của Đức..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className={`flex-1 px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-mono transition-colors focus:outline-none ${
                isLight
                  ? 'bg-white border-amber-200 text-slate-900 placeholder:text-slate-400 focus:border-amber-500'
                  : 'bg-slate-900 border-slate-800 text-white placeholder:text-slate-500 focus:border-sky-400'
              }`}
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-1.5 cursor-pointer ${
                isLight
                  ? 'bg-amber-600 text-white hover:bg-amber-500 shadow-xs'
                  : 'bg-sky-400 text-slate-950 hover:bg-sky-300'
              }`}
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
