export interface IReservation {
    
    //primary
    id: string;
    photo: string;
    name: string;
    review_scores_rating: number;
    room_type: string;
    price: number;

    //other details (optional)
    smart_location?: string;
    guests_included?: number;
    bedrooms?: number;
    beds?: number;
    bathrooms?: number;
    number_of_reviews?: number;
    host_picture_url?: string;
    host_name?: string;
    host_since?: string;
    description?: string;
  
    //user details (optional)
    firstName?: string;
    lastName?: string;
    startDate?: string;
    endDate?: string;
    security_deposit?: Boolean;
    additionalNeeds?: string;
  }