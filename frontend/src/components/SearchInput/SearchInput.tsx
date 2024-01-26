import React, { useState } from 'react';
import { InputWrapper } from './SearchInput.styled';

interface SearchInputProps {
   onRequestSubmit: (payload: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onRequestSubmit }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const handleSearch = () => {
    const queryParams: Record<string, string> = {};

    if (name.trim()) {
      queryParams.query = name.trim();
    }

    if (email.trim()) {
      queryParams.email = email.trim();
    }

    if (phone.trim()) {
      queryParams.phoneNumber = phone.trim();
    }

   // Construct the query string
    const payload = "?" + Object.entries(queryParams)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&');

    onRequestSubmit(payload);
  };

  return (
    <InputWrapper>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name..."
      />

      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email..."
      />

      <label htmlFor="phone">Phone:</label>
      <input
        type="text"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter phone..."
      />

      <button onClick={handleSearch}>Search</button>
    </InputWrapper>
  );
};

export default SearchInput;