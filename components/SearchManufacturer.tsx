'use client'
import React, { useActionState, useState } from 'react'
import { searchManufacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'

const SearchManufacturer = ({ manufacturer, setmanufacturer }: searchManufacturerProps) => {

    const [query, setQuery] = useState('')

    return (
        <div className='SearchManufacturer'>
            <Combobox>
                <div className='relative w-full'>
                    <Combobox.Button className='absolute top-[14px]'>
                        <Image src="/car-logo.svg" width={20} height={20} className="ml-4" alt="Car Logo"></Image>
                    </Combobox.Button>
                </div>
                <Combobox.Input className='search-manufacturer__input' placeholder='Volkswagen' displayValue={(manufacturer: string) => manufacturer} onChange={(e) => setQuery(e.target.value)} />

            </Combobox>





        </div>
    )
}

export default SearchManufacturer
