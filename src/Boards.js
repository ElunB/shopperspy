import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Product from "./Product";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
//import useFetch from './useFetch';

const Style = {
  buttonPrimary: {
    "background-color": "#ff4081",
    border: "none",
  },
};

function Boards() {
  const [boards, setBoards] = useState([]);
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState(
    "https://asos2.p.rapidapi.com/products/detail"
  );
  const [boardName, setBoardName] = useState(""); // ska vara ett objekt senare
  //const {data: products, error} = useFetch("https://asos2.p.rapidapi.com/products/detail");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => setBoardName(e.target.value);

  function addBoard() {
    setBoards((boards) => [...boards, boardName]);
    setBoardName("");
    handleClose();
  }

  async function addProduct() {
    const product = await fetchProduct();
    setProducts((products) => [...products, product]);
  }

  async function fetchProduct() {
    try {
      const response = await fetch("http://localhost:3001/", {
        method: "GET",
        params: { id: 21264667 },
      });
      if (response.ok) {
        console.log(response);
        return response.json();
      } else {
        console.log(response);
        throw response;
      }
    } catch (e) {
      console.log(e);
    }
  }

  const listBoards = boards.map((board) => <div>{board}</div>);

  return (
    <div>
      <Button style={Style.buttonPrimary} onClick={handleShow}>
        new board
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New board</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Name"
              onChange={handleChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button style={Style.buttonPrimary} onClick={handleClose}>
            Close
          </Button>
          <Button style={Style.buttonPrimary} onClick={addBoard}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Enter your URL </Form.Label>
          <Form.Control
            type="text"
            placeholder="enter url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </Form.Group>
        <Button
          className="mb-3"
          style={Style.buttonPrimary}
          type="submit"
          onClick={addProduct}
        >
          Add product
        </Button>
      </Form>
      <h4>{listBoards}</h4>
      <Product products={products}></Product>
    </div>
  );
}
export default Boards;
