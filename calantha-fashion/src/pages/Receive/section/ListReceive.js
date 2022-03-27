import React from 'react'

import { primaryColor } from '../../../assets/styles'
import { PurchaseItem } from '../../../component/view'

function ListReceive({ receives, leftLoading, loadingProductId, onNavigateProduct, rightLoading }) {
  return (
    <>
      {receives.map((receive, index) => (
        <PurchaseItem
          key={index}
          status="Receive.product-title"
          purchase={receive}
          leftButtonColor={primaryColor}
          leftButtonTitle="Receive.left-button"
          rightButtonColor={primaryColor}
          rightButtonTitle="Receive.right-button"
          onLeftButtonClick={() =>
            onNavigateProduct(receive.product_id, receive.product_name, 'left')
          }
          onRightButtonClick={() =>
            onNavigateProduct(receive.product_id, receive.product_name, 'right')
          }
          leftLoading={loadingProductId === receive.product_id ? leftLoading : false}
          rightLoading={loadingProductId === receive.product_id ? rightLoading : false}
        />
      ))}
    </>
  )
}

export default ListReceive
