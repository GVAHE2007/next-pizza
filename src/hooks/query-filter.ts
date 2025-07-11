import React from "react"
import { useFilter } from "./filter"
import qs from "qs"
import { useRouter } from "next/navigation"
export const useQueryFilter = (filter) => {
    const router = useRouter()

    React.useEffect(() => {
        const query = qs.stringify({
            sizes: Array.from(filter.selectedSize).join(","),
            types: Array.from(filter.selectedType).join(","),
            ingredients: Array.from(filter.selectedIngredients).join(","),
            priceFrom: filter.prices[0],
            priceTo: filter.prices[1]
        }, {
            arrayFormat: "comma",
            encode: false
        })
        router.push(`?${query}`)
    }, [filter.prices, filter.selectedSize, filter.selectedType, filter.selectedIngredients])
}