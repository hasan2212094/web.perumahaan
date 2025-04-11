import { RiMailLine, RiMapPin2Line, RiPhoneLine } from "react-icons/ri"
import { CONTACT_INFO } from "../constants"
import emailjs from "emailjs-com"


const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log('Email berhasil dikirim:', result.text);
      }, (error) => {
          console.log('Gagal mengirim email:', error.text);
      });
  };
  
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
                        <a href="https://mail.google.com/mail/u/2/?ogbl#inbox?compose=CllgCKCJDZBShfnNkDBTTDWKmZFBVLnrJcvlLRcLtWxbrlnvnMxsPjcLZCWjzCdkWxWphnqtPCg" target="_blank" rel="noopener noreferrer">test</a>
                    </div>
                </div>

                <div className="flex mb-8 lg:mb-0">
                    <RiPhoneLine className="text-3xl mr-4"/>
                    <div>
                        <a href="https://wasap.at/V1tDBY" target="_blank" rel="noopener noreferrer">{CONTACT_INFO.phone.value}</a>
                    </div>
                </div>
                <div className="flex mb-8 lg:mb-0">
                    <RiMapPin2Line className="text-3xl mr-4"/>
                    <div>
                        <a href="https://maps.app.goo.gl/SYo9PNg2nLPYXZFa7">{CONTACT_INFO.address.value}</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactUs
