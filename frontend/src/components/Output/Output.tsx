import React from 'react';
import { OutputWrapper } from './Output.styled';

interface OutputProps {
  response: any;
  error: string | null;
}

const Output: React.FC<OutputProps> = ({ response, error }) => (
  <OutputWrapper>
    {response && (
      <div>
        <h2>API Response:</h2>
        <pre>{JSON.stringify(response.data, null, 2)}</pre>
      </div>
    )}
  </OutputWrapper>
);

export default Output;