'use client'

import React, { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const NavLinks = () => (
    <>
      <a href="#" className="text-gray-600 hover:text-gray-900">Browse</a>
      <a href="#" className="text-gray-600 hover:text-gray-900">Community</a>
      <a href="#" className="text-gray-600 hover:text-gray-900">Backlog</a>
    </>
  )

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-sm">
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 bg-purple-600 rounded-sm"></div>
        <span className="text-xl font-semibold">Bing</span>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <div className="flex space-x-4 mr-4">
          <NavLinks />
        </div>
        <div className="relative">
          <Input
            type="text"
            placeholder="Hinted search text"
            className="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:bg-white focus:ring-2 focus:ring-purple-600 focus:outline-none"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        <Button variant="outline">Sign in</Button>
        <Button className="bg-gray-900 text-white hover:bg-gray-800">Register</Button>
      </div>
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
                <Button variant="outline" className="w-full mb-2">Sign in</Button>
                <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">Register</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}