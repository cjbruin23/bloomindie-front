import LoginPage from "./login/page";

export default function Home() {
  return (
    <main>
      <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
        <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
          <div className="text-indigo-500 md:order-1">
            <h2>BloomIndie</h2>
          </div>

          <div className="order-2 md:order-3">
            <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">

              <span>Login</span>
            </button>
          </div>
        </div>
      </nav>

      <LoginPage/>
    </main>
  );
}
