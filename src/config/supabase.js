import { createClient } from "@supabase/supabase-js";

import config from "./config.js";

const supabase = createClient(
    config.supabase.url,
     config.supabase.secretKey
);
console.log("Supabase is initialized.");

export default supabase;
