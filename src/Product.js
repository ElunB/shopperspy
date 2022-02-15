import { Button, Card } from "react-bootstrap";

const style = {
  card: {
    "max-width": "374px",
    "box-shadow":
      "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
  },
  title: {
    display: "flex",
    "flex-direction": "row",
    "justify-content": "space-between",
    "align-items": "center",
  },
  buttonGroup: {
    display: "flex",
    "flex-direction": "row",
    "justify-content": "left",
    "align-items": "center",
    margin: "4px 8px 4px 0",
  },
  sizeButton: {
    background: "#e0e0e0",
    margin: "4px 8px 4px 0",
    "border-radius": "16px",
    "font-size": "14px",
    height: "32px",
    padding: "4px 14px",
    color: "black",
    border: "none",
  },
  text: {
    color: "rgba(0, 0, 0, 0.6)",
  },
};

function Product(props) {
  // const listProducts = props.products.map((product) => (
  //   <li key={product}>{product}</li>
  // ));
  return (
    <Card style={style.card}>
      <Card.Img
        style={{ height: "470px" }}
        variant="top"
        src="images/dress.png"
      />
      <Card.Body>
        <Card.Title>
          <div style={style.title}>
            <h3>450,00 SEK</h3>
            <p>asos.com</p>
          </div>
        </Card.Title>
        <Card.Text style={style.text}>
          Rare London asymmetric corset mesh drape dress in khaki
        </Card.Text>
        <span style={style.text}> Sizes </span>
        <div style={style.buttonGroup}>
          <Button style={style.sizeButton}>XS</Button>{" "}
          <Button style={style.sizeButton}>S</Button>{" "}
          <Button style={style.sizeButton}>M</Button>{" "}
          <Button style={style.sizeButton}>L</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
export default Product;
