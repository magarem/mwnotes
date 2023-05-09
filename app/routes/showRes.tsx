import type { LoaderArgs } from "@remix-run/node"; // or cloudflare/deno
import { json } from "@remix-run/node"; // or cloudflare/deno
import { createClient } from '@supabase/supabase-js'
// import { useSearchParams } from "react-router-dom";
export const loader = async ({ request }: LoaderArgs) => {
  // handle "GET" request
//   console.log(request.);
const url = new URL(request.url);
const field = url.searchParams.get("field")||""
const value = url.searchParams.get("value")
console.log(field, value);

  const env = {
    SUPABASE_URL_RAW: process.env.SUPABASE_URL_RAW!,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY!,
  }
//   console.log(searchParams.get("id"))
  const supabase = createClient(env.SUPABASE_URL_RAW, env.SUPABASE_ANON_KEY)
  
  if (field?.length>0){
    const { data, error } = await supabase
    .from('Note')
    .select()
   
    
    console.log('data:', data);
    return json(data, 200);
  }else{
    console.log("!!!!!!!!!!!!!!");
    
    const { data, error } = await supabase
    .from('Note')
    .select('id')

    console.log('data:', data);
    console.log('error:', error);
    return json(data, 200);
  }
  
  
  
  
};
