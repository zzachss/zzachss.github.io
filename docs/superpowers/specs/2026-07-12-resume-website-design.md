# 履歷網站設計規格 — 陳谷維 Zach Chen

**日期：** 2026-07-12
**目標：** 中英雙語、可切換深淺色的個人履歷網站，涵蓋所有 projects，部署到 GitHub Pages（`<username>.github.io`）。

---

## 0. v2 視覺改版（2026-07-13）
「太陽春」問題重做：**電光紫 Electric Violet** 深色為主設計系統。載入 **Inter**（介面）＋ **JetBrains Mono**（區塊編號/標籤/日期/技術標）；hero 加狀態點與柔光背景 + 細格線；區塊用 CSS counter 自動編號（01–05）；卡片 hover 浮起 + 強調邊框；旗艦卡頂部漸層條。對比雙主題皆 ≥ AA、RWD 無溢出、`prefers-reduced-motion` 已處理。精選專案精簡為旗艦 + 6 張（移除與旗艦重複的 CRM 卡）。（依 ui-ux-pro-max skill 設計建議。）

## 1. 技術架構

- **純靜態單頁網站**：`index.html` + `styles.css` + `script.js`（不需 Node / build step）
- **雙語**：右上角 `EN / 中` 切換，內容以 `data-en` / `data-zh` 屬性或 JS 字典管理，偏好存 `localStorage`
- **深/淺色**：CSS variables + `prefers-color-scheme` 預設，右上角手動切換，偏好存 `localStorage`
- **RWD**：手機 / 平板 / 桌機皆適配
- **列印樣式**：`@media print`，可一鍵存成 PDF
- **無外部相依**：字型用系統字體堆疊或 self-host，圖示用 inline SVG（GitHub Pages 的 CSP 友善、離線可用）

## 2. 網站區塊

1. **Hero** — 姓名、職稱、一句話定位、聯絡方式（Email / 電話 / 地點 / GitHub）、語言與主題切換鈕
2. **Professional Summary**
3. **Skills**（Frontend / Backend / Database / Cloud & DevOps / Tools）
4. **Work Experience**（5 段經歷，**每個 project 完整涵蓋**）
5. **Education**（含畢業專題）
6. **Certifications & Languages**

## 3. 量化原則（重要）

不捏造任何數字。強化措辭與動詞，並在適合放數據處標註 `〔可補真實數字〕`，由本人填入真實數據（如處理筆數、效能提升％、TOEIC 分數）。

---

## 4. 強化後內容（待審閱）

### Hero
- **中文**：陳谷維 (Zach) ｜ Full-Stack Engineer
- **EN**：Chen Gu-Wei (Zach) ｜ Full-Stack Engineer
- 定位句（中）：6+ 年全端經驗，專精 React / Node.js 與雲原生架構，目前深入 AI Agent 與 AI 輔助開發工作流。
- 定位句（EN）：Full-stack engineer (6+ yrs) in React, Node.js & cloud-native — now going deep on AI agents and AI-assisted development.
- 聯絡：a0983828796@gmail.com ｜ 0983-828-796 ｜ Taiwan ｜ GitHub: `<username>`

### Professional Summary
**EN：** Full-stack engineer with 6+ years building enterprise and product platforms across banking, government, and manufacturing. I specialize in React and Node.js on cloud-native architectures, owning features end to end — from RESTful API and database design through containerized deployment and CI/CD. I turn tangled business requirements into maintainable, observable systems, and have repeatedly improved delivery speed and stability with Docker, Kubernetes, and automated pipelines. Right now I'm going deep on AI engineering — from self-hosting open-source LLMs locally (Hermes via Ollama) to building an agentic, AI-assisted development workflow with Claude Desktop and Claude Code — pairing a solid full-stack foundation with modern LLM tooling.

**中文：** 擁有 6+ 年全端開發經驗，橫跨銀行、政府與製造業的企業系統與產品平台。專精 React 與 Node.js 及雲原生架構，能獨立負責從 RESTful API、資料庫設計，到容器化部署與 CI/CD 的完整開發流程。擅長把複雜的業務需求拆解為可維護、可觀測的系統模組，並透過 Docker、Kubernetes 與自動化部署管線持續提升交付速度與系統穩定性。目前正深入 AI 工程領域——從在本機自架開源 LLM（Hermes / Ollama）打造本地 AI Agent，到建立以 Claude Desktop 與 Claude Code 為核心的 agentic、AI 輔助開發工作流——將扎實的全端底子與現代 LLM 工具鏈結合。

### Work Experience

