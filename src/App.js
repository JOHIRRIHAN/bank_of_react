import React, {useState} from "react";
import { Container, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import Tenure from "./components/Tenure";
function App() {

  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5
  })
  console.log(data)

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item md={6}>
            <SliderSelect data={data} setData={setData}/>
            <Tenure data={data} setData={setData}/>
          </Grid>
          <Grid item md={6}>
            <Result />
          </Grid>
        </Grid>
        </Container>
      
    </div>
  );
}

export default App;
