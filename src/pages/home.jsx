import { Container } from "@mui/material";
import Landing from "./landing";
import About from "./about"
import Projects from "./projects";
import Contacts from "./contact";

// components

export default function Home() {
  return (
      <Container
        sx={{
          width: "100%",
          maxWidth: "100% !important",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 !important",
          overflowX: "hidden",
        }}
      >
        <Landing />
        <About />
        <Projects />
        <Contacts/>
      </Container>
  );
}

