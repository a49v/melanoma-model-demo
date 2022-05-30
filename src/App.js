import {
  Container,
  Link,
  Stack
} from '@mui/material'

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
