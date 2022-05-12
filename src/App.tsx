import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Theme from "./Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <h1>This is a font test</h1>
    </ThemeProvider>
  );
}

export default App;
