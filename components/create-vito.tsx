'use client'
import { useState, useEffect } from 'react'

type VitoData = {
  vitoMessage: string
}

export function CreateVito() {
  const [data, setData] = useState<VitoData | null>(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://devbox:8000/vito', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ linked_in_url: '', company_url: '' }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No response received</p>

  return (
    <div>
      <h1>Message</h1>
      <p>{data?.vitoMessage}</p>
    </div>
  )
}
