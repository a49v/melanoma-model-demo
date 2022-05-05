import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Input = styled('input')({ display: 'none' });

export default function Photo() {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Fotografía
      </Typography>

      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
          Elige una fotografía
        </Button>
      </label>
    </div>
  );
}
