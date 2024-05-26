import React from 'react'
import Helmet from './../../Helmet/Helmet';

const EnterOTP = () => {
  return (
    <Helmet title="Wait For Sending our responce">
        <div class="max-w-md mx-auto border max-w-sm mt-20 rounded"/>
        <form class="shadow-md px-4 py-6">
            <div class="flex justify-center gap-2 mb-6">
                <input class="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxlength="1" pattern="[0-9]" inputmode="numeric" autocomplete="one-time-code" required/>
                <input class="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxlength="1" pattern="[0-9]" inputmode="numeric" autocomplete="one-time-code" required/>
                <input class="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxlength="1" pattern="[0-9]" inputmode="numeric" autocomplete="one-time-code" required/>
                <input class="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxlength="1" pattern="[0-9]" inputmode="numeric" autocomplete="one-time-code" required/>
            </div>
            <div class="flex items-center justify-center">
                <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Verify
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-teal-500 hover:text-teal-800 ml-4" href="#">
                    Resend OTP
                </a>
            </div>
        </form>
    </Helmet>
   
  )
}

export default EnterOTP
