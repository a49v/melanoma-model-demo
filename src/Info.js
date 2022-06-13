import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WarningIcon from '@mui/icons-material/Warning';
import {
  Accordion, AccordionDetails, AccordionSummary,
  Alert,
  List, ListItem, ListItemText,
  Typography
} from '@mui/material';

function Info() {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        FAQ
      </Typography>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ fontWeight: 'bold' }}>What is a melanoma?</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Melanoma is a form of skin cancer that occurs when melanocytes get uncontrollably large.
            It's more hazardous because, if not identified and treated early, it's much more likely
            to spread to other parts of the body. (Cancer.org, 2019)
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{ fontWeight: 'bold' }}>How do I upload a picture?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ArrowRightIcon/>
              <ListItemText>
                Click on the 'Choose a Picture' button in the "Melanoma predictor" section.
              </ListItemText>
            </ListItem>

            <ListItem>
              <ArrowRightIcon/>
              <ListItemText>
                If you're on mobile, it'll give you the option to either upload a picture or take one.
                On desktop, you'll only be able to upload an existing picture.
              </ListItemText>
            </ListItem>

            <ListItem>
              <ArrowRightIcon/>
              <ListItemText>
                Whether you take a picture or upload an existing one, make sure
                your camera is clean and find a place that has as much light as possible.
              </ListItemText>
            </ListItem>

            <ListItem>
              <ArrowRightIcon/>
              <ListItemText>
                Take as good and clear a picture as possible. Here's a good example:
              </ListItemText>
            </ListItem>

            <ListItem>
              <img
                src="https://elmedicointeractivo.com/wp-content/uploads/2020/05/melanoma.jpg"
                width="250"
                style={{ marginLeft: "2em" }}
              />
            </ListItem>

            <ListItem>
              <ArrowRightIcon/>
              <ListItemText>
                Finally, click on the "Run prediction" button. Your results will pop up within a second or two, since
                the model has to be loaded.
              </ListItemText>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ fontWeight: 'bold' }}>What do I do after getting my prediction?</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Consult a doctor for a better diagnosis. Earlier detection of cancer could
            substantially increase survival rates.
          </Typography>
        </AccordionDetails>

        <Alert severity="warning">
          This app is in beta. As of now, it only computes the probability of having melanoma,
          but therare are other types of skin cancer which are slated for future versions.
          This does not substitute the diagnosis of a physician.
        </Alert>
      </Accordion>
    </div>
  );
}

export default Info;
