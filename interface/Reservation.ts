export interface IReservation {
    id: string;
    photo: string;
    name: string;
    review_scores_rating: number;
    room_type: string;
    price: number;
  
    //optional
    firstName?: string;
    lastName?: string;
    startDate?: string;
    endDate?: string;
    depositPad?: Boolean;
    additionalNeeds?: string;
  }