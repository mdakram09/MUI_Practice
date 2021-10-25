import { Container, Grid, Typography } from '@mui/material';
import './App.css';
import PersistentDrawerLeft from './Components/Drawer';
import RecipeReviewCard from './Components/Cards';


function App() {
  return (
    <>
      <PersistentDrawerLeft />

      <Container>
        <Grid Container spacing={3}>
          <RecipeReviewCard />
          <RecipeReviewCard />
          <RecipeReviewCard />
          <RecipeReviewCard />
          <RecipeReviewCard />
          <RecipeReviewCard />

        </Grid>
      </Container>
    </>
  );
}

export default App;
