import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useProducts } from "../../contexts/ProductContext";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const SecondBar = () => {
  const { history, getProductsData, cart } = useProducts();
  const [type, setType] = useState(getType());

  function getType() {
    const search = new URLSearchParams(history.location.search);
    return search.get("type");
  }

  function getPrice() {
    const search = new URLSearchParams(history.location.search);
    return search.get("price_lte");
  }

  const handleChangeType = (e) => {
    if (e.target.value == "all") {
      const search = new URLSearchParams(history.location.search);
      search.delete("type");
      history.push(`${history.location.pathname}?${search.toString()}}`);
      getProductsData();
      setType(e.target.value);
      return;
    }
    const search = new URLSearchParams(history.location.search);
    search.set("type", e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProductsData();
    setType(e.target.value);
  };

  const handleValue = (e) => {
    const search = new URLSearchParams(history.location.search);
    search.set("q", e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProductsData();
  };

  return (
    <div>
      <Navbar
        expand="lg"
        // fixed="top"
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{
              maxHeight: "100px",
              fontSize: 20,
              fontFamily: '"Merienda"',
            }}
            navbarScroll
          >
            <NavDropdown
              title="Categories"
              id="navbarScrollingDropdown"
              style={{
                backgroundColor: " rgba(255,255,255,0.5)",
                borderRadius: "30px",
              }}
              value={type}
              onChange={handleChangeType}
            >
              <RadioGroup value={type} onChange={handleChangeType}>
                <FormControlLabel
                  value="Succulents"
                  control={<Radio />}
                  label="Succulents"
                />
                <FormControlLabel
                  value="Cacti"
                  control={<Radio />}
                  label="Cacti"
                />
                <FormControlLabel
                  value="Bonsai"
                  control={<Radio />}
                  label="Bonsai"
                />
                <FormControlLabel
                  value="Orchid"
                  control={<Radio />}
                  label="Orchid"
                />
                <FormControlLabel
                  value="Fern"
                  control={<Radio />}
                  label="Fern"
                />
              </RadioGroup>
            </NavDropdown>
          </Nav>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              color="secondary"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => handleValue(e)}
              style={{
                backgroundColor: "rgba(255,255,255,0.5)",
                borderRadius: "20px",
              }}
            />
          </Form>
        </Navbar.Collapse>
        <Link to="/cart">
          <Button variant="contained" bg="secondary">
            <img
              src="https://image.flaticon.com/icons/png/512/891/891462.png"
              alt=""
              style={{ height: "50px" }}
            />
          </Button>
        </Link>

        <Button variant="contained" bg="secondary">
          <img
            src="https://image.flaticon.com/icons/png/512/4763/4763113.png"
            alt=""
            style={{ height: "50px" }}
          />
        </Button>
      </Navbar>
    </div>
  );
};

export default SecondBar;
