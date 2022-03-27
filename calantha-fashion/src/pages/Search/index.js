import React, {useCallback, useRef, useState} from 'react'
import {Keyboard} from 'react-native'

import {addSearch, getSearchHistory, getSearchSuggest, removeSearch} from '../../api/searchApi'
import {DefaultLayout, ScrollLayout} from '../../component/layout'
import {LoadingIndicator} from '../../component/loading'
import {Dialog} from '../../component/view'
import {handleError} from '../../utils/middleware'
import CustomizeSearchBar from './section/CustomizeSearchBar'
import SearchHistory from './section/SearchHistory'
import Suggestion from './section/Suggestion'
import {useDispatch} from 'react-redux'
import {setNavigateProduct} from '../../redux/action/productAction'
import SearchList from './section/SearchList'
import {pagination} from '../../themes/default'

function Search({navigation}) {
  const dispatch = useDispatch()
  const searchRef = useRef(null)
  const [historyLoadingId, setHistoryLoadingId] = useState('')
  const [search, setSearch] = useState('')
  const [searchStatus, setSearchStatus] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogContent, setDialogContent] = useState('')

  const {data: suggests, isLoading: suggestLoading} = getSearchSuggest(pagination)
  const {
    data: histories,
    isLoading: historyLoading,
    refetch: historiesRefetch,
  } = getSearchHistory(pagination)
  const {mutateAsync: addSearchHistory} = addSearch()
  const {mutateAsync: removeSearchHistory, isLoading: removedSearchHistoryLoading} = removeSearch()

  const handleNavigateProduct = useCallback((product_id, product_name) => {
    dispatch(setNavigateProduct({product_id, product_name}))
    navigation.push('Product')
  }, [])

  const handleClear = () => {
    setSearch('')
    setSearchStatus(false)
  }

  const handleChangeSearch = (e) => {
    setSearch(e)
    if (e === '') setSearchStatus(false)
  }
  const handleBack = useCallback(() => navigation.goBack(), [])
  const handleSearch = useCallback(() => {
    // @ts-ignore
    addSearchHistory({search})
      .then(() => {
        historiesRefetch()
        searchRef?.current?.blur()
        Keyboard.dismiss()
        if (search !== '') setSearchStatus(true)
      })
      .catch((error) => handleError(error, setModalVisible, setDialogTitle, setDialogContent))
  }, [search])
  const handleRemoveHistory = useCallback((history_id) => {
    setHistoryLoadingId(history_id)
    removeSearchHistory(history_id)
      .then(() => historiesRefetch())
      .catch((error) => handleError(error, setModalVisible, setDialogTitle, setDialogContent))
  }, [])
  const handleCloseDialog = useCallback(() => {
    setModalVisible(false)
    setDialogTitle('')
    setDialogContent('')
  }, [])

  if (historyLoading || suggestLoading) {
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
      <CustomizeSearchBar
        ref={searchRef}
        onChangeSearch={handleChangeSearch}
        onSearch={handleSearch}
        searchPlaceHolder="Search.search-product"
        onBack={handleBack}
        search={search}
        onClear={handleClear}
      />
      {searchStatus ? (
        <SearchList
          search={search}
          setModalVisible={setModalVisible}
          setDialogTitle={setDialogTitle}
          setDialogContent={setDialogContent}
          onNavigateProduct={handleNavigateProduct}
        />
      ) : (
        <ScrollLayout>
          <SearchHistory
            historyLoadingId={historyLoadingId}
            isLoading={removedSearchHistoryLoading}
            onRemoveHistory={handleRemoveHistory}
            title="Search.history"
            histories={histories?.data?.data || []}
            onChangeSearch={handleChangeSearch}
          />
          <Suggestion
            suggests={suggests?.data?.data || []}
            onNavigateProduct={handleNavigateProduct}
            title="Search.suggestions"
          />
        </ScrollLayout>
      )}
    </DefaultLayout>
  )
}

export default Search
