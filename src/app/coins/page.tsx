'use client'
import { useState, /*useRef*/} from "react";
import MemeCoin_Card from "../ui/components/MemeCoin_Card";
import TrendingCard from "../ui/components/TrendingCard"; 
//import { Button } from "@/components/ui/button";

import { useMemeCoin } from "@/lib/hooks";
import FilterBar from "../ui/components/FilterBar";


const Page = ()=>{
    const[filterValue, setFilterValue] = useState<string>('');
    const[filterStatus, setFilterStatus] = useState<string>('');
    //console.log(filterStatus);
    const {coins, isLoading, setSize, size, hasMore} = useMemeCoin(filterValue, filterStatus);
    
    
    
    
    return(
            <div className="flex-col w-full px-3 sm:px-8 py-6 mb-30">
                <div className="flex mb-3.5">
                    <h2 className="font-bold text-white text-center text-2xl w-full">Meme Coins</h2>
                </div>
                <a href="/create-coin">
                    <p className="text-green-600 text-center hover:underline mb-4">Create your meme coin just for 0.15 EGLD</p>
                </a>
                {isLoading?(
                    <div className="flex items-center justify-center m-9">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
                    </div>
                ):
                coins&&coins.length>0?(<div className="flex justify-center mb-7">
                    <TrendingCard coin={coins[0]}></TrendingCard>
                </div>): null}
                <FilterBar value={filterValue} setValue={setFilterValue} status={filterStatus} setStatus={setFilterStatus}></FilterBar>
                
                {isLoading?(
                    <div className="flex justify-center items-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
                    </div>
                ):coins&&coins.length > 0?
                (
                    <section>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-7">
                            {coins?.map(coin =>{
                                //console.log(coin.creator.address);
                                return(
                                    <MemeCoin_Card 
                                        key={filterValue? `${coin.coin.name}-${filterValue}`: coin.coin.name} 
                                        coin={coin}>
                                    </MemeCoin_Card>)
                            })}
                        </div>
                        {hasMore&&
                            <div className="flex justify-center">
                                <button className="bg-green-600 text-bold text-white rounded-md w-40 py-1 duration-200 hover:cursor-pointer hover:scale-[1.02]" onClick={()=>setSize(size + 1)}>Load more</button>
                            </div>}
                    </section>
                ): 
                    (<div className="flex justify-center items-center py-12">
                        <h1 className="text-lg text-white">No coins found</h1>
                    </div>)}
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