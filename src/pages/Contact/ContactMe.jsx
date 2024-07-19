import { Box, TextField } from "@mui/material";
import { Footer } from "../../modal/Footer";
import { useEffect } from "react";

const ContactMe = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="h-full w-full">
      <div className="h-full w-full flex flex-col justify-center items-center bg-black text-white">
        <p className="text-7xl tablet:text-5xl font-League-Gothic">
          CONTACT ME
        </p>
        <p className="text-3xl tracking-[15px] tablet:text-xl tablet:tracking-[5px]">
          SAY HELLO TO ME
        </p>
      </div>
      <div className="w-full h-full flex flex-col justify-start items-center p-20 gap-28 tablet:p-10 tablet:gap-14">
        <div className="flex flex-col justify-start items-start gap-20">
          <p className="text-3xl font-semibold">Contact me</p>
          <div className="flex justify-between items-center gap-10 tablet:flex-col">
            <div className="flex flex-col justify-start items-start">
              <label className="text-lg font-semibold">Name</label>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    width: {
                      xs: "300px",
                      sm: "400px",
                      md: "500px",
                    },
                    display: "flex",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Your Name"
                  variant="standard"
                />
              </Box>
            </div>
            <div className="flex flex-col justify-start items-start">
              <label className="text-lg font-semibold">Email</label>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    width: {
                      xs: "300px",
                      sm: "400px",
                      md: "500px",
                    },
                    display: "flex",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Your Email"
                  variant="standard"
                />
              </Box>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <label className="text-lg font-semibold">Message</label>
          <Box
            component="form"
            sx={{
              "& > :not(style)": {
                width: {
                  xs: "300px",
                  sm: "400px",
                  md: "65rem",
                },
                display: "flex",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Your Message"
              variant="standard"
              multiline
            />
          </Box>
        </div>
        <button className="h-16 w-40 rounded bg-black text-white tablet:h-14 tablet:w-36">
          Send Message
        </button>
      </div>
      <Footer
        label1="HOME"
        label2="PROJECTS"
        label3="ABOUT"
        path1="/home"
        path2="/projects"
        path3="/about"
      />
    </div>
  );
};

export default ContactMe;
