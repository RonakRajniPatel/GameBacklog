'use client'

import React, { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = React.useState("bottom")

  const NavLinks = () => (
    <>
      <Button variant="ghost"><Link href="#" className="text-gray-600 hover:text-gray-900">Browse</Link></Button>
      <Button variant="ghost"><Link href="#" className="text-gray-600 hover:text-gray-900">Community</Link></Button>
      <Button variant="ghost"><Link href="#" className="text-gray-600 hover:text-gray-900">Backlog</Link></Button>
    </>
  )

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-lg">
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 bg-purple-600 rounded-sm"></div>
        <span className="text-xl font-semibold">Bing</span>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <div className="flex space-x-4 mr-4">
          <NavLinks />
        </div>
        <div className="relative">
        <DropdownMenu>
          <DropdownMenuTrigger asChild className='absolute'>
            <Button variant="ghost"><HamburgerMenuIcon/></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
              <DropdownMenuRadioItem value="top">All</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="bottom">Games</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="right">Users</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
          <Input
            type="text"
            placeholder="Hinted search text"
            className="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:bg-white focus:ring-2 focus:ring-purple-600 focus:outline-none"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        <Button variant="outline"><Link href="#">Login</Link></Button>
        <Button><Link href="#">Register</Link></Button>
      </div>

      {/* Mobile Design */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center py-4">
                <span className="text-xl font-semibold">Menu</span>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetTrigger>
              </div>
              <div className="flex flex-col space-y-4 py-4">
                <NavLinks />
              </div>
              <div className="mt-auto py-4">
                <div className="relative mb-4">
                  <Input
                    type="text"
                    placeholder="Hinted search text"
                    className="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:bg-white focus:ring-2 focus:ring-purple-600 focus:outline-none w-full"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
                <Button variant="outline" className="w-full mb-2"><Link href="#">Sign in</Link></Button>
                <Button className="w-full bg-gray-900 text-white hover:bg-gray-800"><Link href="#">Register</Link></Button>
                
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}