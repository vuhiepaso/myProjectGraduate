import React from 'react'

import {errorColor, primaryColor} from '../../../assets/styles'
import {PurchaseItem} from '../../../component/view'

function ListOrder({
  onNavigateProduct,
  orders,
  loadingProductId,
  leftLoading,
  onRemoveBill,
  rightLoading,
}) {
  return (
    <>
      {orders.map((order, index) => (
        <PurchaseItem
          key={index}
          status="Order.product-title"
          purchase={order}
          leftButtonColor={primaryColor}
          leftButtonTitle="Order.left-button"
          rightButtonColor={errorColor}
          rightButtonTitle="Order.right-button"
          onRightButtonClick={() => onRemoveBill(order.bill_id, order.product_id)}
          onLeftButtonClick={() => onNavigateProduct(order.product_id, order.product_name)}
          leftLoading={loadingProductId === order.product_id ? leftLoading : false}
          rightLoading={loadingProductId === order.product_id ? rightLoading : false}
        />
      ))}
    </>
  )
}

export default ListOrder
