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
    <Box
      id="contacts"
      sx={{
        width: "100%",
        maxWidth: "100% !important",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "end",
        height: "300px",
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
        <Box sx={{ display: "flex", gap: 3, maxWidth: "500px", flexWrap: "wrap", justifyContent: "center" }}>
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
                  "& :hover *": {
                    color: `#${item.title === "Instagram" ? "e4405f" : item.title === "Facebook" ? "3b5998" : item.title === "LinkedIn" ? "0a66c2" : item.title === "Github" ? "211f1f" : "000"}`,  
                    transition: "0.3s",
                    transformOrigin: "bottom-left",
                    "& span": {
                      color: "#000",
                    }
                  },
                }}
              >
                <Link href={item.link} target="_blank">
                  {item.icon}
                </Link>
                <Typography variant="two">{item.title}</Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Typography variant="two">
        Design and Build by Michael Joseph Santos
      </Typography>
    </Box>
  );
}
