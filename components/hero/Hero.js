import { Suspense } from 'react'
import Link from 'next/link'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import CustomButton from '../CustomButton'
import Header from '../header/Header'
import Model from './Model'
import { motion } from 'framer-motion'

const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
      staggerChildren: 0.4,
    },
  },
}

export default function Hero({ animationEnd }) {
  return (
    <Box sx={{ backgroundColor: '#0A192F' }} id='home'>
      {animationEnd && <Header />}
      <Container maxWidth='lg'>
        <Box sx={{ height: 500, mb: -5 }}>
          <Canvas orthographic camera={{ zoom: 80, position: [0, 4, 4] }}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
            <pointLight
              position={[-10, 0, -20]}
              color='lightblue'
              intensity={2.5}
            />
            <pointLight position={[0, -10, 0]} intensity={1.5} />
            <Suspense fallback={null}>
              <Model />
              <OrbitControls enableZoom={false} />
            </Suspense>
          </Canvas>
        </Box>
        {animationEnd && (
          <Box sx={{ textAlign: 'center', zIndex: '10' }}>
            <motion.div
              initial='hidden'
              animate='visible'
              variants={headingVariants}
            >
              <motion.div variants={headingVariants}>
                <Typography
                  variant='h1'
                  color='#CCD6F6'
                  sx={{
                    fontWeight: { xs: '700' },
                    fontSize: {
                      xs: 'h4.fontSize',
                      sm: 'h3.fontSize',
                      lg: 'h2.fontSize',
                    },
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  I&#39;m Mazen Elabd
                </Typography>
              </motion.div>
              <motion.div variants={headingVariants}>
                <Typography
                  variant='h5'
                  sx={{
                    fontWeight: '700',
                  }}
                  color='#8892B0'
                  mt={1.5}
                  mb={2.5}
                >
                  Full Stack Web Developer
                </Typography>
              </motion.div>
              <motion.div variants={headingVariants}>
                <Link href='#contact'>
                  <a>
                    <CustomButton text={"let's talk!"} />
                  </a>
                </Link>
              </motion.div>
            </motion.div>
          </Box>
        )}
      </Container>
    </Box>
  )
}
