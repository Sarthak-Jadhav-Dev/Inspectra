<p align="center">
  <img src="https://raw.githubusercontent.com/pandora-rho/github-banner/master/github-banner.png" alt="GitHub Banner"/>
</p>

<h1 align="center">🦁 Open-Claw</h1>

<p align="center">
  <a href="https://github.com/0xP3dro/open-claw/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/0xP3dro/open-claw?style=flat-square" alt="License"/>
  </a>
  <img src="https://img.shields.io/github/stars/0xP3dro/open-claw?style=flat-square" alt="Stars"/>
  <img src="https://img.shields.io/github/forks/0xP3dro/open-claw?style=flat-square" alt="Forks"/>
  <img src="https://img.shields.io/github/issues/0xP3dro/open-claw?style=flat-square" alt="Issues"/>
  <img src="https://img.shields.io/github/pull-requests/0xP3dro/open-claw?style=flat-square" alt="Pull Requests"/>
</p>

<p align="center">
  <a href="#overview">Overview</a> •
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#contributing">Contributing</a>
</p>

---

## Overview <a name="overview"></a>

**Open-Claw** is a powerful CLI tool built with TypeScript and Bun, designed to provide an interactive terminal experience with AI-driven capabilities. The project combines modern CLI frameworks with AI providers to create a sophisticated command-line interface.

<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=JetBrains+Mono&size=22&duration=3000&pause=1000&color=FF6B6B&center=true&width=600&lines=AI+Powered+CLI;Interactive+Terminal+UI;Multi-Agent+System;Modern+Architecture" alt="Typing SVG"/>
</div>

---

## Features <a name="features"></a>

✨ **What makes Open-Claw special?**

- 🤖 **AI-Powered Responses** - Integrated with OpenRouter AI providers
- 🎯 **Multi-Agent System** - Orchestrator-based agent management
- 💬 **Interactive CLI** - Built with Commander.js and Clack prompts
- 📊 **Terminal UI** - Rich markdown rendering in terminal
- 🔧 **Extensible Architecture** - Modular design for easy extensions
- ⚡ **Blazing Fast** - Powered by Bun runtime
- 🎨 **Beautiful Output** - Styled with chalk and figlet

---

## Installation <a name="installation"></a>

```bash
# Clone the repository
git clone https://github.com/0xP3dro/open-claw.git

# Navigate to project directory
cd open-claw

# Install dependencies
bun install

# Run the CLI
bun run index.ts wakeup
```

---

## Usage <a name="usage"></a>

### Available Commands

```bash
open-claw wakeup        # Start the wakeup sequence
open-claw telegram      # Run Telegram mode
```

### Quick Start

```bash
# Run the wakeup command
bun run index.ts wakeup

# Output example:
#  _    _      _     _   
# | |  | |    | |   | |  
# | |  | | ___| |__ | |_ 
# | |  | |/ _ \ '_ \| __|
# | |__| |  __/ |_) | |_ 
#  \____/ \___|_.__/ \__|
#                         
# Welcome to Open-Claw!
```

---

## Architecture <a name="architecture"></a>

### Project Structure

```
📁 open-claw
├── 📄 index.ts                    # CLI entry point
├── 📄 package.json
├── 📄 tsconfig.json
├── 📄 bun.lock
├── 📁 ai/                         # AI configuration
│   ├── 📄 ai.config.ts
│   └── 📄 index.ts
├── 📁 modes/                      # Application modes
│   ├── 📄 cli.ts
│   ├── 📄 telegram.ts
│   └── 📁 agents/                # Multi-agent system
│       ├── 📄 action_tracker.ts
│       ├── 📄 agent-tools.ts
│       ├── 📄 approval.ts
│       ├── 📄 diff-view.ts
│       ├── 📄 orcharstrator.ts
│       ├── 📄 tool-executor.ts
│       └── 📄 types.ts
├── 📁 terminal_ui/               # Terminal UI components
│   ├── 📄 terminal_md.ts
│   └── 📄 wakeup.ts
└── 📄 .gitignore
```

### Technology Stack

<div align="center">

| Technology | Purpose |
|------------|---------|
| **Bun** | Runtime & Package Manager |
| **TypeScript** | Type Safety |
| **Commander.js** | CLI Framework |
| **Clack** | Interactive Prompts |
| **AI SDK** | AI Integration |
| **OpenRouter** | AI Provider |
| **Chalk** | Terminal Colors |
| **Figlet** | ASCII Art |

</div>

---

## Development <a name="development"></a>

### Prerequisites

- [x] Node.js (Latest LTS)
- [x] Bun (Latest)
- [x] TypeScript

### Scripts

```json
{
  "scripts": {
    "dev": "bun run index.ts",
    "build": "bun build index.ts --outdir dist",
    "test": "bun test"
  }
}
```

---

## Contributing <a name="contributing"></a>

We welcome contributions! Here's how you can help:

1. 🍴 Fork the repository
2. 🌿 Create your feature branch (`git checkout -b feature/amazing-feature`)
3. 💻 Commit your changes (`git commit -m 'Add some amazing feature'`)
4. ⬆️ Push to the branch (`git push origin feature/amazing-feature`)
5. 🎉 Open a Pull Request

### Code Style

- Follow TypeScript best practices
- Use meaningful variable names
- Write clean, documented code
- Add tests for new features

---

## License <a name="license"></a>

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Support

<div align="center">
  <a href="https://github.com/0xP3dro/open-claw/issues">
    <img src="https://img.shields.io/badge/Issues-E74C3C?style=for-the-badge&logo=github&logoColor=white" alt="Issues"/>
  </a>
  <a href="https://github.com/0xP3dro/open-claw/pulls">
    <img src="https://img.shields.io/badge/PRs-3096FF?style=for-the-badge&logo=github&logoColor=white" alt="Pull Requests"/>
  </a>
</div>

---

<div align="center">
  <img src="https://capsule-profile.coderschool.dev/gh/0xP3dro?data=statistic" alt="GitHub Stats"/>
</div>

<div align="center">
  <img src="https://streak-stats.demolab.com?user=0xP3dro&theme=radical" alt="GitHub Streak"/>
</div>

---

<p align="center">
  <img src="https://readme-generation.vercel.app/api?template=terminal&utm_source=gh&utm_medium=readme&utm_campaign=footer">
</p>

<p align="center">
  Made with ❤️ by <a href="https://github.com/0xP3dro">0xP3dro</a>
</p>