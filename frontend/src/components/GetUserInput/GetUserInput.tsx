import React, { useState } from 'react';
import { InputWrapper } from './GetUserInput.styled';

interface GetUserInputProps {
  onRequestSubmit: (payload: string) => void;
}

const GetUserInput: React.FC<GetUserInputProps> = ({ onRequestSubmit }) => {
  const [query, setQuery] = useState<string>('');

  const handleGetUser = () => {
    // Construct the payload
    const payload = `${encodeURIComponent(query)}`;
    onRequestSubmit(payload);
  };

  return (
    <InputWrapper>
      <label htmlFor="query">Query:</label>
      <input
        type="text"
        id="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter query..."
      />

      <button onClick={handleGetUser}>Get User</button>
    </InputWrapper>
  );
};

export default GetUserInput;
