import './App.css';
import ContactList from './components/ContactList/contactList';
import SearchBox from './components/SearchBox/searchBox';
import ContactForm from './components/ContactForm/contactForm';
import { fetchContacts } from './redux/contactsOps';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectLoading } from './redux/selectors';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading...</p>}
      <ContactList />
    </div>
  );
}

export default App;
