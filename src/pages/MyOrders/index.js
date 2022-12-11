import { useEffect, useState } from "react"
import { api } from "../../api/api"


export function MyOrders(){
    const [orders, setOrders] = useState()

    useEffect(()=> {
        async function fetchOrders(){
            try {
                const response = await api.get("/order/my-orders")

                console.log(response.data)
                // ERRO? UNDEFINED
                setOrders(response.data)

            } catch (err){
                console.log(err)
            }
        }
        fetchOrders()
    }, [])

    console.log(orders)

    return (
        <>
            <h1>My Orders</h1>

            {orders.map((currentOrder) => {
                return <div>
                    <strong>Order Id: {currentOrder._id}</strong>
                    {/* <strong>Cordigo: {currentOrder.price}</strong> */}
                    <strong>Order Status: {currentOrder.status}</strong>
                </div>
            })}
        </>
    )
}