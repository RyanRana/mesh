import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    const filePath = path.resolve(process.cwd(), 'waitlist.json');
    const existing = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, 'utf-8'))
      : [];

    const updated = [...existing, { email, timestamp: new Date().toISOString() }];
    fs.writeFileSync(filePath, JSON.stringify(updated, null, 2));

    return res.status(200).json({ success: true });
  }

  res.status(405).json({ error: 'Method not allowed' });
}
