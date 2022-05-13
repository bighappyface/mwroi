import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CalculatorSteps from './CalculatorSteps'
import RoundedButton from './RoundedButton'

function BusinessInfoForm() {
  return (
    <Container maxWidth="sm">
      <Stack alignItems="center" spacing={3}>
        <Typography component="h2" variant="h5">
          Business Information
        </Typography>
        <TextField id="employees" label="Number of Employees" variant="outlined" fullWidth />
        <TextField id="revenue" label="Annual Revenue" variant="outlined" fullWidth />
        <RoundedButton variant="contained" size="large">
          Next
        </RoundedButton>
        <CalculatorSteps />
      </Stack>
    </Container>
  )
}

export default BusinessInfoForm
