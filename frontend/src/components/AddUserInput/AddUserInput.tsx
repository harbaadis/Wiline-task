import React, { useState } from 'react';

interface AddUserInputProps {
  onRequestSubmit: (payload: string) => void;
}

const AddUserInput: React.FC<AddUserInputProps> = ({ onRequestSubmit }) => {
  const [payload, setPayload] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRequestSubmit(payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="payload">User Data:</label>
      <textarea
        id="payload"
        value={payload}
        onChange={(e) => setPayload(e.target.value)}
        placeholder="Enter user data..."
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserInput;