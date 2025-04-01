import ButtonRef from "./ui/components/Button";
import Image from "next/image";
import {FaTelegram, FaXTwitter, FaGithub} from "react-icons/fa6"
import Link from "next/link";
import { montserrat } from "./ui/fonts";

export default function Home() {
  const links = [
    {
      name: 'Twitter',
      ref: 'https://x.com/mem_exchange',
      icon: FaXTwitter, 
    },
    {
      name: 'GitHub',
      ref: 'https://github.com/Mandy9943/memexchange-front',
      icon: FaGithub,
    },
    {
      name: 'Telegram',
      ref: "https://x.com/mem_exchange",
      icon: FaTelegram,
    }
  ]
  return (
    <section className="flex-grow justify-items-center max-h-full">
      <h1>Hello World</h1>
      <div className="flex-col justify-items-center text-center w-full bg-gradient-to-br from-[rgb(18,27,19)] to-[rgb(19,78,32)] py-12 max-w-6xl">
        <div className="py-3 w-auto">
            <Image src="/img/mxc-logo.webp" alt="hola" width={150} height={150}></Image>
        </div>
        <h1 className={`${montserrat.className} text-6xl font-extrabold bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent py-4`}>Lunch Your Own Meme Coin</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl">Launch and trade meme coins with guaranteed liquidity on <a href="https://xexchange.com/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline">xExchange</a>. Zero pre-sale, zero team allocation, 100% community-driven.</p>
        <div className="flex gap-1.5 justify-center">
          <ButtonRef text="Trade Meme Coin" className="rounded-md bg-green-500 hover:bg-green-600 font-medium px-5 py-2"></ButtonRef>
          <ButtonRef text="Lunch Coin" className="rounded-md bg-[rgb(72,80,67)] hover:bg-[rgb(130,151,117)] font-medium px-5 py-2"></ButtonRef>
        </div>
        <div className="flex justify-center gap-2.5 mt-1.5">
          {links.map((link) =>{
            const Icon = link.icon;
            return(
            <Link key={link.name} href={link.ref} className="flex py-1.5 hover:text-green-600 text-gray-300 gap-0.5">
              <Icon className="h-5 w-5"></Icon>
              <span>{link.name}</span>
            </Link>
          )}
          )}
        </div>
      </div>
    </section>  
  );
}
