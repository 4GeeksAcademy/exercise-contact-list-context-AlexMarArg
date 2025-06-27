import React, { createContext, useContext, useReducer, useEffect } from "react";
import * as API from "../api";

const ContactsContext = createContext();

const initialState = { contacts: [], loading: true, error: null };

function reducer(state, action) {
  switch (action.type) {
    case "LOAD_INIT":
      return { ...state.contacts, loading: true };
    case "LOAD_SUCCESS":
      return { contacts: action.payload, loading: false, error: null };
    case "LOAD_ERROR":
      return { ...state.contacts, error: action.payload, loading: false };
    case "ADD":
      return { ...state.contacts, contacts: [...state.contacts, action.payload] };
    case "UPDATE":
      return {
        ...state.contacts,
        contacts: state.contacts.map(c =>
          c.id === action.payload.id ? action.payload : c
        )
      };
    case "DELETE":
      return {
        ...state.contacts,
        contacts: state.contacts.filter(c => c.id !== action.payload)
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

export const ContactsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function load() {
      dispatch({ type: "LOAD_INIT" });
      try {
        const contacts = await API.getContacts();
        dispatch({ type: "LOAD_SUCCESS", payload: contacts.contacts });
      } catch (e) {
        dispatch({ type: "LOAD_ERROR", payload: e.message });
      }
    }
    load();
  }, []);

  return (
    <ContactsContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactsContext.Provider>
  );
};

export const useContacts = () => useContext(ContactsContext);


/*import React, { createContext, useContext, useReducer, useEffect } from "react";
import * as API from "../api";

const ContactsContext = createContext();

const initialState = { contacts: [], loading: true, error: null };

function reducer(state, action) {
  switch(action.type) {
    case "LOAD_INIT": return { ...state, loading:true };
    case "LOAD_SUCCESS": return { contacts: action.payload, loading: false, error: null };
    case "LOAD_ERROR": return { ...state, error: action.payload, loading: false };
    case "ADD": return { ...state, contacts: [...state.contacts, action.payload] };
    case "UPDATE":
      return { ...state, contacts: state.contacts.map(c => c.id === action.payload.id ? action.payload : c) };
    case "DELETE":
      return { ...state, contacts: state.contacts.filter(c => c.id !== action.payload) };
    default: throw new Error();
  }
}

export const ContactsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function load() {
      dispatch({ type: "LOAD_INIT" });
      try {
        const contacts = await API.getContacts();
        dispatch({ type: "LOAD_SUCCESS", payload: contacts });
      } catch(e) {
        dispatch({ type: "LOAD_ERROR", payload: e.message });
      }
    }
    load();
  }, []);

  return (
    <ContactsContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactsContext.Provider>
  );
};

export const useContacts = () => useContext(ContactsContext);

/*import React, { createContext, useState, useEffect } from "react";

export const ContactContext = createContext();

const API_URL = "https://playground.4geeks.com/contact/agendas/";

export const ContactProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);

    const loadContacts = async () => {
        try {
            const res = await fetch(`${API_URL}AlexMarArg`);
		if (!res.ok) throw new Error("Usuario no encontrado, creando usuario...");
            const data = await res.json();
            setContacts(data);
		} catch (err) {
        await fetch(`${API_URL}AlexMarArg`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ slug: "AlexMarArg" })
		});
    }
    };
    
    const addContact = async (contact) => {
        await fetch(`${API_URL}}AlexMarArg/contacts`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...contact, agenda_slug: "AlexMarArg" })
        });
        loadContacts();
    };
    
    const updateContact = async (id, updatedData) => {
        await fetch(`${API_URL}AlexMarArg/contacts/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...updatedData, agenda_slug: "AlexMarArg" })
        });
        loadContacts();
    };

    const deleteContact = async (id) => {
        await fetch(`${API_URL}AlexMarArg/contacts/${id}`, { method: "DELETE" });
        loadContacts();
    };

    useEffect(() => {
        loadContacts();
    }, []);

    return (
        <ContactContext.Provider value={{ contacts, addContact, updateContact, deleteContact }}>
            {children}
        </ContactContext.Provider>
    );
};*/