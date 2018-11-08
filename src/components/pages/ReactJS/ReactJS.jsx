import React from 'react';
import { BuggyControl, ToggleButton, Button } from 'components/controls';

const displayName = 'ReactJS';

function ReactJS() {
  return (
    // No extra div wrapper. With React.Fragment its children are rendered as is directly into the parent.
    <React.Fragment>
      <h1>ReactJS</h1>
      <Button>DEFAULT</Button>
      <Button accent>ACCENT</Button>
      <ToggleButton>DEFAULT TOGGLE</ToggleButton>
      <ToggleButton accent>ACCENT TOGGLE</ToggleButton>
      <BuggyControl />
    </React.Fragment>
  );
}

ReactJS.displayName = displayName;

export default ReactJS;
