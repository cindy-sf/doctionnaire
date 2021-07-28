import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

interface Props {
  def: string
  definitionNumber: number | string
  source: string
}

const Definition = ({ def, definitionNumber, source }: Props) => (
  <View>
    <Text style={styles.DefinitionSource}>
      {definitionNumber}. {source}
    </Text>
    <Text style={styles.Definition}>
      {def}
    </Text>
  </View>
)

export default Definition
