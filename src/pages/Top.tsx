import React from 'react';
import { Button } from '@material-ui/core';

export const Top: React.FC = () => {
  return (
    <React.Fragment>
      <div>Top page</div>
      <Button variant="contained" color="secondary" disableElevation>
        TEST
      </Button>
    </React.Fragment>
  );
};
