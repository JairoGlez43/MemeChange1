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
      
      <div className="flex-col justify-items-center text-center w-full bg-gradient-to-br from-[rgb(18,27,19)] to-[rgb(19,78,32)] py-12">
        <div className="py-3 w-auto">
            <Image src="/img/mxc-logo.webp" alt="hola" width={150} height={150}></Image>
        </div>
        <h1 className={`${montserrat.className} text-6xl font-extrabold bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent py-4`}>Lunch Your Own Meme Coin</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl">Launch and trade meme coins with guaranteed liquidity on <a href="https://xexchange.com/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline">xExchange</a>. Zero pre-sale, zero team allocation, 100% community-driven.</p>
        <div className="flex gap-1.5 justify-center">
          <ButtonRef text="Trade Meme Coin" className="rounded-md bg-green-500 hover:bg-green-600 font-medium px-5 py-2 text-white"></ButtonRef>
          <ButtonRef text="Lunch Coin" className="rounded-md bg-[rgb(72,80,67)] hover:bg-[rgb(130,151,117)] font-medium px-5 py-2 text-white"></ButtonRef>
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
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-white">Why Choose MemeExchange?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          <a className='bg-neutral-800 p-4 md:p-6 rounded-lg hover:bg-neutral-700 transition-colors' href="/create-coin">
            <div className="text-green-400 mb-3 md:mb-4 text-2xl md:text-3xl">🛡️</div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Fair Launch Guaranteed</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Every token launches with zero pre-sale and zero team allocation. Pure community-driven growth
            </p>
          </a>
          <a className='bg-neutral-800 p-4 md:p-6 rounded-lg hover:bg-neutral-700 transition-colors' href="/create-coin">
            <div className="text-green-400 mb-3 md:mb-4 text-2xl md:text-3xl">🔄️</div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Fair Launch Guaranteed</h3>
            <p className="text-gray-400 text-sm md:text-base">
              When the pool reaches 25 EGLD (guaranteeing the minimum 2 EGLD required by xExchange), liquidity automatically flows to xExchange for enhanced trading
            </p>
          </a>
          <a className='bg-neutral-800 p-4 md:p-6 rounded-lg hover:bg-neutral-700 transition-colors' href="/create-coin">
            <div className="text-green-400 mb-3 md:mb-4 text-2xl md:text-3xl">🎨</div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">MVXBrand Integration</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Brand your tokens with custom images and social links that appear directly on the MultiversX Explorer
            </p>
          </a>
        </div>
      </div>
      <div className="flex-col bg-neutral-800 py-12 w-full items-center px-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">How It Works</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-0">
          <div className="flex flex-col justify-start items-center mt-0">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-full text-white font-bold text-lg md:text-xl mb-3 md:mb-4 flex justify-center items-center">1</div>
            <h3 className="text-base md:text-lg font-semibold mb-2 text-white">Connect Wallet</h3>
            <p className="text-gray-400 text-sm md:text-base text-center">Link your MultiversX wallet to get started</p>
          </div>
          <div className="flex flex-col justify-start items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-full text-white font-bold text-lg md:text-xl mb-3 md:mb-4 flex justify-center items-center">1</div>
            <h3 className="text-base md:text-lg font-semibold mb-2 text-white">Create or Trade</h3>
            <p className="text-gray-400 text-sm md:text-base text-center">Launch your own meme coin or trade from a curated selection</p>
          </div>
          <div className="flex flex-col justify-start items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-full text-white font-bold text-lg md:text-xl mb-3 md:mb-4 flex justify-center items-center">1</div>
            <h3 className="text-base md:text-lg font-semibold mb-2 text-white">Brand Your Token</h3>
            <p className="text-gray-400 text-sm md:text-base text-center">After migration, customize your token with images and social links on MVXBrand</p>
          </div>
          <div className="flex flex-col justify-start items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-full text-white font-bold text-lg md:text-xl mb-3 md:mb-4 flex justify-center items-center">1</div>
            <h3 className="text-base md:text-lg font-semibold mb-2 text-white">Earn Rewards</h3>
            <p className="text-gray-400 text-sm md:text-base text-center">Participate in the ecosystem and earn points through our rewards program</p>
          </div>
        </div>
      </div>
      <div className="flex-col justify-items-center text-center w-full bg-gradient-to-br from-[rgb(18,27,19)] to-[rgb(19,78,32)] py-12 mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">Ready to Join the Revolution?</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">Start earning rewards and be part of the next generation of meme coins on MultiversX</p>
        <ButtonRef className="rounded-md bg-green-500 hover:bg-green-600 font-medium px-5 py-2 text-white" text="Get Started Now"></ButtonRef>
      </div> 
    </section>  
  );
}
