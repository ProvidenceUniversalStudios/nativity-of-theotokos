import MailerLite from "@mailerlite/mailerlite-nodejs";

const API_KEY = process.env.MAILERLITE_API_KEY;
if (!API_KEY) throw new Error("MailerLite API key has not been provided");

const mailerLite = new MailerLite({ api_key: API_KEY });

export default mailerLite;
