const Page = ()=>{
    return(
        <div className="w-full max-w-8xl px-2 md:px-8 text-white mt-10">
            <div className="flex flex-col items-center border-b-2 border-white">
                <h1 className="text-3xl font-bold md:text-5xl mb-6">Essential Free Tools</h1>
                <div className="text-lg text-muted-foreground sm:text-xl mb-10">Elevate your experience with powerful, free Multiversx tools.</div>
            </div>
            <div className="flex justify-center flex-wrap gap-4 pb-4">
                <div className="w-[250px] space-y-3 space-x-8 text-center">
                    <a href="/tools">
                        {/*<div>
                            <img src="" alt="" />
                        </div>*/}
                        <div className="space-y-1 text-sm mt-2">
                            <h3 className="font-medium">Make your herotag</h3>
                            <p className="text-muted-foreground text-xs">An easy way to put your username on the blockcahin</p>
                        </div>  
                    </a>
                </div>    
                <div className="w-[250px] space-y-3 space-x-8 text-center">    
                    <a href="/tools">
                        {/*<div>
                            <img src="" alt="" />
                        </div>*/}
                        <div className="space-y-1 text-sm mt-2">
                            <h3 className="font-medium">Make your herotag</h3>
                            <p className="text-muted-foreground text-xs">An easy way to put your username on the blockcahin</p>
                        </div>  
                    </a>
                </div>
                <div className="w-[250px] space-y-3 space-x-8 text-center">    
                    <a href="/tools">
                        {/*<div>
                            <img src="" alt="" />
                        </div>*/}
                        <div className="space-y-1 text-sm mt-2">
                            <h3 className="font-medium">Make your herotag</h3>
                            <p className="text-muted-foreground text-xs">An easy way to put your username on the blockcahin</p>
                        </div>  
                    </a>
                </div>            
            </div>
        </div>
    )
}
export default Page;