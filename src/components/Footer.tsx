import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          &copy;{new Date().getFullYear()} Moveworks, Inc.
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
