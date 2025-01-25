import { Link, Typography } from "@mui/material";
import React from "react";

// www.hover.dev/components/buttons#draw-outline-button

const LinkButton = ({ link }) => {
  return (
    <DrawOutlineButton>
      <Link
        href={`#${link}`}
        underline="none"
        sx={{
          padding: "12px",
          borderRadius: "16px",
          transition: "0.3s",
        }}
      >
        <Typography
          variant="two"
          sx={{ fontWeight: 100, transition: "0.3s" }}
          gutterBottom
        >
          {link.charAt(0).toUpperCase() + link.slice(1)}
        </Typography>
      </Link>
    </DrawOutlineButton>
  );
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative h-8 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-cyan-600 p-4"
    >
      <span>{children}</span>

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-cyan-600 transition-all delay-200 duration-200 group-hover:w-full" />
    </button>
  );
};

export default LinkButton;
