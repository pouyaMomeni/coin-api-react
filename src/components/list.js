import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../style/list.css'
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
const List = () => {
    let [value, setValue] = useState(true)
    let [page, setPage] = useState(5)
    let [info, setInfo] = useState([]);
    useEffect(() => {
        axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${page}&page=1&sparkline=true`
        ).then(res => {
            setInfo(res.data)
        }).catch(error => console.log(error))
    });
    const showMore = () => {
        if (value) {
            setPage(70)
            setValue(false)
        }
        else {
            setPage(5)
            setValue(true)
        }
    }
    console.log(page);
    return (
        <div className="container" id='list'>
            <div className="row bg-danger">
                <div className="col ">اسم</div>
                <div className="col ">قیمت کنونی</div>
                <div className="col  ">قیمت در مارکت</div>
                <div className="col ">بیشترین  در 24</div>
                <div className="col ">کمترین در 24</div>
                <div className="col ">تعغیرات 24 ساعته</div>
                <div className="col ">تمامی تعغیرات</div>
            </div>
            {info.map(value => {
                return (
                    <div className="row border">
                        <div className="col col-head text-light">{value.name}<img className='wi' src={value.image} alt="s" /></div>
                        <div className="col col-head text-light">{value.current_price} </div>
                        <div className="col col-head text-light">{value.market_cap} </div>
                        <div className="col col-head text-success">{value.high_24h} </div>
                        <div className="col col-head text-danger">{value.low_24h} </div>
                        <div className="col col-head text-light">{value.price_change_24h} </div>
                        <div className="col col-head text-light">{value.total_supply} </div>
                        {/* <div className="col">{value.sparkline_in_7d}</div> */}
                    </div>
                )
            })}
            <div className='d-flex justify-content-center '>
                <button className='btn btn-danger justify-content-center mt-3' onClick={() => showMore()}>نشان دادن بیشتر/کمتر</button>
            </div>
        </div>
    )
}
export default List