import React from "react";
import { render, userEvent } from "@testing-library/react-native";
import Page from "@/app/(modals)/search";

describe("Search Modal", () => {
  it("should update search string correctly", async () => {
    const user = userEvent.setup();

    const { getByPlaceholderText } = render(<Page />);

    const searchInput = getByPlaceholderText(
      "Search apartments by road, city, state..."
    );
    await user.type(searchInput, "admin");

    expect(searchInput.props.value).toBe("admin");
  });
});
