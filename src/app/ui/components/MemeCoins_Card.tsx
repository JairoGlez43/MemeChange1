import Image from "next/image";
const MemeCoins_Card = ()=>{
    return(
        <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg p-4">
            <div className="flex gap-4">
                <div>
                    <Image src="/img/Tom_Raider.webp" alt="t" width={80} height={80} className="rounded-md object-cover"></Image>
                </div>
            </div>
        </div>
    )
}

export default MemeCoins_Card;