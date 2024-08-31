import React from 'react'
import Header from '../components/Header'
import img from '../assets/profile-img.png';
import { IoCameraOutline } from 'react-icons/io5';
import { GoCopy } from 'react-icons/go';

const Profile = () => {
  return (
    <div>
        <Header Message="Welcome Back, Lawal Wahab" />
    
        <div className="flex items-start py-4 px-12 gap-10">
        {/*  PROFILE LEFT  */}
        <div className="flex flex-col items-center p-5 gap-5 w-[45%]">
            <div className='flex justify-center flex-col items-center p-5 border border-blue-200 w-full rounded-2xl gap-10'>
                <div className="rounded-full bg-blue-100">
                    <img src={img} alt="profile" className="w-20 h-20 rounded-full" />
                </div>
                <div className="flex gap-1 items-center">
                    <IoCameraOutline className="text-2xl text-blue-600 font-black" />
                    <span className='text-blue-600 font-semibold text-base'>Upload Image</span>
                </div>
            </div>

            <div className='flex flex-col p-5 border border-blue-200 w-full rounded-2xl'>
                <div className='flex justify-between gap-7 mb-1'>
                    <span className="text-blue-900 text-base items-start">Name</span>
                    <p className="text-blue-900 text-base font-semibold">Lawal Wahab Babatunde</p>
                </div>
                <div className='flex justify-between gap-7 mb-1'>
                    <span className="text-blue-900 text-base items-start">Email</span>
                    <p className="text-blue-900 text-base font-semibold">wabdotmail@gmail.com</p>
                </div>
                <div className='flex justify-between gap-7 mb-1'>
                    <span className="text-blue-900 text-base items-start">Phone Number</span>
                    <p className="text-blue-900 text-base font-semibold">0906 856 2949</p>
                </div>

                <div className='flex justify-between gap-7 mb-1'>
                    <span className="text-blue-900 text-base items-start">Account Status</span>
                    <p className="text-green-600 text-base font-semibold">Active</p>
                </div>

                <div className='flex justify-between gap-7 mb-1'>
                    <span className="text-blue-900 text-base items-start">Referral Link</span>
                    <div className='flex flex-col relative'>
                        <p className="text-blue-900 text-base font-semibold">www.subsum.com/tre/wd...</p>
                        <div className='flex gap-1 items-center absolute top-5 right-0'>
                            <GoCopy className='text-blue-600 items-end text-xl font-semibold'/>
                            <span className='text-blue-600 hover:text-blue-900 text-md font-semibold cursor-pointer'>Copy</span>
                        </div>
                    </div>
                </div>

                <p className="mt-10 text-blue-600 font-semibold">Edit Details</p>
            </div>
        </div>

        {/* PROFILE RIGHT */}
        <div className="flex flex-col items-center p-5 gap-5 w-[50%]">
            <div className="rounded-full p-2 border border-blue-200 w-full flex justify-between gap-5">
                <button className="w-[50%] py-2 px-8 text-blue-900 font-semibold bg-blue-100 bg-opacity-70 rounded-full">Change Password</button>
                <button className="w-[50%] py-2 px-8 text-blue-900 font-semibold text-opacity-45 rounded-full border border-blue-100">Change Password</button>
            </div>

            <div className="rounded-xl p-5 border border-blue-200 w-full flex flex-col justify-between gap-5">
                <form action="#">
                <div className="flex flex-col gap-1 mb-2">
                    <label htmlFor="Current Password" className='text-base text-blue-900 font-medium'>Current Password</label>
                    <input type="password" id="Current Password"  className="border border-blue-200 rounded-md w-full p-3 text-blue-900 outline-none" placeholder="Enter Current Password"/>
                </div>

                <div className="flex flex-col gap-1 mb-2">
                    <label htmlFor="New Password" className='text-base text-blue-900 font-medium'>New Password</label>
                    <input type="password" id="newPassword"  className="border border-blue-200 rounded-md w-full p-3 text-blue-900 outline-none" placeholder="Enter New Password"/>
                </div>

                <div className="flex flex-col gap-1 mb-2">
                    <label htmlFor="Confirm Password" className='text-base text-blue-900 font-medium'>Confirm Password</label>
                    <input type="password" id="confirmPassword"  className="border border-blue-200 rounded-md w-full p-3 text-blue-900 outline-none" placeholder="Confirm New Password"/>
                </div>

                <button className="w-full bg-blue-900 bg-opacity-40 text-white py-3 px-4 mt-3 rounded-xl font-medium">Submit</button>
                </form>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Profile