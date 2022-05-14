import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import NumberFormat from 'react-number-format'

const commonTextStyles = { lineHeight: 2, fontSize: 18 }

const impactRows = [
  ['Tickets Resolved', 20000],
  ['Tickets Accelerated', 15000],
  ['Productive Hours Saved per Employee', 4.6],
  ['Total Wait Hours Saved per Employee	', 92],
]

const benefitOpsRows = [
  ['Resolution', 500000],
  ['Acceleration', 37500],
]

const benefitExpRows = [
  ['Resolution', 500000],
  ['Acceleration', 37500],
]

function Results() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Typography fontWeight="bold" sx={commonTextStyles}>
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
        <Typography fontWeight="bold" sx={commonTextStyles}>
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
          <Table aria-label="Year 1 Benefit Details">
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
          <Table aria-label="Year 1 Benefit Details">
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
      </Grid>
    </Grid>
  )
}

export default Results
