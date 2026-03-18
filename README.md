# ORIS 1.0 - AI Avatar Interface

A futuristic AI avatar interface with holographic effects, powered by Gemini AI, ElevenLabs TTS, and Ojin avatar technology.

## Features

- Real-time AI conversations (Gemini)
- Text-to-speech with lip-sync (ElevenLabs)
- Animated avatar with holographic effects (Ojin)
- Customizable system prompt/personality
- Browser TTS fallback

## Prerequisites

- Node.js 18+ installed
- API keys for:
  - **Gemini API** (required) - https://makersuite.google.com/app/apikey
  - **ElevenLabs API** (for TTS) - https://elevenlabs.io
  - **Ojin API** (for avatar) - https://ojin.ai

## Setup

1. **Clone/copy the project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**

   Copy `.env.example` to `.env` and fill in your API keys:
   ```bash
   cp .env.example .env
   ```

   Edit `.env` with your keys:
   ```
   VITE_GEMINI_API_KEY=your_gemini_api_key
   VITE_ELEVENLABS_API_KEY=your_elevenlabs_api_key
   VITE_ODJIN_API_KEY=your_ojin_api_key
   VITE_ODJIN_CONFIG_ID=your_ojin_config_id
   VITE_SYSTEM_PROMPT="Your custom AI personality prompt"
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**

   Navigate to `http://localhost:5173`

## API Keys Guide

### Gemini API (Required)
1. Go to https://makersuite.google.com/app/apikey
2. Create a new API key
3. Add to `VITE_GEMINI_API_KEY`

### ElevenLabs API (For voice/lip-sync)
1. Create account at https://elevenlabs.io
2. Go to Profile > API Keys
3. Generate new key
4. Add to `VITE_ELEVENLABS_API_KEY`
5. Note: Requires credits for TTS usage

### Ojin API (For avatar)
1. Sign up at https://ojin.ai
2. Create a custom avatar/config
3. Get your API key and Config ID
4. Add to `VITE_ODJIN_API_KEY` and `VITE_ODJIN_CONFIG_ID`

## Usage

1. Click in the chat input and type a message
2. The avatar will connect on first message
3. AI generates response via Gemini
4. Voice plays via ElevenLabs (or browser TTS fallback)
5. Avatar lip-syncs to the audio

## Customization

### Change Avatar Name
Edit the `<h1 id="display-name">` in `index.html`

### Change AI Personality
1. Click "Settings" button
2. Edit the system prompt
3. Click "Save & Close"

Or edit `VITE_SYSTEM_PROMPT` in `.env`

### Change Voice
Edit the `voiceId` in the `getElevenLabsTTS` function in `index.html`.
Find voice IDs at: https://api.elevenlabs.io/v1/voices

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "ElevenLabs Error: 401" | Invalid API key - regenerate at elevenlabs.io |
| "ElevenLabs Error: 402" | No credits - add credits to your ElevenLabs account |
| Avatar not connecting | Check Ojin API key and Config ID |
| No audio | Click somewhere on page first (browser autoplay policy) |

## Tech Stack

- Vite (build tool)
- Tailwind CSS (styling)
- Gemini API (AI chat)
- ElevenLabs API (TTS)
- Ojin API (avatar)
- Web Audio API (audio processing)

## License

MIT
