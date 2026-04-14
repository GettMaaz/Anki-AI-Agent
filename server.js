const express = require('express');
const app = express();
const PORT = 3000;
const API_KEY = 'YOUR-API-KEY-HERE';
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') return res.sendStatus(200);
    next();
});
app.post('/generate', async (req, res) => {
    try {
    const prompt = req.body.prompt;
    const response = await fetch ('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': API_KEY, 
                'anthropic-version': '2023-06-01' },
            body: JSON.stringify({
                model: 'claude-sonnet-4-6',
                max_tokens: 1000,
                messages :[
                    { role: 'user', content: prompt}
                ]
            })
        });
    const claudeData = await response.json();
    const text = claudeData.content[0].text;
    const cards = JSON.parse(text);
    res.json(cards);
    } catch (error) {
        console.error('There was an error loading data:', error.message);
    }
});
app.listen(PORT, () => {
    console.log(`Server run on http://localhost:${PORT}`);
});
