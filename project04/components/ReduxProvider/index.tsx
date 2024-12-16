import { View, Text } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import store from '../../store'

const ReduxProvider: React.FC<{children:React.JSX.Element}> = ({children}) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default ReduxProvider