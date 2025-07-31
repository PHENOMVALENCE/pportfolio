const nodemailer = require('nodemailer');
const crypto = require('crypto');

// Function to sanitize input
function sanitizeInput(data) {
    if (typeof data !== 'string') return '';
    return data.trim().replace(/[<>"'&]/g, '');
}

// Generate a CSRF token (for simplicity, generate on server; in production, consider session-based)
const generateCsrfToken = () => crypto.randomBytes(32).toString('hex');

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, company, message, csrf_token } = req.body;

    // Validate CSRF token (for this example, assume a static token or client-generated)
    // In production, use a session-based or database-stored token
    const serverCsrfToken = process.env.CSRF_TOKEN || 'static-token-for-demo'; // Replace with proper CSRF handling
    if (!csrf_token || csrf_token !== serverCsrfToken) {
        return res.status(403).json({ error: 'CSRF token validation failed' });
    }

    // Sanitize and validate inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedCompany = sanitizeInput(company || '');
    const sanitizedMessage = sanitizeInput(message);

    if (!sanitizedName || !sanitizedEmail || !sanitizedMessage) {
        return res.status(400).json({ error: 'Please fill all required fields' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    // Set up Nodemailer transport (example with SendGrid)
    const transporter = nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
            user: 'apikey',
            pass: process.env.SENDGRID_API_KEY, // Store in Vercel environment variables
        },
    });

    // Email configuration
    const mailOptions = {
        from: 'hello@petermkwawa.com',
        to: 'mwiganivalence@gmail.com',
        replyTo: sanitizedEmail,
        subject: 'New Contact Form Submission',
        html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${sanitizedName}</p>
            <p><strong>Email:</strong> ${sanitizedEmail}</p>
            ${sanitizedCompany ? `<p><strong>Organization:</strong> ${sanitizedCompany}</p>` : ''}
            <p><strong>Message:</strong><br>${sanitizedMessage}</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    }
};