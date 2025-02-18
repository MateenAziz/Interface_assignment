import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  MenuItem,
  InputLabel,
  Typography,
  IconButton,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload"; // Icon for upload
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Grid from "@mui/material/Grid2";
import CustomTextField from "../components/CustomTextField";
import { Link } from "react-router-dom";
import axios from "axios";
import Message from "../components/Message"; // Add this line to import the Message component

function SignUpScreen() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUpClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/signup/", {
        username: username,
        email: email,
        password: password,
      });

      window.location.href = "/login";
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.detail || "Signup Failed");
      } else {
        setError("Server Error");
      }
    }
  };

  return (
    <>
      {error && <Message severity="error">{error}</Message>}
      <Box
        component="form"
        onSubmit={handleSignUpClick}
        sx={{
          padding: "2rem",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item size={{ xs: 12, sm: 10 }}>
            <Typography variant="h5" sx={{}}>
              Sign Up
            </Typography>
          </Grid>
          <Grid item size={{ xs: 12, sm: 10 }}>
            <CustomTextField
              label={"Username"}
              placeholder={"Enter Username"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>

          <Grid item size={{ xs: 12, sm: 10 }}>
            <CustomTextField
              label={"Email"}
              placeholder={"Enter Email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>

          {/* relevant password verification action to be added*/}

          <Grid item size={{ xs: 12, sm: 10 }}>
            <CustomTextField
              label={"Password"}
              placeholder={"Enter Password"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>

          <Grid item container size={{ xs: 12, sm: 10 }}>
            <Grid item size={{ xs: 12 }}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "30px",
                  paddingX: "20px",
                  backgroundColor: "secondary.main",
                  color: "primary.main",
                }}
                type="submit"
              >
                Sign Up
              </Button>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                <Typography display="inline">Have an Account?</Typography>
                &nbsp;
                <Link to={"/login"}>Sign In</Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default SignUpScreen;
