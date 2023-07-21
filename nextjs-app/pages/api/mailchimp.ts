import { NextApiRequest, NextApiResponse } from 'next';
import { subscribeToNewsletter } from '../../utils/mailchimp';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    await subscribeToNewsletter(email);
    return res.status(200).json({ error: '' });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};