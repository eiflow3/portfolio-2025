import { Typography, Container, Box, List, ListItem } from "@mui/material";
import pic from "/pic.png";
export default function About() {
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
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            width: "30%",
            height: "100%",
          }}
        >
          <Typography variant="three" sx={{ fontWeight: "500" }} gutterBottom>
            About Me
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
              listStyleType: "disc",
              pl: 2,
              "& .MuiListItem-root": {
                display: "list-item",
                color: "#fff",
              },
            }}
          >
            <ListItem>
              <Typography variant="two">React</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="two">Node.js</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="two">Python Flask</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="two">Figma</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="two">HTML</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="two">CSS</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="two">JavaScript (ES6+)</Typography>
            </ListItem>
          </List>
        </Box>
        <img src={pic} style={{ height: "350px" }} />
      </Box>
    </Container>
  );
}
