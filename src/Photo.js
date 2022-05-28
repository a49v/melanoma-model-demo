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
  console.log(src)
  if (src) {
    return <img src={src} alt="Your submitted picture"/>
  }

  return (
    <Avatar>
      <InsertPhoto/>
    </Avatar>
  )
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


// https://reactjs.org/docs/uncontrolled-components.html#the-file-input-tag
// https://www.pluralsight.com/guides/how-to-use-a-simple-form-submit-with-files-in-react
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
          <Img src={photo ? URL.createObjectURL(photo) : ""} />
        </CardMedia>

        <CardContent>
        </CardContent>

        <CardActions>
          <PhotoUpload onUpload={handleLoad}/>
        </CardActions>
      </Card>
    </div>
  );
}
