const express = require('express');
const app = express();

const WHATSAPP_VERIFY_TOKEN = 'my_custom_verify_token'; // Replace with your custom verification token

app.use(express.json());

// Webhook verification endpoint
app.get('/webhook', (req, res) => {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode === 'subscribe' && token === WHATSAPP_VERIFY_TOKEN) {
        console.log('Webhook verified successfully!');
        res.status(200).send(challenge);
    } else {
        console.log('Failed to verify webhook.');
        res.sendStatus(403);
    }
});

// Start server
app.listen(3001, () => console.log('Webhook server is running on port 3000.'));
