import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CalculatorSteps from './CalculatorSteps'
import InputSlider from './InputSlider'
import RoundedButton from './RoundedButton'

function ServiceDeskInfoForm() {
  return (
    <Container maxWidth="sm">
      <Stack alignItems="center" spacing={3}>
        <Typography component="h2" variant="h5">
          Service Desk Information
        </Typography>
        <InputSlider
          defaultValue={50}
          minValue={0}
          maxValue={100}
          label="Average Ticket Resolution Time (Hrs)"
          labelShort="ticket-resolution-time"
          tooltipText="Help is on the way"
        />
        <RoundedButton variant="contained" size="large">
          What's my ROI?
        </RoundedButton>
        <CalculatorSteps activeStep={1} />
      </Stack>
    </Container>
  )
}

export default ServiceDeskInfoForm
