import { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import BusinessInfoForm from './BusinessInfoForm'
import Results from './Results'
import ServiceDeskInfoForm from './ServiceDeskInfoForm'
import { useBloc, observer } from '../state/state'
import CalculatorCubit from '../state/CalculatorCubit'
import { BlocObserver } from 'blac'

function Calculator() {
  const [state] = useBloc(CalculatorCubit)
  const [activeStep, setActiveStep] = useState<number>(state.activeStep)
  observer.onChange = (bloc, event) => setActiveStep(bloc.state.activeStep);

  return (
    <Box
      sx={{
        background: 'linear-gradient(0deg, #180A25 0%, #0A0A0A 100%)',
      }}
    >
      <Container maxWidth="md" sx={{ py: 8 }}>
        {activeStep == 0 &&
          <BusinessInfoForm />
        }
        {activeStep == 1 &&
          <ServiceDeskInfoForm />
        }
        {activeStep == 2 &&
          <Results />
        }
      </Container>
    </Box>
  )
}

export default Calculator
