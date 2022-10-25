import { contactsInitialState } from './addContact/initialStateContacts';
import { filterInitialState } from './contactFilter/initialStateFilter';

export const initialState = {
  contacts: contactsInitialState,
  filter: filterInitialState,
};
