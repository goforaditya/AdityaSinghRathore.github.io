import axios from 'axios';

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
const DATACENTER = MAILCHIMP_API_KEY.split('-')[1];

const mailchimpInstance = axios.create({
  baseURL: `https://${DATACENTER}.api.mailchimp.com/3.0`,
  auth: {
    username: 'anystring',
    password: MAILCHIMP_API_KEY,
  },
});

export const subscribeToNewsletter = async (email: string) => {
  try {
    const response = await mailchimpInstance.post(`/lists/${MAILCHIMP_LIST_ID}/members`, {
      email_address: email,
      status: 'subscribed',
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.title);
  }
};