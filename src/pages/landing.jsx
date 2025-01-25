import {
  Typography,
  Container,
  Box,
  AppBar,
  Toolbar,
  Link,
} from "@mui/material";

import LinkButton from "../components/link-buttton";

const links = ["about", "projects", "contacts"];

export default function Landing() {
  return (
    <Container
      sx={{
        width: "100%",
        maxWidth: "100% !important",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        padding: "0 !important",
      }}
    >
      <AppBar
        position="static"
        sx={{
          width: "100%",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          backgroundColor: "transparent",
          mb: 20,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-around",
            gap: 10,
            paddingRight: "100px !important",
          }}
        >
          {links.map((link) => {
            return <LinkButton link={link} />;
          })}
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          height: "100%",
        }}
      >
        <Typography variant="three" gutterBottom>
          Hi, my name is
          <br />
        </Typography>
        <Typography
          variant="eight"
          sx={{
            fontWeight: "800",
            pl: 10,
            color: "#748d92",
            textShadow: "4px 4px 2px #000",  
            letterSpacing: "0.1em",
          }}
          gutterBottom
        >
          Michael Joseph T. Santos
          <br />
        </Typography>
        <Typography variant="six" sx={{ fontWeight: "600" }} gutterBottom>
          I enjoy crafting software solutions that improve people's lives.
          <br />
        </Typography>
        <Typography
          variant="three"
          sx={{ display: "flex", fontWeight: "300", width: "80%" }}
          gutterBottom
        >
          I'm a senior college student aspiring to engineer intelligent
          applications, leveraging AI and machine learning. Currently, I'm
          focused on exploring and applying these technologies to create
          impactful digital experiences.
          <br />
        </Typography>
      </Box>
    </Container>
  );
}
