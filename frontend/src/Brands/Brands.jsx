import React from 'react'
import { Slash } from "lucide-react"
import { phoneData } from '@/phoneData'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'

const Brands = () => {
  return (
    <>
      <section >
        <div className='containerrr  flex relative w-full'>
          <div className='hidden sm:flex border border-red-500 w-[20%] '>
            <div className='p-3'>
              <div className='' >
                <div className='font-semibold text-2xl pb-5'>Product Filter</div>
                <div>
                  <ul>
                    {
                      phoneData.map((phone, index) => (

                        <li className='flex gap-2' key={index} >
                          <input type="checkbox" name="checkbox" id="" />
                          <label htmlFor="checkbox">{phone.brand}</label>
                        </li>

                      ))
                    }

                  </ul>
                </div>
              </div>

            </div>
          </div>
          <div className='border border-green-500 w-full flex-col '>
            <div className='flex justify-center p-2 text-[#20b2aa] '>
              <h2 className='font-bold text-6xl'>Shop</h2>
            </div>
            <div className='p-3'>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <Slash />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/brands">Shop</BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div></div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Brands
