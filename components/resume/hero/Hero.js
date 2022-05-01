import { Suspense } from 'react'
import { Container } from '@mui/material'
import { Box } from '@mui/system'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Model from './Model'
import { Loader } from '@react-three/drei'

export default function Hero() {
  return (
    <Box sx={{ backgroundColor: '#0A192F' }} id='home'>
      <Loader />
      <Container maxWidth='lg'>
        <Box
          sx={{
            height: 500,
            mb: -5,
          }}
        >
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
      </Container>
    </Box>
  )
}
