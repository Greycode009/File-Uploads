import "dotenv/config";

const config = {
  port: process.env.PORT || 3000,

  supabase: {
    url: process.env.SUPABASE_URL,
    secretKey: process.env.SUPABASE_SECRET_KEY,
  },
};

export default config;