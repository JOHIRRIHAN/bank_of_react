import React from "react";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";

const sliderComponent = ({
  defaultValues,
  max,
  min,
  amount,
  label,
  unit,
  step,
  value,
  onChange,
}) => {
  return (
    <>
      <Stack my={5}>
        <Stack gap={1}>
          <Typography variant="subtitle2">{label}</Typography>
          <Typography variant="h5">
            {unit} {amount}
          </Typography>
        </Stack>
        <Slider
          max={max}
          min={min}
          defaultValue={defaultValues}
          aria-label="Default"
          valueLabelDisplay="auto"
          value={value}
          onChange={onChange}
          marks
          step={step}
        />
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="caption" color="text.secondary">
            {unit} {min}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {unit} {max}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default sliderComponent;
