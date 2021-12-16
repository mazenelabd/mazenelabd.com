import { Box } from '@mui/system'
import { Container, Typography } from '@mui/material'
import Sphere from './Sphere'
import CustomButton from '../CustomButton'

export default function Resume() {
  return (
    <Box sx={{ backgroundColor: '#0A192F' }} id='resume'>
      <Container maxWidth='lg'>
        <Typography
          variant='h4'
          sx={{
            color: '#CCD6F6',
            pt: 5,
            pb: 2,
            textAlign: 'center',
            fontWeight: '700',
            textDecoration: 'underline',
          }}
        >
          Skills &amp; Resume
        </Typography>
        <Box sx={{ height: { xs: 350, sm: 500 } }}>
          <Sphere />
        </Box>
        <Box sx={{ textAlign: 'center', pb: 10 }}>
          <a
            href='/Mazen-Elabd.pdf'
            alt='Full Resume'
            target='_blank'
            rel='noopener noreferrer'
          >
            <CustomButton text='Resume' />
          </a>
        </Box>
      </Container>
    </Box>
  )
}
