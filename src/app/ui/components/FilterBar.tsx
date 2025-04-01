import { useState } from "react"
import { FilterBarProps } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuItem, DropdownMenuContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { FaSearch} from "react-icons/fa";
import { ChevronDown, X } from "lucide-react";

const FilterBar = ({value, setValue}: FilterBarProps)=>{
    //const [filterValue, setFilterValue] = useState<string>('');
    const[isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
    const[statusFilter, setStatusFilter] = useState('Search by status');
    const onClick = ()=>{
        setIsFilterOpen(v => !v);
    }
    const onChange = (e) =>{
        const newValue = e.target.value;
        setValue(newValue);
    }
    return(
        <div className="flex-col items-center w-full lg:w-4/6 bg-neutral-800 px-3 mb-5">
            {!isFilterOpen?(
            <div className="flex justify-between">
                <div className="flex items-center space-x-2 px-4 py-2">
                    <span className="text-white font-medium">Explore More</span>
                    <span className="text-orange-500">🔥</span>
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
            <div className="flex justify-between">
                <div className="flex items-center space-x-2 px-4 py-2">
                    <span className="text-white font-medium">Explore More</span>
                    <span className="text-orange-500">🔥</span>
                </div>
                <Button
                    onClick={onClick}
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-white hover:bg-transparent"
                >
                    <X className="h-5 w-5" />
                </Button>
            </div>}
            {isFilterOpen && 
            <>
                <div className="flex flex-col sm:flex-row sm:justify-between shadow-lg p-3 space-y-2 border-t-1 border-neutral-600">
                    <Input type="text"
                        placeholder="Search by name, address or description..."
                        value={value}
                        onChange={onChange}
                        className="sm:w-3/5 bg-neutral-700 text-white border-neutral-600 focus-visible:ring-neutral-100">
                    </Input>
                    <div className="flex">
                        <div className="flex shrink-0 sm:max-w-40">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className={
                                        "w-full justify-between bg-neutral-800 text-white border-neutral-700 hover:bg-neutral-700 hover:text-white"}
                                    >
                                        <span>{statusFilter}</span>
                                        <ChevronDown className="h-4 w-4 opacity-50 ml-2" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-neutral-800 border-neutral-700 text-white border-1 w-full">
                                    <DropdownMenuItem
                                        className="hover:bg-neutral-700 cursor-pointer"
                                        onClick={() => setStatusFilter("active")}
                                    >
                                        Active
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        className="hover:bg-neutral-700 cursor-pointer"
                                        onClick={() => setStatusFilter("finished")}
                                    >
                                        Finished
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <div>
                            {statusFilter !== "Search by status" && (
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={()=> setStatusFilter('Search by status')}
                                className="bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white"
                            >
                                <X className="h-4 w-4" />
                                {/*<span>Clear filter</span>*/}
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