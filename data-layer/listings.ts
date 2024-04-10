import ListingsData from '@/constants/listingData.json'
import { IListing } from '@/interface/Listing'

export const getListings = (category: string, userId: number = 0) : Promise<IListing[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data: IListing[] = ListingsData.results.slice(0,30).filter(x => x.medium_url) as IListing[]
            return resolve(data)
        }, 1000)
    })
}

export const getListingById = (id: string) : Promise<IListing> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const listing: IListing = ListingsData.results.find(x => x.id === id.toString()) as IListing
           
            return resolve(listing)
        }, 1000)
    })
}
