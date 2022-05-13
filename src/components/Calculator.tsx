import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import BusinessInfoForm from './BusinessInfoForm'
import ServiceDeskInfoForm from './ServiceDeskInfoForm'

function Calculator() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(0deg, #180A25 0%, #0A0A0A 100%)',
      }}
    >
      <Container maxWidth="md" sx={{ py: 8 }}>
        <BusinessInfoForm />
        <br /><br /><br /><br />
        <ServiceDeskInfoForm />
      </Container>
    </Box>
  )
}

export default Calculator
