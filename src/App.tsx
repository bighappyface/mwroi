import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Theme from './Theme'
import TopBar from './components/TopBar'
import Footer from './components/Footer'
import Preamble from './components/Preamble'
import Definitions from './components/Definitions'
import Calculator from './components/Calculator'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <TopBar />
      <Preamble />
      <Calculator />
      <Definitions />
      <Footer />
    </ThemeProvider>
  )
}

export default App
