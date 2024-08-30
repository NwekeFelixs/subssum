import React from 'react'
import Header from '../components/Header'
import chat from '../assets/chat.png'
import whatsapp from '../assets/whatsapp.png'
import phone from '../assets/phone.png'
import report from '../assets/Report.png'
import review from '../assets/review.png'
import faq from '../assets/faq.png'
import { FaArrowRight } from 'react-icons/fa'

const Help = () => {
  return (
    <div>
      <Header Message="Help And Support" />
      <div className="flex items-start py-4 px-12 gap-10">
        {/* HELP LEFT */}
        <div className="grid grid-cols-2 items-center p-5 gap-5">
          <div className="flex gap-4 w-[331px] items-center p-5 border border-blue-200  rounded-2xl">
            <img src={faq} alt="" />

            <div className="flex flex-col gap-1">
              <p className="text-blue-800 text-opacity-80 text-md font-semibold">Frequently Asked Questions</p>

              <span className='text-blue-600 flex items-center gap-2 font-semibold'>
                See FAQ <FaArrowRight size={18} />
              </span>
            </div>
          </div>

          <div className="flex gap-4 w-[331px] items-center p-5 border border-blue-200  rounded-2xl">
            <img src={chat} alt="" />

            <div className="flex flex-col gap-1">
              <p className="text-blue-800 text-opacity-80 text-md font-semibold">Live Chat</p>

              <span className='text-blue-600 flex items-center gap-2 font-semibold'>
                Chat Now <FaArrowRight size={18} />
              </span>
            </div>
          </div>

          <div className="flex gap-4 w-[331px] items-center p-5 border border-blue-200  rounded-2xl">
            <img src={whatsapp} alt="" />

            <div className="flex flex-col gap-1">
              <p className="text-blue-800 text-opacity-80 text-md font-semibold">Whatsapp</p>

              <span className='text-blue-600 flex items-center gap-2 font-semibold'>
                Drop a Message <FaArrowRight size={18} />
              </span>
            </div>
          </div>

          <div className="flex gap-4 w-[331px] items-center p-5 border border-blue-200  rounded-2xl">
            <img src={phone} alt="" />

            <div className="flex flex-col gap-1">
              <p className="text-blue-800 text-opacity-80 text-md font-semibold">Phone Call</p>

              <span className='text-blue-600 flex items-center gap-2 font-semibold'>
                Call Us <FaArrowRight size={18} />
              </span>
            </div>
          </div>

          <div className="flex gap-4 w-[331px] items-center p-5 border border-blue-200  rounded-2xl">
            <img src={report} alt="" />

            <div className="flex flex-col gap-1">
              <p className="text-blue-800 text-opacity-80 text-md font-semibold">Report Our Support</p>

              <span className='text-blue-600 flex items-center gap-2 font-semibold'>
                Not Satisfied <FaArrowRight size={18} />
              </span>
            </div>
          </div>

          <div className="flex gap-4 w-[331px] items-center p-5 border border-blue-200  rounded-2xl">
            <img src={review} alt="" />

            <div className="flex flex-col gap-1">
              <p className="text-blue-800 text-opacity-80 text-md font-semibold">Review Our App</p>

              <span className='text-blue-600 font-semibold bg-blue-200 rounded-full text-sm text-center'>
                Coming Soon 
              </span>
            </div>
          </div>
        </div>

        {/* HOME RIGHT */}

      </div>
    </div>
  )
}

export default Help