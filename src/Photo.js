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
        { backgroundColor: '#ccc', height: 250 }

  return <div style={divStyle} />
}

const PhotoUpload = ({ onUpload }) => {
  const fileInput = useRef(null)

  const onSelect = () => onUpload(fileInput.current.files[0])

  return (
    <label htmlFor="contained-button-file" style={{ width: '100%' }}>
      <Input
        accept="image/*"
        id="contained-button-file"
        onChange={onSelect}
        ref={fileInput}
        type="file"
      />
      <Button color="secondary" fullWidth variant="outlined" component="span">
        Choose a picture
      </Button>
    </label>
  );
}

const Photo = ({ onSelect }) => {
  const [photo, setPhoto] = useState(null)

  const handleLoad = f => { setPhoto(f) ; onSelect(f) }

  return (
    <div style={{ marginBottom: '1em' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Melanoma predictor
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

export default Photo;
