import { PROFILE, EDUCATION_DATA } from '../data/profile'

export interface ChatMessage {
  id: string
  sender: 'user' | 'assistant' | 'system'
  text: string
  timestamp: string
}

// Complete CV context prompt for real LLM integration (Gemini / OpenAI)
export const CV_SYSTEM_PROMPT = `
You are the Orbital AI Copilot for Phan Minh Duc's developer portfolio.
Your role is to answer questions from recruiters, engineering leads, and visitors strictly based on Phan Minh Duc's verified CV and portfolio data.

RULES:
1. Answer in the same language as the user's question (Vietnamese if asked in Vietnamese, English if asked in English).
2. ONLY use the verified facts below. DO NOT invent or hallucinate any experience, companies, metrics, or degrees.
3. If asked to roleplay as Duc in an interview, do so with senior technical maturity, humility, and engineering precision.
4. Keep answers focused, insightful, and formatted nicely with bullet points.

=== CANDIDATE DOSSIER: PHAN MINH DUC ===
- Full Name: ${PROFILE.name}
- Current Title: ${PROFILE.title} (Middle Front-End Developer)
- Experience Tenure: ${PROFILE.experienceYears} (Nearly 4 years of industry experience)
- Location: ${PROFILE.location}
- Email: ${PROFILE.email}
- Phone: ${PROFILE.phone}
- LinkedIn: ${PROFILE.linkedin}
- GitHub: ${PROFILE.github}
- Summary: ${PROFILE.summary}

=== TECHNICAL ARSENAL ===
- Languages: TypeScript, JavaScript (ES6+), English (Intermediate - working proficiency in cross-border Singapore teams)
- Frameworks & Libraries: React.js, Next.js, Electron.js
- State Management & Data: Redux (Redux Toolkit), Zustand, RESTful APIs, WebSocket, BroadcastChannel
- UI & Styling: Tailwind CSS, Shadcn/ui, React Bits, Material UI (MUI), Responsive & Accessible Design
- Architecture & Optimization: Micro-Frontend (Module Federation), High-Frequency Rendering Optimization, Code Splitting & Lazy Loading, Hardware IPC
- Tools, CI/CD & Testing: Git, Bitbucket, Docker, Jenkins (CI/CD), Postman, JMeter, Jira (Agile/Scrum)

=== WORK MISSIONS ===
1. S3Corp (02/2025 – Present) | Frontend Developer & Macro Module Lead
   - Project: Synapse 4 (Cross-platform gaming peripheral desktop app for Razer hardware)
   - Tech: Electron, React.js, TypeScript, Micro-Frontend, BroadcastChannel, Jenkins, Jira
   - Highlights: Lead for Macro Module (sequence editing, key-binding). Implemented real-time bidirectional BroadcastChannel between hardware middleware and UI. Reduced UI lag & memory overhead by ~15% via React memoization, virtualized rendering, and event throttling. Collaborated daily with Singapore teams.

2. VTC Smarttech (10/2022 – 01/2025) | Frontend Developer
   - Project A: Citizen Identity Card (CIC) Authentication Platform
     Tech: React.js, TypeScript, Redux, Micro-Frontend (Module Federation), WebSockets, C# .NET Core (WinForms), REST APIs.
     Highlights: Streamed smart-card scanning and biometric verification to operator dashboards via WebSockets. Built standalone C# companion client bridging physical USB chip card readers to web app.
   - Project B: Edocsign (Digital Signature & Contract Management Platform)
     Tech: React.js, Tailwind CSS, Shadcn/ui, Zustand, Redux, Code Splitting.
     Highlights: Interactive PDF preview, drag-and-drop signature placement, multi-step approvals. Reduced initial bundle load time by ~30% via route code splitting, lazy loading, and Zustand.

3. SMARTLOG (06/2022 – 09/2022) | Web Manual Tester
   - Logistics platform QA, automated/manual API testing with Postman, load & stress testing with JMeter to spot bottlenecks before deployment.

4. LOFIVN company (05/2021 – 08/2021) | Frontend Intern
   - Responsive WordPress websites, cross-browser compatibility, SEO-friendly structure.

=== EDUCATION ===
- University: ${EDUCATION_DATA.institution} (2018 – 2022)
- Degree: ${EDUCATION_DATA.degree}
- Grade: ${EDUCATION_DATA.grade}
`

