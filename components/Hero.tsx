'use client'

import { Canvas } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { motion } from 'framer-motion'

function Particles() {
  const positions = new Float32Array(3000)

  for (let i = 0; i < 3000; i++) {
    positions[i] = (Math.random() - 0.5) * 10
  }

  return (
    <Points positions={positions} stride={3}>
      <PointMaterial transparent color="#C9A84C" size={0.03} depthWrite={false} />
    </Points>
  )
}

export default function Hero() {
  return (
    <section style={{height:'100vh', position:'relative'}}>
      <Canvas style={{position:'absolute', inset:0}}>
        <ambientLight intensity={1} />
        <Particles />
      </Canvas>

      <div style={{
        position:'relative',
        zIndex:10,
        padding:'0 8%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center'
      }}>
        <motion.p
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          className="gold"
          style={{letterSpacing:'0.4em', marginBottom:'20px'}}
        >
          BONN — GERMANY
        </motion.p>

        <motion.h1
          initial={{opacity:0,y:80}}
          animate={{opacity:1,y:0}}
          transition={{duration:1}}
          style={{
            fontSize:'clamp(4rem,10vw,10rem)',
            lineHeight:'0.95',
            maxWidth:'1100px'
          }}
        >
          Digitale Systeme für Luxusmarken der Zukunft.
        </motion.h1>

        <p style={{
          marginTop:'40px',
          maxWidth:'700px',
          color:'#aaa',
          fontSize:'1.2rem',
          lineHeight:'1.8'
        }}>
          Cinematic digitale Erlebnisse für Architektur, Aviation, KI-Systeme und Luxury Brands.
        </p>
      </div>
    </section>
  )
}