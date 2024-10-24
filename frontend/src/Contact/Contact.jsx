import React from 'react'
import '../index.css';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


const Contact = () => {
  return (
    <>
      <div>
        <div className='contact bg-[#e9fbfa] flex justify-center h-screen '>
          <div className='container flex flex-col custom-max-width '>
            <div className=' '>
              <div className='contactusheading max-w-full text-center relative'>
                <div className='mb-2 p-7'>
                  <h1 className=' font-bold text-5xl '>Contact Us</h1>
                </div>
              </div>
              <div className='contactusbox flex flex-row  shadow-2xl rounded-3xl bg-[#FFFFFF] pl-5 pr-2 py-7'>
                <div className='flex flex-row gap-5 w-full mx-auto h-full'>
                  <div className='leftsidecontainer w-[60%] flex-col'>
                    <div className='wanttovbedistributor'>
                      <div className='pt-5 pl-5'>
                        <h2 className=' text-4xl font-bold leading-none'>Want to be a <br /> distributor?</h2>
                      </div>
                    </div>
                    <div className='underline'>
                      <div

                      >
                        <div className=" w-full border-b border-black  py-3"
                          style={{ borderBottomWidth: '1px', borderBottomStyle: 'solid' }}>
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <div className='pargraph font-light '>
                      <div className='pr-5'>
                        Connect with us and get started with your own distribution!
                        <br />
                        Fields marked with an * are required
                      </div>
                    </div>
                    <div className='formcontainer '>
                      <div className='p-3 mt-5 '>
                        <form action="">
                          <div className='divnothiddeninput flex flex-col '
                            style={{
                              marginLeft: 'calc(-6px / 2)',
                              marginRight: 'calc(-6px / 2)',
                              marginBottom: '-9px',
                            }}
                          >
                            <div className='namecontainer flex-calc'>
                              <Input type="text" placeholder="name" />
                            </div>
                            <div className='emailcontainer flex-calc'>
                              <Input type="email" placeholder="Email" />
                            </div>
                            <div className='phonecontainer flex-calc'>
                              <Input type="phone" placeholder="phone" />
                            </div>
                            <div className='addresscontainer flex-calc'>
                              <Input type="email" placeholder="Email" />
                            </div>
                            <div className='messagecontainer flex-calc'>
                              <Textarea placeholder="Type your message here." />
                            </div>
                            <div></div>
                            <div className='buttonContainer flex-calc'>
                              <Button className="bg-[#20b2aa] w-full rounded-sm">
                                <span>
                                  <span>Submit</span>
                                </span>
                              </Button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className='rightsidecontainer w-[40%] text-white p-5' style={{
                    backgroundImage: `url('https://mtstarindia.com/wp-content/uploads/2024/01/Conatct-us.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom right',
                    backgroundRepeat: 'no-repeat'
                  }}>
                    <div className='ourlocationContainer'>
                      <div>
                        <h2 className='text-4xl font-bold'>Our Location</h2>
                      </div>
                    </div>
                    <div className='underlinecontainer'>
                      <div className=" w-full border-b border-white  py-3"
                        style={{ borderBottomWidth: '1px', borderBottomStyle: 'solid' }}>
                        <div>
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <div className='locationContainer py-5'>
                      <div>
                        <div className='flex text-start'>
                          <div className='icon mr-4 '>
                            <span className='text-lg'>
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.9997 2.66663C13.1717 2.6698 10.4604 3.79463 8.46071 5.79433C6.46101 7.79403 5.33618 10.5053 5.33301 13.3333C5.33301 17.6733 8.48367 21.2773 11.821 25.092C12.877 26.3 13.9703 27.5493 14.9437 28.8133C15.0682 28.9749 15.2282 29.1057 15.4113 29.1957C15.5944 29.2858 15.7957 29.3326 15.9997 29.3326C16.2037 29.3326 16.405 29.2858 16.5881 29.1957C16.7711 29.1057 16.9311 28.9749 17.0557 28.8133C18.029 27.5493 19.1223 26.3 20.1783 25.092C23.5157 21.2773 26.6663 17.6733 26.6663 13.3333C26.6632 10.5053 25.5383 7.79403 23.5386 5.79433C21.5389 3.79463 18.8277 2.6698 15.9997 2.66663ZM15.9997 17.3333C15.2085 17.3333 14.4352 17.0987 13.7774 16.6592C13.1196 16.2196 12.6069 15.5949 12.3042 14.864C12.0014 14.1331 11.9222 13.3289 12.0765 12.5529C12.2309 11.777 12.6118 11.0643 13.1712 10.5049C13.7307 9.94546 14.4434 9.56449 15.2193 9.41015C15.9952 9.25581 16.7995 9.33502 17.5304 9.63777C18.2613 9.94052 18.886 10.4532 19.3256 11.111C19.7651 11.7688 19.9997 12.5422 19.9997 13.3333C19.9997 14.3942 19.5782 15.4116 18.8281 16.1617C18.078 16.9119 17.0605 17.3333 15.9997 17.3333Z" fill="#FFFCFC" />
                              </svg>
                            </span>
                          </div>
                          <div className='boxContent'>
                            <h3 className='font-semibold'>
                              <span>Mumbai</span>
                            </h3>
                            <p className='font-light'>
                              Manek Building, Shop no 20, Ground Floor, Rubberwala The Platinum Mall, Pathe Bapurao Marg, Old, Girgaon, Mumbai, Maharashtra - 400004
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='phoneContainer py-5'>
                      <div>
                        <div className='wrapper flex text-start '>
                          <div className='iconcontainer mr-4'>
                            <a href="" >
                              <span className='text-lg'>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13.2164 8.06403C12.8344 3.67003 8.25041 1.51403 8.05641 1.42603C7.87505 1.34078 7.67181 1.31354 7.47441 1.34803C2.18241 2.22603 1.38641 5.30603 1.35441 5.43403C1.31087 5.6124 1.31779 5.79937 1.37441 5.97403C7.68641 25.558 20.8044 29.188 25.1164 30.382C25.4484 30.474 25.7224 30.548 25.9304 30.616C26.1678 30.6936 26.4256 30.6786 26.6524 30.574C26.7844 30.514 29.9004 29.046 30.6624 24.258C30.6962 24.049 30.6626 23.8347 30.5664 23.646C30.4984 23.514 28.8684 20.412 24.3484 19.316C24.1951 19.2768 24.0345 19.2754 23.8805 19.312C23.7265 19.3486 23.5837 19.422 23.4644 19.526C22.0384 20.744 20.0684 22.042 19.2184 22.176C13.5204 19.39 10.3384 14.044 10.2184 13.03C10.1484 12.46 11.4544 10.458 12.9564 8.83003C13.0508 8.72757 13.1227 8.60648 13.1675 8.47456C13.2123 8.34263 13.2289 8.20279 13.2164 8.06403Z" fill="#FFFCFC" />
                                </svg>
                              </span>
                            </a>
                          </div>
                          <div className='boxcontentcontainer'>
                            <h3 className='font-medium'>
                              <a href="">999999999</a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className='social'></div>
        <div className=''></div>
      </div>
    </>
  )
}

export default Contact
