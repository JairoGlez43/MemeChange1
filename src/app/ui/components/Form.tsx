'use client'
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormData } from "@/lib/types";

const Form = ()=>{
    //const [selectedImage, setSelectedImage] = useState<string|null>(null);
    const [open , setOpen] = useState<boolean>(false)
    const {
        register,
        handleSubmit,
        watch,
        setValue,
    } = useForm<FormData>();

    const coinImageFiles = watch("coinImage");
    const file = coinImageFiles?.[0];
    const [previewUrl, setPreviewUrl] = useState<string|null>(null);

    useEffect(() => {
        if(file){
            setPreviewUrl(URL.createObjectURL(file))
        }
    }, [file]);

    const onDragOver = (e: React.DragEvent<HTMLLabelElement>)=>{
        e.preventDefault();
    }
    
    const onDrop = (e: React.DragEvent<HTMLLabelElement>)=>{
        e.preventDefault();
        const droppedFiles = Array.from(e.dataTransfer.files);
        const droppedFile = droppedFiles[0];
        if(droppedFile){
            setPreviewUrl(URL.createObjectURL(droppedFile));
            setValue("coinImage", droppedFiles, {shouldValidate:true});
        }
    }

    const onSubmit: SubmitHandler<FormData> = () => {
        setOpen(true);
    }

    return(
        <div className="flex-col justify-center items-center min-h-screen mb-4">
            <Card className="w-full bg-neutral-800 border-gray-800 px-2 md:px-35">
                <CardHeader>
                    <CardTitle className="text-center text-2xl text-white">Create MemeCoin</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                        {/* Image Upload Section */}
                        <div className="flex justify-center">
                            <Label
                                htmlFor="coin-image"
                                className="relative flex flex-col items-center justify-center w-40 h-40 rounded-full border-2 border-dashed border-gray-400 cursor-pointer hover:border-gray-300 transition-colors overflow-hidden"
                                onDrop={onDrop}
                                onDragOver={onDragOver}
                            >
                                {!previewUrl?(
                                    <>
                                        <Upload className="w-8 h-8 text-gray-400" />
                                        <span className="mt-2 text-sm text-gray-400">Upload Image</span>
                                    </>):
                                    <img src={previewUrl} alt="img Selected" className="object-cover w-full h-full rounded-full"></img>
                                }
                                <input id="coin-image" type="file" accept="image/*" className="hidden" {...register("coinImage")}/>
                            </Label>
                        </div>

                        
                        <div className="space-y-2">
                        <Label htmlFor="coin-name" className="text-white">
                            Memecoin Name
                        </Label>
                        <Input
                            id="coin-name"
                            placeholder="Enter coin name"
                            className="bg-neutral-900 border-gray-700 text-white placeholder:text-gray-500"
                            {...register("memecoinName")}
                        />
                        </div>

                        
                        <div className="space-y-2">
                        <Label htmlFor="coin-symbol" className="text-white">
                            Memecoin Symbol
                        </Label>
                        <Input
                            id="coin-symbol"
                            placeholder="Enter coin symbol"
                            className="bg-neutral-900 border-gray-700 text-white placeholder:text-gray-500"
                            {...register("coinSymbol")}
                        />
                        </div>

                        
                        <div className="space-y-2">
                        <Label htmlFor="description" className="text-white">
                            Description
                        </Label>
                        <Textarea
                            id="description"
                            placeholder="Enter description here..."
                            rows={4}
                            className="bg-neutral-900 border-gray-700 text-white placeholder:text-gray-500 min-h-[120px]"
                            {...register("description")}    
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
                        <Button
                            type="submit"
                            className="w-full bg-green-500 hover:bg-green-600 font-medium h-9 cursor-pointer"
                        >
                            1. Launch Memecoin
                        </Button>
                        <CardFooter className="px-0">
                            <Dialog open = {open} onOpenChange={setOpen}>
                                <DialogContent className="bg-neutral-800 text-white">
                                    <DialogTitle>Form Data</DialogTitle>
                                    <img src={previewUrl} alt="memecoi image" />
                                    
                                    <h1>Name: {watch("memecoinName")}</h1>
                                    
                                    <h1>Symbol: {watch("coinSymbol")}</h1>
                                    
                                    <h1>Description: {watch("description")}</h1>
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