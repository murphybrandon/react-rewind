import React from 'react';
import ReactJson from 'react-json-view';

// styled components
import { DetailsWrapper } from '../../../styles/Details.jsx';

const InitialDisplay = ({ action }) => {
  const details = action ? (
    <ReactJson
      theme="threezerotwofour"
      style={{ backgroundColor: 'transparent' }}
      displayDataTypes={false}
      src={action}
    />
  )
    : 'press record to start time travel';
  return (
    <DetailsWrapper>
      {details}
    </DetailsWrapper>
  );
};

export default InitialDisplay;
