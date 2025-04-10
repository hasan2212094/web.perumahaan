import { RiMailLine, RiMapPin2Line, RiPhoneLine } from "react-icons/ri"
import { CONTACT_INFO } from "../constants"

const ContactUs = () => {
  return (
    <section className="max-w-auto mx-auto" id="contact">
        <div className="my-20">
            <h2 className=" text-xl lg:text-3xl tracking-tight text-center uppercase mb-12"> Contact Us </h2>
            <p className="max-w-2xl text-lg mb-12 text-center mx-auto">{CONTACT_INFO.text}</p>
            <div className="flex flex-col lg:flex-row justify-around mx-4">
                <div className="flex mb-8 lg:mb-0">
                    <RiMailLine className="text-3xl mr-4"/>
                    <div>
                        <p className="text-lg font-semibold">{CONTACT_INFO.email.lebel}</p>
                        <p className="text-neutral-600">{CONTACT_INFO.email.value}</p>
                    </div>
                </div>

                <div className="flex mb-8 lg:mb-0">
                    <RiPhoneLine className="text-3xl mr-4"/>
                    <div>
                        <p className="text-lg font-semibold">{CONTACT_INFO.address.lebel}</p>
                        <a href="https://wasap.at/V1tDBY" target="_blank" rel="noopener noreferrer">{CONTACT_INFO.phone.value}</a>
                    </div>
                </div>
                <div className="flex mb-8 lg:mb-0">
                    <RiMapPin2Line className="text-3xl mr-4"/>
                    <div>
                        <p className="text-lg font-semibold">{CONTACT_INFO.address.lebel}</p>
                        <p className="text-neutral-600">{CONTACT_INFO.address.value}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactUs
