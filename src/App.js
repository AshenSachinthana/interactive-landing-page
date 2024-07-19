import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Paper, Switch } from "@mui/material";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import ContactForm from "./pages/ContactUs";
import Home from "./pages/Home";
// import ClockComp from "./components/Clock";
import Footer from "./components/Footer";

import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";

function App() {
  const [mode, setMode] = useState(true);
  const darkTheme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });

  const handleChange = () => {
    setMode(!mode);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Paper elevation={0} sx={{ height: '100vh' }}>
        <Router>
          <NavigationBar mode={mode} handleChange={handleChange} />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<ContactForm />} />

              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </main>
        </Router>
        <Footer />
      </Paper>
    </ThemeProvider>
  );
}

export default App;

