
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { useNavigate } from "react-router-dom";


const chess = '../../assets/chess.gif'

export default function Home () {
  const navigate = useNavigate();

  return (
    <Grid container spacing={2}
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      height="100vh"
    >
      <Grid xs={6} > 
        <img src={chess} alt="chess" width="500px" height="500px"/>
      </Grid>

      <Grid container xs={3}>
          <Grid xs={12} >
            <Button
              onClick={() => navigate('/play')}
              startIcon={<SportsEsportsIcon/>}
              variant='contained'
              sx={{
                width: '250px',
                height: '100px',
                borderRadius: '25px',
                backgroundColor: '#479C6B',
              }}
            >
              Jugar!
            </Button> 
          </Grid>

          <Grid xs={5}>
            <Button 
              onClick={() => navigate('/login')}
              sx={{
                width: '100px',
                height: '30px',
                borderRadius: '25px',
                backgroundColor: '#479C6B',  
              }}
            >
                Login
            </Button>
          </Grid>

          <Grid xs={3}>
            <Button
              onClick={() => navigate('/register')}
              sx={{
                width: '100px',
                height: '30px',
                borderRadius: '25px',
                backgroundColor: '#479C6B',  
              }}
            >
              Register
            </Button>
          </Grid>

      </Grid>
    </Grid>
  );
}
