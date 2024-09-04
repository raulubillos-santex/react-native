import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IProps{
    children?: React.ReactNode
};

export const SafeView:React.FC<IProps> = ({children})=> {
  const insets = useSafeAreaInsets();
  return (
    <View style={{paddingTop:insets.top, paddingBottom:insets.bottom, paddingLeft:insets.left,paddingRight:insets.right, flex:1}}>
      {children}
    </View>
  )
}