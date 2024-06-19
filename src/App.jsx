// import { useEffect, useState } from 'react';
import './App.css';
import ContactList from './components/ContactList/contactList';
import SearchBox from './components/SearchBox/searchBox';
// import contacts from './contacts.json';
import ContactForm from './components/ContactForm/contactForm';

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
