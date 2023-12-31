import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "styled-components";
import { lightTheme, darktheme } from "./styles/theme";
import { GlobalStyles } from "./styles/Global.styles";
import ThemeContextProvider, { useThemeContext } from "./context/ThemeContext";

function App() {
  const{myTheme}= useThemeContext()
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <AppRouter />
      </ThemeProvider>
      </>
    
  );
}

export default App;
