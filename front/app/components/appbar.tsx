"use-client";
import Searchbar from './searchbar';
import {ShoppingCart} from 'lucide-react'
import MenuToggle from './toggleMenue';

export default function Appbar(){
    return (
        <div className="flex flex-col  bg-background  ">
            <div className="flex flex-row justify-between">
             <MenuToggle bg="bg-primary"/>
             <p className="">FruitfulMarketUg</p>
             {/* //icons */}
             <div className ="icons flex flex-row justify-between">
                <ShoppingCart className="text-primary"/>
             </div>

            </div>
            <div className="w-full p-2"><Searchbar/></div>
            
            {/* main navigation menu */}
            <nav className=" ">
            </nav>        
        </div>
        
    )
}