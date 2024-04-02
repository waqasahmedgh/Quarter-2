"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HeaderPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleForward = () => {
    router.forward();
  };

  return (
    <div className="flex bg-gray-200 p-3 gap-5">
      <Link href="/" className="text-blue-500">
        Home
      </Link>
      <Link href="/dashboard" className="text-blue-500">
        Dashboard
      </Link>
      <Link href="/dashboard/setting" className="text-blue-500">
        Setting
      </Link>
      <Link href="/dashboard/setting/password" className="text-blue-500">
        Password
      </Link>
      <Link href="/dashboard/setting/profile" className="text-blue-500">
        Profile
      </Link>

      <Link href="/blog" className="text-blue-500">
        Blog
      </Link>

      <button className="bg-blue-300 rounded-1m p-1" onClick={handleBack}>
        Back
      </button>
      <button className="bg-blue-300 rounded-1m p-1" onClick={handleForward}>
        Forward
      </button>
    </div>
  );
}
