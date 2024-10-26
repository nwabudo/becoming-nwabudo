import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useRef } from "react";
import NairaImg from "../../../../public/images/webp/send_naira.webp";
import BankLogoImage from "../../../../public/images/webp/wema.webp";

const AccountEntry = ({ name, accountNumber, bank }) => {
  return <tr>
    <td className="font-bold text-left">{accountNumber}</td>
    <td>{bank}</td>
    <td>{name}</td>
  </tr>
}

const SendOtherCurrencyModal = ({
  open,
  handleClose,
}) => {
  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-20"
        initialFocus={cancelButtonRef}
        onClose={handleClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-80 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-20 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full transform overflow-hidden bg-primary text-left transition-all sm:my-8 sm:w-full md:max-w-xl">
                <div className={`relative p-4 md:p-6 xl:p-10 h-[8.75rem] md:h-[10.75rem]`}>
                  <div className="flex justify-between items-center gap-8 relative z-10">
                    <h2 className='text-white font-bold text-4xl xl:text-5xl font-rusilla'>
                      Send usd, gbp
                    </h2>
                    <button onClick={handleClose}>
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.7075 24.2926C25.8004 24.3855 25.8741 24.4958 25.9244 24.6172C25.9747 24.7386 26.0006 24.8687 26.0006 25.0001C26.0006 25.1315 25.9747 25.2616 25.9244 25.383C25.8741 25.5044 25.8004 25.6147 25.7075 25.7076C25.6146 25.8005 25.5043 25.8742 25.3829 25.9245C25.2615 25.9747 25.1314 26.0006 25 26.0006C24.8686 26.0006 24.7385 25.9747 24.6171 25.9245C24.4957 25.8742 24.3854 25.8005 24.2925 25.7076L16 17.4138L7.70751 25.7076C7.51987 25.8952 7.26537 26.0006 7.00001 26.0006C6.73464 26.0006 6.48015 25.8952 6.29251 25.7076C6.10487 25.5199 5.99945 25.2654 5.99945 25.0001C5.99945 24.7347 6.10487 24.4802 6.29251 24.2926L14.5863 16.0001L6.29251 7.70757C6.10487 7.51993 5.99945 7.26543 5.99945 7.00007C5.99945 6.7347 6.10487 6.48021 6.29251 6.29257C6.48015 6.10493 6.73464 5.99951 7.00001 5.99951C7.26537 5.99951 7.51987 6.10493 7.70751 6.29257L16 14.5863L24.2925 6.29257C24.4801 6.10493 24.7346 5.99951 25 5.99951C25.2654 5.99951 25.5199 6.10493 25.7075 6.29257C25.8951 6.48021 26.0006 6.7347 26.0006 7.00007C26.0006 7.26543 25.8951 7.51993 25.7075 7.70757L17.4138 16.0001L25.7075 24.2926Z" fill="white" />
                      </svg>
                    </button>
                  </div>

                  <div className="w-full h-full absolute top-0 left-0">
                    <Image src={NairaImg} className="w-full h-full object-cover" alt="" />
                  </div>
                </div>
                <div className="mx-auto w-[7.625rem] h-[7rem] bg-white -translate-y-12 flex items-center justify-center px-3 py-4">
                  <Image src={BankLogoImage} className="" alt="" />
                </div>
                <div className="bg-primary pb-16 px-[2rem] md:px-[4rem]">
                <div className="w-full text-white">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th>Account Number</th>
                          <th>Bank</th>
                          <th>Account Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        <AccountEntry
                          accountNumber={"0237408235"}
                          bank={"Wema Bank"}
                          name={"Chioma Ozoigbo"}
                        />
                        <AccountEntry
                          accountNumber={"8139684470"}
                          bank={"Opay"}
                          name={"Chioma Ozoigbo"}
                        />
                        <AccountEntry
                          accountNumber={"8104728022"}
                          bank={"Opay"}
                          name={"Emmanuel Nwabudo"}
                        />
                      </tbody>
                    </table>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default SendOtherCurrencyModal