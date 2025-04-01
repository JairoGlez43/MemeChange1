//import Image from "next/image";
import { Card, CardContent, CardFooter} from "@/components/ui/card";
import { Coins, FilteredMemeCoin, MemeCoin } from "@/lib/types";
import { FaXTwitter } from "react-icons/fa6";
//import { MemeCoin } from "@/lib/types";

const MemeCoin_Card = ({coin}: {coin:Coins}) =>{
    
    const creatorAddress = typeof coin.creator === 'object'? coin.creator.address: coin.creator/*`${coin.creator.slice(0,9)} ... ${coin.creator.slice(coin.creator.length-6, coin.creator.length)}`*/
    const slicedAddress = `${creatorAddress.slice(0,9)} ... ${creatorAddress.slice(creatorAddress.length-6, creatorAddress.length)}`
    return(
        
        <Card className="bg-neutral-800 transition-transform hover:scale-[1.02] duration-200 hover:shadow-lg overflow-hidden border-neutral-700 p-2 flex flex-col">
            <a href={`https://memexchange.fun/meme-coins/${coin.address}`}>
                <CardContent className="px-3 min-h-40">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <img src={coin.coin.imageUrl} alt="t" width={150} height={150} className="object-fill w-[100px] h-[100px] rounded-md"></img>
                        </div>
                        <div className="flex-1 max-w-md min-w-30">
                            <h3 className="text-lg font-bold text-white">{coin.coin.name}</h3>
                            <p className="text-gray-400 text-sm line-clamp-5 break-words mx-auto">{coin.coin.description}</p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="px-4 pb-2 [.border-t]:pt-3 border-t border-gray-700 flex justify-between items-center">
                    <div className="flex items-center gap-1.5 text-gray-400 w-full text-xs pr-4">
                        <div className="w-6 h-6 bg-purple-900 rounded-full flex items-center justify-center mr-2">
                            <span className="text-xs">👤</span>
                        </div>
                        <span>
                            {slicedAddress}
                        </span>
                        <span className="mx-2">•</span>
                        <span> days ago</span>
                    </div>
                    <FaXTwitter className="h-5 w-5 text-gray-500 m-2 rounded-sm hover:bg-neutral-600" />
                </CardFooter>
            </a>
        </Card>
    )
    
}

export default MemeCoin_Card;


//className={/*"bg-gray-800 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg p-4"