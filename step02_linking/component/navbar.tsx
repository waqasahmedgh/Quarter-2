"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();

  return (
    <div>
      <h1>Link use to navigate the pages</h1>
      <br />
      <ul>
        <li>
          <Link href="/">MainPage</Link>
        </li>
        <li>
          <Link href="/home">HomePage</Link>
        </li>
        <li>
          <Link href="/name">NamePage</Link>
        </li>
        <br />
        <br />
        <h1>UseRouter to navigate the pages</h1>
        <br />

        <li>
          <button type="button" onClick={() => router.push("/")}>
            MainPage
          </button>
        </li>

        <li>
          <button type="button" onClick={() => router.push("/home")}>
            HomePage
          </button>
        </li>
        <li>
          <button type="button" onClick={() => router.push("/name")}>
            NamePage
          </button>
        </li>
      </ul>
    </div>
  );
}
