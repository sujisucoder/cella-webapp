import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='flex flex-col bg-[#EEEEEE] p-8 gap-8  '>
                <div className='flex items-center justify-between   p-5'>
                    <div className='flex flex-col gap-3  '>
                        <div className='flex gap-2 items-center  '>
                            <img src="https://placehold.co/80x80" alt="logo" />
                            <p className='border w-1/3'>India’s Biggest Mobile Battery Brand</p>
                        </div>
                        <div className='w-1/2'>
                            <p>We are India’s Biggest Mobile Battery Brand. Powering India, One Charge at a Time.</p>
                        </div>
                    </div>
                    <div className=' text-md '>
                        <h3 className='font-semibold'>Quick Links</h3>
                        <h3>Become A Distributor</h3>
                        <h3>Brand</h3>
                        <h3>Contact Us</h3>
                        <h3>Terms And Condition</h3>
                    </div>
                    <div className='    '>
                        <div>
                            <h1 className='font-semibold'>Contact Information</h1>
                        </div>
                        <div className='flex '>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2" viewBox="0 0 330.1 430.73"><defs></defs><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" d="m165,0C75,0,0,68.2,0,155.3c0,33.1,10.6,62.7,30.9,90.4l121.5,178.5c5.9,8.7,19.4,8.7,25.3,0l122-179.1c19.9-26.4,30.4-57.5,30.4-89.8C330,69.7,256,0,165,0Zm0,225.9c-41.4,0-75-31.7-75-70.6s33.6-70.6,75-70.6,75,31.7,75,70.6-33.6,70.6-75,70.6Z"></path></g></svg>
                            </div>
                            <div className=' '>
                                <h1 className='font-semibold'>Thiruvananthapuram</h1>
                                {/* <p>Manek Building, Shop no 20, Ground Floor,<br/> Rubberwala The Platinum Mall, Pathe Bapurao Marg, Old, Girgaon, Mumbai, Maharashtra - 400004</p> */}
                            </div>
                        </div>
                
                    </div>

                </div>
                <hr  />
                <div className='flex justify-evenly'>
                    <div>
                        <p>MT Star © Copyright 2024. All rights reserved.</p>
                    </div>
                    <div className='flex'>
                        <div>fac</div>
                        <div>ins</div>
                        <div>twitt</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
