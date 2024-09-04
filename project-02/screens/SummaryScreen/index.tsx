import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeView } from '../../components/SafeView';

export default function SummaryScreen() {

  const insets = useSafeAreaInsets();
  return (
    <SafeView>
      <Text>SummaryScreen</Text>
    </SafeView>
  )
}

const styles = StyleSheet.create({})