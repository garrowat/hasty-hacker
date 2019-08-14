/* eslint-disable react/state-in-constructor */
import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      challenge: 'To print something to the console:\n console.___(\'something\');',
      players: [
        {
          name: 'garrett',
          wins: 0,
          points: 0,
        },
        {
          name: 'wizkid',
          wins: 0,
          points: 0,
        },
        {
          name: 'Abro',
          wins: 0,
          points: 0,
        },
      ],
    };
  }

  componentDidMount() {
    document.body.style.backgroundColor = '#FBFBFB';
  }

  render() {
    const { players, challenge } = this.state;
    return (
      <Container>
        <Typography variant="h1" style={{ margin: 10 }}>Hyper Hacker</Typography>
        <Grid container direction="row" justify="flex-start">
          {/* <Grid
            container
            direction="column"
            spacing={2}
            justify="flex-start"
          > */}
          {players.map((player) => (
            <Grid item xs={2} justify="flex-start" style={{ margin: 5 }}>
              <Paper style={{ padding: '5%' }}>
                <Typography display="inline">
                  {player.name}{' : '}
                </Typography>
                <Typography display="inline">
                  {player.points}
                </Typography>
                <Typography display="inline">
                  {' pts'}
                </Typography>
              </Paper>
            </Grid>
          ))}
          {/* </Grid> */}
          {/* <Grid container spacing={2} direction="column" justify="flex-end" display="inline"> */}
          <Grid item md={9} justify="flex-end" style={{ margin: 5 }}>
            <Paper style={{ padding: 100 }}>
              <Box textAlign="center">
                <Typography>{challenge}</Typography>
              </Box>
            </Paper>
          </Grid>
          {/* </Grid> */}
        </Grid>
        <Grid container direction="row">
          <Grid item md={8}>
            <TextField
              id="outlined-full-width"
              label="Answer"
              style={{ margin: 8 }}
              placeholder="Placeholder"
              helperText="Complete the code!"
              fullWidth
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item md={3}>
            <Button variant="contained" color="primary" style={{ margin: 15 }}>
              Default
            </Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default App;
