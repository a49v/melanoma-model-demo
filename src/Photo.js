import { useRef, useState } from 'react';
import {
  Avatar,
  Button,
  Card, CardActions, CardContent, CardMedia,
  Typography
} from '@mui/material'
import { styled } from '@mui/material/styles';
import { InsertPhoto } from '@mui/icons-material';


const Input = styled('input')({ display: 'none' });

const Img = ({ src }) => {
  const divStyle = src ?
        {
          backgroundImage: `url(${src})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          height: 250
        } :
        { backgroundColor: 'gray', height: 250 }

  return <div style={divStyle} />
}

const PhotoUpload = ({ onUpload }) => {
  const fileInput = useRef(null)

  const onSelect = () => onUpload(fileInput.current.files[0])

  return (
    <div>
      <label htmlFor="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          onChange={onSelect}
          ref={fileInput}
          type="file"
        />
        <Button variant="contained" component="span">
          Elige una fotografía
        </Button>
      </label>
    </div>
  );
}

export default function Photo() {
  const [photo, setPhoto] = useState(null)

  const handleLoad = f => setPhoto(f)

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Fotografía
      </Typography>

      <Card>
        <CardMedia>
          <Img src={photo ? URL.createObjectURL(photo) : ""}/>
        </CardMedia>

        <CardActions>
          <PhotoUpload onUpload={handleLoad}/>
        </CardActions>
      </Card>
    </div>
  );
}
