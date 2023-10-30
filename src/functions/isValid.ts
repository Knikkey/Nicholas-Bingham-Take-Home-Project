import { formFields } from "../data/data";

const isRequired = formFields
  .flat()
  .filter((item) => "required" in item)
  .map((item) => item.id);
const hasPattern = formFields.flat().filter((item) => "pattern" in item);
const hasPatternIds = hasPattern.map((item) => item.id);

export const isValidData = (data: { [key: string]: string }) => {
  for (let [key, value] of Object.entries(data)) {
    if (isRequired.includes(key) && !value.length) {
      return false;
    }

    if (hasPatternIds.includes(key)) {
      const currentObject = hasPattern.find((item) => item.id === key);
      const { pattern } = currentObject;
      if (!value.match(pattern)) {
        return false;
      }
    }
  }

  return true;
};
