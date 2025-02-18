import { Box, Button, Grid2, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import CustomTextField from "../components/CustomTextField";
import { Link } from "react-router-dom";
import Message from "../components/Message";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignInClick = async (e) => {
    //call /login API
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/login/", {
        username: username,
        password: password,
      });

      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      console.log(response.data);
      window.location.href = "/products";
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.detail || "Login Failed");
      } else {
        setError("Server Error");
      }
    }
    //
  };
  return (
    <>
      {error && <Message severity="error">{error}</Message>}
      <Box component="form" onSubmit={handleSignInClick} sx={{ p: "10%" }}>
        <Grid2 container spacing={2} justifyContent="center">
          <Grid2 item size={{ xs: 12, sm: 10 }}>
            <Typography variant="h5" sx={{}}>
              Sign In
            </Typography>
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 10 }}>
            <CustomTextField
              label={"Email Address"}
              placeholder={"Enter Email"}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid2>

          <Grid2 item size={{ xs: 12, sm: 10 }}>
            <CustomTextField
              label={"Password"}
              placeholder={"Enter Password"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid2>
          <Grid2 item container alignItems={"center"} size={{ xs: 12, sm: 10 }}>
            <Grid2 item size={{ xs: 4, sm: 2 }}>
              <Button
                variant="contained"
                sx={{
                  paddingX: "20px",
                  backgroundColor: "secondary.main",
                  color: "primary.main",
                }}
                type="submit"
              >
                Sign In
              </Button>
            </Grid2>
            <Grid2 item size={{ xs: 12, sm: 10 }}>
              <Typography variant="body2">
                <Typography display="inline">New User?</Typography>&nbsp;
                <Link to="/signup">Sign up</Link>
              </Typography>
            </Grid2>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}

export default Login;
