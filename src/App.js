import * as React from 'react';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import Info from './Info.js';
import Photo from './Photo.js';


export default function App() {
  return (
    <Container maxWidth="sm">
      <Stack spacing={3} my={5}>
        <Info/>
        <Photo/>
      </Stack>
    </Container>
  );
}
