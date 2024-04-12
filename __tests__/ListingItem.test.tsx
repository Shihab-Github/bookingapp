import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react-native";
import ListingItem from "@/components/ListingItem";
import { IListing } from "@/interface/Listing";

const listingData: IListing = {
  id: "13610948",

  name: "Room in trendiest area of Hong Kong",

  description:
    "Nice flat in really cool area of Hong Kong, few mins walk to central/ soho. Can hike to the peak easily! The room is quiet small but but very confortable. Brand new bathroom and kitchen very well equipped, nice open bar too. Sharing with one girl!",
  thumbnail_url:
    "https://th.bing.com/th/id/OIP.HVgxK-lXdpiJYSQwA_qXGgAAAA?rs=1&pid=ImgDetMain",
  medium_url:
    "https://th.bing.com/th/id/OIP.HVgxK-lXdpiJYSQwA_qXGgAAAA?rs=1&pid=ImgDetMain",
  xl_picture_url:
    "https://th.bing.com/th/id/OIP.HVgxK-lXdpiJYSQwA_qXGgAAAA?rs=1&pid=ImgDetMain",
  host_name: "Marilou",
  host_since: "2012-02-12",
  available_from: "2024-06-10",
  available_to: "2024-06-15",
  host_picture_url:
    "https://a2.muscache.com/im/pictures/56eadbf3-b36c-429d-add7-e7f8ce343d7e.jpg?aki_policy=profile_x_medium",
  smart_location: "City Hall, Zhongxi District, Hong Kong",
  room_type: "Private room",
  bathrooms: 1,
  bedrooms: 1,
  beds: 1,
  price: 302,
  security_deposit: null,
  guests_included: 1,
  number_of_reviews: 4,
  review_scores_rating: 60,
};

describe("ListingItem", () => {
  it("renders listing information correctly", () => {
    const { getByText } = render(<ListingItem data={listingData} />);

    // Check if listing name is rendered
    waitFor(() => expect(getByText("Test Listing")).toBeInTheDocument());

    // Check if room type is rendered
    waitFor(() => expect(getByText("Entire apartment")).toBeInTheDocument());

    // Check if price per night is rendered
    waitFor(() => expect(getByText("$100 / night")).toBeInTheDocument());

    // Check if availability dates are rendered
    waitFor(() =>
      expect(
        getByText("Available from 2024-04-12 - 2024-04-15")
      ).toBeInTheDocument()
    );
  });
});
