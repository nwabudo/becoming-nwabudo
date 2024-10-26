import Image from "next/image";
import SuccessImage from "../../../../public/images/svg/success.svg";

const SuccessCard = ({ handleClose }) => {
  return (
    <div className={`relative p-4 md:p-6 xl:p-10 bg-white flex flex-col items-center`}>
      <div className='pt-6 mx-auto'>
        <Image src={SuccessImage} alt="" />
      </div>
      <div className='text-center mt-6 pb-12'>
        <p className="font-semibold text-3xl">Message sent successfully</p>
        <p className="mt-2 w-11/12 mx-auto text-center text-base leading-6 lg:text-lg text-textColor lg:leading-6">Thank you for sharing this beautiful moment with us. With can&apos;t wait to reason the wonderful message you sent.</p>
      </div>

      <div className="pt-4">
        <button
          type="button"
          onClick={handleClose}
          className="w-full px-12 py-3 bg-primary text-white text-base lg:text-lg font-semibold rounded disabled:opacity-80">
          Close window
        </button>
      </div>
    </div>
  )
}

export default SuccessCard