"use client";
import { useState, useEffect } from "react";
import { setFormData } from "@/redux/features/jobAppFormSlice";
import { AppDispatch, useTypedSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Form from "@/_components/form-elements/form/Form";
import Input from "@/_components/form-elements/input/Input";
import Select from "@/_components/form-elements/select/Select";
import Button from "@/_components/buttons/Button";
import { FlexDiv } from "@/_components/divs/flex-div/FlexDiv.styles";
import { formFields } from "@/data/data.js";

import "./index.css";

export default function Home() {
  const [formValues, setFormValues] = useState({});
  const dispatch = useDispatch<AppDispatch>();
  const data = useTypedSelector((state) => state.jobAppForm);

  const handleChange = (e: any) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <main>
      <Form onSubmit={handleSubmit}>
        <h1>Job Application Form</h1>
        {formFields.map((field) => {
          if (Array.isArray(field)) {
            return (
              <>
                <FlexDiv>
                  {field.map((item) => (
                    <Input
                      key={item.id}
                      onChange={handleChange}
                      aria-label={item.placeholder}
                      {...item}
                    />
                  ))}
                </FlexDiv>
              </>
            );
          }
          if (field.type === "textarea") {
            return (
              <Input
                key={field.id}
                onChange={handleChange}
                as="textarea"
                aria-label={field.placeholder}
                {...field}
              />
            );
          }
          if (field.type === "select") {
            return (
              <FlexDiv key={field.id}>
                <label htmlFor={field.id}>
                  Select the role you are applying for:
                </label>
                <Select onChange={handleChange} id={field.id}>
                  {field.options!.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </Select>
              </FlexDiv>
            );
          } else
            return (
              <Input
                onChange={handleChange}
                key={field.id}
                aria-label={field.placeholder}
                {...field}
              />
            );
        })}
        <Button type="submit">Submit</Button>
      </Form>
    </main>
  );
}
