import React from 'react'
import '../style/baner.css'
const Banner = () => {
    return (
        <div className="jumbotron jumbotron-fluid  mt-4 mb-4 " id='bg'>
            <div className="container" id='bg'>
                {/* <img src={require('../image/baner3.png')} alt='ss' id='logo-pic' /> */}
                <h1 className="display-4 text-white">قیمت لحظه ای ارز های دیجیتال</h1>
                <p className="lead  text-white">همه قیمت های ارز دیجیتال را در سایت ما مشاهده بفرمایید</p>
            </div>
        </div>

    )
}
export default Banner