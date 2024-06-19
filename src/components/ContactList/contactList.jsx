import { useSelector } from 'react-redux';
import Contact from '../Contact/contact';
import css from '../ContactList/contactList.module.css';
import { selectContacts, selectNameFilter } from '../../redux/selectors';

const getVisibleContacts = (contacts, searchData) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchData.toLowerCase())
  );
};

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const searchData = useSelector(selectNameFilter);
  const visibleContacts = getVisibleContacts(contacts, searchData);

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(contact => {
        return (
          <li key={contact.id} className={css.contactListItem}>
            <Contact data={contact} />
          </li>
        );
      })}
    </ul>
  );
}
