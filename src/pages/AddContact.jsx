import React from "react";
import { createContact as apiCreate } from "../api";
import { useContacts } from "../Context/ContactContext";
import { useNavigate, Link } from "react-router-dom";
import { ContactForm } from "../components/ContactForm.jsx";

export const AddContact = () => {
  const { dispatch } = useContacts();
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    const newContact = await apiCreate(data);
    dispatch({ type: "ADD", payload: newContact });
    navigate("/");
  };

  return (
    <div className="container py-4">
      <h2>Add Contact</h2>
      <ContactForm onSubmit={handleSubmit} />
      <div className="mt-3">
        <Link to="/">← Back to contacts</Link>
      </div>
    </div>
  );
};

/*import React from "react";
import { createContact as apiCreate } from "../api";
import { useContacts } from "../Context/ContactContext";
import { useNavigate } from "react-router-dom";
import { ContactForm } from "../components/ContactForm.jsx";

export const AddContact = () => {
  const { dispatch } = useContacts();
  const navigate = useNavigate();

  const handleSubmit = async contact => {
    const newContact = await apiCreate(contact);
    dispatch({ type: "ADD", payload: newContact });
    navigate("/");
  }

  return (
    <div className="container py-4">
      <h2>Add a new contact</h2>
      <ContactForm onSubmit={handleSubmit} />
      <div className="mt-3">
        <Link to="/">or get back to contacts</Link>
      </div>
    </div>
  );
}

/*import React, { useState, useContext, useEffect } from "react";
import { ContactContext } from "../Context/ContactContext";
import { useNavigate, useParams } from "react-router-dom";

export const AddContact = () => {
    const { addContact, updateContact, contacts } = useContext(ContactContext);
    const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const contacto = contacts.find(c => c.id === parseInt(id));
            if (contacto) setForm(contacto);
        }
    }, [id, contacts]);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            updateContact(id, form);
        } else {
            addContact(form);
        }
        navigate("/");
    };

    return (
        <div className="container mt-5">
            <h2>{"Nuevo Contacto"}</h2>
            <form onSubmit={handleSubmit}>
                <input className="form-control my-2" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Nombre completo" required />
                <input className="form-control my-2" type="email" name="email" value={form.email} onChange={handleChange} placeholder="Correo" required />
                <input className="form-control my-2" type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="Teléfono" required />
                <input className="form-control my-2" type="text" name="address" value={form.address} onChange={handleChange} placeholder="Dirección" required />
                <button className="btn btn-success mt-3" type="submit">Guardar</button>
            </form>
        </div>
    );
};*/