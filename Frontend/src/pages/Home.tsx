import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import type { RootState } from "../../src/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../src/redux/slices/productSlice";
import { fetchData } from "../../src/redux/slices/productSlice";
import { Link } from "react-router-dom";
type Props = {};

const App = (props: Props) => {
  // const count = useSelector((state: RootState) => state.products.products);
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "150px", color: "#78A0BD" }}>
        <Container style={{ marginBottom: "200px" }}>
          <div>
            <h1 style={{ marginBottom: "100px" }}>Pharmacy</h1>
            <h5 style={{ fontSize: "20px", marginBottom: "100px" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              autem, numquam minima reprehenderit dignissimos illum quis
              provident necessitatibus suscipit fugiat ad natus sint quas porro
              animi voluptatem placeat eum magni! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Odit, tempora!
            </h5>
            <button
              style={{
                border: "none",
                backgroundColor: "#FF0000",
                padding: "15px 50px",
                borderRadius: "40px",
                color: "white",
                fontSize: "20px",
              }}
            >
              View our products
            </button>
          </div>
        </Container>
        <Container>
          <hr />
          <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
            Our latest products
          </h1>

          <Grid container spacing={10}>
            {products.map((elem, i) => {
              return (
                <Grid xs={12} xl={6} md={6} sm={12} lg={6} item>
                  <div style={{ display: "flex", gap: "40px" }}>
                    {" "}
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
                      <Link
                        to={`/${elem.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <p style={{ fontWeight: "900", color: "black" }}>
                          {elem.name}
                        </p>
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
      </Container>
    </>
  );
};

export default App;