**0. Independent AI Engineering & Continuous Learning｜自主 AI 工程與持續學習**（2025/05 – Present）
Projects: Local AI Agent (Hermes / Ollama)、AI-Assisted Development Workflow (Claude Code)、This Portfolio Site
- (EN) Self-hosted open-source LLMs locally (Hermes model via Ollama) to prototype and run local AI agents, building hands-on intuition for LLM behavior, prompting, and tool use.
- (EN) Built an agentic, AI-assisted development workflow with Claude Desktop and Claude Code — spec-driven development, custom skills, and MCP tooling — to design, build, and ship projects end to end.
- (EN) Applied the workflow to real deliverables, including designing and deploying this bilingual portfolio site (static site → GitHub Pages) through an AI-assisted, spec-first process.
- (EN) Continued strengthening cloud-native foundations: Golang, Kubernetes, and modern web architecture.
- (中) 在本機自架開源 LLM（Hermes 模型，透過 Ollama）打造並運行本地 AI Agent，實地累積對 LLM 行為、prompting 與工具調用的直覺。
- (中) 建立以 Claude Desktop 與 Claude Code 為核心的 agentic、AI 輔助開發工作流——spec-driven 開發、自訂 skills 與 MCP 工具，端到端設計、實作與交付專案。
- (中) 將此工作流實際應用於產出，包括以「spec 先行、AI 輔助」流程設計並部署本份中英雙語作品集網站（靜態網站 → GitHub Pages）。
- (中) 持續深化雲原生基礎：Golang、Kubernetes 與現代 Web 架構。
- Tech: Claude Code、Claude Desktop、MCP、Ollama、Hermes (local LLM)、Golang、Kubernetes、Git / GitHub Pages

**1. Wistron ITS Corporation 緯創軟體 — Full-Stack Engineer**（2024/09 – 2025/05）
Projects: Hybrid Cloud Scheduling System、Material Return Early Warning System
- (EN) Built core frontend and backend for an enterprise hybrid-cloud scheduling system handling large-scale, cross-system data workflows.
- (EN) Decomposed complex scheduling and data-processing logic into modular services, cutting maintenance overhead and improving code readability.
- (EN) Designed cloud-based automated scheduling and data pipelines to boost throughput and enable near real-time processing.
- (EN) Implemented monitoring and status tracking with Grafana to improve observability and operational efficiency.
- (EN) Partnered with cross-functional teams to clarify requirements and streamline delivery.
- (中) 負責企業混合雲排程系統的前後端架構與核心功能，支援大規模資料排程與跨系統整合。
- (中) 將複雜的排程與資料處理流程拆解為模組化服務，降低維護成本並提升程式可讀性。
- (中) 設計雲端自動化排程與資料管線，提升處理效能與近即時處理能力。
- (中) 建置系統監控與狀態追蹤機制（Grafana），提升可觀測性與維運效率。
- (中) 與跨部門團隊協作釐清需求，簡化交付流程。
- Tech: React (Hooks)、Redux、Ant Design、Zustand、Node.js、NestJS、TypeORM、PostgreSQL、Azure、Docker、GitLab、ArgoCD、Grafana、Jira

**2. Yi-Pin Engineering Co., Ltd. 邑品工程有限公司 — Full-Stack Engineer**（2021/01 – 2024/09）
Projects: Camping Site Management System、Matching Platform
- (EN) Designed and shipped a full camping-site management platform, digitizing reservation, operations, and customer-management workflows.
- (EN) Built a camping matching platform with search, booking, and order management, improving the reservation experience and booking conversion.
- (EN) Owned core frontend and backend development end to end, ensuring stability and long-term maintainability.
- (EN) Drove architecture planning and feature expansion to support continuous platform growth.
- (中) 設計並開發完整的露營場地管理系統，將營運、預約與客戶管理流程數位化，提升營運效率。
- (中) 打造露營媒合平台，具備搜尋、預訂與訂單管理功能，優化預約體驗並提升成交率。
- (中) 主責核心前後端開發，確保系統穩定與長期可維護性。
- (中) 參與系統架構規劃與功能擴充，支援平台持續成長。
- Tech: React (Hooks)、Redux、Node.js (Express)、MySQL、MongoDB (Mongoose)、GCP、Docker

**3. Yuan-Yu Information Co., Ltd. 圓祐資訊股份有限公司 — Full-Stack Engineer**（2020/05 – 2020/11）
Projects: Banking Systems（DBS Bank、Cathay Vietnam Insurance）
- (EN) Developed frontend and backend for a bank loan system, turning complex data-entry processes into user-friendly online workflows.
- (EN) Integrated multiple external data sources via APIs, reducing manual input and error rates.
- (EN) Contributed to an insurance system (Cathay Vietnam) — UI implementation and backend API development.
- (EN) Delivered features on schedule within an agile process.
- (中) 開發銀行貸款系統前後端，將複雜的資料輸入流程轉化為友善的線上作業流程。
- (中) 透過 API 整合多個外部資料來源，降低人工輸入與錯誤率。
- (中) 參與保險系統（國泰越南）開發，負責 UI 實作與後端 API 開發。
- (中) 於敏捷開發流程中如期交付功能。
- Tech: React、Redux-Saga、Java (Spring Boot)、MariaDB、Docker、Jenkins、jQuery、SQL、Jira、Trello

