import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

export const ContactCard = ({ contact, onDelete }) => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleDelete = () => {
    onDelete(contact.id);
    setShowModal(false);
  };
  const backgrounds = [
      'url("https://pixeljoint.com/files/icons/full/faces1.png") 0px 0px',
      'url("https://pixeljoint.com/files/icons/full/faces1.png") -102.5px 0px',
      'url("https://pixeljoint.com/files/icons/full/faces1.png") -205px 0px',
      'url("https://pixeljoint.com/files/icons/full/faces1.png") -307.5px 0px',
      'url("https://pixeljoint.com/files/icons/full/facesinpalettes2.png") 0px 0px',
      'url("https://pixeljoint.com/files/icons/full/facesinpalettes2.png") -102.5px 0px',
      'url("https://pixeljoint.com/files/icons/full/facesinpalettes2.png") -205px 0px',
      'url("https://pixeljoint.com/files/icons/full/facesinpalettes2.png") -307.5px 0px',
      'url("https://pixeljoint.com/files/icons/full/facesinpalettes3.png") 0px 0px',
      'url("https://pixeljoint.com/files/icons/full/facesinpalettes3.png") -102.5px 0px',
      'url("https://pixeljoint.com/files/icons/full/facesinpalettes3.png") -205px 0px',
      'url("https://pixeljoint.com/files/icons/full/facesinpalettes3.png") -307.5px 0px',
      'url("https://pixeljoint.com/files/icons/full/facesinpalettes4.png") 0px 0px',
      'url("https://pixeljoint.com/files/icons/full/facesinpalettes4.png") -102.5px 0px',
      'url("https://pixeljoint.com/files/icons/full/facesinpalettes4.png") -205px 0px',
      'url("https://pixeljoint.com/files/icons/full/facesinpalettes4.png") 0px -102.5px',
      'url("https://pixeljoint.com/files/icons/full/facesinpalettes4.png") -102.5px -102.5px',
      'url("https://pixeljoint.com/files/icons/full/facesinpalettes4.png") -205px -102.5px',
  ];
  const avatarIndex = useMemo(() => Math.floor(Math.random() * backgrounds.length), []);
  const randomBackground = backgrounds[avatarIndex];
  //const randomBackground = getRandomBackground();

return(<div className="card bg-light shadow mb-3">
      <div className="row g-0 align-items-center">
        <div className="col-md-2 d-flex justify-content-center">
          <img style={{height: '100px',  width: '100px', background: randomBackground}}alt="" className="rounded-circle align-self-center shadow" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="font-weight-bold">{contact.name}</h5>
            <p className="text-secondary mb-1"><i className="fas fa-map-marker-alt text-secondary me-2" />{contact.address}</p>
            <p className="text-secondary mb-1"><i className="fas fa-phone me-2" />{contact.phone}</p>
            <p className="text-secondary mb-1"><i className="fas fa-envelope  me-2" />{contact.email}</p>
          </div>
        </div>
        <div className="col-md-2 text-end align-self-start mt-2 pe-2">
          <Link to={`/edit/${contact.id}`} className="btn btn-outline-dark border-0 me-2">
            <i className="fas fa-pen"></i>
          </Link>
          <button className="btn btn-outline-danger border-0 " onClick={handleOpenModal}>
            <i className="fas fa-trash" />
          </button>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          If you delete this thing the entire universe will go down!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Oh no!
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Yes baby!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>);
};
/*import React from "react";
import PropTypes from "prop-types";

const ContactCard = (props) => {
    <li className="d-flex flex-row">
        <div><img src={props.imageUrl}></img></div>
        <div className="d-flex flex-column">
            <div className="p-2"><h4 className="px-3">{props.fullName}</h4></div>
            <div className="p-2"><i className="fa-solid fa-location-dot px-3"></i>{props.adress}</div>
            <div className="p-2"><i className="fa-solid fa-phone-flip px-3"></i>{props.phone}</div>
            <div className="p-2"><i className="fa-solid fa-envelope px-3"></i>{props.email}</div>
        </div>
        <div className="d-flex justify-content-end"><i className="fa-solid fa-pencil px-5"></i><i className="fa-solid fa-trash-can"></i></div>
    </li>
};
ContactCard.propTypes = {
    imageUrl: PropTypes.string,
    fullName: PropTypes.string,
    adress: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string
};
export default ContactCard;*/