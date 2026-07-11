# 陳谷維 Zach Chen — Resume / 個人履歷

Bilingual (中文 / English), theme-switchable personal résumé for **Chen Gu-Wei (Zach)**, Full-Stack Engineer.

**Live site:** https://REPLACE_ME.github.io

## Features
- 🌏 中英雙語切換（偏好記憶）
- 🌗 深色 / 淺色模式（跟隨系統 + 手動）
- 📱 響應式 RWD
- 🖨️ 一鍵列印 / 存 PDF
- ⚡ 純靜態、無相依、無 build step

## Structure
| File | Purpose |
|------|---------|
| `index.html` | Content & structure (bilingual inline) |
| `styles.css` | Theming, layout, print styles |
| `script.js` | Language / theme toggles, persistence, reveal |

## Local preview
```bash
python3 -m http.server 8080
# open http://localhost:8080
```

Built with an AI-assisted, spec-first workflow (Claude Code). Design spec lives in `docs/superpowers/specs/`.
