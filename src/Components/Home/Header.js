import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Stack from '@mui/material/Stack';
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ background: "#182f59",paddingTop:"10px",paddingBottom:"10px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            className="ps-3"
            src="https://career.techforing.com/static/media/Main-logo-white-.736e953d98c765398bd7.png"
            width={40}
            height={40}
            alt="image not found"
          />
          <div>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                ml: 3,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                color: "white",
                textDecoration: "none",
              }}
            >
              TechForing
            </Typography>
            <Typography
              variant="p"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                ml: 3,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 500,
                fontSize: 14,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Shaping Tomorrows Cybersecurity
            </Typography>
          </div>
          <Box component="span" ml={90}>
            <Stack spacing={2} direction="row">
              <Button sx={{ background: '#182f59',color:"white",borderColor:"white" }}  variant="contained">Sign In</Button>
              <Button sx={{ background: 'green',color:"white" }} variant="outlined">Sign Up</Button>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
