import { useEffect, useState } from "react"
import { api } from "../../api/api"


export function MyOrders(){
    const [orders, setOrders] = useState()

    // o setOrder não muda os ordens em tempo pra renderizar a div
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

            {orders ? orders.map((currentOrder) => {
                return <div key={currentOrder._id}>
                    <strong>Order Id: {currentOrder._id}</strong>
                    {/* <strong>Cordigo: {currentOrder.price}</strong> */}
                    <strong>Order Status: {currentOrder.status}</strong>
                </div>
            })
                :
                (<h2>You have no orders yer</h2>)
            }
        </>
    )
}