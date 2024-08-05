import React from "react";
import { useState } from "react";
import { FormControl } from "@mui/material";
import { FormHelperText, FormLabel } from "@mui/material";
import TextField from "../../atoms/TextField";
import FormValues from "../../../utils/constants";
import Button from "../../atoms/Button";
interface ButtonProps {
  onclick: React.FormEventHandler<HTMLFormElement>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setRole: React.Dispatch<React.SetStateAction<string>>;
  setExperience: React.Dispatch<React.SetStateAction<number>>;
}
const Form: React.FC<ButtonProps> = ({
  onclick,
  setName,
  setRole,
  setExperience,
}) => {
  const [nameError, setNameError] = useState<string>("");
  const [roleError, setRoleError] = useState<string>("");
  const [experienceError, setExperienceError] = useState<string>("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    const namePattern = /^[A-Za-z]{4,20}$/;
    setNameError(
      !namePattern.test(value) ? "*Name must be consist of letters" : ""
    );
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRole(value);
    const rolePattern = /^[A-Z]+$/;
    setRoleError(!rolePattern.test(value) ? "*Only captial letters" : "");
  };

  const handleExperienceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.valueAsNumber;
    setExperience(value);
    setExperienceError(isNaN(value) || value < 0 ? "non-negative number" : "");
  };
  return (
    <form onSubmit={onclick}>
      <FormControl>
        <FormLabel htmlFor="Name">Name:</FormLabel>
        <TextField
          id="Name"
          type="text"
          aria-describedby="Name"
          placeholder={FormValues.NamePlaceholder}
          onChange={handleNameChange}
        />
        <FormHelperText id="Name">{nameError}</FormHelperText>
        <FormLabel htmlFor="Role">Role:</FormLabel>
        <TextField
          id="Role"
          type="text"
          aria-describedby="Role"
          placeholder={FormValues.RolePlaceholder}
          onChange={handleRoleChange}
        />
        <FormHelperText id="Role">{roleError}</FormHelperText>
        <FormLabel htmlFor="Experience">Experience:</FormLabel>
        <TextField
          id="Experience"
          type="number"
          aria-describedby="Experience"
          placeholder="0"
          onChange={handleExperienceChange}
        />
        <FormHelperText id="Experience">{experienceError}</FormHelperText>
        <Button type="submit">Submit</Button>
      </FormControl>
    </form>
  );
};
export default Form;
