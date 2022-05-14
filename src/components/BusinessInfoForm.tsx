import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CalculatorSteps from './CalculatorSteps'
import RoundedButton from './RoundedButton'
import NumberFormat from 'react-number-format'
import { useBloc } from '../state/state'
import CalculatorCubit from '../state/CalculatorCubit'

function BusinessInfoForm() {
  const [state, { nextStep, setEmployees, setRevenue }] = useBloc(
    CalculatorCubit,
  )

  const handleEmployeesChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setEmployees(event.target.value)
  }

  const handleRevenueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRevenue(event.target.value)
  }

  return (
    <Container maxWidth="sm">
      <Stack alignItems="center" spacing={3}>
        <Typography component="h2" variant="h5">
          Business Information
        </Typography>
        <NumberFormat
          id="employees"
          label="Number of Employees"
          fullWidth
          customInput={TextField}
          thousandSeparator
          isNumericString
          onChange={handleEmployeesChange}
          isAllowed={(values) => {
            const { formattedValue, floatValue } = values
            return formattedValue === '' || Number(floatValue) <= 500000
          }}
        />
        <NumberFormat
          id="revenue"
          label="Annual Revenue"
          fullWidth
          customInput={TextField}
          thousandSeparator
          isNumericString
          prefix={'$'}
          onChange={handleRevenueChange}
          isAllowed={(values) => {
            const { formattedValue, floatValue } = values
            return formattedValue === '' || Number(floatValue) <= 100000000000
          }}
        />
        <RoundedButton
          variant="contained"
          size="large"
          onClick={() => {
            nextStep()
          }}
        >
          Next
        </RoundedButton>
        <CalculatorSteps />
      </Stack>
    </Container>
  )
}

export default BusinessInfoForm
