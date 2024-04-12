import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react-native";

import Label from "@/ui/Label";

describe("Label component", () => {
  it("renders children correctly", () => {
    const text = "Test Label";
    render(<Label>{text}</Label>);
    const labelElement = screen.getByText(text);
    waitFor(() => expect(labelElement).toBeInTheDocument());
  });

  // You can add more test cases as needed
});
