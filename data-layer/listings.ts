import ListingsData from '@/constants/listingData.json'
import { Listing } from '@/interface/Listing'

export const getListings = (category: string, userId: number = 0) : Promise<Listing[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data: Listing[] = ListingsData.results.slice(0,30).filter(x => x.medium_url) as Listing[]
            return resolve(data)
        }, 1000)
    })
}

export const getListingById = (id: string) : Promise<Listing> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const listing: Listing = ListingsData.results.find(x => x.id === id.toString()) as Listing
           
            return resolve(listing)
        }, 1000)
    })
}