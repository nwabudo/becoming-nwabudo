"use client"
import GroomStoryModal from "@/components/modals/groomStoryModal"
import { useState } from "react"
import { Slide } from "react-awesome-reveal"

const GroomStory = () => {
  const [showModal, setShowModal] = useState(false)
  const handleShow = () => {
    setShowModal(true)
  }
  const handleClose = () => {
    setShowModal(false)
  }
  return (
    <>
      <Slide delay={0.1} direction="up" triggerOnce className="relative z-10">
        <div className="w-fit mx-auto mt-12">
          <button
            onClick={handleShow}
            className="relative z-10 bg-secondary flex items-center 
            gap-3 rounded-full py-6 xl:py-7 px-8 text-lg lg:text-xl xl:text-2xl text-white 
            hover:bg-white hover:shadow-[0px_4px_30px_0px_rgba(0,0,0,0.1)] hover:text-primary transition-all ease-in-out duration-200 group"
          >
            <span>READ ONYEKACHI STORY</span>
            <span className="group-hover:translate-x-1 transition-all ease-in-out duration-200">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_18_141)">
                  <path d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM21.7075 16.7075L17.7075 20.7075C17.5199 20.8951 17.2654 21.0006 17 21.0006C16.7346 21.0006 16.4801 20.8951 16.2925 20.7075C16.1049 20.5199 15.9994 20.2654 15.9994 20C15.9994 19.7346 16.1049 19.4801 16.2925 19.2925L18.5863 17H11C10.7348 17 10.4804 16.8946 10.2929 16.7071C10.1054 16.5196 10 16.2652 10 16C10 15.7348 10.1054 15.4804 10.2929 15.2929C10.4804 15.1054 10.7348 15 11 15H18.5863L16.2925 12.7075C16.1049 12.5199 15.9994 12.2654 15.9994 12C15.9994 11.7346 16.1049 11.4801 16.2925 11.2925C16.4801 11.1049 16.7346 10.9994 17 10.9994C17.2654 10.9994 17.5199 11.1049 17.7075 11.2925L21.7075 15.2925C21.8005 15.3854 21.8742 15.4957 21.9246 15.6171C21.9749 15.7385 22.0008 15.8686 22.0008 16C22.0008 16.1314 21.9749 16.2615 21.9246 16.3829C21.8742 16.5043 21.8005 16.6146 21.7075 16.7075Z" fill="#B7154A" />
                </g>
                <defs>
                  <clipPath id="clip0_18_141">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </button>
        </div>
      </Slide>

      <GroomStoryModal
        open={showModal}
        handleClose={handleClose}
      />
    </>
  )
}

export default GroomStory