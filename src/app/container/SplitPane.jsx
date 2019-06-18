import React from 'react';

// styled components
import { PaneWrapper, LeftPane, RightPane } from '../styles/SplitPane.jsx';

const SplitPane = ({ left, right }) => {
  return (
    <PaneWrapper>
      <LeftPane>{left}</LeftPane>
      <RightPane>{right}</RightPane>
    </PaneWrapper>
  );
};

export default SplitPane;
