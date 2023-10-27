"use client";
import { useEffect, useState } from "react";
import { setFormData } from "@/redux/features/jobAppFormSlice";
import { AppDispatch, useTypedSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Form from "@/_components/form-elements/form/Form";
import Input from "@/_components/form-elements/input/Input";
import Select from "@/_components/form-elements/select/Select";
import { FlexDiv } from "@/_components/divs/flex-div/FlexDiv.styles";
import { formFields } from "@/data/data.js";

import "./index.css";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <main>
      <Form>
        {formFields.map((field) => {
          if (Array.isArray(field)) {
            return (
              <FlexDiv key={Math.random()}>
                {field.map((item) => (
                  <Input
                    key={item.id}
                    aria-label={item.placeholder}
                    {...item}
                  />
                ))}
              </FlexDiv>
            );
          }
          if (field.type === "textarea") {
            return (
              <Input
                key={field.id}
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
                <Select>
                  {field.options!.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </Select>
              </FlexDiv>
            );
          } else
            return (
              <Input key={field.id} aria-label={field.placeholder} {...field} />
            );
        })}
      </Form>
    </main>
  );
}
