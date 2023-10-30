"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTypedSelector } from "@/redux/store";
import { formFields } from "@/data/data";
import { Form } from "@/_components/form-elements/form/Form.styles";
import { Input } from "@/_components/form-elements/input/Input.styles";
import { FlexDiv } from "@/_components/divs/flex-div/FlexDiv.styles";
import { isValidData } from "@/functions/isValid";
import Image from "next/image";
import logo from "../../imgs/logo.png";
import "@/app/index.css";

const noDataMessage = "Data not provided";

export default function Page() {
  const [isValid, setIsValid] = useState(false);
  const { data } = useTypedSelector((state) => state.jobAppForm);
  const router = useRouter();

  useEffect(() => {
    const isValid = isValidData(data);
    if (!isValid) {
      router.push("/");
      return;
    }
    setIsValid(true);
  }, [data, router]);

  return (
    <main>
      {isValid && (
        <Form as="div">
          <FlexDiv $row>
            <Image src={logo} alt="" />
            <h1>Application Submitted</h1>
          </FlexDiv>
          <p>Below is the submitted data</p>
          {data &&
            formFields.map((field) => {
              if (Array.isArray(field)) {
                return (
                  <FlexDiv key={Math.random()}>
                    {field.map((item) => (
                      <Input as="p" key={item.id}>
                        {data[item.id] || noDataMessage}
                      </Input>
                    ))}
                  </FlexDiv>
                );
              }
              if (field.type === "textarea") {
                return (
                  <Input as="p" key={field.id}>
                    {data[field.id] || noDataMessage}
                  </Input>
                );
              }
              if (field.type === "select") {
                return (
                  <Input as="p" key={field.id}>
                    {data[field.id] || noDataMessage}
                  </Input>
                );
              } else
                return (
                  <Input as="p" key={field.id}>
                    {data[field.id] || noDataMessage}
                  </Input>
                );
            })}
        </Form>
      )}
    </main>
  );
}
