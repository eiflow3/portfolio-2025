import { Typography, Container, Box, List, ListItem } from "@mui/material";
import { motion } from "framer-motion";
import pic from "/pic.webp";
export default function About() {
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript (ES6+)",
    "React",
    "Python (Flask)",
    "Node.js",
    "Figma",
  ];
  return (
    <Container
      id="about"
      sx={{
        width: "100%",
        maxWidth: "100% !important",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: "0 !important",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "500px",
          alignItems: "start",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          viewport={{ once: false }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            width: "30%",
            height: "100%",
          }}
        >
          <Typography variant="two" sx={{ position: "relative", right: "10%" }}>
            [o1]
          </Typography>
          <Typography variant="three" sx={{ fontWeight: "600" }} gutterBottom>
            ABOUT ME
          </Typography>
          <Typography variant="two" gutterBottom>
            Hello! My name is Michael Joseph Santos, and I'm fascinated by
            building interactive experiences on the web. My interest sparked in
            my second year of college when I dove into recreating the Instagram
            UI using just HTML and CSS – it was a deep dive into the power of
            front-end technologies. <br />
            <br />
            Fast-forward to today, and as a final-year student, I've seen my
            skills grow exponentially. Now, I'm actively building applications
            and focusing on integrating AI into the projects I'm creating. This
            is where I feel I can make a real impact.
            <br />
            <br /> Here are a few of the technologies I've been leveraging
            lately:
          </Typography>
          <List
            sx={{
              width: "100%",
              listStyleType: "disc",
              display: "flex",
              flexWrap: "wrap",
              pl: 2,
              "& .MuiListItem-root": {
                display: "list-item",
                color: "#fff",
              },
            }}
          >
            {technologies.map((tech, index) => {
              return (
                <ListItem sx={{ width: "40%" }} key={index}>
                  <Typography variant="two">{tech}</Typography>
                </ListItem>
              );
            })}
          </List>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          viewport={{ once: false }}
          src={pic}
          style={{ width: "20%", aspectRatio: "1/1" }}
        />
      </Box>
    </Container>
  );
}
