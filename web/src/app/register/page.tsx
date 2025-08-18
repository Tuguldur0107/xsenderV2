'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setError('Нууц үг таарахгүй байна')
      return
    }

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, phone, password })
    })

    const data = await res.json()

    if (!data.success) {
      setError(data.message || 'Бүртгүүлэхэд алдаа гарлаа')
      return
    }

    router.push('/login')
  }

  return (
        <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat text-gray-900"
        style={{ backgroundImage: "url('/bg.jpg')" }}
        >
        <form
            onSubmit={handleRegister}
            className="w-full max-w-sm p-8 rounded-2xl bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-xl"
        >
            <h1 className="text-2xl font-bold mb-6 text-center text-white">Бүртгүүлэх</h1>

            {error && <p className="text-red-400 mb-4 text-sm text-center">{error}</p>}


        <input
        type="text"
        placeholder="Нэвтрэх нэр"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full mb-4 p-3 rounded-xl bg-white/10 backdrop-blur-md text-white placeholder-white/70 border border-white/20 shadow-inner"
        />

        <input
        type="email"
        placeholder="И-мэйл хаяг"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-4 p-3 rounded-xl bg-white/10 backdrop-blur-md text-white placeholder-white/70 border border-white/20 shadow-inner"
        />

        <input
        type="tel"
        placeholder="Гар утасны дугаар"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full mb-4 p-3 rounded-xl bg-white/10 backdrop-blur-md text-white placeholder-white/70 border border-white/20 shadow-inner"
        />

        <input
        type="password"
        placeholder="Нууц үг"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-4 p-3 rounded-xl bg-white/10 backdrop-blur-md text-white placeholder-white/70 border border-white/20 shadow-inner"
        />

        <input
        type="password"
        placeholder="Нууц үгээ давтана уу"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="w-full mb-6 p-3 rounded-xl bg-white/10 backdrop-blur-md text-white placeholder-white/70 border border-white/20 shadow-inner"
        />

        <button
        type="submit"
        className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-xl backdrop-blur-md border border-white/20 transition"
        >
        Бүртгүүлэх
        </button>


        <div className="mt-4 text-center">
          <span className="text-sm text-gray-400">Бүртгэлтэй хэрэглэгч үү?</span>
          <a
            href="/login"
            className="ml-2 text-green-500 hover:underline font-medium"
          >
            Нэвтрэх
          </a>
        </div>
      </form>
    </div>
  )
}
