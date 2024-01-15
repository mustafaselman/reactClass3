import React from 'react'
import {Provider} from "react-redux"
import { store } from './store/store'
import Counter from './counter/Counter'

const ReduxToolkit = () => {
  return (
    <Provider store={store}>
        <Counter/>
    </Provider>
  )
}

export default ReduxToolkit