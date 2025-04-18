//import useSWR from "swr";
import { Coins,Data } from "@/lib/types";
import { fetcher } from "@/services/coins";
import { useState, useEffect } from "react";
import useSWRInfinite from "swr/infinite";
const Base_Url = 'https://api.memexchange.fun/api/bonding-pairs';


export const useMemeCoin = (searchQuery: string, searchStatus: string) => {
    const debouncedQuery = useDebounced(searchQuery, 500);
    const limit:number = 20;
    //console.log(debouncedQuery, searchStatus);
    //const url: string = `${Base_Url}/search?state=${searchStatus}&query=${debouncedQuery}`;
    const getKey = (pageIndex: number, previousData: Data) =>{
        if(previousData && !previousData.hasMore) return null;
        const offSet = pageIndex * limit;
        //console.log(offSet,pageIndex);
        const url: string = debouncedQuery || searchStatus?`${Base_Url}/search?state=${searchStatus}&query=${debouncedQuery}`:`${Base_Url}?&offset=${offSet}&limit=${limit}`;
        //console.log(url);
        return url;
    }
    const {data , isLoading, error, size, setSize} = useSWRInfinite<Data>(getKey, fetcher, {revalidateFirstPage: false});
    //console.log(data);
    const coins = data? data.reduce<Coins[]>((acc,page)=>[...acc, ...page.items], []):[];
    console.log(size);
    const hasMore: boolean = data? data[data?.length-1].hasMore: false;
    return {coins, isLoading, error: error?.message, size, setSize, hasMore};
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