import * as React from 'react'
import Grid from '@mui/material/Grid'
import InfoIcon from '@mui/icons-material/Info'
import MuiInput from '@mui/material/Input'
import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import NumberFormat, { NumberFormatPropsBase } from 'react-number-format'

interface InputSliderProps {
  defaultValue: number
  minValue: number
  maxValue: number
  label: string
  labelShort: string
  tooltipText?: string
  numberFormatProps?: NumberFormatPropsBase<any>
  sliderStep?: number
}

function InputSlider(props: InputSliderProps) {
  const [value, setValue] = React.useState<
    number | string | Array<number | string>
  >(props.defaultValue)

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue)
  }

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      columnSpacing={{ xs: 0, sm: 2 }}
    >
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
          value={value as any}
          size="small"
          readOnly
          inputProps={{
            min: props.minValue,
            max: props.maxValue,
            'aria-labelledby': `input-slider-${props.labelShort}`,
          }}
          fullWidth
          customInput={MuiInput}
          thousandSeparator
          {...props.numberFormatProps}
        />
      </Grid>
      <Grid item xs={1}>
        <Typography textAlign="center" display={{ xs: 'none', sm: 'block' }}>
          <NumberFormat
            displayType="text"
            value={props.minValue}
            thousandSeparator
            {...props.numberFormatProps}
          />
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Slider
          value={typeof value === 'number' ? value : 0}
          onChange={handleSliderChange}
          aria-labelledby={`input-slider-${props.labelShort}`}
          min={props.minValue}
          max={props.maxValue}
          step={props.sliderStep ? props.sliderStep : 1}
        />
      </Grid>
      <Grid item xs={1}>
        <Typography textAlign="center" display={{ xs: 'none', sm: 'block' }}>
          <NumberFormat
            displayType="text"
            value={props.maxValue}
            thousandSeparator
            {...props.numberFormatProps}
          />
        </Typography>
      </Grid>
    </Grid>
  )
}

export default InputSlider
