"use client"
import UploadModal from "@/components/modals/uploadModal"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Slide } from "react-awesome-reveal"
import RingImage from "../../../public/images/webp/ring-upload.webp"
import Img1 from "../../../public/images/webp/upload-side-1.webp"
import Img2 from "../../../public/images/webp/upload-side-2.webp"

const Upload = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true)
  }
  const handleClose = () => {
    setShowModal(false);
  }

  return (
    <main className="relative w-full overflow-x-hidden min-h-full h-screen bg-[#FDF2DD]">
      <section className='relative bg-[#FDF2DD] h-full w-full flex flex-col justify-between'>
        <div className='container'>
          <div className="pt-16 md:pt-14 lg:pt-16 xl:pt-20 pb-6">
            <Link href={"/"}>
              <h1 className="font-rusilla flex flex-row items-center justify-center gap-2 md:gap-4 text-center text-[1.4rem] leading-[0.7] md:text-[2rem] md:leading-[0.8] lg:text-[2.8rem] lg:leading-[0.8] xl:text-[3.15rem] xl:leading-[0.7] text-primary">
                <Slide delay={0.1} direction="up" cascade damping={0.1} triggerOnce>
                  <span>ChiomA</span>
                  <span className="text-xl md:text-[.8rem] xl:text-[1.5rem] text-secondary">x</span>
                  <span>OnyEkachI</span>
                </Slide>
              </h1>
            </Link>

            <div className="mt-10 font-rusilla flex flex-col text-center text-[3.3rem] leading-[0.9] md:text-[3.9rem] md:leading-[0.9] xl:text-[6.25rem] xl:leading-[0.9] text-primary">
              <Slide delay={0.1} direction="up" cascade damping={0.1} triggerOnce>
                <span>
                  <Slide direction="up" cascade damping={0.2} triggerOnce className="inline">
                    <span>Our </span>
                    <span>wedding,</span>
                  </Slide>
                </span>
                <span>
                  <Slide direction="up" cascade damping={0.3} triggerOnce className="inline">
                    <span>Experienced </span>
                    <span> togEtheR!</span>
                  </Slide>
                </span>
              </Slide>
            </div>

            <div className="pt-6 pb-6 md:pb-10">
              <Slide duration={1500} delay={0.3} direction="up" triggerOnce>
                <p className="text-center text-primary text-lg md:text-2xl xl:text-[1.75rem]">
                  See our Awesome Pre-Wedding Pictures, 
                  Share Photos and Videos taken with us📸
                </p>
              </Slide>
            </div>

            <div className="relative pt-2 w-fit mx-auto">
              <Slide delay={0.1} direction="up" triggerOnce>
                <button
                  type="button"
                  onClick={handleShowModal}
                  className="relative focus:outline-none z-10 bg-primary flex items-center 
            gap-3 rounded-full py-5 md:py-6 xl:py-7 px-12 lg:px-16 text-lg lg:text-xl xl:text-2xl text-white 
            hover:bg-secondary hover:shadow-[0px_4px_30px_0px_rgba(0,0,0,0.1)] hover:text-white transition-all ease-in-out duration-200 group"
                >
                  <span>UPLOAD FILES</span>
                  <span className="text-secondary group-hover:text-white group-hover:translate-x-1 group-hover:rotate-90 transition-all ease-in-out duration-200">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M-5.68248e-07 13C-4.55859e-07 15.5712 0.762436 18.0846 2.19089 20.2224C3.61935 22.3602 5.64968 24.0265 8.02511 25.0104C10.4006 25.9944 13.0144 26.2518 15.5362 25.7502C18.0579 25.2486 20.3743 24.0105 22.1924 22.1924C24.0105 20.3743 25.2486 18.0579 25.7502 15.5362C26.2518 13.0144 25.9944 10.4005 25.0104 8.02511C24.0265 5.64967 22.3602 3.61935 20.2224 2.19089C18.0846 0.762429 15.5712 -6.40268e-06 13 -6.29029e-06C9.5533 0.00363308 6.24881 1.37444 3.81163 3.81163C1.37445 6.24881 0.00363905 9.5533 -5.68248e-07 13ZM13.7075 7.29249L17.7075 11.2925C17.8951 11.4801 18.0006 11.7346 18.0006 12C18.0006 12.2654 17.8951 12.5199 17.7075 12.7075C17.5199 12.8951 17.2654 13.0005 17 13.0005C16.7346 13.0005 16.4801 12.8951 16.2925 12.7075L14 10.4137L14 18C14 18.2652 13.8946 18.5196 13.7071 18.7071C13.5196 18.8946 13.2652 19 13 19C12.7348 19 12.4804 18.8946 12.2929 18.7071C12.1054 18.5196 12 18.2652 12 18L12 10.4137L9.7075 12.7075C9.51986 12.8951 9.26536 13.0005 9 13.0005C8.73464 13.0005 8.48014 12.8951 8.2925 12.7075C8.10486 12.5199 7.99944 12.2654 7.99944 12C7.99944 11.7346 8.10486 11.4801 8.2925 11.2925L12.2925 7.29249C12.3854 7.19952 12.4957 7.12576 12.6171 7.07543C12.7385 7.02511 12.8686 6.99921 13 6.99921C13.1314 6.99921 13.2615 7.02511 13.3829 7.07543C13.5043 7.12576 13.6146 7.19952 13.7075 7.29249Z" fill="currentColor" />
                    </svg>
                  </span>
                </button>
              </Slide>
            </div>
            <div className="relative pt-2 w-fit mx-auto mt-3">
              <Slide delay={0.1} direction="up" triggerOnce className="relative z-10">
                <Link
                  href="https://drive.google.com/drive/folders/1G4Fa2OmC1E7W9UlAaVioqb1ceurfhCTG?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative focus:outline-none z-10 bg-primary flex items-center 
            gap-3 rounded-full py-5 md:py-6 xl:py-7 px-12 lg:px-16 text-lg lg:text-xl xl:text-2xl text-white 
            hover:bg-secondary hover:shadow-[0px_4px_30px_0px_rgba(0,0,0,0.1)] hover:text-white transition-all ease-in-out duration-200 group"
                >
                  <span>SEE OUR PICTURES</span>
                  <span className="text-secondary group-hover:text-white group-hover:translate-x-1 transition-all ease-in-out duration-200">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_18_141)">
                        <path d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM21.7075 16.7075L17.7075 20.7075C17.5199 20.8951 17.2654 21.0006 17 21.0006C16.7346 21.0006 16.4801 20.8951 16.2925 20.7075C16.1049 20.5199 15.9994 20.2654 15.9994 20C15.9994 19.7346 16.1049 19.4801 16.2925 19.2925L18.5863 17H11C10.7348 17 10.4804 16.8946 10.2929 16.7071C10.1054 16.5196 10 16.2652 10 16C10 15.7348 10.1054 15.4804 10.2929 15.2929C10.4804 15.1054 10.7348 15 11 15H18.5863L16.2925 12.7075C16.1049 12.5199 15.9994 12.2654 15.9994 12C15.9994 11.7346 16.1049 11.4801 16.2925 11.2925C16.4801 11.1049 16.7346 10.9994 17 10.9994C17.2654 10.9994 17.5199 11.1049 17.7075 11.2925L21.7075 15.2925C21.8005 15.3854 21.8742 15.4957 21.9246 15.6171C21.9749 15.7385 22.0008 15.8686 22.0008 16C22.0008 16.1314 21.9749 16.2615 21.9246 16.3829C21.8742 16.5043 21.8005 16.6146 21.7075 16.7075Z" fill="currentColor" />
                      </g>
                      <defs>
                        <clipPath id="clip0_18_141">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </Link>
              </Slide>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end w-full">
          <div className="w-fit">
            <Slide delay={0.1} direction="left" triggerOnce>
              <Image src={Img1} alt="" className="w-fit" />
            </Slide>
          </div>
          <div className="w-fit">
            <Slide delay={0.1} direction="up" triggerOnce>
              <Image src={RingImage} alt="" className="w-fit" />
            </Slide>
          </div>
          <div className="w-fit">
            <Slide delay={0.1} direction="right" triggerOnce>
              <Image src={Img2} alt="" className="w-fit" />
            </Slide>
          </div>
        </div>
      </section>

      <UploadModal open={showModal} handleClose={handleClose} />
    </main>
  )
}

export default Upload