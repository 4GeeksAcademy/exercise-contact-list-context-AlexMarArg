import React from "react";
import { updateContact as apiUpdate } from "../api";
import { useContacts } from "../Context/ContactContext";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ContactForm } from "../components/ContactForm.jsx";

export const EditContact = () => {
  const { state: { contacts }, dispatch } = useContacts();
  const { id } = useParams();
  const contact = contacts.find(c => c.id === parseInt(id));
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    const updated = await apiUpdate(contact.id, data);
    dispatch({ type: "UPDATE", payload: updated });
    navigate("/");
  };

  if (!contact) return <p>Contact not found</p>;

  return (
    <div className="container py-4">
      <h2>Edit Contact</h2>
      <ContactForm initialData={contact} onSubmit={handleSubmit} />
      <div className="mt-3">
        <Link to="/">← Back to contacts</Link>
      </div>
    </div>
  );
};
