import React, {useCallback, useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {addToCart, getProduct} from '../../api/productApi'
import {DefaultLayout} from '../../component/layout'
import {LoadingIndicator} from '../../component/loading'
import ProductImage from './section/ProductImage'
import ProductForm from './section/ProductForm'
import ProductAction from './section/ProductAction'
import ProductContent from './section/ProductContent'
import {handleError} from '../../utils/middleware'
import {Dialog} from '../../component/view'
import {isEmpty} from '../../utils/validate'

function Product({navigation}) {
  const [size, setSize] = useState([])
  const [remain, setRemain] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [showDescription, setShowDescription] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogContent, setDialogContent] = useState('')

  const [selectedColor, setSelectedColor] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  // @ts-ignore
  const product = useSelector((state) => state.product)

  const {data: productDetail, isLoading} = getProduct(product?.product?.product_id)
  const {mutateAsync} = addToCart()

  useEffect(() => navigation.setOptions({title: product?.product?.product_name || ''}), [])

  useEffect(() => {
    if (productDetail?.data?.data) {
      const newRemain = productDetail?.data?.data?.color_table?.reduce((a, c) => {
        return a + c.size_table.reduce((a1, c1) => a1 + c1.import_quantity - c1.sold_quantity, 0)
      }, 0)
      setRemain(newRemain)
    }
  }, [productDetail])

  const handleColor = (color_id) => {
    setSelectedColor(color_id)
    const filterColor = productDetail?.data?.data?.color_table?.filter((color) => {
      if (color.color_id === color_id) return color
    })
    setSize(filterColor[0].size_table)
    const newRemain = filterColor[0].size_table.reduce((a, c) => {
      return a + c.import_quantity - c.sold_quantity
    }, 0)
    setRemain(newRemain)
  }

  const handleSize = (size_id) => {
    setSelectedSize(size_id)
    const newSize = size.filter((s) => {
      if (s.size_id === size_id) {
        return s
      }
    })
    setRemain(newSize[0].import_quantity - newSize[0].sold_quantity)
  }

  const handleAddQuantity = () => {
    if (quantity < remain) {
      setQuantity(quantity + 1)
    }
  }

  const handleMinusQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleAddToCart = () => {
    if (!isEmpty(selectedColor) && !isEmpty(selectedSize)) {
      // @ts-ignore
      mutateAsync({
        product_id: product?.product?.product_id,
        color_id: selectedColor,
        size_id: selectedSize,
        quantity: quantity,
      })
        .then(() => navigation.goBack())
        .catch((error) => handleError(error, setModalVisible, setDialogTitle, setDialogContent))
    } else {
      setDialogTitle('Warning')
      setDialogContent('Pick up color and size before add to cart')
      setModalVisible(true)
    }
  }

  const handleCloseDialog = useCallback(() => {
    setModalVisible(false)
    setDialogTitle('')
    setDialogContent('')
  }, [])

  if (isLoading) {
    return <LoadingIndicator />
  }
  return (
    <DefaultLayout statusBarStyle="dark-content">
      <Dialog
        title={dialogTitle}
        content={dialogContent}
        modalVisible={modalVisible}
        handleClose={handleCloseDialog}
        setModalVisible={setModalVisible}
      />
      <ProductImage image={productDetail?.data?.data?.image || ''} />
      <ProductForm>
        <ProductContent
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          handleSize={handleSize}
          remain={remain}
          handleColor={handleColor}
          sizes={size}
          setShowDescription={setShowDescription}
          showDescription={showDescription}
          product={productDetail?.data?.data || {}}
        />
        <ProductAction
          onAddQuantity={handleAddQuantity}
          onMinusQuantity={handleMinusQuantity}
          quantity={quantity}
          onAddToCart={handleAddToCart}
        />
      </ProductForm>
    </DefaultLayout>
  )
}

export default Product
