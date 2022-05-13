import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const commonStyles = { lineHeight: 2, fontSize: 18 }

function Definitions() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(0deg, #180A25 0%, #0A0A0A 100%)',
      }}
    >
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography fontWeight="bold" sx={commonStyles}>
              A couple of definitions
            </Typography>
            <Typography sx={commonStyles}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography fontWeight="bold" sx={commonStyles}>
              A couple of definitions
            </Typography>
            <Typography sx={commonStyles}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography fontWeight="bold" sx={commonStyles}>
              A couple of definitions
            </Typography>
            <Typography sx={commonStyles}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Definitions
