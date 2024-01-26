import React, { useState } from 'react';

interface UpdateUserInputProps {
  onRequestSubmit: (payload: string) => void;
}

const UpdateUserInput: React.FC<UpdateUserInputProps> = ({ onRequestSubmit }) => {
  const [payload, setPayload] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRequestSubmit(payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="payload">Updated User Data:</label>
      <textarea
        id="payload"
        value={payload}
        onChange={(e) => setPayload(e.target.value)}
        placeholder="Enter updated user data..."
      />
      <button type="submit">Update User</button>
    </form>
  );
};

export default UpdateUserInput;