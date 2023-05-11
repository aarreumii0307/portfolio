import { Children } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
// import Header from "./layouts/main/header/Header";
import Main from "./layouts/main/Main";
import Footer from "./layouts/main/footer/Footer";
import Navbar from "./nav/Navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
