import React, { ReactElement } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import Layout from '../Layout'

import styles from './styles'

interface Props {
  onButtonErrorPress: () => void
}

const Error = ({ onButtonErrorPress }: Props): ReactElement => (
  <Layout
    backIcon={{
      onPress: () => {},
      type: 'back'
    }}
    pageTitle="Erreur :("
  >
    <View style={styles.ErrorContent}>
      <Text style={styles.ErrorText}>
        Une erreur est malheureusement survenue...
        Veuillez réesayer.
      </Text>
      <Image
        source={require('../../assets/images/planet.png')}
        style={styles.Illustration}
      />
      <TouchableOpacity
        style={styles.Button}
        onPress={onButtonErrorPress}
      >
        <Text style={styles.ButtonText}>
          Réesayer
        </Text>
      </TouchableOpacity>
    </View>
  </Layout>
)

export default Error
