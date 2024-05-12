import Image from "next/image"
import Link from "next/link"
import AbstractImg from "../../../../public/images/svg/abstract1.svg"
import Abstract2Img from "../../../../public/images/svg/abstract2.svg"
import Abstract3Img from "../../../../public/images/svg/abstract3.svg"
import RingImg from "../../../../public/images/svg/ring.svg"
import OtherCurrencyImg from "../../../../public/images/webp/currency.webp"
import GroupImg from "../../../../public/images/webp/group_image.webp"
import NairaImg from "../../../../public/images/webp/naira.webp"
import RoseFlowerImg from "../../../../public/images/webp/rose_flower.webp"


const Card = ({ icon, title, content }) => {
  return <div className="flex flex-col items-center text-center">
    <div className="">
      <Image src={icon} alt="" />
    </div>
    <div className="">
      <h3 className="font-rusilla text-[3rem] leading-none md:text-[4.599rem] md:leading-none text-white">{title}</h3>
      <p className="text-base lg:text-lg xl:text-xl text-white">{content}</p>
    </div>
  </div>
}

const PaymentCard = ({ title, href, image }) => {
  return <button
    type="button"
    className="relative focus:outline-none overflow-hidden shadow-[0px_4px_30px_0px_rgba(0,0,0,0.1)] bg-white group"
  >
    <div className="h-[20.438rem] w-full relative overflow-hidden">
      <Image src={image || NairaImg} alt="" className="h-full w-full object-cover transition-all ease-in-out duration-150 group-hover:scale-[1.05] group-hover:grayscale" />
    </div>
    <div className="py-10 px-10 flex items-center justify-between gap-4">
      <p className="text-primary text-lg md:text-xl lg:text-2xl xl:text-[1.75rem] font-bold">
        {title}
      </p>
      <div>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_202_486)">
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
  </button>
}

const MiddleSection = () => {
  return (
    <section className='bg-primary relative'>
      <div className='container pt-[6rem] pb-[8rem]'>
        <div className="mx-auto flex flex-col items-center">
          <div className="w-7/12 md:w-5/12 lg:w-6/12 xl:w-fit flex justify-center">
            <Image src={AbstractImg} className="w-fit" alt="" />
          </div>
          <div className="mt-8 lg:mt-10">
            <h2 className="font-rusilla text-center text-white text-[2.6rem] md:text-[3.6rem] lg:text-[4.2rem] xl:text-[5.25rem]">
              we are SayinG I DO
            </h2>
          </div>
          <div className="mt-16 md:mt-20 flex flex-col md:flex-row gap-14 md:gap-x-36 lg:gap-60">
            <Card
              icon={RingImg}
              title={"mass"}
              content={<>
                Saturday, November 16,
                <br />
                2024. 10:00 AM
              </>}
            />
            <Card
              icon={RingImg}
              title={"Reception"}
              content={<>
                Saturday, November 16,
                <br />
                2024. (After Mass)
              </>}
            />
          </div>

          <div className="relative pt-24 pb-40">
            <Link
              href="/"
              className="relative z-10 bg-secondary flex items-center 
            gap-2 rounded-full py-7 px-8 text-lg lg:text-xl xl:text-2xl text-white"
            >
              <span>RSVP HERE</span>
              <span>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_18_141)">
                    <path d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM21.7075 16.7075L17.7075 20.7075C17.5199 20.8951 17.2654 21.0006 17 21.0006C16.7346 21.0006 16.4801 20.8951 16.2925 20.7075C16.1049 20.5199 15.9994 20.2654 15.9994 20C15.9994 19.7346 16.1049 19.4801 16.2925 19.2925L18.5863 17H11C10.7348 17 10.4804 16.8946 10.2929 16.7071C10.1054 16.5196 10 16.2652 10 16C10 15.7348 10.1054 15.4804 10.2929 15.2929C10.4804 15.1054 10.7348 15 11 15H18.5863L16.2925 12.7075C16.1049 12.5199 15.9994 12.2654 15.9994 12C15.9994 11.7346 16.1049 11.4801 16.2925 11.2925C16.4801 11.1049 16.7346 10.9994 17 10.9994C17.2654 10.9994 17.5199 11.1049 17.7075 11.2925L21.7075 15.2925C21.8005 15.3854 21.8742 15.4957 21.9246 15.6171C21.9749 15.7385 22.0008 15.8686 22.0008 16C22.0008 16.1314 21.9749 16.2615 21.9246 16.3829C21.8742 16.5043 21.8005 16.6146 21.7075 16.7075Z" fill="#B7154A" />
                  </g>
                  <defs>
                    <clipPath id="clip0_18_141">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </Link>

            <div className="absolute -top-2 -left-32">
              <div className="w-[30rem] mx-auto">
                <Image src={RoseFlowerImg} alt="" />
              </div>
            </div>
          </div>

          <div className="text-center">
            <h4 className="font-rusilla text-white text-[9.375rem] leading-[0.8]">
              Our love <br />story
            </h4>

            <div className="">
              <Image src={GroupImg} alt="" />
            </div>
          </div>

          <div className="mx-auto">
            <div className="flex flex-col items-center">
              <div className="">
                <Image src={Abstract2Img} alt="" />
              </div>
              <div className="pt-4 pb-3 text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
                <p>From a “Mysterious” message to Forever</p>
              </div>
              <div className="">
                <Image src={Abstract2Img} alt="" className="rotate-180" />
              </div>
            </div>

            <div className="mt-16 mx-auto w-full md:w-9/12 lg:w-8/12 2xl:w-7/12">
              <p className="text-center text-white text-base md:text-lg lg:text-xl xl:text-2xl">
                One bright morning, a message popped up on my phone from a number
                I didn&apos;t recognize. At first, I brushed it off, but when the
                calls kept coming, I became curious.
                <br /><br />
                It was one Emmanuel Nwabudo, asking for a chat. Unsure but intrigued,
                I asked for a proper introduction. Turns out, a friend had given him
                my number, trying to play matchmaker. Despite my hesitations, I decided
                to give it a shot.
                <br /><br />
                As days turned into weeks, our connection deepened.
                Emmanuel&apos;s persistence melted my doubts away. Our conversations flowed effortlessly,
                and I found myself drawn to his warmth and sincerity.
                <br /><br />
                Then came the moment—a heartfelt proposal over the phone, followed
                by a surprise gathering with friends where he popped the question again.
                Overwhelmed with joy, I said yes, grateful for the unexpected journey that led me to him.
                <br /><br />
                Reflecting on it all, I can&apos;t help but feel thankful for the twists of
                fate and the friends who nudged us together, especially Aunty Chinelo.
                With Emmanuel by my side, I embrace the future with open arms, ready
                for whatever adventures come our way.
              </p>

              <div className="mt-12 xl:mt-16">
                <p className="text-center font-rusilla text-white text-2xl md:text-3xl lg:text-4xl xl:text-[2.625rem]">
                  - Chioma
                </p>
              </div>
            </div>

            <div className="mt-20 mx-auto flex justify-center">
              <Image src={Abstract3Img} alt="" />
            </div>

            <div className="mt-20">
              <h4 className="text-center font-rusilla text-white text-[6.25rem] leading-[0.7]">
                support
                <br />
                our journey
              </h4>

              <div className="mt-20 mx-auto w-full md:w-11/12 lg:w-10/12 grid grid-cols-1 md:grid-cols-2 gap-5">
                <PaymentCard
                  image={NairaImg}
                  title={"Send Naira"}
                />
                <PaymentCard
                  image={OtherCurrencyImg}
                  title={"Send other currency"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MiddleSection