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
