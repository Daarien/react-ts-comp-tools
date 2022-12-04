import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/styled-components";
import { theme } from "./components/theme";
import MainPage from "./pages/Main";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </ThemeProvider>
  );
}
