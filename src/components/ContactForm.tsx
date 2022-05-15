import { useState } from 'react'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import RoundedButton from './RoundedButton'
import validator from 'validator'

function ContactForm() {
  const [name, setName] = useState<string>('')
  const [company, setCompany] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [validEmail, setValidEmail] = useState<boolean>(true)

  const formComplete = () => {
    return !name || !company || !email || !validEmail
  }

  const validateEmail = (value: string) => {
    setValidEmail(
      validator.isEmail(value, {
        host_blacklist: ['gmail.com', 'hotmail.com', 'outlook.com'],
      }),
    )
  }

  return (
    <Container maxWidth="sm">
      <Stack alignItems="center" spacing={3}>
        <Typography component="h2" variant="h5">
          Interested In Learning More?
        </Typography>
        <TextField
          id="name"
          name="name"
          label="Name"
          fullWidth
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <TextField
          id="company"
          name="company"
          label="Company"
          fullWidth
          onChange={(e) => setCompany(e.target.value)}
          value={company}
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          fullWidth
          onChange={(e) => {
            validateEmail(e.target.value)
            setEmail(e.target.value)
          }}
          value={email}
          error={!validEmail}
        />
        <RoundedButton
          variant="contained"
          size="large"
          disabled={formComplete()}
        >
          Contact!
        </RoundedButton>
      </Stack>
    </Container>
  )
}

export default ContactForm
