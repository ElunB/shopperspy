import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Product from './Product';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Boards() {
    const [boards, setBoards] = useState([]);
    const [show, setShow] = useState(false);
    const [boardName, setBoardName] = useState(""); // ska vara ett objekt senare 

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) =>
        setBoardName(e.target.value);

    function addBoard() {
        setBoards(boards => [...boards, boardName]);
        setBoardName("");
        handleClose();
    };

    const listBoards = boards.map((board) =>
    <li>{board}</li>
  );

    return (
        <div>
            <Button onClick={handleShow}>new board</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New board</Modal.Title>
                </Modal.Header>
                <Modal.Body>
        <Form.Group>
                        <Form.Control type="text" placeholder="Name" onChange={handleChange}/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={addBoard}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>
            <ul>{listBoards}</ul>
            <Product></Product>
        </div>

    );

}
export default Boards;