import ListingsData from "@/constants/listingData.json";
import { IListing } from "@/interface/Listing";

export const getListings = (
  category: string,
  sortBy: string | undefined,
  searchStr: string | undefined
): Promise<IListing[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data: IListing[] = ListingsData.results.slice(0, 30) as IListing[];

      if (searchStr && searchStr.trim() !== "")
        data = data.filter((item) =>
          item.smart_location.toLowerCase().includes(searchStr.toLowerCase())
        );

      if (sortBy && sortBy === "price") {
        data.sort((a, b) => {
          return a.price - b.price;
        });
      }

      if (sortBy && sortBy === "startDate") {
        data.sort((a, b) => {
          const date1 = new Date(a.available_from as string).getTime();
          const date2 = new Date(b.available_from as string).getTime();
          return date1 - date2;
        });
      }

      if (sortBy && sortBy === "endDate") {
        data.sort((a, b) => {
          const date1 = new Date(a.available_to as string).getTime();
          const date2 = new Date(b.available_to as string).getTime();
          return date2 - date1;
        });
      }
      return resolve(data);
    }, 1000);
  });
};

export const getListingById = (id: string): Promise<IListing> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const listing: IListing = ListingsData.results.find(
        (x) => x.id === id.toString()
      ) as IListing;

      return resolve(listing);
    }, 1000);
  });
};
