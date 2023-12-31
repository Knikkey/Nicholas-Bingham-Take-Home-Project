"use client";
import React from "react";
import { useState } from "react";
import { setFormData } from "@/redux/features/jobAppFormSlice";
import { AppDispatch, useTypedSelector } from "@/redux/store";
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
import { isValidData } from "@/functions/isValid";
import Image from "next/image";
import logo from "../../imgs/logo.png";

export default function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useTypedSelector((state) => state.jobAppForm);
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    dispatch(setFormData({ [e.target.id]: e.target.value }));
  };

  const handleSubmit = (submittedData: { [key: string]: string }) => {
    setIsSubmitting(true);
    const isValid = isValidData(submittedData);
    if (!isValid) {
      setIsSubmitting(false);
      return;
    }
    router.push("/confirmation-page");
  };

  return (
    <Form>
      <FlexDiv $row>
        <Image src={logo} alt="" />
        <h1>Job Application Form</h1>
      </FlexDiv>
      {formFields.map((field, i) => {
        if (Array.isArray(field)) {
          return (
            <FlexDiv key={`input-container-${i}`}>
              {field.map((item) => (
                <Input
                  {...item}
                  key={item.id}
                  onChange={handleChange}
                  aria-label={item.placeholder}
                  value={data[item.id]}
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
                value={data[field.id]}
              />
            </React.Fragment>
          );
        }
        if (field.type === "select") {
          return (
            <FlexDiv key={field.id} $row>
              <label htmlFor={field.id}>Select a role to apply for:</label>
              <Select
                onChange={handleChange}
                id={field.id}
                value={data[field.id]}
              >
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
                value={data[field.id]}
              />
              {data[field.id].length > 0 && field.$errorMessage && (
                <InputError>{field.$errorMessage}</InputError>
              )}
            </React.Fragment>
          );
      })}
      <SubmitButton onClick={() => handleSubmit(data)} disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </SubmitButton>
    </Form>
  );
}
