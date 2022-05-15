import { useState } from 'react'
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
  const [, { nextStep, setEmployees, setRevenue }] = useBloc(CalculatorCubit)
  const [employeesChanged, setEmployeesChanged] = useState<boolean>(false)
  const [revenueChanged, setRevenueChanged] = useState<boolean>(false)

  const formComplete = () => {
    return employeesChanged && revenueChanged
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
          onValueChange={(values) => {
            setEmployees(Number(values.floatValue))
            setEmployeesChanged(true)
          }}
          isAllowed={(values) => {
            const { formattedValue, floatValue } = values
            return (
              formattedValue === '' ||
              (Number(floatValue) > 0 && Number(floatValue) <= 500000)
            )
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
          onValueChange={(values) => {
            setRevenue(Number(values.floatValue))
            setRevenueChanged(true)
          }}
          isAllowed={(values) => {
            const { formattedValue, floatValue } = values
            return (
              formattedValue === '' ||
              (Number(floatValue) > 0 && Number(floatValue) <= 100000000000)
            )
          }}
        />
        <RoundedButton
          variant="contained"
          size="large"
          onClick={() => {
            nextStep()
          }}
          disabled={!formComplete()}
        >
          Next
        </RoundedButton>
        <CalculatorSteps />
      </Stack>
    </Container>
  )
}

export default BusinessInfoForm
