import { ThemeProvider } from "styled-components";

import Dashboard from "./views/Dashboard";
import theme from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
