const BASE = "https://playground.4geeks.com/contact/agendas";
const AGENDA = "AlexMarArg";

export const getContacts = async () => {
			const res = await fetch(`${BASE}/${AGENDA}/contacts`);
      if (!res.ok) {
        await fetch(`${BASE}/${AGENDA}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug: AGENDA })
        });
        return []; 
      }
      return res.json();
};

export const createContact = async (contact) => {
  const res = await fetch(`${BASE}/${AGENDA}/contacts`, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(contact)
  });
  if (!res.ok) throw new Error("Error al crear contacto");
  return res.json();
}

export const updateContact = async (id, contact) => {
  const res = await fetch(`${BASE}/${AGENDA}/contacts/${id}`, {
    method: "PUT",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(contact)
  });
  if (!res.ok) throw new Error("Error al actualizar contacto");
  return res.json();
}

export const deleteContact = async (id) => {
  const res = await fetch(`${BASE}/${AGENDA}/contacts/${id}`, { method: "DELETE" });
}
