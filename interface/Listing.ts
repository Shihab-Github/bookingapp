export interface IGeolocation {
  lon: number;
  lat: number;
}

export interface IListing {
  id: string;
  name: string;
  description: string;
  thumbnail_url: string;
  medium_url: string;
  xl_picture_url?: string;
  host_name: string;
  host_since: string;
  host_picture_url?: string;
  smart_location: string;
  room_type: string;
  bathrooms: number;
  bedrooms: number;
  beds: number;
  price: number;
  security_deposit?: any;
  guests_included: number;
  number_of_reviews: number;
  review_scores_rating: number;
  available_from?: string;
  available_to?: string;
}
