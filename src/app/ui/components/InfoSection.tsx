'use client'
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react";
const InfoSection = ()=>{
    const [isInfoOpen, setIsInfoOpen] = useState(false);

    
    return(
        <>
            {isInfoOpen?
                (<div className="flex-col p-5 bg-neutral-800 rounded-xl space-y-7">
                    <div className="flex justify-between">
                        <h1 className="text-white text-xl font-bold">How it Works</h1>
                        <button onClick={() => setIsInfoOpen(!isInfoOpen)}>
                            <ChevronUp className="text-white"></ChevronUp>
                        </button>
                    </div>
                    <div className="space-y-3 md:space-y-4 text-gray-300">
                        <div className="flex items-start gap-2 md:gap-3">
                           <span className="bg-green-500 text-white w-5 h-5 md:w-6 md:h-6 flex justify-center items-center rounded-full text-xs md:text-sm shrink-0">1</span>
                           <div className="text-sm md:text-base">
                                <p className="mb-2">Choose how you want to create your memecoin:</p>
                                <ul className="space-y-1 ml-4 list-disc list-inside">
                                    <li>Use AI Generator (3 free generations per day): One-click random generation or customize with your prompt</li>
                                    <li>Manual Creation: Fill out the form with your memecoin details</li>
                                </ul>
                            </div> 
                        </div>
                        <div className="flex items-start gap-2 md:gap-3">
                           <span className="bg-green-500 text-white w-5 h-5 md:w-6 md:h-6 flex justify-center items-center rounded-full text-xs md:text-sm shrink-0">2</span>
                           <div className="text-sm md:text-base">
                                <p className="mb-2">Choose if you want to be the first buyer, then click "Launch Memecoin" and pay 0.15 EGLD (one-time payment).</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 md:gap-3">
                           <span className="bg-green-500 text-white w-5 h-5 md:w-6 md:h-6 flex justify-center items-center rounded-full text-xs md:text-sm shrink-0">3</span>
                           <div className="text-sm md:text-base">
                                <p className="mb-2">After launch, click "Config Xexchange" to set up trading parameters.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 md:gap-3">
                           <span className="bg-green-500 text-white w-5 h-5 md:w-6 md:h-6 flex justify-center items-center rounded-full text-xs md:text-sm shrink-0">4</span>
                           <div className="text-sm md:text-base">
                                <p className="mb-2">Finally, click "Enable Transactions" to activate trading.</p>
                            </div>
                        </div>
                        <div className="p-2 md:mt-4 mt-3 bg-gray-800/50 rounded-lg">
                            <p className="font-semibold text-white mb-2 text-sm md:text-base">What happens next?</p>
                            <ul className="list-disc list-inside space-y-1.5 md:space-y-2 text-xs md:text-sm">
                                <li>Your coin will appear in your Profile's Tokens section</li>
                                <li>If you chose to be the first buyer: Go to your Profile → Tokens → Click on your coin to make the first purchase</li>
                                <li>If you didn't choose to be the first buyer: Your coin will be immediately listed in the "Meme Coins" section</li>
                                <li>After migration to xExchange (when pool reaches 25 EGLD), you can brand your token on <a href="https://mvxbrand.fun/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">MVXBrand</a></li>
                            </ul>
                        </div>    
                    </div>
                </div>):
                (<div className="flex justify-between p-5 bg-neutral-800 rounded-xl">
                    <h1 className="text-white text-xl font-bold">How it Works</h1>
                    <button onClick={() => setIsInfoOpen(!isInfoOpen)}>
                        <ChevronDown className="text-white"></ChevronDown>
                    </button>
                </div>)
            }
        </>
    )
}
export default InfoSection;