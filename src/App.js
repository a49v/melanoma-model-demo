import { createRef, useEffect, useState } from 'react'
import {
  Alert,
  AppBar,
  Button,
  Container,
  Dialog, DialogContent, DialogContentText, DialogActions, DialogTitle,
  Grid,
  Link,
  LinearProgress,
  Stack,
  Toolbar,
  Typography
} from '@mui/material'
import CopyrightIcon from '@mui/icons-material/Copyright';
import * as tmImage from '@teachablemachine/image'

import Info from './Info.js';
import Photo from './Photo.js';


const URL = "https://teachablemachine.withgoogle.com/models/H27R8suzM/"
const modelURL = URL + "model.json"
const metadataURL = URL + "metadata.json"

export default function App() {
  const [model, setModel] = useState(null)
  const [photoBitmap, setPhotoBitmap] = useState(null)
  const [loading, setLoading] = useState(false)

  const [dialogText, setDialogText] = useState("")
  const [dialogOpen, setDialogOpen] = useState(false)

  useEffect(() => {
    tmImage.load(modelURL, metadataURL)
           .then(m => setModel(m))
           .catch(e => console.log(e))
  }, [])

  const handlePhotoSelect = p => {
    createImageBitmap(p)
      .then(b => setPhotoBitmap(b))
      .catch(e => console.log(e))
  }

  const closeDialog = () => setDialogOpen(false)

  const runModel = async () => {
    setLoading(true)
    let [prediction, _] = await model.predict(photoBitmap)
    setLoading(false)

    setDialogOpen(true)
    setDialogText(`Probability of melanoma: ${prediction.probability * 100} %`)
  }

  return (
    <Container fixed>
      <AppBar>
        <Typography
          variant="h4"
          align="center"
          style={{ margin: "1rem" }}
        >
          Design in Biomedical Engineering
        </Typography>
      </AppBar>
      <Toolbar/>

      <Grid
        container
        alignItems="center"
        spacing={3}
        my={10}
      >

        <Grid item xs={12} md={6}>
          <Info/>
        </Grid>

        <Grid item xs={12} md={6}>
          <Photo onSelect={handlePhotoSelect}/>
          <Button
            color="secondary"
            fullWidth
            variant="outlined"
            onClick={runModel}
            disabled={!photoBitmap}
          >
            Run prediction
          </Button>

          { loading ? <LinearProgress/> : null }
        </Grid>

        <Dialog open={dialogOpen} onClose={closeDialog}>
          <DialogTitle>Result</DialogTitle>
          <DialogContent>
            <DialogContentText>{ dialogText }</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={closeDialog}>Close</Button>
          </DialogActions>
        </Dialog>
      </Grid>

      <AppBar color="transparent" position="fixed" sx={{ top: 'auto', bottom: 0 }}>
        <Typography align="center" variant="body2">
          Corona, Herbozo, De La Cruz, Vela <CopyrightIcon fontSize="small"/>
        </Typography>
      </AppBar>
    </Container>
  );
}