**4. Asia Zhi-Yuan Technology Co., Ltd. 亞洲志遠科技股份有限公司 — Full-Stack Engineer**（2019/03 – 2020/02）
Projects: Harbor Bureau Port Service System（系統升級）
- (EN) Delivered frontend/backend features and Web Service design for a government port-service system upgrade.
- (EN) Authored technical documentation to keep development and maintenance in sync.
- (EN) Self-introduced React and Docker to the project, improving frontend velocity and deployment consistency.
- (中) 於政府港務服務系統升級專案中，負責前後端功能開發與 Web Service 設計。
- (中) 撰寫技術文件，確保開發與系統維護的一致性。
- (中) 自主導入 React 與 Docker，提升前端開發效率與部署一致性。
- Tech: .NET、React、Redux、MSSQL、MVVM

**5. Data Systems Consulting Co., Ltd. (Digiwin 鼎新電腦) — Software Engineering Intern**（2016/02 – 2017/07）
Projects: BPM System Testing & Automation
- (EN) Performed functional testing for BPM systems to ensure stability.
- (EN) Built Selenium automated test scripts, improving test efficiency and coverage.
- (中) 執行 BPM 系統功能測試，確保系統穩定性。
- (中) 開發 Selenium 自動化測試腳本，提升測試效率與覆蓋率。
- Tech: Java、MSSQL、Selenium WebDriver

### Skills
- **Frontend**: React、Redux、Redux-Saga、Ant Design、Next.js、jQuery
- **Backend**: Node.js、NestJS、Express｜Java (Spring Boot)、.NET
- **Database**: PostgreSQL、MySQL、MariaDB、MSSQL、MongoDB
- **Cloud & DevOps**: Azure (Functions, Data Factory)、GCP｜Docker、Kubernetes｜CI/CD: GitLab CI、Jenkins、ArgoCD
- **Tools**: Git、Jira、Trello、Grafana
- **Learning**: Golang、Kubernetes、Cloud-Native、LLM

### Selected Projects（近期 Claude Code / spec-driven 實作，掃描 ~/projects 分析而得）
1. **spec-reader** — 專案組合智慧分析 CLI（掃描專案→HTML 報告：品質、OWASP DSOMM、DORA、關聯、缺口，可接 Anthropic API）。TypeScript / Node.js。
2. **AI Trading Bot** — LLM-in-the-loop 模擬交易 bot（指標產訊號→Claude 顧問核准/否決→模擬撮合）。Python / Anthropic API。
3. **資安學習平台 Cybersecurity Learning Platform** — React+Vite 前端 + Java Spring Boot MCP 伺服器（Spring AI、Streamable-HTTP /mcp）。
4. **🚩 企業系統整合套件 Enterprise System Integration Suite（旗艦，置頂）** — 自架企業營運平台，將 **BPM、HR、Billing、CRM、ITSM** 五套全端系統整合在單一 Nginx 閘道 + 一份 Docker Compose + 共用 PostgreSQL 之後。BPM 核心為 NestJS+TypeORM 圖形化流程引擎（React Flow 設計器、IAM、SLA、SSRF 防護）；ITSM↔CRM 以 token API 互通、ITSM 變更單經 webhook 閉環交由 BPM 簽核。（經對抗式驗證：Billing/HR 為 BPM Nx monorepo 內模組，非獨立 repo。）
5. **CRM** — Next.js 16 / React 19 / Prisma 7 / PostgreSQL / Tailwind 4 / Vitest。
6. **法拍不動產整合平台** — 台灣政府開放資料 + 國土測繪底圖 + 估價 + 報價單。Python / Node.js。
7. **cx — Command Center** — Go 跨平台指令 TUI（PATH + 各 WSL distro）。
8. **lock-finder** — 三語（中/英/日）SSG 行李寄放地圖。Next.js。
- 其他：music-mixer、poker、ticket-crawler、pet-moving 等。

### Education
Yuan Ze University 元智大學 — B.B.A. in Information Management 資訊管理學系（2013/09 – 2017/06）
- 畢業專題 Graduation Project: **Flower Matching Platform** — 打造連結花卉供應商與買家的第三方媒合平台，提供線上媒合與管理功能。

### Languages
- 中文（母語）、English（professional working）
- （TOEIC 依本人要求先不列）

### Visitor analytics
- komarev 訪客徽章（零註冊，footer 顯示 Views 計數）。備選：GoatCounter（隱私友善私人儀表板，需註冊）。

---

## 5. 部署計畫

1. 建立網站檔案並本機 commit
2. `winget` 安裝 GitHub CLI（gh）
3. 使用者執行 `gh auth login`（瀏覽器授權一次）
4. 以 `gh api user` 取得 GitHub username → 建立 `<username>.github.io` public repo
5. `git push` → 於 repo Settings 開啟 GitHub Pages（main / root）或用 `gh` 設定
6. 驗證線上網址可正常開啟、雙語與深淺色切換正常

## 6. 驗收標準

- [ ] 6 段區塊齊全，5 段經歷的**所有 project 都出現**
- [ ] EN / 中 切換正常且內容完整
- [ ] 深 / 淺色切換正常，偏好被記住
- [ ] 手機版排版正常
- [ ] 可列印 / 存 PDF
- [ ] 線上網址（`<username>.github.io`）可開啟
