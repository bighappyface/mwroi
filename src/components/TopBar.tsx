import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import RoundedButton from './RoundedButton'

function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: 'transparent',
          boxShadow: 'none',
        }}
      >
        <Container maxWidth="md">
          <Toolbar sx={{ flexWrap: 'wrap' }} disableGutters={true}>
            <svg
              width="32"
              height="35"
              viewBox="0 0 65 71"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0L32.5 32.5H0V0Z" fill="#9125FB"></path>
              <path d="M32.5 0L65 32.5H32.5V0Z" fill="#9125FB"></path>
              <path
                d="M0 70.9092L32.5 38.4092H0V70.9092Z"
                fill="#450D7C"
              ></path>
              <path
                d="M32.5 70.9092L65 38.4092H32.5V70.9092Z"
                fill="#450D7C"
              ></path>
            </svg>
            <Typography sx={{ fontWeight: 'bold', fontSize: '1.25rem', ml: 1 }}>
              Moveworks
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <RoundedButton
              variant="contained"
              href="https://www.moveworks.com/request-demo"
            >
              Demo Request
            </RoundedButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default TopBar
