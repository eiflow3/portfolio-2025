import {
  Typography,
  Container,
  Box,
  AppBar,
  Toolbar,
  Link,
} from "@mui/material";

import { motion } from "framer-motion";

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
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "transparent",
          p: 4,
          mb: 20,
        }}
      >
        <Link href={`https://ashy-rock-0b74c031e.4.azurestaticapps.net`}>
          <img src="svg/brand.svg" alt="" style={{ width: "50px" }} />
        </Link>
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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        viewport={{ once: false }}
        style={{
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
            color: "#D3D9D4 ",
            textShadow: "4px 4px 2px #000",
            letterSpacing: "0.1em",
            // fontFamily: 'Special Elite',
          }}
          gutterBottom
        >
          MICHAEL JOSEPH T. SANTOS
          <br />
        </Typography>
        <Typography variant="six" sx={{ fontWeight: "600" }} gutterBottom>
          I enjoy crafting software solutions that improve people's lives.
          <br />
        </Typography>
        <Typography
          variant="three"
          sx={{
            display: "flex",
            // fontFamily: "Reenie Beanie",
            fontWeight: "300",
            width: "80%",
          }}
          gutterBottom
        >
          I'm a senior college student aspiring to engineer intelligent
          applications, leveraging AI and machine learning. Currently, I'm
          focused on exploring and applying these technologies to create
          impactful digital experiences.
          <br />
        </Typography>
      </motion.div>
    </Container>
  );
}
