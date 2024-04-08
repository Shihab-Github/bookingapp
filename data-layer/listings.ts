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