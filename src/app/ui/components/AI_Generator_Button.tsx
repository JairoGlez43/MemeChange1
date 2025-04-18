'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AI_Generator_Button = () =>{
    const [isHovered, setIsHover] = useState<boolean>(false);
    return(
        <div className="flex justify-center mb-4">
            <Button
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className="flex overflow-hidden relative rounded-full bg-gradient-to-r from-[#1a1f2c] to-[#1e2433] hover:shadow-green-500/50 hover:shadow-lg border-1 border-green-500/30 text-green-400 font-medium text-sm sm:text-base"
            >
                <span
                    className={cn(
                        "absolute inset-0 bg-gradient-to-l from-emerald-400/0 via-emerald-400/5 to-emerald-400/0 z-0 translate-x-[100%]",
                        isHovered?"animate-shineRTL": "animate-shineLTR"
                    )}
                />
                <div className="relative flex items-center z-10">
                    <div className="animate-float">
                        <span>🤖</span>
                    </div>
                    <span className="ml-2">AI Coin Generator</span>
                </div>
            
            </Button>
        </div>
      
    )         
            
       
}
export default AI_Generator_Button;