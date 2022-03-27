import React from 'react'

import { primaryColor } from '../../../assets/styles'
import { PurchaseItem } from '../../../component/view'

function ListPack({ packs, leftLoading, loadingProductId, onNavigateProduct, rightLoading }) {
  return (
    <>
      {packs.map((pack, index) => (
        <PurchaseItem
          key={index}
          status="Pack.product-title"
          purchase={pack}
          leftButtonColor={primaryColor}
          leftButtonTitle="Pack.left-button"
          rightButtonColor={primaryColor}
          rightButtonTitle="Pack.right-button"
          onLeftButtonClick={() => onNavigateProduct(pack.product_id, pack.product_name, 'left')}
          onRightButtonClick={() => onNavigateProduct(pack.product_id, pack.product_name, 'right')}
          leftLoading={loadingProductId === pack.product_id ? leftLoading : false}
          rightLoading={loadingProductId === pack.product_id ? rightLoading : false}
        />
      ))}
    </>
  )
}

export default ListPack
