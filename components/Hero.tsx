'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section style={{
      height: '100vh',
      position: 'relative',
      background: 'linear-gradient(135deg, #050505 0%, #1a1410 50%, #0d0a08 100%)',
      overflow: 'hidden'
    }}>
      {/* Animated gradient orbs */}
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, rgba(201,168,76,0) 70%)',
        borderRadius: '50%',
        top: '10%',
        right: '10%',
        filter: 'blur(60px)',
        animation: 'float 8s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0) 70%)',
        borderRadius: '50%',
        bottom: '20%',
        left: '5%',
        filter: 'blur(50px)',
        animation: 'float 10s ease-in-out infinite'
      }} />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(30px); }
        }
      `}</style>

      <div style={{
        position: 'relative',
        zIndex: 10,
        padding: '0 8%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="gold"
          style={{
            letterSpacing: '0.4em',
            marginBottom: '20px',
            fontSize: '0.9rem'
          }}
        >
          BONN — GERMANY
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            fontSize: 'clamp(4rem,10vw,10rem)',
            lineHeight: '0.95',
            maxWidth: '1100px',
            fontFamily: '"Cormorant Garamond", serif'
          }}
        >
          Digitale Systeme für Luxusmarken der Zukunft.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            marginTop: '40px',
            maxWidth: '700px',
            color: '#aaa',
            fontSize: '1.2rem',
            lineHeight: '1.8'
          }}
        >
          Cinematic digitale Erlebnisse für Architektur, Aviation, KI-Systeme und Luxury Brands.
        </motion.p>
      </div>
    </section>
  )
}