'use client'

import { motion } from 'framer-motion'

import { styles } from '@/styles'
import dynamic from 'next/dynamic'
import ComputersCanvas from '../canvas/Computers'

const View = dynamic(() => import('@/components/canvas').then((mod) => mod.View), {
  ssr: false,
})

const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <ComputersCanvas />

      <div
        className={`absolute inset-0 top-[120px]  mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='mt-5 flex flex-col items-center justify-center'>
          <div className='h-5 w-5 rounded-full bg-brand' />
          <div className='to-[rgba(255, 255, 10)] h-40 w-1 bg-gradient-to-b from-brand sm:h-80' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, 我是 <span className='text-brand'>Joshua</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            一名全栈开发工程师
            <br />
            TypeScript爱好者，DevOps，区块链从业者
          </p>
        </div>
      </div>

      <div className='absolute bottom-12 z-10 flex w-full items-center justify-center md:bottom-16'>
        <a href='#about' aria-label='scroll'>
          <div className='flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-light p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='mb-1 h-3 w-3 rounded-full bg-light'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
