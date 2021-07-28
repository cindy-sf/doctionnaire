import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

interface Props {
  def: string
  definitionNumber: number | string
  partOfSpeech: string
}

const Definition = ({ def, definitionNumber, partOfSpeech }: Props) => (
  <View>
    <Text style={styles.DefinitionSource}>
      {definitionNumber}
      {/* {definitionNumber}. {partOfSpeech} */}
    </Text>
    <Text style={styles.Definition}>
      {def}
    </Text>
  </View>
)

export default Definition
