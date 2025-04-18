import { useState } from "react"
import { FilterBarProps } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
//import { DropdownMenu, DropdownMenuItem, DropdownMenuContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { FaSearch} from "react-icons/fa";
import { X } from "lucide-react";

const FilterBar = ({value, setValue, status, setStatus}: FilterBarProps)=>{
    //const [filterValue, setFilterValue] = useState<string>('');
    const[isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
    const onClick = ()=>{
        setIsFilterOpen(v => !v);
    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const newValue = e.target.value;
        setValue(newValue);
    }
    const handleSelectChange = (status: string)=>{
        if(status==='Active'||status==='Finished'){
            setStatus(status);
        }else{
            setStatus('');
        }
    }
    return(
        <div className="flex-col items-center w-full lg:w-5/6 bg-neutral-800 px-3 mb-5 rounded-md">
            {!isFilterOpen?(
            <div className="flex justify-between">
                <div className="flex justify-between items-center w-11/12 px-4 py-2">
                    <div>
                        <span className="text-white font-medium">Explore More</span>
                        <span className="text-orange-500">🔥</span>
                    </div>
                    {status !== ''? <p className="text-white text-xs">filter: {status}</p>:null}
                </div>
                <Button
                    onClick={onClick}
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-white hover:bg-transparent"
                >
                    <FaSearch className="h-5 w-5" />
                </Button>
            </div>): 
            <>
                <div className="flex justify-between">
                    <div className="flex justify-between items-center min-w-11/12 px-4 py-2">
                        <div>
                            <span className="text-white font-medium">Explore More</span>
                            <span className="text-orange-500">🔥</span>
                        </div>
                        {status !== ''? <p className="text-white text-xs">filter: {status}</p>:null}
                    </div>
                    <Button
                        onClick={onClick}
                        variant="ghost"
                        size="icon"
                        className="text-gray-400 hover:text-white hover:bg-transparent"
                    >
                        <X className="h-5 w-5" />
                    </Button>
                </div>
            
                <div className="flex flex-col sm:flex-row sm:justify-between shadow-lg p-3 space-y-2 border-t-1 border-neutral-600">
                    <Input type="text"
                        placeholder="Search by name, address or description..."
                        value={value}
                        onChange={onChange}
                        className="sm:w-5/9 bg-neutral-700 text-white border-neutral-600 focus-visible:ring-neutral-100">
                    </Input>
                    <div className="flex">
                        <div className="flex shrink-0 sm:max-w-40">
                            <Select key={status} onValueChange={handleSelectChange} value={status !== ''?status:undefined}>
                                <SelectTrigger className="w-[120px] text-white bg-neutral-700">
                                    <SelectValue placeholder="Filter by state"></SelectValue>
                                </SelectTrigger>
                                <SelectContent className="bg-neutral-800 border-neutral-700 text-white border-1">
                                    <SelectGroup>
                                        <SelectItem value="Active" className="hover:bg-neutral-700 cursor-pointer">Active</SelectItem>
                                        <SelectItem value="Finished" className="hover:bg-neutral-700 cursor-pointer">Finished</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            {status !== '' && (
                                <Button
                                    variant="ghost"
                                    size={'sm'}
                                    onClick={() => setStatus('')}
                                    className="bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white hover:cursor-pointer"
                                    >
                                        <X className="h-4 w-4" />
                                        {<span>Clear filter</span>}
                                </Button>
                            )}
                        </div>
                    </div>
                    
                </div>
            </>}
            
            
            
        </div>
    )
    
}
export default FilterBar;