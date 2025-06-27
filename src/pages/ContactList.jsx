import React from "react";
import { useContacts } from "../Context/ContactContext";
import { ContactCard } from "../components/ContactCard.jsx";
import { deleteContact as apiDelete } from "../api";
import { Link } from "react-router-dom";

export const ContactList = () => {
  const { state, dispatch } = useContacts();
  const { contacts, loading, error } = state;

  const handleDelete = async (id) => {
    await apiDelete(id);
    dispatch({ type: "DELETE", payload: id });
  };
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Contacts</h2>
        <Link to="/add" className="btn btn-success">Add new contact</Link>
      </div>
      {contacts.length === 0 ? (
        <p>No contacts yet.</p>
      ) : (
        contacts.map((c) => (
          <ContactCard key={c.id} contact={c} onDelete={handleDelete} />
        ))
      )}
    </div>
  );
};

/*import React from "react";
import { useContacts } from "../Context/ContactContext";
import { ContactCard } from "../components/ContactCard.jsx";
import { deleteContact as apiDelete } from "../api";
import { Link } from "react-router-dom";

export const ContactList = () => {
  const { state, dispatch } = useContacts();
  const { contacts, loading, error } = state;

  const handleDelete = async (id) => {
    await apiDelete(id);
    dispatch({ type: "DELETE", payload: id });
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Contacts</h2>
        <Link to="/add" className="btn btn-success">Add new contact</Link>
      </div>
      {contacts.contacts.length === 0 ? (
        <p>No contacts yet.</p>
      ) : (
        contacts.contacts.map(c => (
          <ContactCard key={c.id} contact={c} onDelete={handleDelete} />
        ))
      )}
    </div>
  );
};

/*import React, { useContext } from "react";
import { ContactContext } from "../Context/ContactContext";
import ContactCard from "../components/ContactCard";
import image from "../assets/img/rigo-baby.jpg";
import { Link } from "react-router-dom";

export const ContactList = () => {
    const { contacts } = useContext(ContactContext);

    return (
        <div className="container mt-5">
            <Link to="/add" className="btn btn-primary my-3">+ Añadir Contacto</Link>
            <ul className="list-group w-100">
                {contacts.map(contact => (
                    <ContactCard imageUrl={image} fullName={contact.name} adress={contact.address} phone={contact.phone} email={contact.email} />
                ))}
            </ul>
        </div>
    );
};*/