import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Stack, Typography } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

const result = ({ data }) => {
  const { homeValue, downPayment, interestRate, loanAmount, loanTerm } = data;
  const totalLoanMonth = loanTerm * 12;
  const interestPerMonth = interestRate / 100 / 12;

  const monthlyPayment =
    (loanAmount * interestPerMonth * (1 + interestPerMonth) ** totalLoanMonth) /
    ((1 + interestPerMonth) ** totalLoanMonth - 1);
  const totalInterestGenerated = monthlyPayment + totalLoanMonth - loanAmount;
  const pieChartData = {
    labels: ["Principle", "Interest"],
    datasets: [
      {
        label: "Ratio of principle and Interest",
        data: [homeValue, totalInterestGenerated],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Stack>
      <Typography variant="h5" textAlign={'center'} my={5}>
        monthlyPayment: & {monthlyPayment.toFixed(2)}
      </Typography>
      <div>
        <Pie data={pieChartData} />;
      </div>
    </Stack>
  );
};

export default result;
