// import React, { createContext, useState } from 'react';

// const OrderContext = createContext();

// export const OrderProvider = ({children}) => {
//     const [order, setOrder] = useState([]);

//     const createOrder = (table, customer, items ) => {
//         const orderDetails = {
//             table: table,
//             customer: customer,
//             items: items
//         }
//         setOrder(orderDetails);
//     }

//     return (
//         <OrderProvider value={order}>{children}</OrderProvider>
//     )
// }

// export default OrderContext;