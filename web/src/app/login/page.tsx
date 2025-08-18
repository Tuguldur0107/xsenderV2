'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    // Жинхэнэ сервергүй бол зүгээр redirect
    localStorage.setItem('token', 'dummy-token')

    router.push('/dashboard')
  }

  return (
    <>
      <Header />

      <main
        className="pt-20 pb-16 min-h-[100vh] flex items-center justify-center bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
        >
          <h1 className="text-2xl font-bold mb-6 text-center text-white">Нэвтрэх</h1>

          <input
            type="text"
            placeholder="Нэвтрэх нэр"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mb-4 p-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/70 border border-white/20"
          />
          <input
            type="password"
            placeholder="Нууц үг"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 p-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/70 border border-white/20"
          />
          <button
            type="submit"
            className="w-full bg-blue-600/80 hover:bg-blue-700/90 py-2 px-4 rounded-xl font-semibold backdrop-blur-sm transition"
          >
            Нэвтрэх
          </button>
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-300">Шинэ хэрэглэгч үү?</span>
            <a
              href="/register"
              className="ml-2 text-green-400 hover:underline font-medium"
            >
              Бүртгүүлэх
            </a>
          </div>
        </form>
      </main>

      <Footer />
    </>
  )
}
