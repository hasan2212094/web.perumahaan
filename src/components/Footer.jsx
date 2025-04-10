import { RiFacebookFill, RiInstagramLine, RiTwitterLine } from "react-icons/ri"


const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center border-t-2 py-4">
            <div className="flex space-x-6 mb-2"> 
                <a href="https://www.facebook.com" target="blank" rel=" noopener noreferrer" aria-label="Visit Our Facebook page">
                <RiFacebookFill/>
                </a>
                <a href="https://www.twitter.com" target="blank" rel=" noopener noreferrer" aria-label="Visit Our Twitter page">
                <RiTwitterLine/>
                </a>
                <a href="https://www.Instagram.com" target="blank" rel=" noopener noreferrer" aria-label="Visit Our Instagram page">
                <RiInstagramLine/>
                </a>
            </div>
            <p className="text-sm"></p>
        </div>
    </footer>
  )
}

export default Footer