// Offline Smart Bilingual Knowledge Matcher
interface KnowledgeItem {
  id: string
  intents: string[]
  answerVi: string
  answerEn: string
}

const BILINGUAL_KNOWLEDGE_BASE: KnowledgeItem[] = [
  {
    id: 'intro',
    intents: [
      'ai', 'who', 'duc', 'phan minh duc', 'gioi thieu', 'la ai', 'ban than', 'tong quan',
      'background', 'about', 'profile', 'chuc danh', 'vi tri', 'kinh nghiem', 'years', 'nam kinh nghiem'
    ],
    answerVi:
      'Phan Minh Đức là Middle Front-End Developer với gần 4 năm kinh nghiệm thực chiến trong xây dựng ứng dụng web quy mô lớn và ứng dụng desktop đa nền tảng (Cross-platform).\n\n' +
      '• Thế mạnh cốt lõi: Kiến trúc UI thời gian thực (Real-time), tối ưu hiển thị dữ liệu phần cứng tần suất cao, Micro-Frontends (Module Federation), và cầu nối giữa giao diện Web với dịch vụ phần cứng/desktop.\n' +
      '• Hiện tại: Đang làm việc tại S3Corp, đảm nhận vai trò Frontend Lead cho Macro Module trong dự án Synapse 4, làm việc trực tiếp với đội ngũ kỹ sư tại Singapore.',
    answerEn:
      'Phan Minh Duc is a Middle Front-End Developer with nearly 4 years of industry experience building scalable web and cross-platform desktop applications.\n\n' +
      '• Core Specialization: Real-time UI architecture, high-frequency hardware data rendering, Micro-Frontends (Module Federation), and bridging frontend interfaces with native hardware middleware.\n' +
      '• Current Mission: Working at S3Corp as Frontend Lead for the Macro Module in Razer Synapse 4, collaborating closely with international engineering teams in Singapore.',
  },
  {
    id: 's3corp',
    intents: [
      's3corp', 'synapse', 'synapse 4', 'razer', 'macro', 'gaming', 'desktop', 'electron', 'hien tai', 'dang lam'
    ],
    answerVi:
      'Tại S3Corp (02/2025 – Hiện tại), Đức tham gia dự án Synapse 4 (Ứng dụng desktop điều khiển thiết bị gaming ngoại vi đa nền tảng):\n\n' +
      '1. Frontend Lead cho Macro Module: Thiết kế kỹ thuật end-to-end và phát triển tính năng ghi macro phức tạp, chỉnh sửa chuỗi hành động và gán phím thiết bị.\n' +
      '2. Kiến trúc: Electron, React.js, TypeScript, Micro-Frontend.\n' +
      '3. Cầu nối phần cứng: Dùng BroadcastChannel truyền thông hai chiều thời gian thực giữa middleware phần cứng và UI.\n' +
      '4. Tối ưu hiệu năng: Giảm ~15% UI lag và tiêu hao RAM nhờ React memoization, virtualized rendering và event throttling khi nhận luồng dữ liệu phần cứng tần suất cao.\n' +
      '5. Làm việc cùng team quốc tế tại Singapore và theo dõi pipeline Jenkins CI/CD.',
    answerEn:
      'At S3Corp (02/2025 – Present), Duc engineers Synapse 4 (Cross-platform gaming peripheral desktop application):\n\n' +
      '1. Frontend Lead for Macro Module: Spearheaded end-to-end technical design and delivery for macro recording, sequence editing, and key-binding.\n' +
      '2. Architecture: Electron, React.js, TypeScript, Micro-Frontend.\n' +
      '3. Hardware Link: Real-time bidirectional communication via BroadcastChannel between middleware and UI.\n' +
      '4. Performance Optimization: Reduced UI lag and memory overhead by ~15% using React memoization, virtualized rendering, and event throttling.\n' +
      '5. Collaboration: Daily Agile sprints with international teams in Singapore and Jenkins CI/CD pipeline monitoring.',
  },
  {
    id: 'performance_lag',
    intents: [
      '15%', 'lag', 'giam lag', 'toi uu', 'optimize', 'optimization', 'rendering', 'render', 'memory', 'ram', 'tiet kiem'
    ],
    answerVi:
      'Đức đã tối ưu giảm ~15% UI lag và memory overhead trong Synapse 4 như thế nào?\n\n' +
      '• Thách thức: Luồng dữ liệu phần cứng đổ về với tần suất cực cao (device telemetry, hiệu ứng đèn RGB, profile macro) gây nghẽn render loop của React.\n' +
      '• Giải pháp kỹ thuật:\n' +
      '  1. Event Throttling: Giới hạn tần suất xử lý sự kiện telemetry phần cứng gửi lên UI.\n' +
      '  2. React Memoization: Cô lập vùng component re-render, tránh re-render lan truyền không cần thiết.\n' +
      '  3. Virtualized Rendering: Chỉ render các phần tử macro đang hiển thị trên khung nhìn, xử lý mượt mà danh sách chuỗi phím cực dài.',
    answerEn:
      'How Duc achieved the ~15% reduction in UI lag and memory overhead on Synapse 4:\n\n' +
      '• Challenge: High-frequency telemetry updates (RGB lighting, DPI polling, macro triggers) overwhelmed the React render loop.\n' +
      '• Technical Solutions:\n' +
      '  1. Event Throttling on incoming hardware streams.\n' +
      '  2. Strategic React memoization to isolate component re-renders.\n' +
      '  3. Virtualized rendering for long macro sequences, rendering only visible viewport nodes.',
  },
  {
    id: 'vtc_cic',
    intents: [
      'vtc', 'cic', 'can cuoc', 'can cuoc cong dan', 'identity', 'the chip', 'smart-card', 'c#', 'winforms', 'biometric', 'sinh trac hoc'
    ],
    answerVi:
      'Tại VTC Smarttech (10/2022 – 01/2025), dự án Nền tảng xác thực Căn cước công dân (CIC Platform):\n\n' +
      '• Vai trò: Frontend Developer thiết kế kiến trúc UI với React.js, TypeScript, Redux và Micro-Frontend (Module Federation).\n' +
      '• Truyền dữ liệu thời gian thực: Tích hợp WebSocket và RESTful API để stream trực tiếp kết quả quét thẻ chip và dữ liệu xác thực sinh trắc học lên dashboard nhân viên.\n' +
      '• Cầu nối phần cứng đặc biệt: Tự tay xây dựng một ứng dụng desktop companion client bằng C# (.NET Core, WinForms) để đọc dữ liệu từ đầu đọc thẻ chip vật lý qua cổng USB rồi truyền an toàn vào web app.',
    answerEn:
      'At VTC Smarttech (10/2022 – 01/2025), Citizen Identity Card (CIC) Authentication Platform:\n\n' +
      '• Role: Architected modular frontend workflows using React.js, TypeScript, Redux, and Micro-Frontend (Module Federation).\n' +
      '• Real-Time Streaming: Integrated WebSockets & REST APIs to stream live smart-card scan and biometric verification results.\n' +
      '• Native Hardware Bridge: Engineered a standalone desktop client in C# (.NET Core, WinForms) to read physical USB card readers and securely stream hardware data to the web operator dashboard.',
  },
  {
    id: 'edocsign',
    intents: [
      'edocsign', 'ky so', 'chu ky', 'hop dong', 'contract', 'pdf', '30%', 'bundle', 'code splitting', 'zustand'
    ],
    answerVi:
      'Dự án Edocsign (Nền tảng quản lý hợp đồng & ký số điện tử) tại VTC Smarttech:\n\n' +
      '• Tính năng nổi bật: Xem trước PDF tương tác, kéo-thả vị trí chữ ký số chính xác theo tọa độ, và quy trình phê duyệt hợp đồng đa cấp.\n' +
      '• Công nghệ: React.js, Tailwind CSS, Shadcn/ui, Zustand, Redux.\n' +
      '• Thành tích tối ưu: Giảm ~30% thời gian tải bundle ban đầu nhờ Route-based Code Splitting, Lazy Loading và thay thế state cồng kềnh bằng Zustand.',
    answerEn:
      'Edocsign (Digital Signature & Contract Management Platform) at VTC Smarttech:\n\n' +
      '• Key Features: Interactive PDF preview, drag-and-drop signature placement, and multi-step contract approval workflows.\n' +
      '• Tech Stack: React.js, Tailwind CSS, Shadcn/ui, Zustand, Redux.\n' +
      '• Performance Achievement: Reduced initial bundle load time by ~30% via route-based code splitting, lazy loading, and lightweight Zustand stores.',
  },
  {
    id: 'smartlog',
    intents: ['smartlog', 'tester', 'test', 'kiem thu', 'jmeter', 'postman', 'qa', 'logistics'],
    answerVi:
      'Tại SMARTLOG (06/2022 – 09/2022) - Web Manual Tester:\n\n' +
      '• Thiết kế và thực thi test plan, test case cho hệ thống logistics phức tạp.\n' +
      '• Kiểm thử API tự động/thủ công bằng Postman và kiểm thử tải/stress testing bằng JMeter để phát hiện sớm các điểm nghẽn hiệu năng.\n' +
      '• Phối hợp trực tiếp với Dev để tái hiện các bug biên (edge-case defects), hình thành tư duy chú trọng chất lượng và độ ổn định cao trong suốt sự nghiệp lập trình sau này.',
    answerEn:
      'At SMARTLOG (06/2022 – 09/2022) - Web Manual Tester:\n\n' +
      '• Designed and executed comprehensive test plans covering complex logistics business logic.\n' +
      '• Performed API validation with Postman and load/stress testing with JMeter to detect bottlenecks.\n' +
      '• Established a rigorous quality-assurance mindset that guides his frontend architecture today.',
  },
  {
    id: 'lofivn',
    intents: ['lofivn', 'intern', 'thuc tap', 'wordpress'],
    answerVi:
      'Tại LOFIVN (05/2021 – 08/2021) - Frontend Intern:\n\n' +
      '• Xây dựng và tùy biến website WordPress chuẩn responsive, đảm bảo hiển thị tương thích đa trình duyệt (cross-browser compatibility) và cấu trúc chuẩn SEO.',
    answerEn:
      'At LOFIVN (05/2021 – 08/2021) - Frontend Intern:\n\n' +
      '• Built and customized responsive WordPress websites ensuring cross-browser compatibility, UI consistency, and SEO-friendly structure.',
  },
  {
    id: 'education',
    intents: ['dai hoc', 'truong', 'bang', 'tot nghiep', 'education', 'degree', 'university', 'hoc van', 'grade', 'tai nguyen'],
    answerVi:
      'Học vấn của Phan Minh Đức:\n\n' +
      '• Trường: Đại học Tài nguyên và Môi trường TP.HCM (2018 – 2022).\n' +
      '• Văn bằng: Bằng Kỹ sư Công nghệ Thông tin (Engineer’s Degree in Information Technology).\n' +
      '• Xếp loại tốt nghiệp: Khá (Good).',
    answerEn:
      'Educational Credentials:\n\n' +
      '• Institution: Ho Chi Minh City University of Natural Resources and Environment (2018 – 2022).\n' +
      '• Degree: Engineer’s Degree in Information Technology.\n' +
      '• Graduation Grade: Good.',
  },
  {
    id: 'skills',
    intents: ['skill', 'ky nang', 'tech', 'cong nghe', 'stack', 'ngon ngu', 'language', 'framework', 'tool', 'react', 'typescript'],
    answerVi:
      'Kho kỹ thuật của Phan Minh Đức:\n\n' +
      '• Ngôn ngữ: TypeScript, JavaScript (ES6+), Tiếng Anh (Giao tiếp tốt với team quốc tế).\n' +
      '• Frameworks: React.js, Next.js, Electron.js.\n' +
      '• Quản lý State & Dữ liệu: Redux Toolkit, Zustand, RESTful APIs, WebSocket, BroadcastChannel.\n' +
      '• Giao diện & Styling: Tailwind CSS, Shadcn/ui, React Bits, Material UI (MUI), Responsive & Accessibility.\n' +
      '• Kiến trúc: Micro-Frontend (Module Federation), Tối ưu hoá High-Frequency Rendering, Code Splitting.\n' +
      '• CI/CD & Công cụ: Git, Docker, Jenkins (CI/CD), Postman, JMeter, Jira (Agile/Scrum), Bitbucket.',
    answerEn:
      'Technical Arsenal:\n\n' +
      '• Languages: TypeScript, JavaScript (ES6+), English (Working proficiency in international teams).\n' +
      '• Frameworks: React.js, Next.js, Electron.js.\n' +
      '• State & Data: Redux Toolkit, Zustand, RESTful APIs, WebSocket, BroadcastChannel.\n' +
      '• UI & Styling: Tailwind CSS, Shadcn/ui, React Bits, Material UI (MUI), Responsive Design.\n' +
      '• Architecture: Micro-Frontends (Module Federation), High-Frequency Rendering Optimization, Code Splitting.\n' +
      '• Tools & DevOps: Git, Docker, Jenkins (CI/CD), Postman, JMeter, Jira, Bitbucket.',
  },
  {
    id: 'english',
    intents: ['english', 'tieng anh', 'ngoai ngu', 'singapore', 'giao tiep'],
    answerVi:
      'Trình độ Tiếng Anh của Đức:\n\n' +
      '• Đạt mức Intermediate – Working Proficiency.\n' +
      '• Hiện đang làm việc hàng ngày trong các buổi sprint Agile với đội ngũ Product và Kỹ sư quốc tế tại Singapore (dự án Synapse 4).',
    answerEn:
      'English Proficiency:\n\n' +
      '• Intermediate – Working proficiency.\n' +
      '• Daily technical collaboration and Agile sprint coordination with international engineering and product teams in Singapore for Synapse 4.',
  },
  {
    id: 'contact',
    intents: ['lien he', 'contact', 'email', 'phone', 'sdt', 'so dien thoai', 'linkedin', 'github', 'dia chi', 'o dau', 'tuyen dung', 'hire'],
    answerVi:
      'Thông tin liên hệ trực tiếp của Phan Minh Đức:\n\n' +
      '• Email: pmdphan@gmail.com\n' +
      '• Số điện thoại: +84 933 770 783\n' +
      '• LinkedIn: https://www.linkedin.com/in/minh-duc-phan-11a556332/\n' +
      '• GitHub: https://github.com/pmd2902\n' +
      '• Địa điểm: TP. Hồ Chí Minh, Việt Nam (Sẵn sàng cho các cơ hội On-site, Hybrid hoặc Remote quốc tế).',
    answerEn:
      'Direct Contact Coordinates:\n\n' +
      '• Email: pmdphan@gmail.com\n' +
      '• Phone: +84 933 770 783\n' +
      '• LinkedIn: https://www.linkedin.com/in/minh-duc-phan-11a556332/\n' +
      '• GitHub: https://github.com/pmd2902\n' +
      '• Location: Ho Chi Minh City, Vietnam (Available for On-site, Hybrid, or Global Remote roles).',
  },
]

