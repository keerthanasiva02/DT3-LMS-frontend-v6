"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isAuthPage = pathname.startsWith("/auth");

  return (
    <header className="bg-white border-b border-teal-100 sticky top-0 z-50">
      <div className="flex items-center justify-between h-16 px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/image.png"
            alt="DigitalT3"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="text-xl font-semibold text-teal-900 hidden sm:inline">
            DigitalT3
          </span>
        </Link>

        {!isAuthPage && (
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/dashboard/learner" className="text-slate-700 hover:text-teal-600 transition">
              Dashboard
            </Link>
            <Link href="/dashboard/learner/courses" className="text-slate-700 hover:text-teal-600 transition">
              Courses
            </Link>
            <Link href="/dashboard/learner/progress" className="text-slate-700 hover:text-teal-600 transition">
              Progress
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
