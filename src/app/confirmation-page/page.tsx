"use client";
import { useTypedSelector } from "@/redux/store";
import { Form } from "@/_components/form-elements/form/Form.styles";
import { Input } from "@/_components/form-elements/input/Input.styles";
import { Select } from "@/_components/form-elements/select/Select.styles";
import { FlexDiv } from "@/_components/divs/flex-div/FlexDiv.styles";
import { formFields } from "@/data/data.js";

const noDataMessage = "Data not provided";

export default function Page() {
  const { data } = useTypedSelector((state) => state.jobAppForm);

  return (
    <Form as="div">
      <h1>Application Submitted</h1>
      <p>Below is the submitted data</p>
      {data &&
        formFields.map((field) => {
          if (Array.isArray(field)) {
            return (
              <FlexDiv key={Math.random()}>
                {field.map((item) => (
                  <Input
                    value={data[item.id] || noDataMessage}
                    key={item.id}
                    disabled
                    aria-label={item.placeholder}
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
                value={data[field.id] || noDataMessage}
                disabled
                aria-label={field.placeholder}
              />
            );
          }
          if (field.type === "select") {
            return (
              <FlexDiv key={field.id} $row>
                <label htmlFor={field.id}>Select a role to apply for:</label>
                <Select id={field.id} disabled>
                  <option>{data[field.id] || noDataMessage}</option>
                </Select>
              </FlexDiv>
            );
          } else
            return (
              <Input
                key={field.id}
                value={data[field.id] || noDataMessage}
                disabled
                aria-label={field.placeholder}
              />
            );
        })}
    </Form>
  );
}