// Cache detected working model to avoid repeated discovery requests
let cachedWorkingModel: string | null = null

// Query processing function
export async function askMissionControlAI(query: string): Promise<string> {
  const normalizedQuery = query.toLowerCase().trim()

  if (!normalizedQuery) {
    return 'Tín hiệu trống. Vui lòng nhập câu hỏi về kỹ năng, kinh nghiệm hoặc dự án của Đức.\nTransmission empty. Please input an inquiry regarding Duc’s flight credentials.'
  }

  // 1. Check for real LLM API Key (Google Gemini or OpenAI)
  const rawKey =
    (typeof window !== 'undefined' && localStorage.getItem('orbital_gemini_api_key')) ||
    import.meta.env.VITE_GEMINI_API_KEY ||
    ''
  const apiKey = rawKey.trim().replace(/^["']|["']$/g, '')

  if (apiKey) {
    // A. If user provided an OpenAI API Key (starts with sk-)
    if (apiKey.startsWith('sk-')) {
      try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + apiKey,
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [
              { role: 'system', content: CV_SYSTEM_PROMPT },
              { role: 'user', content: query },
            ],
            temperature: 0.3,
            max_tokens: 800,
          }),
        })

        if (response.ok) {
          const data = await response.json()
          const reply = data.choices?.[0]?.message?.content
          if (reply) return reply
        } else {
          const errData = await response.json().catch(() => ({}))
          return '[Loi OpenAI API ' + response.status + ']: ' + (errData?.error?.message || response.statusText) + '. Vui long kiem tra lai API Key.'
        }
      } catch (err) {
        return '[Loi ket noi OpenAI]: ' + (err as Error).message + '. Vui long thu lai.'
      }
    }

    // B. Google Gemini API: Auto-discovery + Resilient Endpoints
    // Try to auto-discover authorized models from this key if not yet cached
    const candidateEndpoints: { apiVersion: string; model: string }[] = []

    if (cachedWorkingModel) {
      candidateEndpoints.push({ apiVersion: 'v1beta', model: cachedWorkingModel })
      candidateEndpoints.push({ apiVersion: 'v1', model: cachedWorkingModel })
    }

    // Default prioritized model identifiers across Google Generative AI (Prioritizing Gemini 3.8 Flash)
    const fallbackModels = [
      'gemini-3.8-flash',
      'gemini-3.7-flash',
      'gemini-2.5-flash',
      'gemini-2.0-flash',
      'gemini-1.5-flash',
      'gemini-1.5-pro',
      'gemini-2.0-flash-exp',
      'gemini-2.0-flash-exp',
    ]


    for (const m of fallbackModels) {
      candidateEndpoints.push({ apiVersion: 'v1beta', model: m })
    }

    let lastErrorMessage = ''
    

    // First attempt: Discover models directly from the user's key if not cached
    if (!cachedWorkingModel) {
      try {
        const listUrl = 'https://generativelanguage.googleapis.com/v1beta/models?key=' + encodeURIComponent(apiKey)
        const listRes = await fetch(listUrl, {
          headers: { 'x-goog-api-key': apiKey },
        })
        if (listRes.ok) {
          const listData = await listRes.json()
          const modelsList: Array<{ name: string; supportedGenerationMethods?: string[] }> = listData.models || []
          const validModels = modelsList
            .filter((item) => item.supportedGenerationMethods && item.supportedGenerationMethods.indexOf('generateContent') !== -1)
            .map((item) => item.name.replace(/^models\//, ''))

          if (validModels.length > 0) {
            const chosenModel =
              validModels.find((m) => m === 'gemini-2.0-flash') ||
              validModels.find((m) => m === 'gemini-1.5-flash') ||
              validModels.find((m) => m.indexOf('flash') !== -1) ||
              validModels[0]

            cachedWorkingModel = chosenModel
            candidateEndpoints.unshift(
              { apiVersion: 'v1beta', model: chosenModel }
            )
          }
        }
      } catch {
        // Continue to direct endpoint attempts
      }
    }

    // Execute generateContent call
    for (let i = 0; i < candidateEndpoints.length; i++) {
      const ep = candidateEndpoints[i]
      try {
        const callUrl = 'https://generativelanguage.googleapis.com/' + ep.apiVersion + '/models/' + ep.model + ':generateContent?key=' + encodeURIComponent(apiKey)
        const isGemini3 = ep.model.includes('3.')
        const requestBody: Record<string, unknown> = {
          contents: [
            {
              parts: [
                {
                  text: `${CV_SYSTEM_PROMPT}\n\n[USER INQUIRY / INTERVIEW QUESTION]:\n${query}`,
                },
              ],
            },
          ],
          generationConfig: isGemini3
            ? {
              thinkingConfig: {
                thinkingLevel: 'low',
              },
              maxOutputTokens: 1000,
            }
            : {
              temperature: 0.3,
              maxOutputTokens: 800,
            },
        }

        const response = await fetch(callUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': apiKey,
          },
          body: JSON.stringify(requestBody),
        })

        if (response.ok) {
          const data = await response.json()
          const reply = data.candidates?.[0]?.content?.parts?.[0]?.text
          if (reply) {
            cachedWorkingModel = ep.model
            return reply
          }
        } else {
          const errJson = await response.json().catch(() => null)
          lastErrorMessage = errJson?.error?.message || `HTTP ${response.status} (${response.statusText})`
          // If 404 (model not found on this endpoint), continue to next candidate
          if (response.status === 404) {
            continue
          } else {
            // For other errors (e.g. 400 Bad Request / 403 Forbidden), break
            break
          }
        }
      } catch (err) {
        lastErrorMessage = (err as Error).message
        break
      }
    }

    // Return detailed, helpful diagnosis
    const is404 = lastErrorMessage.includes('404') || lastErrorMessage.toLowerCase().includes('not found')

    if (is404) {
      return (
        '[Lỗi Google Gemini 404 Not Found]: Model không tìm thấy hoặc API Key chưa được cấp quyền Generative Language API.\n\n' +
        'Nguyên nhân chính:\n' +
        '1. API Key của bạn đang được tạo từ Google Cloud thông thường thay vì Google AI Studio, hoặc dự án Google Cloud chưa bật thư viện "Generative Language API".\n' +
        '2. Cách khắc phục nhanh nhất (100% thành công):\n' +
        '   👉 Truy cập https://aistudio.google.com/app/apikey\n' +
        '   👉 Đăng nhập tài khoản Google và bấm "Create API key" (Miễn phí).\n' +
        '   👉 Dán key mới vào ô cấu hình API Key trên giao diện.\n' +
        '3. Bạn cũng có thể dùng OpenAI API Key (bắt đầu bằng "sk-...") hoặc xóa key để dùng bộ máy Offline đã được nạp toàn bộ CV của Đức!'
      )
    }

    return (
      '[Lỗi Google Gemini API]: ' + lastErrorMessage + '\n\n' +
      'Gợi ý giải quyết:\n' +
      '1. Hãy kiểm tra API key của bạn đã được tạo tại Google AI Studio: https://aistudio.google.com/app/apikey (chọn Get API key).\n' +
      '2. Nếu gặp lỗi "User location is not supported", do Google hạn chế IP khu vực, bạn hãy thử bật VPN sang Singapore hoặc US.\n' +
      '3. Bạn cũng có thể dùng trực tiếp OpenAI API Key (bắt đầu bằng "sk-...") để chat!'
    )
  }

  // 2. Custom backend proxy endpoint if configured
  const apiEndpoint = import.meta.env.VITE_AI_API_ENDPOINT
  if (apiEndpoint) {
    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, systemPrompt: CV_SYSTEM_PROMPT }),
      })
      if (response.ok) {
        const data = await response.json()
        if (data.answer) return data.answer
      }
    } catch {
      // Fallback
    }
  }

  // 3. Fallback: Intelligent Grounded Local Semantic Matcher (Bilingual VN/EN)
  return getLocalGroundedAnswer(query)
}

