'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TimeZone {
  name: string
  timezone: string
  emoji: string
}

const timeZones: TimeZone[] = [
  { name: 'Bonn', timezone: 'Europe/Berlin', emoji: '🇩🇪' },
  { name: 'New York', timezone: 'America/New_York', emoji: '🇺🇸' },
  { name: 'Los Angeles', timezone: 'America/Los_Angeles', emoji: '🌴' },
  { name: 'Tokyo', timezone: 'Asia/Tokyo', emoji: '🇯🇵' },
  { name: 'Singapore', timezone: 'Asia/Singapore', emoji: '🇸🇬' },
  { name: 'Sydney', timezone: 'Australia/Sydney', emoji: '🇦🇺' }
]

interface ClockTime {
  [key: string]: string
}

export default function WorldClock() {
  const [times, setTimes] = useState<ClockTime>({})
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const updateTimes = () => {
      const newTimes: ClockTime = {}
      timeZones.forEach(({ timezone }) => {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: timezone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        })
        newTimes[timezone] = formatter.format(new Date())
      })
      setTimes(newTimes)
      setIsLoaded(true)
    }

    updateTimes()
    const interval = setInterval(updateTimes, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="section" style={{ backgroundColor: 'rgba(5, 5, 5, 0.5)' }}>
      <p className="gold" style={{ letterSpacing: '0.3em', marginBottom: '20px' }}>
        GLOBAL TIME
      </p>

      <h2 style={{ fontSize: 'clamp(3rem,7vw,7rem)', marginBottom: '60px' }}>
        World Clock
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px'
        }}
      >
        {timeZones.map((tz, index) => (
          <motion.div
            key={tz.timezone}
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass"
            style={{
              borderRadius: '20px',
              padding: '30px',
              textAlign: 'center',
              backdropFilter: 'blur(18px)',
              border: '1px solid rgba(201, 168, 76, 0.2)'
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '15px' }}>
              {tz.emoji}
            </div>

            <h3
              style={{
                fontSize: '1.3rem',
                marginBottom: '20px',
                fontFamily: '"Cormorant Garamond", serif',
                color: '#C9A84C'
              }}
            >
              {tz.name}
            </h3>

            <div
              style={{
                fontSize: '2.5rem',
                fontFamily: 'monospace',
                fontWeight: 'bold',
                color: '#fff',
                letterSpacing: '2px',
                marginBottom: '10px',
                minHeight: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {times[tz.timezone] || '00:00:00'}
            </div>

            <p
              style={{
                color: '#aaa',
                fontSize: '0.9rem',
                letterSpacing: '0.1em'
              }}
            >
              {tz.timezone}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
