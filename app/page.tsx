import { createClient } from "@/utils/supabase/server";
import Header from "./components/header";
import axios from "axios";

export default async function Home() {
  let loggedIn = false;
  let userData;

  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.log("get user error", error)
  }

  if (!error && data?.user) {
    console.log("user data", data)
    userData = data.user;
    loggedIn = true;
  }

  axios.post(`${process.env.DEV_API}`, {
    user_id: userData?.id,
    user_email: userData?.email

  }).then(res => console.log('res', res))

  return (
    <main>
      <Header loggedIn={loggedIn} />
    </main>
  );
}
