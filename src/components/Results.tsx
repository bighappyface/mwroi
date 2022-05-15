import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import RoundedButton from './RoundedButton'
import NumberFormat from 'react-number-format'
import { useBloc } from '../state/state'
import CalculatorCubit from '../state/CalculatorCubit'
import { createRef } from 'react'

const commonTextStyles = { lineHeight: 2, fontSize: 18 }

function Results() {
  const [
    ,
    {
      resetSteps,
      getTicketsResolved,
      getTicketsAccelerated,
      getProductiveHoursSaved,
      getWaitHoursSaved,
      getOperationalAcceleration,
      getOperationalResolution,
      getExperienceAcceleration,
      getExperienceResolution,
      getTotalBenefit,
    },
  ] = useBloc(CalculatorCubit)

  const impactRows = [
    ['Tickets Resolved', getTicketsResolved()],
    ['Tickets Accelerated', getTicketsAccelerated()],
    [
      'Productive Hours Saved per Employee',
      getProductiveHoursSaved().toFixed(1),
    ],
    ['Total Wait Hours Saved per Employee	', getWaitHoursSaved().toFixed(1)],
  ]

  const benefitOpsRows = [
    ['Resolution', getOperationalResolution()],
    ['Acceleration', getOperationalAcceleration()],
  ]

  const benefitExpRows = [
    ['Resolution', getExperienceResolution()],
    ['Acceleration', getExperienceAcceleration()],
  ]

  const topRef = createRef()

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Box ref={topRef}></Box>
        <Typography textAlign="center" component="h2" variant="h5">
          What's My ROI?
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography component="h3" variant="h5" color="primary.main">
          Year 1 Ticket Impact
        </Typography>
        <Typography sx={commonTextStyles}>
          Some sort of vizualization, graphic, number, etc. goes here
          represenating the money the person would be saving with Moveworks.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TableContainer component={Paper}>
          <Table aria-label="Year 1 Ticket Impact Details">
            <TableBody>
              {impactRows.map((row, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Typography fontWeight="bold">{row[0]}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      <NumberFormat
                        displayType="text"
                        value={row[1]}
                        thousandSeparator
                      />
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography component="h3" variant="h5" color="primary.main">
          Year 1 Benefit
        </Typography>
        <Typography sx={commonTextStyles}>
          Some sort of vizualization, graphic, number, etc. goes here
          represenating the money the person would be saving with Moveworks.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography fontWeight="bold" sx={{ mb: 1, ...commonTextStyles }}>
          Operational Efficiency
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="Year 1 Benefit Details - Operational Efficiency">
            <TableBody>
              {benefitOpsRows.map((row) => (
                <TableRow key={`Operational Efficiency ${row[0]}`}>
                  <TableCell>
                    <Typography fontWeight="bold">{row[0]}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      <NumberFormat
                        displayType="text"
                        value={row[1]}
                        thousandSeparator
                        prefix="$"
                      />
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography
          fontWeight="bold"
          sx={{ mt: 2, mb: 1, ...commonTextStyles }}
        >
          Employee Experience
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="Year 1 Benefit Details - Employee Experience">
            <TableBody>
              {benefitExpRows.map((row) => (
                <TableRow key={`Employee Experience ${row[0]}`}>
                  <TableCell>
                    <Typography fontWeight="bold">{row[0]}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      <NumberFormat
                        displayType="text"
                        value={row[1]}
                        thousandSeparator
                        prefix="$"
                      />
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography
          fontWeight="bold"
          sx={{ mt: 2, mb: 1, ...commonTextStyles }}
        >
          Total
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="Year 1 Benefit Details - Total Benefit">
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography fontWeight="bold">Total</Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    <NumberFormat
                      displayType="text"
                      value={getTotalBenefit()}
                      thousandSeparator
                      prefix="$"
                    />
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} textAlign="center">
        <Box sx={{pt: 3}}>
        <RoundedButton
          variant="outlined"
          size="large"
          onClick={() => {
            if (topRef.current) {
              (topRef as any).current.scrollIntoView();
            }
            resetSteps()
          }}
        >
          Start Over
        </RoundedButton>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Results
