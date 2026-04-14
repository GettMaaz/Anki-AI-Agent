# Anki AI Agent

A web app that uses the Claude AI API to automatically generate Anki flashcards on any topic and send them directly to your Anki deck.

## What it does

- Generates a set of flashcards on any topic using Claude AI
- Preview the cards before sending
- Send cards directly to any Anki deck with one click
- Repair/regenerate cards if you're not happy with them

## Requirements

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Anki](https://apps.ankiweb.net/) (desktop app)
- [AnkiConnect](https://ankiweb.net/shared/info/2055492159) add-on installed in Anki
- A Claude API key from [console.anthropic.com](https://console.anthropic.com)

## Setup

1. Clone the repository
```
git clone https://github.com/GettMaaz/Anki-AI-Agent.git
cd Anki-AI-Agent
```

2. Install dependencies
```
npm install
```

3. Add your Claude API key to `server.js`
```js
const API_KEY = 'YOUR-API-KEY-HERE'
```

4. Make sure Anki is open and AnkiConnect is installed

5. Start the server
```
node server.js
```

6. Open `anki-agent.html` with Live Server in VS Code (or any local server)

## AnkiConnect Setup

In Anki go to **Tools → Add-ons → AnkiConnect → Config** and set:
```json
"webCorsOriginList": ["*"]
```

Then restart Anki.

## Usage

1. Enter a topic (e.g. "JavaScript arrays")
2. Set the number of cards
3. Select your Anki deck
4. Click **Create Cards**
5. Review the cards in the preview
6. Click **Send to Anki** to save them to your deck
