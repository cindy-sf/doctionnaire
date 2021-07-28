import React from 'react'
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { StatusBar } from 'expo-status-bar'

import styles from './styles'

interface Props {
  backIcon: BackIconProperties
  pageTitle: string
}

interface BackIconProperties {
  onPress: () => void
  type: 'exit' | 'back'
}

const Layout: React.FC<Props> = ({ backIcon, pageTitle, children }) => (
  <View style={styles.LayoutWrapper}>
    <StatusBar style='light' translucent={false} />
    <View style={styles.LayoutHeader}>
      <TouchableOpacity
        onPress={backIcon.onPress}
        style={styles.LayoutBackButton}
      >
        {backIcon.type === 'exit' && (
          <Image
            source={require('../../assets/icons/home.png')}
            style={styles.LayoutHomeIcon}
          />
        )}
        {backIcon.type === 'back' && (
          <Image
            source={require('../../assets/icons/arrow_left.png')}
            style={styles.LayoutArrowIcon}
          />
        )}
      </TouchableOpacity>
      <Text
        numberOfLines={1}
        style={styles.PageTitle}
      >
        {pageTitle}
      </Text>
    </View>
    <View style={styles.LayoutContent}>
      {children}
    </View>
  </View>
)

export default Layout
