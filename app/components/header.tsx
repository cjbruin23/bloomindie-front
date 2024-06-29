"use client";

import Link from "next/link";
import { logout } from "../auth/logout/actions";

type HeaderProps = {
  loggedIn: boolean;
};

export default function Header({ loggedIn }: HeaderProps) {
  return (
    <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
      <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="text-indigo-500 md:order-1">
          <h2>BloomIndie</h2>
        </div>

        <div className="order-2 md:order-3">
          {loggedIn ? (
            <form action={logout}>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2"
              >
                <span>Log Out</span>
              </button>
            </form>
          ) : (
            <Link href="?modal=true">
              <button
                type="button"
                className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2"
              >
                <span>Log In</span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
