'use client'
import { useState, /*useRef*/} from "react";
import MemeCoin_Card from "../ui/components/MemeCoin_Card";
//import { Button } from "@/components/ui/button";

import { useMemeCoin } from "@/lib/hooks";
import FilterBar from "../ui/components/FilterBar";


const Page = ()=>{
    const[filterValue, setFilterValue] = useState<string>('');
    const {coins, isLoading, error} = useMemeCoin(filterValue)
    
    
    return(
            <div className="flex-col w-7xl px-3 sm:px-8 py-6 mb-70">
                
                {error&&<h1>{error}</h1>}
                <div className="flex mb-3.5">
                    <h2 className="font-semibold text-white text-center text-2xl w-full">Meme Coins</h2>
                </div>
                <FilterBar value={filterValue} setValue={setFilterValue}></FilterBar>
                
                {isLoading &&!error && (
                    <div className="flex justify-center items-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
                    </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coins?.map(coin =>{
                        //console.log(coin.creator.address);
                        return(
                            <MemeCoin_Card 
                                key={filterValue? `${coin.coin.name}-${filterValue}`: coin.coin.id} 
                                coin={coin}>
                            </MemeCoin_Card>)
                    })}
                </div>
            </div>
        
    )
}
export default Page;





/*useEffect(()=>{
        const fetcher = async () => {
            try{const response = await fetch('https://api.memexchange.fun/api/bonding-pairs');
            const data = await response.json();
            return data.coin;
            }
            catch(error){console.log(error)}
        }
        fetcher();
    },[]);*/