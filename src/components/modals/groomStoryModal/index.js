import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";

const GroomStoryModal = ({
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
              <Dialog.Panel className="relative w-full transform overflow-hidden bg-primary text-left transition-all sm:my-8 sm:w-full md:max-w-3xl">
                <div className={`relative p-4 md:p-6 xl:p-10`}>
                  <div className="flex justify-between items-center gap-8 relative z-10">
                    <h2 className='text-white font-bold text-4xl xl:text-5xl font-rusilla'>
                     - Onyekachi
                    </h2>
                    <button onClick={handleClose}>
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.7075 24.2926C25.8004 24.3855 25.8741 24.4958 25.9244 24.6172C25.9747 24.7386 26.0006 24.8687 26.0006 25.0001C26.0006 25.1315 25.9747 25.2616 25.9244 25.383C25.8741 25.5044 25.8004 25.6147 25.7075 25.7076C25.6146 25.8005 25.5043 25.8742 25.3829 25.9245C25.2615 25.9747 25.1314 26.0006 25 26.0006C24.8686 26.0006 24.7385 25.9747 24.6171 25.9245C24.4957 25.8742 24.3854 25.8005 24.2925 25.7076L16 17.4138L7.70751 25.7076C7.51987 25.8952 7.26537 26.0006 7.00001 26.0006C6.73464 26.0006 6.48015 25.8952 6.29251 25.7076C6.10487 25.5199 5.99945 25.2654 5.99945 25.0001C5.99945 24.7347 6.10487 24.4802 6.29251 24.2926L14.5863 16.0001L6.29251 7.70757C6.10487 7.51993 5.99945 7.26543 5.99945 7.00007C5.99945 6.7347 6.10487 6.48021 6.29251 6.29257C6.48015 6.10493 6.73464 5.99951 7.00001 5.99951C7.26537 5.99951 7.51987 6.10493 7.70751 6.29257L16 14.5863L24.2925 6.29257C24.4801 6.10493 24.7346 5.99951 25 5.99951C25.2654 5.99951 25.5199 6.10493 25.7075 6.29257C25.8951 6.48021 26.0006 6.7347 26.0006 7.00007C26.0006 7.26543 25.8951 7.51993 25.7075 7.70757L17.4138 16.0001L25.7075 24.2926Z" fill="white" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="bg-primary  pb-16 px-4 md:px-6 xl:px-10">
                  <div className=" text-white text-sm-15 md:text-base lg:text-lg xl:text-xl">
                    <span>
                      One cool evening, I was minding my own business, probably indulging in one too
                      many glasses of whiskey, when my friend Chinelo, who happened to be in the same
                      room, showed me a contact and a picture on her phone. “Emmanuel, I’ve found
                      your soulmate!” she declared with the enthusiasm of someone who’d just discovered
                      gold. I feigned indifference (not to blame a guy—the too much-talking stage had
                      worn me out, and don’t even get me started on long-distance relationships). But
                      behind her back, I collected the number with a sly grin.
                    </span>
                    <br /> <br />
                    <span>
                      There was something about Chioma&apos;s gown in the display picture which captivated me.
                      It was simple yet graceful, soft and elegant, exuding a charm I couldn’t ignore.
                    </span>
                    <br /> <br />
                    <span>
                      I decided to make my move and reached out. “Hi, this is Emmanuel. Your number was
                      given to me by Chinelo, a mutual friend. Mind having a chat?” I texted, trying to
                      sound cool and casual.
                    </span>
                    <br /> <br />
                    <span>
                      To my surprise, she responded! I was half expecting radio silence or maybe a polite brush-off.
                      But instead, we started chatting, and I was determined to win her attention. I did what any Igbo
                      guy who meant business would do — I called her too many times initially sha
                    </span>
                    <br /> <br />
                    <span>
                      Slowly but surely, we started having these amazing conversations that felt natural, like we’d
                      known each other forever. Days turned into months. And oh boy, I knew she was the one as soon
                      as I let the other plates go.
                    </span>
                    <br /> <br />
                    <span>
                      One day, feeling a surge of boldness (and maybe too much whiskey), I decided it was time for the big move.
                      I called her and poured my heart out, serenading her with sweet words that only an Igbo man could deliver,
                      full of praise and genuine affection. Somehow, she didn’t hang up.
                    </span>
                    <br /> <br />
                    <span>
                      Then came the pièce de résistance—a proposal. Over the phone. Yes, I know, it&apos;s not the most traditional
                      or romantic setup. But I had a plan. I gathered our friends for a surprise party and popped the question
                      again, this time with all the flair and dramatics I could muster. There were confetti, happy tears, and laughter.
                    </span>
                    <br /> <br />
                    <span>
                      With her big resounding YES, I felt like a winner. Twice. Looking back, I’m beyond grateful for Chinelo’s
                      matchmaking shenanigans. Without her meddling, I wouldn’t have met my wife.
                    </span>
                    <br /> <br />
                    <span>
                      Now, with Chioma by my side, every day feels like a new adventure. And as we step into the future,
                      I can’t wait to see what other twists and turns fate has in store for us.
                    </span>
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

export default GroomStoryModal