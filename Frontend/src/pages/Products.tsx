import "../App.css";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../src/redux/store";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { useState } from "react";
type Props = {};

const Products = (props: Props) => {
  const [sort, setSort] = useState("");
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  const handleSort = (type: string) => {
    setSort(type);
  };
  const sorted = () => {
    const productsArray = Object.values(products);

    if (sort == "price") {
      const byPrice = productsArray.sort(
        (a, b) => Number(a.price) - Number(b.price)
      );
    }
    if (sort == "name") {
      const alphabetical = productsArray.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }
    return productsArray;
  };
  return (
    <Container>
      {" "}
      <Link to="/" style={{ position: "absolute", left: "20px", top: "20px" }}>
        <ArrowBackIcon />
      </Link>
      <button
        onClick={() => handleSort("price")}
        style={{
          backgroundColor: "#bbd0ff",
          border: "none",
          borderRadius: "20px",
          padding: "5px",
          marginRight: "10px",
          cursor: "pointer",
        }}
      >
        sort by price
      </button>
      <button
        onClick={() => handleSort("name")}
        style={{
          backgroundColor: "#bc4b51",
          border: "none",
          borderRadius: "20px",
          padding: "5px",
          color: "white",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        A to Z
      </button>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Our latest products
      </h1>
      <Grid container spacing={5}>
        {sorted().map((elem, i) => {
          return (
            <Grid xs={12} xl={6} md={6} sm={12} lg={6} item>
              <div style={{ display: "flex", gap: "40px" }}>
                <Link to={`/${elem.id}`}>
                  <img
                    src={elem.imgSRC}
                    alt=""
                    width={"260px"}
                    height={"200px"}
                    style={{ borderRadius: "10px" }}
                  />
                </Link>
                <div style={{ width: "200px" }}>
                  <Link to={`/${elem.id}`} style={{ textDecoration: "none" }}>
                    <p style={{ fontWeight: "900", color: "black" }}>
                      {elem.name}
                    </p>{" "}
                  </Link>
                  <p style={{ color: "red" }}>${elem.price}</p>
                  <p>{elem.desc}</p>{" "}
                  <button
                    style={{
                      border: "1px solid black",
                      backgroundColor: "white",
                      padding: "15px 20px",
                      borderRadius: "40px",
                      color: "black",
                      fontSize: "13px",
                      cursor: "pointer",
                    }}
                  >
                    Add to Basket
                  </button>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Products;
