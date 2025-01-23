import ThemeProviderWrapper from "./mui-theme";
import "./index.css";
import { Container } from "@mui/material";
import Landing from "./pages/landing";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contacts from "./pages/contact";

// components

function App() {
  return (
    <ThemeProviderWrapper>
      <Container
        sx={{
          width: "100%",
          maxWidth: "100% !important",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 !important",
        }}
      >
        <Landing />
        <About />
        <Projects />
        <Contacts/>
      </Container>
    </ThemeProviderWrapper>
  );
}

export default App;
