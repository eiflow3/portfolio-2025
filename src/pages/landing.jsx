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
    <Box
      component={"section"}
      sx={{
        width: "100%",
        maxWidth: "100% !important",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
        <Link
          href={`https://ashy-rock-0b74c031e.4.azurestaticapps.net`}
          sx={{
            width: {
              xs: "50px",
              sm: "50px",
              md: "50px",
              lg: "50px",
              xl: "50px",
            },
          }}
        >
          <img src="svg/brand.svg" alt="" style={{ width: "100%" }} />
        </Link>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-around",
            gap: {
              xs: 1,
              sm: 4,
              md: 6,
              lg: 8,
              xl: 10,
            },
          }}
        >
          {links.map((link) => {
            return <LinkButton link={link} key={link} />;
          })}
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          width: {
            xs: "80%",
            sm: "80%",
            md: "80%",
            lg: "50%",
            xl: "50%",
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          viewport={{ once: false }}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
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
      </Box>
    </Box>
  );
}
