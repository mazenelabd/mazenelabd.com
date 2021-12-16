import { useState } from 'react'
import Contact from '../components/contact/Contact'
import Footer from '../components/Footer'
import Hero from '../components/hero/Hero'
import Layout from '../components/Layout'
import Projects from '../components/projects/Projects'
import Resume from '../components/resume/Resume'
import Logo from '../components/Logo'

export default function Home() {
  const [animationEnd, setAnimationEnd] = useState(false)

  return (
    <Layout>
      {!animationEnd && (
        <div
          style={{
            position: 'fixed',
            height: '100vh',
            width: '100vw',
            backgroundColor: '#0A192F',
            color: '#CCD6F6',
            zIndex: '9999',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Logo
            setAnimationEnd={setAnimationEnd}
            color='inherit'
            sx={{ height: 150, width: 150 }}
          />
        </div>
      )}
      <Hero animationEnd={animationEnd} />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </Layout>
  )
}
