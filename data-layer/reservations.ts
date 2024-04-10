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
            const reservations: IReservation[] = ListingData.results.slice(0,3).map((item) => {
                return {
                    id: item.id,
                    name: item.name,
                    photo: item.medium_url,
                    review_scores_rating: item.review_scores_rating,
                    room_type: item.room_type,
                    price: item.price,
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




// console.log('reservations: ', reservations)