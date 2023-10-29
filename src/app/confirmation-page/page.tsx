"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTypedSelector } from "@/redux/store";
import { Form } from "@/_components/form-elements/form/Form.styles";
import { Input } from "@/_components/form-elements/input/Input.styles";
import { FlexDiv } from "@/_components/divs/flex-div/FlexDiv.styles";
import { formFields } from "@/data/data.js";
import Image from "next/image";
import logo from "../../imgs/logo.png";
import "@/app/index.css";

const noDataMessage = "Data not provided";

export default function Page() {
  const { data } = useTypedSelector((state) => state.jobAppForm);
  const router = useRouter();
  const hasData = !!Object.keys(data).length;

  useEffect(() => {
    if (!hasData) router.push("/");
  });

  return (
    <main>
      {hasData && (
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
