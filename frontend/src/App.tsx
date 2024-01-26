import React, { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App: React.FC = () => {
  const [requestType, setRequestType] = useState<string | null>(null);
  const [endpoint, setEndpoint] = useState<string | null>(null);

  const handleButtonClick = (buttonType: string) => {
    // Set the appropriate endpoint based on the button clicked
    switch (buttonType) {
      case 'search':
        setRequestType('GET');
        setEndpoint('/users'); 
        break;
      case 'getUser':
        setRequestType('GET');
        setEndpoint('/users/'); 
        break;
      case 'addUser':
        setRequestType('POST');
        setEndpoint('/users'); 
        break;
      case 'updateUser':
        setRequestType('PUT');
        setEndpoint('/users/'); 
        break;
      case 'deleteUser':
        setRequestType('DELETE');
        setEndpoint('/users/'); 
        break;
      default:
        setRequestType('GET');
        setEndpoint('/users'); 
        break;
    }
  };

  return (
    <div>
      <Header onButtonClick={handleButtonClick} />
      <main>
        {/* Pass the endpoint to Main component */}
        <Main requestType={requestType} endpoint={endpoint} />
        {/* Add other components as needed */}
      </main>
    </div>
  );
};

export default App;