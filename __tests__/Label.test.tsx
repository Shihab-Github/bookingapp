import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react-native";

import Label from "@/ui/Label";

describe("Label component", () => {
  it("renders children correctly", () => {
    const text = "Test Label";
    const { getByText } = render(<Label>{text}</Label>);
    expect(getByText("Test Label")).toBeTruthy();
  });

  // You can add more test cases as needed
});
