import { Typography, Container, Box, List, ListItem } from "@mui/material";

import frame7 from "/frame7.webp";
import one from "/1.webp";
import two from "/2.webp";
import three from "/3.webp";
import four from "/4.webp";
import five from "/5.webp";
import six from "/6.webp";
import seven from "/7.webp";
import zIndex from "@mui/material/styles/zIndex";
import { AspectRatio } from "@mui/icons-material";

export default function Projects() {
  const softwares = [
    "Flask",
    "React",
    "GeminiAPI",
    "Pandas",
    "ChromaDB",
    "LangChain",
    "MongoDB",
    "LLama3",
  ];

  const items = [
    {
      description: "Login",
      img: one,
    },
    {
      description: "Admin Interface",
      img: two,
    },
    {
      description: "User Interface",
      img: three,
    },
    {
      description: "Analytics",
      img: four,
    },
    {
      description: "Feedback",
      img: five,
    },
    {
      description: "Repository",
      img: six,
    },
  ];
  return (
    <Container
      id="projects"
      sx={{
        width: "100%",
        maxWidth: "100% !important",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 !important",
        gap: 10,
        mb: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          width: "calc(50% + 16px)",
          height: "100%",
          gap: 2,
          paddingTop: "50px",
        }}
      >
        <Typography
          variant="two"
          component={"h1"}
          sx={{ alignSelf: "start", position: "relative", right: "6%" }}
        >
          [o2]
        </Typography>
        <Typography
          variant="three"
          component={"h1"}
          sx={{ fontWeight: "600", alignSelf: "start", mb: 2 }}
          gutterBottom
        >
          PROJECTS
        </Typography>
        <Typography variant="two" gutterBottom>
          Featured Project
        </Typography>
        <Typography variant="four" sx={{ fontWeight: 500 }} gutterBottom>
          SEVI
        </Typography>
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: 2,
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                width: "80%",
                bgcolor: "#D3D9D4",
                p: 4,
                borderRadius: 2,
              }}
            >
              <Typography variant="two" sx={{ color: "#000" }} gutterBottom>
                SEVI is a dynamic FAQ chatbot for Cavite State University. This
                RAG application uses Python for generative AI, React for the
                user interface, and is deployed on Azure, providing instant
                answers by leveraging retrieved information.
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Box
                sx={{ width: "40%", display: "flex", flexWrap: "wrap", gap: 2 }}
              >
                {softwares.map((item, index) => {
                  return (
                    <Typography
                      variant="two"
                      component="h1"
                      sx={{ fontWeight: 300, width: "70px", ml: "auto" }}
                      key={index}
                    >
                      {item}
                    </Typography>
                  );
                })}
              </Box>
            </Box>
          </Box>
          <img
            src={frame7}
            alt=""
            style={{
              width: "400px",
              ObjectFit: "contain",
              borderRadius: "20px",
              position: "relative ",
              bottom: "140px",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {items.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{ width: "30%", display: "flex", flexDirection: "column" }}
            >
              <img src={item.img} />
              <Typography variant="two">{item.description}</Typography>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
}
