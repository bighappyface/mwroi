import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CalculatorSteps from './CalculatorSteps'
import InputSlider from './InputSlider'
import RoundedButton from './RoundedButton'
import { useBloc } from '../state/state'
import CalculatorCubit from '../state/CalculatorCubit'

function ServiceDeskInfoForm() {
  const [state, { nextStep }] = useBloc(CalculatorCubit)
  return (
    <Container maxWidth="sm">
      <Stack alignItems="center" spacing={3}>
        <Typography component="h2" variant="h5">
          Service Desk Information
        </Typography>
        <InputSlider
          defaultValue={40}
          minValue={0}
          maxValue={100}
          label="Average Ticket Resolution Time (Hrs)"
          labelShort="ticket-time"
          tooltipText="The average number of hours to resolve a ticket"
        />
        <InputSlider
          defaultValue={100000}
          minValue={500}
          maxValue={500000}
          label="Annual Ticket Volume"
          labelShort="ticket-volume"
          tooltipText="The typical number of tickets received in a year"
          sliderStep={500}
        />
        <InputSlider
          defaultValue={25}
          minValue={0}
          maxValue={100}
          label="Cost Per Ticket"
          labelShort="ticket-cost"
          tooltipText="The average cost to the company for each ticket received"
          numberFormatProps={{ prefix: '$' }}
        />
        <RoundedButton
          variant="contained"
          size="large"
          onClick={() => {
            nextStep()
          }}
        >
          What's my ROI?
        </RoundedButton>
        <CalculatorSteps activeStep={state.activeStep} />
      </Stack>
    </Container>
  )
}

export default ServiceDeskInfoForm
