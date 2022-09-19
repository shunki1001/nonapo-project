import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { DataContext } from "../contexts/DataContext";

import logo from "../img/log-tp.png";

export default function SignIn() {
  const { signin } = React.useContext(DataContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    signin(data.get("email"), data.get("password"));
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        paddingTop: "5vh",
        backgroundColor: "#4357C9",
      }}
    >
      <Box width="260px" sx={{ margin: "0 auto", marginBottom: "4em" }}>
        <img src={logo} alt="logo" style={{ width: "100%" }} />
      </Box>
      <Container
        component="main"
        maxWidth="sm"
        sx={{
          backgroundColor: "#ffffff",
          height: "60vh",
          py: 12,
          boxShadow: "0px 8px 23px 0px #000000A3",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "33px", fontWeight: "700" }}>
            ログイン
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="メールアドレス"
              name="email"
              autoComplete="email"
              autoFocus
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              sx={{
                my: 2,
                backgroundColor: "#f5f5f5",
                "& label": { fontSize: "30px", ml: 2, mt: -1 },
                "& div input": { fontSize: "30px" },
                "& .MuiInput .MuiOutlinedInput-notchedOutline": {
                  border: "0",
                },
              }}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="パスワード"
              type="password"
              id="password"
              autoComplete="current-password"
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              sx={{
                my: 2,
                backgroundColor: "#f5f5f5",
                "& label": { fontSize: "30px", ml: 2, mt: -1 },
                "& div input": { fontSize: "30px" },
                "& .MuiInput .MuiOutlinedInput-notchedOutline": {
                  border: "0",
                },
              }}
            />
            <Box sx={{ width: "100%", textAlign: "center" }}>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 6, mb: 2, px: 10, py: 2 }}
              >
                ログイン
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "250px",
          margin: "32px auto",
        }}
      >
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2" sx={{ color: "#fff" }}>
              利用規約
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2" sx={{ color: "#fff" }}>
              プライバシーポリシー
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
