import "../App.css";
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
import { Link } from "react-router-dom";
import { useState } from "react";
import type { RootState } from "../../src/redux/store";
import { useSelector, useDispatch } from "react-redux";
// const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );
  const filteredProducts = (products || []).filter((elem) => {
    return elem.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <AppBar
      sx={{
        boxShadow: 0,
        backgroundColor: "white",
        borderBottom: "1px solid #edede9",
      }}
    >
      <Container
        maxWidth="xl"
        style={{
          backgroundColor: "white",
          color: "#78A0BD",
          boxShadow: "none",
          padding: "10px 200px",
        }}
      >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              boxShadow: "none",
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Pharmacy
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Products</Typography>
              </MenuItem>{" "}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Local Centres</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Shop</Typography>
              </MenuItem>
              <div style={{ display: "flex" }}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <button
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                      color: "inherit",
                    }}
                  >
                    Sign in
                  </button>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <button
                    style={{
                      border: "none",
                      backgroundColor: "#78A0BD",
                      padding: "10px 20px",
                      borderRadius: "40px",
                      color: "white",
                    }}
                  >
                    Sign up
                  </button>
                </MenuItem>
              </div>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Pharmacy
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/products">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#78A0BD", display: "block" }}
              >
                Products
              </Button>
            </Link>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "#78A0BD", display: "block" }}
            >
              Local Centres
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "#78A0BD", display: "block" }}
            >
              Shop
            </Button>
            <input
              type="text"
              placeholder="Search something.."
              value={search}
              style={{
                height: "25px",
                border: "1px solid red",
                borderRadius: "10px",
              }}
              onChange={(e) => {
                setSearch(e.target.value);
                setShow(!!e.target.value);
              }}
            />
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <button
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    Sign in
                  </button>
                </Link>
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">
                <Link
                  to="/register"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <button
                    style={{
                      border: "none",
                      backgroundColor: "#78A0BD",
                      padding: "10px 20px",
                      borderRadius: "40px",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    Sign up
                  </button>
                </Link>
              </Typography>
            </MenuItem>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
        {show ? (
          <ul
            style={{
              position: "absolute",
              backgroundColor: "white",
              width: "400px",
              right: "300px",
              color: "black",
              textDecoration: "none",
              listStyle: "none",
            }}
          >
            {filteredProducts.map((elem) => {
              return (
                <Link
                  to={`/${elem.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {" "}
                  <li>{elem.name}</li>
                </Link>
              );
            })}
          </ul>
        ) : (
          ""
        )}
      </Container>
    </AppBar>
  );
}
export default Navbar;
