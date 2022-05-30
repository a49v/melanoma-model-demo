import { createRef, useEffect, useState } from 'react'
import {
  Alert,
  Button,
  Container,
  Dialog, DialogContent, DialogContentText, DialogActions, DialogTitle,
  Link,
  LinearProgress,
  Stack
} from '@mui/material'
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
    setDialogText(`Probabilidad de melanoma: ${prediction.probability}`)
  }

  return (
    <Container maxWidth="sm">
      <Stack spacing={3} my={5}>
        <Info/>
        <Photo onSelect={handlePhotoSelect}/>
        <Button
          variant="contained"
          onClick={runModel}
          disabled={!photoBitmap}
        >
          Correr predicción
        </Button>
        { loading ? <LinearProgress/> : null }

        <Dialog open={dialogOpen} onClose={closeDialog}>
          <DialogTitle>Resultado</DialogTitle>
          <DialogContent>
            <DialogContentText>{ dialogText }</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={closeDialog}>Cerrar</Button>
          </DialogActions>
        </Dialog>
      </Stack>
    </Container>
  );
}
