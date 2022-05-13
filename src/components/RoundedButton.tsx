import Button, { ButtonProps } from '@mui/material/Button'

function RoundedButton(props: ButtonProps) {
  return <Button {...props} sx={{ borderRadius: 6, textTransform: 'none' }} />
}

export default RoundedButton
