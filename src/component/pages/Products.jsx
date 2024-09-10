import React, { useState } from 'react'
import Container from '../layers/Container'
import Breadcumb from '../layers/Breadcumb'
import dot1 from '../../../public/dots.png'
import dot2 from '../../../public/dots2.png'
import Item2 from '../layers/Item2'
import Paginate from '../layers/Paginate'




const Products = () => {
  let [itemperpage, setItemperpage] = useState(12);
  let manegperpage = (element) => {
    setItemperpage(element.target.value);
  }
  return (
    <>
      <Container>
        <Breadcumb className='mt-[83px] mb-[130px]' />
        <div className="grid grid-cols-4">
          <div className="bg-red-200">a</div>
          <div className="col-span-3">
            <div className="flex justify-between items-center mb-[60px]">
              <div className="icon">
                <div className="flex items-center gap-x-5">
                  <div className="w-[36px] h-[36px] bg-[#262626] flex justify-center items-center">
                    <img src={dot1} alt="" />
                  </div>
                  <div className="w-[36px] h-[36px] border border-solid border-[#F0F0F0] flex justify-center items-center">
                    <img src={dot2} alt="" />
                  </div>
                </div>
              </div>
              <div className="flex gap-x-[40px] items-center">
                <div className="flex gap-x-[14px] items-center">
                  <p className='font-normal text-base leading-[187%] text-[#767676] font-dm'>Sort by:</p>
                  <select name="" id="" className='capitalize border-none outline-none cursor-pointer px-[21px] pr-[120px] py-[3px] border border-[#F0F0F0] font-normal text-base leading-[187%] text-[#767676] font-dm'>
                    <option value="feature">feature</option>
                    <option value="bestseller">bestseller</option>
                  </select>
                </div>
                <div className="flex gap-x-[14px] items-center">
                  <p className='font-normal text-base leading-[187%] text-[#767676] font-dm'>Show:</p>
                  <select onChange={manegperpage} name="" id="" className='capitalize border-none outline-none cursor-pointer px-[21px] pr-[72px] py-[3px] border border-[#F0F0F0] font-normal text-base leading-[187%] text-[#767676] font-dm'>
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                    <option value="48">48</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="product_gallery mb-[180px]">
              <Paginate itemsPerPage={itemperpage} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Products