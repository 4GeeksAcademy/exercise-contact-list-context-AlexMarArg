import React, { useState, useEffect } from "react";

export const ContactForm = ({ initialData = {}, onSubmit }) => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", address: "",
    ...initialData
  });
  const [error, setError] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email) {
      setError("Nombre y email son obligatorios");
      return;
    }
    onSubmit(form);
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="alert alert-danger">{error}</div>}
      {["name","email","phone","address"].map(field => (
        <div className="mb-3" key={field}>
          <label className="form-label">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <input
            className="form-control shadow"
            name={field}
            value={form[field]}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit" className="btn btn-primary w-100">Save</button>
    </form>
  );
};
