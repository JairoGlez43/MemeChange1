import useSWR from "swr";
import { Coins, FetchingResult } from "@/lib/types";
import { fetcher } from "@/services/coins";
import { useState, useEffect } from "react";
const Base_Url = 'https://api.memexchange.fun/api/bonding-pairs';

export const useMemeCoin = (searchQuery: string): FetchingResult => {
    const debouncedQuery = useDebounced(searchQuery, 500);
    //console.log(debouncedQuery);
    const url: string = debouncedQuery? `${Base_Url}/search?query=${debouncedQuery}`: Base_Url;
    const {data:coins, isLoading, error} = useSWR<Coins[]>(url, fetcher);
    //console.log(coins, isLoading, error);
    return {coins, isLoading, error: error?.message};
}


export const useDebounced = <T>(value:T, delay:number):T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);
    //console.log(debouncedValue);
    useEffect(()=>{
        const handler = setTimeout(()=>{
                setDebouncedValue(value);
            },delay);
        
        return () => {clearTimeout(handler)}
    },[value, delay])
    //console.log(debouncedValue);
    return debouncedValue;
}