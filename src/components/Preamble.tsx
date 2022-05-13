import Box from '@mui/system/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import BgImage from '../img/solutions-header-HR.jpeg'

function Preamble() {
  return (
    <Box
      sx={{
        backgroundColor: '#FFF',
        backgroundImage: `url(${BgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <Container sx={{ py: 5 }} maxWidth="md">
        <Grid container>
          <Grid item xs={12} md={8}>
            <Stack spacing={3}>
              <Typography
                component="h1"
                variant="h4"
                fontWeight="bold"
                color="#8303E1"
              >
                See your ROI with Moveworks
              </Typography>
              <Typography
                sx={{ lineHeight: 2, fontSize: 18 }}
                color="common.black"
              >
                Moveworks is the first employee experience platform that uses AI
                to solve issues and prevent problems at work. It automatically
                resolves requests, communicates changes, and shows your team
                what to fix next. See how we can save you money.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}></Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Preamble
