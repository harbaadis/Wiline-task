import React from 'react';

interface DeleteUserInputProps {
  onRequestSubmit: () => void;
}

const DeleteUserInput: React.FC<DeleteUserInputProps> = ({ onRequestSubmit }) => (
  <button onClick={onRequestSubmit}>Delete User</button>
);

export default DeleteUserInput;