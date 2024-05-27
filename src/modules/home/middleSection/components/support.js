"use client"
import SendNairaModal from "@/components/modals/sendNairaModal"
import SendOtherCurrencyModal from "@/components/modals/sendOtherCurrencyModal"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import OtherCurrencyImg from "../../../../../public/images/webp/currency.webp"
import NairaImg from "../../../../../public/images/webp/naira.webp"

const PaymentCard = ({ title, image }) => {
  return <div
    className="relative shadow-[0px_4px_30px_0px_rgba(0,0,0,0.1)] bg-white group"
  >
    <div className="h-[13rem] md:h-[14rem] lg:h-[16rem] xl:h-[20.438rem] w-full relative overflow-hidden bg-textColor">
      <Image src={image || NairaImg} alt="" className="h-full w-full object-cover transition-all ease-out duration-200 group-hover:scale-[1.05] group-hover:origin-center group-hover:grayscale" />
    </div>
    <div className="py-10 px-8 md:px-10 flex items-center justify-between gap-4">
      <p className="text-primary text-lg md:text-xl lg:text-2xl xl:text-[1.75rem] font-bold 
      group-hover:text-textColor transition-all ease-in-out duration-200">
        {title}
      </p>
      <div className="group-hover:translate-x-1 transition-all ease-in-out duration-200">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_202_486)">
            <path d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM21.7075 16.7075L17.7075 20.7075C17.5199 20.8951 17.2654 21.0006 17 21.0006C16.7346 21.0006 16.4801 20.8951 16.2925 20.7075C16.1049 20.5199 15.9994 20.2654 15.9994 20C15.9994 19.7346 16.1049 19.4801 16.2925 19.2925L18.5863 17H11C10.7348 17 10.4804 16.8946 10.2929 16.7071C10.1054 16.5196 10 16.2652 10 16C10 15.7348 10.1054 15.4804 10.2929 15.2929C10.4804 15.1054 10.7348 15 11 15H18.5863L16.2925 12.7075C16.1049 12.5199 15.9994 12.2654 15.9994 12C15.9994 11.7346 16.1049 11.4801 16.2925 11.2925C16.4801 11.1049 16.7346 10.9994 17 10.9994C17.2654 10.9994 17.5199 11.1049 17.7075 11.2925L21.7075 15.2925C21.8005 15.3854 21.8742 15.4957 21.9246 15.6171C21.9749 15.7385 22.0008 15.8686 22.0008 16C22.0008 16.1314 21.9749 16.2615 21.9246 16.3829C21.8742 16.5043 21.8005 16.6146 21.7075 16.7075Z" fill="#D8B067" />
          </g>
          <defs>
            <clipPath id="clip0_202_486">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  </div>
}

const Support = () => {
  const [showNairaModal, setShowNairaModal] = useState(false)
  const [showOtherCurrencyModal, setShowOtherCurrencyModal] = useState(false)

  const handleSelectPaymentOption = (val) => {
    if (val === "naira") {
      setShowNairaModal(true)
    } else {
      setShowOtherCurrencyModal(true)
    }
  }

  const handleClose = () => {
    setShowNairaModal(false)
    setShowOtherCurrencyModal(false)
  }

  return (
    <>
      <div className="mt-8 md:mt-12 lg:mt-16 xl:mt-20">
        <h4 className="text-center font-rusilla text-white text-[3.25rem] leading-[0.8] md:text-[5.25rem] md:leading-[0.7] xl:text-[6.25rem] xl:leading-[0.7]">
          support
          <br />
          our journey
        </h4>

        <div className="mt-14 md:mt-20 mx-auto w-full md:w-11/12 lg:w-10/12 grid grid-cols-1 md:grid-cols-2 gap-5">
          <button
            type="button"
            onClick={handleSelectPaymentOption}
            className="focus:outline-none"
          >
            <PaymentCard
              image={NairaImg}
              title={"Send Naira"}
              handleSelectPaymentOption={() => handleSelectPaymentOption("naira")}
            />
          </button>

          <Link
            href={"https://withjoy.com/becoming-nwabudo/registry?pid=326f2377-6cf9-4b97-adf1-1e8c705f3a31"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PaymentCard
              image={OtherCurrencyImg}
              title={"Send other currency"}
              handleSelectPaymentOption={() => handleSelectPaymentOption("others")}
            />
          </Link>
        </div>
      </div>

      <SendNairaModal
        open={showNairaModal}
        handleClose={handleClose}
      />

      <SendOtherCurrencyModal
        open={showOtherCurrencyModal}
        handleClose={handleClose}
      />
    </>
  )
}

export default Support