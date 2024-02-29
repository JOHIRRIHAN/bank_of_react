import React from "react";
import SliderComponent from "./common/SliderComponent";
const SliderSelect = ({data, setData}) => {
  const bank_limit = 10000
  console.log(data)
  return (
    <div>
      <SliderComponent
        defaultValues={data.homeValue}
        value={data.homeValue}
        min={1000}
        max={bank_limit}
        step={100}
        label={"Home Value"}
        amount={data.homeValue}
        unit="$"
        onChange={(abcd, value) => setData({
          ...data, 
          homeValue: value,
          downPayment: value * 0.2,
          loanAmount: value * 0.8
        })}
      />
      <SliderComponent
        defaultValues={data.downPayment}
        value={data.downPayment}
        min={0}
        max={data.homeValue}
        step={100}
        label={"Down Payment"}
        amount={data.downPayment}
        unit="$"
        onChange={(abcd, value) => setData({
          ...data,
          downPayment: value,
          loanAmount: data.homeValue - value
        })}
      />
      <SliderComponent
        defaultValues={data.loanAmount}
        min={0}
        max={data.homeValue}
        step={100}
        value={data.loanAmount}
        label={"Loan Amount"}
        amount={data.loanAmount}
        unit="$"
        onChange={(abcd, value) => setData({
          ...data,
          loanAmount: value,
          downPayment: data.homeValue - value
        })}
      />
      <SliderComponent
        defaultValues={data.interestRate}
        min={2}
        max={18}
        step={.5}
        label={"Interest Rate"}
        amount={data.interestRate}
        value={data.interestRate}
        unit="%"
        onChange={(abcd, value) =>setData({
          ...data,
          interestRate: value
        })}
      />
    </div>
  );
};

export default SliderSelect;
