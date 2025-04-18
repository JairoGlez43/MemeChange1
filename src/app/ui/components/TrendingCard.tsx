import { Coins } from "@/lib/types";
import { Card, CardContent} from "@/components/ui/card";
const TrendingCard = ({coin}: {coin: Coins})=>{
    return(
        <div className="sm:w-3/4 md:w-3/5 relative overflow-hidden  transition-transform duration-200 hover:shadow-2xl hover:scale-[1.02] hover:shadow-purple-500/20 rounded-xl">
            <Card className=" flex flex-col bg-gradient-to-br from-purple-900/90 to-blue-900/90 border-neutral-700">
                <a href={`https://memexchange.fun/meme-coins/`}>
                    <CardContent className="px-3 min-h-20">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <img src={coin.coin.imageUrl} alt="t" width={150} height={150} className="object-fill w-[100px] h-[100px] rounded-md"></img>
                            </div>
                            <div className="flex-col flex-1 max-w-md min-w-30 pb-2">
                                <h3 className="text-lg font-bold text-white">{coin.coin.name}</h3>
                                <p className="text-gray-400 text-sm line-clamp-5 break-words mx-auto">{coin.coin.description}</p>
                                <span className="text-green-700 text-xs">Market Cap: $200000</span><br/>
                                <span className="text-gray-400 text-xs">Bounding curve: 50%</span>
                                <div className="flex rounded-md h-2 bg-neutral-700 mt-1">
                                    <div className="rounded-l-md bg-green-600 w-1/2 justify-items-start"></div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </a>
                <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rotate-45 translate-x-9 translate-y-7 w-40 text-center text-white font-bold py-0.5">
                    🔥 Trending
                </div>
            </Card>
        </div>
    )    
}
export default TrendingCard