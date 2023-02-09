import cookies from "js-cookie";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || "";
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_PUB_KEY || "";
const cookieOptions = { expires: 100 * 365 * 24 * 60 * 60 };

export default createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: {
      getItem: (key) => {
        return cookies.get(key) || null;
      },
      setItem: (key, value) => {
        cookies.set(key, value, cookieOptions);
      },
      removeItem: (key) => {
        cookies.remove(key);
      },
    },
  },
});
