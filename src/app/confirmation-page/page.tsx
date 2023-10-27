"use client";
import { useTypedSelector } from "@/redux/store";

export default function Page() {
  const { data } = useTypedSelector((state) => state.jobAppForm);

  return <p>{data && data.firstName}</p>;
}
