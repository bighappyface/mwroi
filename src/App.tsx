import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Theme from './Theme'
import TopBar from './components/TopBar'
import Footer from './components/Footer'
import Preamble from './components/Preamble'
import Definitions from './components/Definitions'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <TopBar />
      <Preamble />
      <Definitions />
      <Footer />
    </ThemeProvider>
  )
}

export default App
