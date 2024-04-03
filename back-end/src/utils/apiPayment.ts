import "dotenv/config";

export const stripe = require('stripe')(process.env.STRIP_API_KEY)