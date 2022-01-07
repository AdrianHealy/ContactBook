import { useState } from "react";
import AddContact from "./components/AddContact";
import ContactCard from "./components/ContactCard";
import ContactList from "./components/ContactList";

function App() {
  let [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState(null);
  const [show, setShow] = useState(false);
  // const [editeContact, setEditeContact] = useState({});

  function addContacts(newContact) {
    setContacts([...contacts, newContact]);
  }

  function deleteContact(id) {
    let arr = [...contacts];
    arr = arr.filter((item) => {
      return item.id !== id;
    });
    setContacts(arr);
  }

  return (
    <div className="App">
      <AddContact addContacts={addContacts} />
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        setShow={setShow}
        setCurrentContact={setCurrentContact}
      />
      <ContactCard
        show={show}
        setShow={setShow}
        currentContact={currentContact}
        // editeContact={editeContact}
      />
    </div>
  );
}

export default App;
