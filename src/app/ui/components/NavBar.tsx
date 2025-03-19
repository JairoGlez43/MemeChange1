import {Home, Trophy, Coins, Hammer, PlusCircleIcon} from "lucide-react";
import Link from "next/link";




/*interface links_type{
    name: string,
    icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & {
        title?: string;
        titleId?: string;
    } & RefAttributes<SVGSVGElement>>,
    href: string;
}*/

const NavBar = ()=>{
    const links = [
        {
            name: "Home",
            icon: Home,
            href: '/',
        },
        {
            name: "Coins",
            icon: Coins ,
            href: '/coins',
        },
        {
            name: "Rewards",
            icon: Trophy,
            href: '/rewards',
        },
        {
            name: "Tools",
            icon: Hammer,
            href: '/tools',
        },
        {
            name: "Create coin",
            icon: PlusCircleIcon,
            href: '/create-coin',
        },
       
    ]

    return(
        <div className="fixed bg-[#2c2e33] text-xs sm:text-sm w-full py-2.5 sm:py-4 bottom-0">
            <div className="flex max-w-2xl mx-auto justify-around">
                {links.map((link)=>{
                        const Icon = link.icon;
                        //console.log(link.icon);
                        return(
                            <Link key={link.name} href={link.href} className="flex flex-col items-center sm:text-sm gap-1">
                                <Icon className="w-5 h-5 sm:w-6 sm:h-6"></Icon>
                                <span className="hidden sm:block">{link.name}</span>
                            </Link>
                        ) 
                    })}
            </div>
                
            
        </div>
            
    )
}
export default NavBar;