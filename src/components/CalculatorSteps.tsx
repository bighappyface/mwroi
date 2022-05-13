import Box from '@mui/material/Box'
import Step from '@mui/material/Step'
import Stepper, { StepperProps } from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'

const steps = ['Business Information', 'Service Desk Info', 'Results']

function CalculatorSteps(props: StepperProps) {
  return (
    <Box sx={{ width: '100%' }}>
    <Stepper {...props} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
    </Box>
  )
}

export default CalculatorSteps
