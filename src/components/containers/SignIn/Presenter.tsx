import React from 'react';
import { Container, Box } from '@material-ui/core';
import './style.css';

export const Presenter: React.FC = () => {
  return (
    <div className="base">
      <Box display="flex">
        <Container>signin-left</Container>
        <Container>
          <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            signIn
          </Box>
        </Container>
      </Box>
    </div>
  );
};
