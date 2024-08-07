'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'
import LoginButton from '../LoginLogoutButton'


const TopNav = ({ features, pricing }: { features: string, pricing: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 bg-accent text-primary w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-row items-center justify-center">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <Image src="/foundr.png" width={40} height={40} alt="foundr" />
              <span className="text-lg font-semibold">Foundr</span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center">
            <div className="flex items-center space-x-4">
              <Link href={`#${features}`} className="px-3 py-2 rounded-md">
                <Button variant="ghost" className="text-base px-3 py-2 rounded-md hover:bg-slate-200 hover:text-primary">Features</Button>
              </Link>
              <Link href={`#${pricing}`} className="px-3 py-2 rounded-md">
                <Button variant="ghost" className="text-base px-3 py-2 rounded-md hover:bg-slate-200 hover:text-primary">Pricing</Button>
              </Link>
            </div>
          </div>
          <LoginButton className='hidden text-white md:flex md:items-center md:justify-center px-3 py-2 rounded-md hover:bg-secondary'/>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden ">
          <div className="flex flex-col items-center justify-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href={`#${features}`} className=" px-3 py-2 rounded-md">Features</Link>
            <Link href={`#${pricing}`} className=" px-3 py-2 rounded-md">Pricing</Link>
            <LoginButton className='hidden text-white md:flex md:items-center md:justify-center px-3 py-2 rounded-md bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary'/>
          </div>

        </div>
      )}
    </nav>
  )
}

export default TopNav