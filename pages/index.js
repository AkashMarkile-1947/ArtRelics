import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import HeroTwo from '@/components/Hero2';
import axios from 'axios'
import AddAddressForm from '@/components/Address'
import ProductCard from '@/components/ProductCard'
import FeaturedArt from '@/components/FeturedSection';
import Features  from '@/components/Features'
import LocalArtist from '@/components/LocalArtist'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className='h-screen'
    >
    <Navbar />
    <div className="top-16 relative">
    <HeroTwo />
    <div className="container mx-auto p-4">
      
      <Features />
      <h1 className="text-3xl font-semibold mb-4">Featured Art</h1>
      <FeaturedArt />
    </div>
    <Footer />
    </div>
    </main>
  )
}
