import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { DataContext } from "../contexts/DataContext";

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
        paddingTop: "20vh",
        backgroundColor: "#2469B3",
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{ backgroundColor: "#ffffff" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ログイン
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="メールアドレス"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="パスワード"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ログイン
            </Button>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "250px",
          margin: "16px auto",
        }}
      >
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2" color="inherit">
              利用規約
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2" color="inherit">
              プライバシーポリシー
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
