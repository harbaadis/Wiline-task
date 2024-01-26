import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { MainWrapper } from './Main.styled';
import Output from '../Output/Output';
import SearchInput from '../SearchInput/SearchInput';
import GetUserInput from '../GetUserInput/GetUserInput';
import AddUserInput from '../AddUserInput/AddUserInput';
import UpdateUserInput from '../UpdateUserInput/UpdateUserInput';
import DeleteUserInput from '../DeleteUserInput/DeleteUserInput';

interface MainProps {
  requestType: string | null;
  endpoint: string | null;
}

const Main: React.FC<MainProps> = ({ requestType, endpoint }) => {
  const [payload, setPayload] = React.useState<string>('');
  const [response, setResponse] = React.useState<AxiosResponse<any, any> | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const handleRequest = () => {
    let url = `http://localhost:3001${endpoint}`;
    if (payload) {
      url += `${payload}`;
    }
    console.log(url);
    axios({
      method: requestType as any,
      url: url,
      data: null,
    })
      .then((result) => setResponse(result))
      .catch((error) => setError(`Error: ${error.message}`));
  };

  React.useEffect(() => {
    handleRequest();
  }, [payload]);

  const renderInputComponent = () => {
    switch (requestType) {
      case 'GET':
        switch (endpoint) {
          case '/users':
            return <SearchInput onRequestSubmit={(newPayload) => { setPayload(newPayload); handleRequest(); }} />;
          case '/users/':
            return <GetUserInput onRequestSubmit={(newPayload) => { setPayload(newPayload); handleRequest(); }} />;
        }
        break;
      case 'POST':
        return <AddUserInput onRequestSubmit={(newPayload) => { setPayload(newPayload); handleRequest(); }} />;
      case 'PUT':
        return <UpdateUserInput onRequestSubmit={(newPayload) => { setPayload(newPayload); handleRequest(); }} />;
      case 'DELETE':
        return <DeleteUserInput onRequestSubmit={handleRequest} />;
      default:
        return ;
    }
  };


  return (
    <MainWrapper>
      <div className="input-container">
        {/* Render the appropriate input component */}
        {renderInputComponent()}
      </div>
      <Output response={response} error={error} />
    </MainWrapper>
  );
};

export default Main;