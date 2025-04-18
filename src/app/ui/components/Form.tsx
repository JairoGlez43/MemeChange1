'use client'
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload } from "lucide-react";
import { FormData } from "@/lib/types";
const Form = ()=>{
    const [selectedImage, setSelectedImage] = useState<string|null>(null);
    const [formData, setFormData] = useState<FormData>({
        memecoinName: '',
        coinSymbol: '',
        description: '',
    });
    console.log(formData);
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>{
        const {name , value} = e.target;
        setFormData((prev)=>({...prev, [name]:value}))
    }
    
    const onHandleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if(file && file.type.startsWith('image/')){
            setSelectedImage(URL.createObjectURL(file));
        }
    }

    const onDragOver = (e: React.DragEvent<HTMLLabelElement>) =>{
        e.preventDefault();
    }
    
    const onHandleFileChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files){
            const file = e.target.files[0];
            if(file.type.startsWith('image/')){
                setSelectedImage(URL.createObjectURL(file));
            } 
        }
    }

    const onSubmit = (e:React.FormEvent)=>{
        e.preventDefault();
    }
    
    return(
        <div className="flex-col justify-center items-center min-h-screen mb-4">
            <Card className="w-full bg-neutral-800 border-gray-800 px-2 md:px-35">
                <CardHeader>
                    <CardTitle className="text-center text-2xl text-white">Create MemeCoin</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-5" onSubmit={onSubmit}>
                        {/* Image Upload Section */}
                        <div className="flex justify-center">
                            <Label
                                htmlFor="coin-image"
                                className="relative flex flex-col items-center justify-center w-40 h-40 rounded-full border-2 border-dashed border-gray-400 cursor-pointer hover:border-gray-300 transition-colors overflow-hidden"
                                onDrop={onHandleDrop}
                                onDragOver={onDragOver}
                            >
                                {!selectedImage?(
                                    <>
                                        <Upload className="w-8 h-8 text-gray-400" />
                                        <span className="mt-2 text-sm text-gray-400">Upload Image</span>
                                    </>):
                                    <img src={selectedImage} alt="img Selected" className="object-cover w-full h-full rounded-full"></img>
                                }
                                <input id="coin-image" type="file" accept="image/*" className="hidden" onChange={onHandleFileChange}/>
                            </Label>
                        </div>

                        
                        <div className="space-y-2">
                        <Label htmlFor="coin-name" className="text-white">
                            Memecoin Name
                        </Label>
                        <Input
                            id="coin-name"
                            name="memecoinName"
                            placeholder="Enter coin name"
                            className="bg-neutral-900 border-gray-700 text-white placeholder:text-gray-500"
                            value={formData.memecoinName}
                            onChange={onInputChange}
                        />
                        </div>

                        
                        <div className="space-y-2">
                        <Label htmlFor="coin-symbol" className="text-white">
                            Memecoin Symbol
                        </Label>
                        <Input
                            id="coin-symbol"
                            name="coinSymbol"
                            placeholder="Enter coin symbol"
                            className="bg-neutral-900 border-gray-700 text-white placeholder:text-gray-500"
                            value={formData.coinSymbol}
                            onChange={onInputChange}
                        />
                        </div>

                        
                        <div className="space-y-2">
                        <Label htmlFor="description" className="text-white">
                            Description
                        </Label>
                        <Textarea
                            id="description"
                            name="description"
                            placeholder="Enter description here..."
                            rows={4}
                            className="bg-neutral-900 border-gray-700 text-white placeholder:text-gray-500 min-h-[120px]"
                            value={formData.description}
                            onChange={onInputChange}
                        />
                        </div>
                        <div className="flex space-x-3 bg-green-500/10 border-2 border-green-500 p-4 rounded-md">
                            <Checkbox id="first_to_buy" className="bg-amber-50 data-[state=checked]:bg-green-500 data-[state=checked]:text-neutral-800 data-[state=checked]:hover:bg-green-400"></Checkbox>
                            <div className="flex-col ">
                                <Label htmlFor="first_to_buy" className="font-medium text-sm md:text-base text-white h-4 cursor-pointer">I Want to be the first buyer of this coin! 🚀</Label>
                                <p className="text-xs md:text-sm text-gray-400 mt-3">By checking this box, you will automatically become the first buyer when the coin launches</p>
                            </div>
                        </div>
                        <div >
                            <p className="text-gray-400 text-center text-xs md:text-sm">Cost of launching a memecoin is 0.15 EGLD</p>
                        </div>
                        
                        <CardFooter className="px-0">
                            
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        type="submit"
                                        className="w-full bg-green-500 hover:bg-green-600 font-medium h-9 cursor-pointer"
                                    >
                                        1. Launch Memecoin
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="bg-neutral-800 text-white">
                                    <DialogTitle>Form Data</DialogTitle>
                                    <img src={selectedImage} alt="memecoi image" />
                                    
                                    <h1>Name: {formData.memecoinName}</h1>
                                    
                                    <h1>Symbol: {formData.coinSymbol}</h1>
                                    
                                    <h1>Description: {formData.description}</h1>
                                </DialogContent>
                            </Dialog>
                        </CardFooter>
                    </form>
                </CardContent>
            </Card>
            
        </div>
    )
}
export default Form;