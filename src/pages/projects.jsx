import { Typography, Container, Box, List, ListItem } from "@mui/material";

import frame7 from "/frame7.png";
import one from "/1.png";
import two from "/2.png";
import three from "/3.png";
import four from "/4.png";
import five from "/5.png";
import six from "/6.png";
import seven from "/2.png";

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
          width: "50%",
          height: "100%",
          gap: 2,
          paddingTop: "50px"
        }}
      >
        <Typography
          variant="three"
          component={"h1"}
          sx={{ fontWeight: "500", alignSelf: "start" }}
          gutterBottom
        >
          Projects I built
        </Typography>
        <Typography variant="two" gutterBottom>
          Featured Project
        </Typography>
        <Typography variant="four" sx={{ fontWeight: 500 }} gutterBottom>
          SEVI
        </Typography>
        <Box sx={{ position: "relative" }}>
          <img
            src={frame7}
            alt=""
            style={{
              borderRadius: "20px",
              position: "absolute",
              zIndex: "0",
              bottom: "-10%",
              right: "55%",
            }}
          />
          <Box
            sx={{
              width: "60%",
              bgcolor: "#D3D9D4",
              p: 4,
              borderRadius: 2,
              position: "relative",
              left: "40%",
            }}
          >
            <Typography variant="two" sx={{ color: "#000" }} gutterBottom>
              SEVI is a dynamic FAQ chatbot for Cavite State University. This
              RAG application uses Python for generative AI, React for the user
              interface, and is deployed on Azure, providing instant answers by
              leveraging retrieved information.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          {softwares.map((item, index) => {
            return (
              <Typography
                variant="two"
                component="h1"
                sx={{ width: "25%", fontWeight: 300 }}
                key={index}
              >
                {item}
              </Typography>
            );
          })}
        </Box>
      </Box>
      <Box sx={{ width: '100%', display: "flex", alignItems: "center", justifyContent: "center", gap: 2, flexWrap: "wrap"}}>
        {items.map((item, index) => {
          return (
            <Box key={index} sx={{ width: "40%", display: "flex" , flexDirection: "column"}}>
              <img src={item.img} />
              <Typography variant="two">{item.description}</Typography>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
}
