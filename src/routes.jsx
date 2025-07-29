import { createBrowserRouter,  createRoutesFromElements, Route} from "react-router-dom";
import { ContactList } from "./pages/ContactList";
import { AddContact } from "./pages/AddContact";
import { EditContact } from "./pages/EditContact";
import { Page404 } from "./pages/Page404";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<Page404/>}>
      <Route path="/" element={<ContactList />} />
      <Route path="/add" element={<AddContact />} />
      <Route path="/edit/:id" element={<EditContact />} />
    </Route>
  )
);
