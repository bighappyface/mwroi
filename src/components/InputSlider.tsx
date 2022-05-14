import * as React from 'react'
import Grid from '@mui/material/Grid'
import InfoIcon from '@mui/icons-material/Info'
import MuiInput from '@mui/material/Input'
import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import NumberFormat from 'react-number-format'

interface InputSliderProps {
  defaultValue: number
  minValue: number
  maxValue: number
  label: string
  labelShort: string
  tooltipText?: string
}

function InputSlider(props: InputSliderProps) {
  const [value, setValue] = React.useState<
    number | string | Array<number | string>
  >(props.defaultValue)

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue)
  }

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={8}>
        <Stack direction="row" spacing={1}>
          <Typography id={`input-slider-${props.labelShort}`}>
            {props.label}
          </Typography>
          {props.tooltipText && (
            <Tooltip title={props.tooltipText} placement="top" arrow>
              <InfoIcon />
            </Tooltip>
          )}
        </Stack>
      </Grid>
      <Grid item xs={4}>
        <NumberFormat
          value={(value as any)}
          size="small"
          readOnly
          inputProps={{
            step: 1,
            min: props.minValue,
            max: props.maxValue,
            type: 'number',
            'aria-labelledby': `input-slider-${props.labelShort}`,
          }}
          fullWidth
          customInput={MuiInput}
          thousandSeparator
          isNumericString
        />
      </Grid>
      <Grid item xs={1}>
        <Typography textAlign="center">{props.minValue}</Typography>
      </Grid>
      <Grid item xs={10}>
        <Slider
          value={typeof value === 'number' ? value : 0}
          onChange={handleSliderChange}
          aria-labelledby={`input-slider-${props.labelShort}`}
        />
      </Grid>
      <Grid item xs={1}>
        <Typography textAlign="center">{props.maxValue}</Typography>
      </Grid>
    </Grid>
  )
}

export default InputSlider
