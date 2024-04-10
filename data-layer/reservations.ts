import axios from "axios";
import { GET_RESERVATIONS_API } from "./API";
import { IReservation } from "@/interface/Reservation";
import ListingData from '@/constants/listingData.json'
import { IListing } from "@/interface/Listing";
import dayjs from "dayjs";


export const getReservations = (): Promise<IReservation[]> => {
    return new Promise((resolve, reject) => {
        // let url = GET_RESERVATIONS_API
        // axios.get(url).then((response) => {
        //     return resolve(response.data)
        // }).catch((err) => reject(err))

        setTimeout(() => {
            const reservations: IReservation[] = ListingData.results.slice(8,10).map((item) => {
                return {
                    id: item.id,
                    name: item.name,
                    photo: item.medium_url,
                    review_scores_rating: item.review_scores_rating,
                    room_type: item.room_type,
                    price: item.price ? item.price : 100,
                    firstName: 'Raza Shihab',
                    lastName: 'Mahbub',
                    startDate: dayjs().format("MMM-D"),
                    endDate: dayjs().add(2, 'day').format("MMM-D")
                }
            }) as IReservation[]
            return resolve(reservations)
        }, 1000)
    });
}

export const getReservationById = (id: string) : Promise<IReservation> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const reservation: IReservation = ListingData.results.filter(x => x.id === id.toString()).map((item) => {
                return {
                    id: item.id,
                    name: item.name,
                    photo: item.xl_picture_url,
                    review_scores_rating: item.review_scores_rating,
                    room_type: item.room_type,
                    price: item.price ? item.price : 100,

                    smart_location: item.smart_location,
                    guests_included: item.guests_included,
                    bedrooms: item.bedrooms, 
                    beds: item.beds,
                    bathrooms: item.bathrooms,
                    number_of_reviews: item.number_of_reviews,
                    host_picture_url: item.host_picture_url,
                    host_name: item.host_name,
                    host_since: item.host_since,
                    description: item.description,

                    firstName: 'Raza Shihab',
                    lastName: 'Mahbub',
                    startDate: dayjs().format("MMM-D"),
                    endDate: dayjs().add(2, 'day').format("MMM-D"),
                    
                    additionalNeeds: 'laundry'
                    
                }
            })[0] as IReservation
           
            return resolve(reservation)
        }, 1000)
    })
}




// console.log('reservations: ', reservations)