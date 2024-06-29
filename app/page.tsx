import { createClient } from "@/utils/supabase/server";
import Header from "./components/header";

export default async function Home() {
  let loggedIn = false;

  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser();

  if (!error && data?.user) {
    loggedIn = true;
  }

  console.log('data', data)

  return (
    <main>
      <Header loggedIn={loggedIn} />
    </main>
  );
}