function getLocalGroundedAnswer(query: string): string {
  const normalizedQuery = query.toLowerCase().trim()
  const isVietnamese =
    /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(query) ||
    /\b(ban|anh|duc|gi|nao|sao|may|nhung|cong ty|kinh nghiem|du an|o dau|sdt|tieng anh|hoc|truong|giam|dong vai|phong van)\b/i.test(query)

  // Roleplay handler in offline mode
  if (/dong vai|phong van|roleplay|interview/i.test(normalizedQuery)) {
    return isVietnamese
      ? 'Chào bạn! Tôi là Phan Minh Đức. Tôi rất sẵn lòng trả lời các câu hỏi phỏng vấn về kinh nghiệm 4 năm làm Frontend, kiến trúc Synapse 4 tại S3Corp (Electron, BroadcastChannel), Micro-Frontend tại VTC Smarttech hoặc các kỹ thuật tối ưu hóa hiệu năng (-15% UI lag, -30% bundle load). Bạn muốn hỏi tôi về tình huống kỹ thuật nào?'
      : 'Hello! I am Phan Minh Duc. I am happy to discuss my 4 years of frontend engineering experience, my architecture for Razer Synapse 4 at S3Corp, Micro-Frontends, or performance optimizations (-15% UI lag, -30% bundle load). What technical situation or challenge would you like to explore?'
  }

  let bestMatch: KnowledgeItem | null = null
  let maxScore = 0

  for (const item of BILINGUAL_KNOWLEDGE_BASE) {
    let score = 0
    for (const intent of item.intents) {
      if (normalizedQuery.includes(intent)) {
        score += intent.length
      }
    }
    if (score > maxScore) {
      maxScore = score
      bestMatch = item
    }
  }

  if (bestMatch && maxScore > 2) {
    return isVietnamese ? bestMatch.answerVi : bestMatch.answerEn
  }

  if (isVietnamese) {
    return (
      'Xin chào! Tôi là AI Mission Control của Phan Minh Đức.\n' +
      'Tôi nắm toàn bộ dữ liệu CV của Đức và có thể giải đáp chi tiết về:\n\n' +
      '• Dự án Synapse 4 & vai trò Macro Lead tại S3Corp (Electron, BroadcastChannel, team Singapore)\n' +
      '• Kỹ thuật giảm ~15% UI lag và memory overhead\n' +
      '• Nền tảng căn cước công dân CIC & app desktop C# .NET Core WinForms đọc thẻ chip\n' +
      '• Nền tảng Edocsign & kỹ thuật giảm ~30% bundle load time\n' +
      '• Kinh nghiệm kiểm thử QA tại SMARTLOG & thực tập tại LOFIVN\n' +
      '• Bằng cấp tại ĐH Tài nguyên & Môi trường TP.HCM (Kỹ sư CNTT - Loại Khá)\n' +
      '• Danh sách công nghệ (React, TypeScript, Next.js, Electron, Redux, Zustand, Tailwind, v.v.)\n' +
      '• Trình độ Tiếng Anh và thông tin liên hệ phỏng vấn.'
    )
  }

  return (
    'Greetings! I am Phan Minh Duc’s AI Mission Control Copilot.\n' +
    'I have full access to Duc’s verified CV and can assist you with:\n\n' +
    '• Synapse 4 & Macro Module Lead at S3Corp (Electron, BroadcastChannel, Singapore agile sprints)\n' +
    '• How he achieved ~15% reduction in UI lag and memory overhead\n' +
    '• Citizen Identity Card (CIC) platform & C# desktop chip-reader client\n' +
    '• Edocsign digital signatures & ~30% initial bundle reduction\n' +
    '• QA testing background at SMARTLOG & early internships\n' +
    '• Degree in IT Engineering at HCM City Univ of Natural Resources & Env\n' +
    '• Technical skill stack & direct contact coordinates.'
  )
}
