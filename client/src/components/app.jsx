/* eslint-disable react/state-in-constructor */
import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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
        {
          name: 'RIPINPIECES',
          wins: 0,
          points: 0,
        },
      ],
    };
  }

  render() {
    const { players, challenge } = this.state;
    return (
      <Container>
        <Typography variant="h1">Hyper Hacker</Typography>
        <Grid container direction="row">
          <Grid
            container
            direction="column"
            spacing={2}
            justify="flex-start"
            alignItems="stretch"
          >
            {players.map((player) => (
              <Grid item xs={3}>
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
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <Paper style={{ padding: '25%' }}>
                <Box textAlign="center">
                  <Typography>{challenge}</Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default App;
