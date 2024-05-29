"use client"
import Image from "next/image";
import { Fade, Flip, Slide } from "react-awesome-reveal";
import NigeriaImage from "../../../../public/images/svg/nigeria.svg";
import RingImage from "../../../../public/images/webp/ring.webp";
import Image1 from "../../../../public/images/webp/selfie/image1.webp";
import Image2 from "../../../../public/images/webp/selfie/image2.webp";
import Image3 from "../../../../public/images/webp/selfie/image3.webp";
import Image4 from "../../../../public/images/webp/selfie/image4.webp";

const TopSection = () => {
  return (
    <section className='relative bg-[#FDF2DD]'>
      <div className='container'>
        <div className='flex justify-center mx-auto w-6/12 md:w-4/12'>
          <Flip direction="horizontal" triggerOnce>
            <Image src={RingImage} alt="" className="w-fit" />
          </Flip>

        </div>

        {/* Desktop Only */}
        <div className="hidden md:flex -mt-[3.2rem] md:-mt-[4rem] lg:-mt-[4.6rem] xl:-mt-[5.6rem] w-full md:w-7/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12 justify-between items-center mx-auto">
          <div className="flex items-center gap-2">
            <Slide delay={0.1} direction="up" cascade damping={0.1} triggerOnce>
              <p>
                <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.8333 2.15385H20.5833V1.07692C20.5833 0.791305 20.4692 0.517386 20.266 0.315423C20.0629 0.113461 19.7873 0 19.5 0C19.2127 0 18.9371 0.113461 18.734 0.315423C18.5308 0.517386 18.4167 0.791305 18.4167 1.07692V2.15385H7.58333V1.07692C7.58333 0.791305 7.4692 0.517386 7.26603 0.315423C7.06287 0.113461 6.78732 0 6.5 0C6.21268 0 5.93713 0.113461 5.73397 0.315423C5.5308 0.517386 5.41667 0.791305 5.41667 1.07692V2.15385H2.16667C1.59203 2.15385 1.04093 2.38077 0.634602 2.78469C0.228273 3.18862 0 3.73646 0 4.30769V25.8462C0 26.4174 0.228273 26.9652 0.634602 27.3692C1.04093 27.7731 1.59203 28 2.16667 28H23.8333C24.408 28 24.9591 27.7731 25.3654 27.3692C25.7717 26.9652 26 26.4174 26 25.8462V4.30769C26 3.73646 25.7717 3.18862 25.3654 2.78469C24.9591 2.38077 24.408 2.15385 23.8333 2.15385ZM5.41667 6.46154V5.38462C5.41667 5.099 5.5308 4.82508 5.73397 4.62312C5.93713 4.42115 6.21268 4.30769 6.5 4.30769C6.78732 4.30769 7.06287 4.42115 7.26603 4.62312C7.4692 4.82508 7.58333 5.099 7.58333 5.38462V6.46154C7.58333 6.74716 7.4692 7.02108 7.26603 7.22304C7.06287 7.425 6.78732 7.53846 6.5 7.53846C6.21268 7.53846 5.93713 7.425 5.73397 7.22304C5.5308 7.02108 5.41667 6.74716 5.41667 6.46154ZM16.5967 20.3363C15.5591 21.1908 14.435 21.9356 13.2424 22.5588C13.1671 22.5963 13.0842 22.6158 13 22.6158C12.9159 22.6158 12.8329 22.5963 12.7576 22.5588C11.565 21.9356 10.4409 21.1908 9.40333 20.3363C7.1175 18.4423 5.95833 16.4917 5.95833 14.5385C5.95869 13.7145 6.23064 12.9134 6.73255 12.2577C7.23446 11.602 7.93868 11.1278 8.73743 10.9078C9.53618 10.6877 10.3855 10.7339 11.1553 11.0393C11.9251 11.3447 12.5731 11.8924 13 12.5987C13.4269 11.8924 14.0749 11.3447 14.8447 11.0393C15.6145 10.7339 16.4638 10.6877 17.2626 10.9078C18.0613 11.1278 18.7655 11.602 19.2675 12.2577C19.7694 12.9134 20.0413 13.7145 20.0417 14.5385C20.0417 16.4917 18.8825 18.4423 16.5967 20.3363ZM20.5833 6.46154C20.5833 6.74716 20.4692 7.02108 20.266 7.22304C20.0629 7.425 19.7873 7.53846 19.5 7.53846C19.2127 7.53846 18.9371 7.425 18.734 7.22304C18.5308 7.02108 18.4167 6.74716 18.4167 6.46154V5.38462C18.4167 5.099 18.5308 4.82508 18.734 4.62312C18.9371 4.42115 19.2127 4.30769 19.5 4.30769C19.7873 4.30769 20.0629 4.42115 20.266 4.62312C20.4692 4.82508 20.5833 5.099 20.5833 5.38462V6.46154Z" fill="#D8B067" />
                </svg>
              </p>
              <p className="text-base lg:text-lg xl:text-xl text-primary">16.NOV.2024</p>
            </Slide>
          </div>

          <div className="flex items-center gap-2">
            <Slide delay={0.1} direction="up" cascade damping={0.1} triggerOnce>
              <p className="text-base lg:text-lg xl:text-xl text-primary">LAGOS</p>
              <p>
                <Image src={NigeriaImage} alt="" />
              </p>
            </Slide>
          </div>
        </div>

        {/* Mobile Only */}
        <div className="mt-2 block md:hidden mx-auto">
          <Slide delay={0.1} direction="up" triggerOnce>
            <p className="text-center text-primary text-lg md:text-2xl xl:text-[1.75rem]">#becomingNwabudo</p>
          </Slide>
        </div>

        <div className="pt-8 md:pt-14 lg:pt-16 xl:pt-20 pb-6 md:pb-10 xl:pb-16">
          <h1 className="font-rusilla flex flex-col text-center text-[5rem] leading-[0.7] md:text-[9.25rem] md:leading-[0.8] xl:text-[16.25rem] xl:leading-[0.7] text-primary">
            <span>
              <Slide delay={0.1} direction="up" cascade damping={0.1} triggerOnce className="inline-block">
                <span>C</span>
                <span>h</span>
                <span>i</span>
                <span>o</span>
                <span>m</span>
                <span>A</span>
              </Slide>
            </span>
            <span className="text-2xl md:text-[3rem] xl:text-[4.5rem] text-secondary">
              <Fade duration={3400} direction="up" triggerOnce>
                <span>x</span>
              </Fade>
            </span>
            <span>
              <Slide delay={0.1} direction="up" cascade damping={0.1} triggerOnce className="inline-block">
                <span>O</span>
                <span>n</span>
                <span>y</span>
                <span>E</span>
                <span>k</span>
                <span>a</span>
                <span>c</span>
                <span>h</span>
                <span>I</span>
              </Slide>
            </span>
          </h1>
        </div>

        {/* Desktop only */}
        <div className="pb-24 hidden md:block">
          <Slide delay={0.1} direction="up" triggerOnce>
            <p className="text-center text-primary text-lg md:text-2xl xl:text-[1.75rem]">#becomingNwabudo</p>
          </Slide>
        </div>

        {/* Mobile Only */}
        <div className="flex md:hidden flex-row justify-center gap-6 pt-6 pb-24">
          <div className="flex items-center gap-2">
            <Slide delay={0.1} direction="up" cascade damping={0.1} triggerOnce>
              <p>
                <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.8333 2.15385H20.5833V1.07692C20.5833 0.791305 20.4692 0.517386 20.266 0.315423C20.0629 0.113461 19.7873 0 19.5 0C19.2127 0 18.9371 0.113461 18.734 0.315423C18.5308 0.517386 18.4167 0.791305 18.4167 1.07692V2.15385H7.58333V1.07692C7.58333 0.791305 7.4692 0.517386 7.26603 0.315423C7.06287 0.113461 6.78732 0 6.5 0C6.21268 0 5.93713 0.113461 5.73397 0.315423C5.5308 0.517386 5.41667 0.791305 5.41667 1.07692V2.15385H2.16667C1.59203 2.15385 1.04093 2.38077 0.634602 2.78469C0.228273 3.18862 0 3.73646 0 4.30769V25.8462C0 26.4174 0.228273 26.9652 0.634602 27.3692C1.04093 27.7731 1.59203 28 2.16667 28H23.8333C24.408 28 24.9591 27.7731 25.3654 27.3692C25.7717 26.9652 26 26.4174 26 25.8462V4.30769C26 3.73646 25.7717 3.18862 25.3654 2.78469C24.9591 2.38077 24.408 2.15385 23.8333 2.15385ZM5.41667 6.46154V5.38462C5.41667 5.099 5.5308 4.82508 5.73397 4.62312C5.93713 4.42115 6.21268 4.30769 6.5 4.30769C6.78732 4.30769 7.06287 4.42115 7.26603 4.62312C7.4692 4.82508 7.58333 5.099 7.58333 5.38462V6.46154C7.58333 6.74716 7.4692 7.02108 7.26603 7.22304C7.06287 7.425 6.78732 7.53846 6.5 7.53846C6.21268 7.53846 5.93713 7.425 5.73397 7.22304C5.5308 7.02108 5.41667 6.74716 5.41667 6.46154ZM16.5967 20.3363C15.5591 21.1908 14.435 21.9356 13.2424 22.5588C13.1671 22.5963 13.0842 22.6158 13 22.6158C12.9159 22.6158 12.8329 22.5963 12.7576 22.5588C11.565 21.9356 10.4409 21.1908 9.40333 20.3363C7.1175 18.4423 5.95833 16.4917 5.95833 14.5385C5.95869 13.7145 6.23064 12.9134 6.73255 12.2577C7.23446 11.602 7.93868 11.1278 8.73743 10.9078C9.53618 10.6877 10.3855 10.7339 11.1553 11.0393C11.9251 11.3447 12.5731 11.8924 13 12.5987C13.4269 11.8924 14.0749 11.3447 14.8447 11.0393C15.6145 10.7339 16.4638 10.6877 17.2626 10.9078C18.0613 11.1278 18.7655 11.602 19.2675 12.2577C19.7694 12.9134 20.0413 13.7145 20.0417 14.5385C20.0417 16.4917 18.8825 18.4423 16.5967 20.3363ZM20.5833 6.46154C20.5833 6.74716 20.4692 7.02108 20.266 7.22304C20.0629 7.425 19.7873 7.53846 19.5 7.53846C19.2127 7.53846 18.9371 7.425 18.734 7.22304C18.5308 7.02108 18.4167 6.74716 18.4167 6.46154V5.38462C18.4167 5.099 18.5308 4.82508 18.734 4.62312C18.9371 4.42115 19.2127 4.30769 19.5 4.30769C19.7873 4.30769 20.0629 4.42115 20.266 4.62312C20.4692 4.82508 20.5833 5.099 20.5833 5.38462V6.46154Z" fill="#D8B067" />
                </svg>
              </p>
              <p className="text-base lg:text-lg xl:text-xl text-primary">16.NOV.2024</p>
            </Slide>
          </div>

          <div className="flex items-center gap-2">
            <Slide delay={0.1} direction="up" cascade damping={0.1} triggerOnce>
              <p className="text-base lg:text-lg xl:text-xl text-primary">LAGOS</p>
              <p>
                <Image src={NigeriaImage} alt="" />
              </p>
            </Slide>
          </div>
        </div>
      </div>
      <div className="flex flex-row relative after:contents-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[50%] after:bg-primary">
        <Slide direction="up" cascade damping={0.2} triggerOnce className="z-10">
          <div className="relative z-40">
            <Image src={Image1} alt="" className="grayscale hover:grayscale-0 transition-all ease-in-out duration-150" />
          </div>
          <div className="mt-6 -ml-2 md:-ml-6 relative z-30">
            <Image src={Image2} alt="" className="grayscale hover:grayscale-0 transition-all ease-in-out duration-150" />
          </div>
          <div className="-ml-4 -mt-2 relative z-20">
            <Image src={Image3} alt="" className="grayscale hover:grayscale-0 transition-all ease-in-out duration-150" />
          </div>
          <div className="-ml-8 md:-ml-12 lg:-ml-20 -mt-6 md:-mt-8 relative z-10">
            <Image src={Image4} alt="" className="grayscale hover:grayscale-0 transition-all ease-in-out duration-150" />
          </div>
        </Slide>
      </div>
    </section>
  )
}

export default TopSection