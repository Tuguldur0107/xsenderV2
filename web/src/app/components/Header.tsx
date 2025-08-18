'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-4 px-6 flex justify-between items-center backdrop-blur-md bg-white/10 border-b border-white/20 text-white">
      
      {/* Logo дарвал dashboard руу очно */}
      <Link href="/dashboard" className="text-xl font-bold">
        X-SENDER
      </Link>

      <nav className="space-x-4 text-sm">
        <Link href="/" className="hover:underline">Вэбсайт</Link>
        <Link href="https://www.facebook.com/profile.php?id=61578621497518" className="hover:underline" target="_blank">Facebook</Link>
        {/* Холбоо барих линк ContactPage руу */}
        <Link href="/ContactPage" className="hover:underline">Холбоо барих</Link>
      </nav>
    </header>
  )
}
