'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })

    const data = await res.json()

    if (!data.success) {
      setError(data.message || 'Нэвтрэхэд алдаа гарлаа')
      return
    }

    // JWT хадгалах (localStorage эсвэл cookie - тохируулж болно)
    localStorage.setItem('token', data.token)

    // Role шалгаж хуудсыг чиглүүлэх
    if (data.role === 'admin') {
      router.push('/admin/dashboard')
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form onSubmit={handleLogin} className="w-full max-w-sm p-8 border rounded bg-gray-900">
        <h1 className="text-2xl font-bold mb-6 text-center">Нэвтрэх</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <input
          type="text"
          placeholder="Нэвтрэх нэр"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 p-2 border rounded bg-black text-white"
        />
        <input
          type="password"
          placeholder="Нууц үг"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-2 border rounded bg-black text-white"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded font-semibold"
        >
          Нэвтрэх
        </button>
      </form>
    </div>
  )
}
