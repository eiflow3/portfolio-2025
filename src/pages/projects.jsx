import {
  Typography,
  Container,
  Box,
  List,
  ListItem,
  Tooltip,
} from "@mui/material";

import { motion } from "framer-motion";

import frame7 from "/logo-light.webp";
import one from "/1.webp";
import two from "/2.webp";
import three from "/3.webp";
import four from "/4.webp";
import five from "/5.webp";
import six from "/6.webp";
import seven from "/7.webp";
import zIndex from "@mui/material/styles/zIndex";
import { AspectRatio } from "@mui/icons-material";

import Flask from "/svg/flask.svg";
import React from "/svg/react.svg";
import GeminiAPI from "/svg/gemini.svg";
import Pandas from "/svg/pandas.svg";
import ChromaDB from "/svg/chromadb.svg";
import LangChain from "/svg/langchain.svg";
import MongoDB from "/svg/mongodb.svg";
import LLama3 from "/svg/llama.svg";
import Mui from "/svg/mui.svg";

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
    "Mui",
  ];

  const icons = [
    Flask,
    React,
    GeminiAPI,
    Pandas,
    ChromaDB,
    LangChain,
    MongoDB,
    LLama3,
    Mui,
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
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              viewport={{ once: true, threshold: 0.5 }}
              style={{
                width: "100%",
                backgroundColor: "#D3D9D4",
                padding: 32,
                borderRadius: 16,
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              <img src={frame7} alt="" style={{ width: "100px" }} />
              <Typography variant="two" sx={{ color: "#000" }} gutterBottom>
                SEVI is a dynamic FAQ chatbot for Cavite State University. This
                RAG application uses Python for generative AI, React for the
                user interface, and is deployed on Azure, providing instant
                answers by leveraging retrieved information.
              </Typography>
              <Typography variant="two" component={'h1'} sx={{ color: "#000", textAlign: "end" }} gutterBottom>
                Technologies Used
              </Typography>
              <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
                {icons.map((icon, index) => {
                  return (
                    <Tooltip title={softwares[index]} key={index}>
                      <img src={icon} alt="" style={{ height: "30px" }} />
                    </Tooltip>
                  );
                })}
              </Box>
            </motion.div>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            ></Box>
          </Box>
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
              <motion.img
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                viewport={{ once: false }}
                src={item.img}
              />
              <Typography variant="two">{item.description}</Typography>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
}
