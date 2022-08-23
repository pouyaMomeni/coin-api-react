import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../style/box.css'
import * as bsIcons from "react-icons/bs";
//BsCurrencyExchange
const Box = () => {
    let [info, setInfo] = useState([]);
    useEffect(() => {
        axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=true`
        ).then(res => {
            setInfo(res.data)
        }).catch(error => console.log(error))
    });
    return (
        <>
            <div className="container w-50 border bg-color  border-4 p-2 mt-5 mb-5  " id='box'>
                <div className="row p-2 mt-2 mb-2 ">
                    <div className="col d-flex justify-content-center">
                        <h3 className='text-light'>از این تبدیل استفاده کن !</h3>
                    </div>
                </div>
                <div className="row temp m-2 ">
                    <div className="col-2 d-flex d-flex justify-content-center">
                        <select className='select btn bg-light '>
                            {info.map(values => {
                                return (
                                    <>
                                        <option value={values.current_price}> {values.name}</option>
                                    </>
                                )
                            })}
                        </select>
                        <input className='btn bg-light' />
                    </div>
                </div>
                <div className="row temp mt-3">
                    <div className="col-2 d-flex justify-content-center temp1">
                        <button className='btn bg-danger'><bsIcons.BsCurrencyExchange /></button>
                    </div>
                </div>
                <div className="row">
                    <div className="col mt-1 d-flex justify-content-center">
                        <label><span className='text-light'>!برای تبدیل کلیک کنید</span></label>
                    </div>
                </div>
                <div className="row"></div>
                <div className="row temp m-2 mb-4 ">
                    <div className="col-2 d-flex justify-content-center">
                        <select className='select btn bg-light'>
                            {info.map(values => {
                                return (
                                    <>
                                        <option value={values.id}><p>{values.name}</p></option>
                                    </>
                                )
                            })}
                        </select>
                        <input className='btn bg-light' />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Box