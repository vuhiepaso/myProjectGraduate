import React from 'react'

import { primaryColor } from '../../../assets/styles'
import { PurchaseItem } from '../../../component/view'

function ShipPack({ ships, leftLoading, loadingProductId, onNavigateProduct, rightLoading }) {
  return (
    <>
      {ships.map((ship, index) => (
        <PurchaseItem
          key={index}
          status="Ship.product-title"
          purchase={ship}
          leftButtonColor={primaryColor}
          leftButtonTitle="Ship.left-button"
          rightButtonColor={primaryColor}
          rightButtonTitle="Ship.right-button"
          onLeftButtonClick={() => onNavigateProduct(ship.product_id, ship.product_name, 'left')}
          onRightButtonClick={() => onNavigateProduct(ship.product_id, ship.product_name, 'right')}
          leftLoading={loadingProductId === ship.product_id ? leftLoading : false}
          rightLoading={loadingProductId === ship.product_id ? rightLoading : false}
        />
      ))}
    </>
  )
}

export default ShipPack
