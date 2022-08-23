import React from 'react'
import * as bsIcons from "react-icons/bs";
import * as faIcons from "react-icons/fa";
import * as aiIcons from "react-icons/ai";
import * as mdIcons from "react-icons/md";
import '../image/foot.png'
import '../style/footer.css'
const Footer = () => {
    return (
        <>

            {/*  */}
            <footer className="d-flex  flex-row justify-content-around align-items-center footer-color  mt10" >
                <div className="d-flex flex-column r">
                    <h4 className='text-light  '> درباره ما</h4>
                    <span className='text-light '>ادرس</span>
                    <span className='text-light  '>دست اور ها</span>
                </div>
                <div className="d-flex flex-column r">
                    <h4 className='text-light  '>راهنما</h4>
                    <span className='text-light '>اموزش کار با کوین</span>
                    <span className='text-light  '> نحوه خرید </span>
                </div>
                <div className="d-flex">
                    <img className='img-fit' src={require('../image/foot.png')} alt='ss' />
                </div>
            </footer>
            {/*  */}
            <footer className="d-flex  flex-row justify-content-around footer-color  mt10" >
                <div className="d-flex ">
                    <div className="p-2" ><bsIcons.BsTelegram className="text-light" /></div>
                    <div className="p-2" ><faIcons.FaInstagram className="text-light" /></div>
                    <div className="p-2" ><aiIcons.AiFillTwitterCircle className="text-light" /></div>
                </div>
                <div className="d-flex">
                    <div className="text-light p-2" id="number-dir"><aiIcons.AiOutlineMail className="text-light" /></div>
                    <div className="text-light p-2" id="number-dir"><span>gmail@mail.com</span></div>
                </div>
                <div className="d-flex">
                    <div className="text-light p-2" id="number-dir"><mdIcons.MdCallEnd className="text-light" /></div>
                    <div className="text-light p-2" id="number-dir"><span>+00-000-000</span></div>
                </div>
            </footer>
        </>
    )
}
export default Footer