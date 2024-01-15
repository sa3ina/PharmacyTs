import "../App.css";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../src/redux/store";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useParams } from "react-router-dom";
type Props = {};

const Detail = (props: Props) => {
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );
  const { id } = useParams();
  const found = products.find((elem) => elem.id === id);

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {" "}
      <Link to="/" style={{ position: "absolute", left: "20px", top: "20px" }}>
        <ArrowBackIcon />
      </Link>
      <div style={{ display: "flex", gap: "40px", marginTop: "200px" }}>
        <img
          src={found?.imgSRC}
          alt=""
          width={"260px"}
          height={"200px"}
          style={{ borderRadius: "10px" }}
        />
        <div style={{ width: "500px" }}>
          <p style={{ fontWeight: "900", color: "black" }}>{found?.name}</p>
          <p style={{ color: "red" }}>${found?.price}</p>
          <p>{found?.desc}</p>{" "}
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
    </Container>
  );
};

export default Detail;
