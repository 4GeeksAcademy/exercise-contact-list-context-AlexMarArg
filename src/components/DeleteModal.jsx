import React from "react";
import { Modal, Button } from "react-bootstrap";

const DeleteModal = ({ show, handleClose, handleDelete }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>If you delete this thing the entire universe will go down!</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>Oh no!</Button>
                <Button variant="danger" onClick={handleDelete}>Yes baby!</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteModal;