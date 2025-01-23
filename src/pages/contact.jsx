import {
  Typography,
  Container,
  Box,
  List,
  ListItem,
  Link,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";

export default function Contacts() {
  const items = [
    {
      title: "Github",
      link: "https://github.com/eiflow3",
      icon: <GitHubIcon sx={{ color: "#fff" }} />,
    },
    {
      title: "Facebook",
      link: "https://www.facebook.com/mikelxsantos",
      icon: <FacebookIcon sx={{ color: "#fff" }} />,
    },
    {
      title: "GMail",
      link: "mmakelsantoss@gmail.com",
      icon: <GoogleIcon sx={{ color: "#fff" }} />,
    },
    {
      title: "Instagram",
      link: "#",
      icon: <InstagramIcon sx={{ color: "#fff" }} />,
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/michael-joseph-santos-0bbb7a293/",
      icon: <LinkedInIcon sx={{ color: "#fff" }} />,
    },
  ];
  return (
    <Container
      id="contacts"
      sx={{
        width: "100%",
        maxWidth: "100% !important",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "end",
        height: "500px",
        padding: "0 !important",
        gap: 10,
        paddingBottom: "20px !important",
        bgcolor: "#124e66",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
        }}
      >
        <Typography variant="three" sx={{ fontWeight: 500 }}>
          Get In Touch
        </Typography>
        <Box sx={{ display: "flex", gap: 3 }}>
          {items.map((item, index) => {
            return (
              <Box
                key={index}
                sx={{
                  width: "100px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link href={item.link} target="_blank">{item.icon}</Link>
                <Typography>{item.title}</Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Typography variant="two">
        Design and Build by Michael Joseph Santos
      </Typography>
    </Container>
  );
}
