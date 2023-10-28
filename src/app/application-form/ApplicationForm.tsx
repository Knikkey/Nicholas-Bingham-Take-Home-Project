"use client";
import React from "react";
import { useState } from "react";
import { setFormData } from "@/redux/features/jobAppFormSlice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { Form } from "@/_components/form-elements/form/Form.styles";
import {
  Input,
  InputError,
} from "@/_components/form-elements/input/Input.styles";
import { Select } from "@/_components/form-elements/select/Select.styles";
import { SubmitButton } from "@/_components/buttons/Button.styles";
import { FlexDiv } from "@/_components/divs/flex-div/FlexDiv.styles";
import { formFields } from "@/data/data.js";

export default function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleChange = (e: any) => {
    dispatch(setFormData({ [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    router.push("/confirmation-page");
  };

  return (
    <Form>
      <h1>Job Application Form</h1>
      {formFields.map((field) => {
        if (Array.isArray(field)) {
          return (
            <FlexDiv key={`input-container-${Math.random()}`}>
              {field.map((item) => (
                <Input
                  {...item}
                  key={item.id}
                  onChange={handleChange}
                  aria-label={item.placeholder}
                />
              ))}
            </FlexDiv>
          );
        }
        if (field.type === "textarea") {
          return (
            <React.Fragment key={field.id}>
              <Input
                {...field}
                onChange={handleChange}
                as="textarea"
                aria-label={field.placeholder}
              />
              {field.$errorMessage && (
                <InputError>{field.$errorMessage}</InputError>
              )}
            </React.Fragment>
          );
        }
        if (field.type === "select") {
          return (
            <FlexDiv key={field.id} $row>
              <label htmlFor={field.id}>Select a role to apply for:</label>
              <Select onChange={handleChange} id={field.id}>
                {field.options!.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </Select>
            </FlexDiv>
          );
        } else
          return (
            <React.Fragment key={field.id}>
              <Input
                {...field}
                onChange={handleChange}
                aria-label={field.placeholder}
              />
              {field.$errorMessage && (
                <InputError>{field.$errorMessage}</InputError>
              )}
            </React.Fragment>
          );
      })}
      <SubmitButton onClick={handleSubmit} disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </SubmitButton>
    </Form>
  );
}
