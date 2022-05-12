import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Theme from "./Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
