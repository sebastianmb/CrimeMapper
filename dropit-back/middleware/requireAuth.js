require('dotenv').config();
const { createClerkClient } = require('@clerk/clerk-sdk-node');
const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

async function requireAuth(req, res, next) {
    try {
        const authHeader = req.headers['authorization'];

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Authorization header missing or malformed' });
        }

        const sessionId = authHeader.split(' ')[1];
        const session = await clerkClient.sessions.getSession(sessionId);

        if (!session) {
            return res.status(401).json({ error: 'Invalid session: Session not found' });
        }

        req.user = session.userId;
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        res.status(401).json({ error: 'Authentication failed. Please check your session token and try again.' });
    }
}

module.exports = requireAuth;
