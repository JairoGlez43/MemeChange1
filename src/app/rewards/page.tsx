import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";


const Page = ()=>{
    return(
        <div className="flex flex-col mb-20 w-full">
            <div className="flex-col justify-items-center w-full bg-gradient-to-br from-[rgb(18,27,19)] to-[rgb(19,78,32)] py-12 rounded-t-md">
                    <div className="py-3 w-auto">
                        <Image src="/img/mxc-logo.webp" alt="hola" width={150} height={150}></Image>
                    </div>
                    <div className="w-full max-w-md bg-neutral-800 text-white py-8 rounded-xl text-center">
                        <div className="text-6xl font-bold mb-4">5</div>
                        <div className="text-lg mb-4">
                            <h2 className="animate-float">Claim your Points by</h2>
                            <a href="#" className="underline hover:text-green-200">connecting wallet</a>
                        </div>
                    </div>
                    <div className="rounded-xl bg-neutral-800 w-full max-w-3xl text-white p-5 mt-10 text-start">
                        <div className="flex flex-col space-y-1.5">
                            <div className="font-semibold text-xl">Top Users</div>
                        </div>
                        <div>
                            <p className="text-sm text-neutral-400">
                                Weekly prizes by points
                                <br/>
                                First week rewards coming soon - keep collecting points!
                                <br/>
                                Prize distribution:
                                <br/>
                                <span className="text-green-400">1st place: 1 EGLD</span>
                                <br/>
                                <span className="text-green-400">2nd place: 0.6 EGLD</span>
                                <br/>
                                <span className="text-green-400">3rd place: 0.4 EGLD</span>
                            </p>
                        </div>
                        <div className="mt-4 p-3 bg-green-900/30 rounded-lg border border-green-700">
                            <p className="text-sm text-white">🏆 To be eligible for prizes, make sure to follow <a href="https://x.com/mem_exchange" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline">@mem_exchange on X</a></p>
                        </div>
                        <div className="pt-5">
                            <div className="flex justify-between items-center mb-4">
                                <div className="text-sm text-neutral-300">Your rank: -</div>
                            </div>
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-neutral-700 text-neutral-400">
                                        <th className="py-2">#</th>
                                        <th>Address</th>
                                        <th>Points</th>
                                        <th>Prize</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-neutral-700 text-white">
                                        <td className="py-2">1</td>
                                        <td>erd140pmj7 ... srrcah</td>
                                        <td>720</td>
                                        <td>1 EGLD</td>
                                    </tr>
                                    <tr className="border-b border-neutral-700 text-white">
                                        <td className="py-2">2</td>
                                        <td>erd18596sd ... 2cjxa8</td>
                                        <td>445</td>
                                        <td>0.6 EGLD</td>
                                    </tr>
                                    <tr className="border-b border-neutral-700 text-white">
                                        <td className="py-2">3</td>
                                        <td>erd1km36e8 ... flyqer</td>
                                        <td>285</td>
                                        <td>0.4 EGLD</td>
                                    </tr>
                                    <tr className="border-b border-neutral-700 text-white">
                                        <td className="py-2">4</td>
                                        <td>erd15tlls8 ... 8zh0kc</td>
                                        <td>170</td>
                                        <td>-</td>
                                    </tr>
                                    <tr className="border-b border-neutral-700 text-white">
                                        <td className="py-2">5</td>
                                        <td>erd14g785t ... a8svec</td>
                                        <td>115</td>
                                        <td>-</td>
                                        </tr>
                                    <tr className="border-b border-neutral-700 text-white">
                                        <td className="py-2">6</td>
                                        <td>erd1cwuzpm ... lfr5fh</td>
                                        <td>115</td>
                                        <td>-</td>
                                    </tr>
                                    <tr className="border-b border-neutral-700 text-white">
                                        <td className="py-2">7</td>
                                        <td>erd1an9s6n ... avnd6t</td>
                                        <td>95</td>
                                        <td>-</td>
                                    </tr>
                                    <tr className="border-b border-neutral-700 text-white">
                                        <td className="py-2">8</td>
                                        <td>erd1zmvcls ... tzcfpa</td>
                                        <td>80</td>
                                        <td>-</td>
                                    </tr>
                                    <tr className="border-b border-neutral-700 text-white">
                                        <td className="py-2">9</td>
                                        <td>erd1xxznqj ... 090at5</td>
                                        <td>80</td>
                                        <td>-</td>
                                    </tr>
                                    <tr className="border-b border-neutral-700 text-white">
                                        <td className="py-2">10</td>
                                        <td>erd1twpgwy ... kp92v0</td>
                                        <td>80</td>
                                        <td>-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="w-full max-w-3xl text-white px-2.5">
                        <Accordion collapsible type="single" className="w-full border-b-1 border-muted-foreground">
                                <AccordionItem value="item-1">
                                        <AccordionTrigger>
                                            
                                            How it Works
                                            
                                        </AccordionTrigger>
                                    
                                    <AccordionContent>
                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="font-semibold text-white mb-2">Daily Tasks</h3>
                                                <p className="text-sm">Complete tasks shown in the cards below to earn points. Some tasks like connecting wallet, buying meme coins, or creating coins reset daily. Missing a day's tasks means those points cannot be recovered.</p>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-white mb-2">Weekly Rewards</h3>
                                                <p className="text-sm">Points reset every week, and rewards are distributed to top performers.</p>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-white mb-2">Claiming Rewards</h3>
                                                <p className="text-sm">If you're a winner:</p>
                                                    <ul className="list-disc list-inside mt-2 space-y-1">
                                                        <li>You must be subscribed to <a href="https://x.com/mem_exchange" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">@mem_exchange on X</a></li>
                                                        <li>Contact us through the Telegram group or send a private message</li>
                                                        <li>We'll verify your X subscription before sending rewards</li>
                                                    </ul>
                                                
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion> 
                        </div>
                        
            </div>
            <div className="w-full bg-[#1e222d]">
            <div className="py-8 px-5 my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="rounded-xl text-card-foreground shadow bg-neutral-800 border border-neutral-700">
                    <div className="flex flex-col space-y-1.5 p-6 pb-2">
                        <div className="flex items-center justify-between">
                            <div className="tracking-tight text-sm font-semibold text-white">Connect Wallet</div>
                        </div>
                        <p className="text-xs text-neutral-400">Claim your points by connecting your wallet • 5 points</p>
                    </div>
                    <div className="p-6 pt-0 flex justify-end">
                        <Button>Make Task</Button>
                    </div>
                </div>
                <div className="rounded-xl text-card-foreground shadow bg-neutral-800 border border-neutral-700">
                    <div className="flex flex-col space-y-1.5 p-6 pb-2">
                        <div className="flex items-center justify-between">
                            <div className="tracking-tight text-sm font-semibold text-white">Buy MemeCoin</div>
                        </div>
                        <p className="text-xs text-neutral-400">Claim your points by connecting your wallet • 15 points</p>
                    </div>
                    <div className="p-6 pt-0 flex justify-end">
                        <Button>Make Task</Button>
                    </div>
                </div>
                <div className="rounded-xl text-card-foreground shadow bg-neutral-800 border border-neutral-700">
                    <div className="flex flex-col space-y-1.5 p-6 pb-2">
                        <div className="flex items-center justify-between">
                            <div className="tracking-tight text-sm font-semibold text-white">Create a MemeCoin</div>
                        </div>
                        <p className="text-xs text-neutral-400">Claim your points by connecting your wallet • 50 points</p>
                    </div>
                    <div className="p-6 pt-0 flex justify-end">
                        <Button>Make Task</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>        
    )
}
export default Page;