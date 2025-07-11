
import { useSearchParams } from "next/navigation";
import React from "react"
import { useSet } from "react-use"

interface PriceProps {
    priceFrom: number;
    priceTo: number
}
interface Filter {
    prices: PriceProps;
    selectedIngredients: Set<number>;
    selectedSize: Set<number>;
    selectedType: Set<number>;
    setPrices: (value: number[]) => void;
    setSelectedIngredients: (value: number) => void;
    setSelectedSize: (value: number) => void;
    setSelectedType: (value: number) => void;
}
export const useFilter = (): Filter => {
    const searchParams = useSearchParams()
    console.dir(searchParams.get("size")?.split(","))
    const [prices, setPrices] = React.useState([0, 5000])
    // const updatePrice = (name: keyof PriceProps, value: number) => {
    //     return {
    //         [name]: value,
    //     }
    // }

    const currentFilter = (value: string) => {
        return searchParams.get(value)?.split(",").map(Number) || []
    }
    const [selectedIngredients, { toggle: setSelectedIngredients }] = useSet(new Set<number>(
        currentFilter("ingredients")
    ))
    const [selectedSize, { toggle: setSelectedSize }] = useSet(new Set<number>(
        currentFilter("sizes")
    ))
    const [selectedType, { toggle: setSelectedType }] = useSet(new Set<number>(
        currentFilter("types")
    ))

    return {
        prices,
        setPrices,
        selectedIngredients,
        selectedSize,
        selectedType,
        setSelectedIngredients,
        setSelectedSize,
        setSelectedType,

    }
}