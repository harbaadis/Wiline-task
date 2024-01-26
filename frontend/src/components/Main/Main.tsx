import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { MainWrapper, OutputListWrapper } from './Main.styled';

interface MainProps {
  requestType: string | null;
  endpoint: string | null;
}

const Main: React.FC<MainProps> = ({ requestType, endpoint }) => {
  const [payload, setPayload] = useState<string>('');
  const [response, setResponse] = useState<AxiosResponse<any, any> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (requestType && endpoint) {
      let url = `http://localhost:3001${endpoint}`;

      // For GET requests, add query parameters to the URL
      if (requestType === 'GET') {
        const queryParams = payload.trim();
        if (queryParams) {
          url += `?${queryParams}`;
        }
      }

      axios({
        method: requestType as any,
        url: url,
        data: requestType !== 'GET' ? JSON.parse(payload) : undefined,
      })
        .then((result) => setResponse(result))
        .catch((error) => setError(`Error: ${error.message}`));
    }
  }, [requestType, endpoint, payload]);

  const handleTextareaKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      // Trigger the request when the user presses Enter (without Shift)
      setPayload(e.currentTarget.value);
    }
  };

  return (
    <MainWrapper>
      <div className="input-container">
        <div>input the payload as you would in a curl command</div>
        <textarea
          id="payload"
          value={payload}
          onChange={(e) => setPayload(e.target.value)}
          onKeyDown={handleTextareaKeyPress}
          placeholder="Example: &quot;query=John&quot;"
        />
      </div>
      <div className="output-container">
        {response && (
          <OutputListWrapper>
            <h2>API Response:</h2>
            <ul>
              {Object.entries(response.data).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {JSON.stringify(value, null, 2)}
                </li>
              ))}
            </ul>
          </OutputListWrapper>
        )}
        {error && <p>{error}</p>}
      </div>
    </MainWrapper>
  );
};

export default Main;
