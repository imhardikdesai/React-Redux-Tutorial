import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { bindActionCreators } from 'redux'
import { actionCreators } from './../state/index'

const Shop = () => {
    const amount = useSelector((state) => state.amount)

    const dispatch = useDispatch()
    const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch)
    return (

        <>
            <h2>Withdraw / Deposit Money </h2>
            <img height={'100px'} src="https://toppng.com/uploads/preview/money-png-115539438253qszhhbqpt.png" alt="" />
            <div className="d-flex justify-content-center align-items-center my-5">
                <button className="btn btn-danger mx-2" onClick={() => { withdrawMoney(100) }}>-</button>
                <h6>Balance :- {amount}</h6>
                <button className="btn btn-success mx-2" onClick={() => { depositMoney(100) }}>+</button>
            </div>
        </>
    )
}

export default Shop
