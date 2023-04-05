import axios from 'axios';

export const getContacts = async () => {
  const { data } = await axios.get(
    'https://642d90e266a20ec9cea10024.mockapi.io/contacts'
  );
  return data;
};

export const addContact = async contact => {
  const { data } = await axios.post(
    'https://642d90e266a20ec9cea10024.mockapi.io/contacts',
    contact
  );
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(
    `https://642d90e266a20ec9cea10024.mockapi.io/contacts/${id}`
  );
  return data;
};
