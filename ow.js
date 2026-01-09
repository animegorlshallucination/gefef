export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    // Simulate bot status response
    const botStatus = {
      online: true,
      uptime: Date.now() - (Math.random() * 86400000), // Random uptime
      servers: Math.floor(Math.random() * 50) + 10,
      commands: 8,
      ping: Math.floor(Math.random() * 100) + 20,
      timestamp: new Date().toISOString()
    };

    res.status(200).json(botStatus);
  } catch (error) {
    console.error('Error in bot-status API:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      online: false 
    });
  }
}
