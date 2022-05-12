import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Theme from './Theme'
import TopBar from './components/TopBar'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <TopBar />
      <Container component="main" maxWidth="lg">
        <h1>This is a font test</h1>
      </Container>
    </ThemeProvider>
  )
}

export default App
