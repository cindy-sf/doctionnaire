import React, { useState } from 'react'
import {
  BackHandler,
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native'
import type { NavigationContainerRef } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'

import Layout from '../../components/Layout'

import styles from './styles'

interface Props {
  navigation: NavigationContainerRef
}

const Home = ({ navigation }: Props) => {
  const { width } = useWindowDimensions()
  const [searchValue, setSearchValue] = useState('')

  const redirectToWordDefinition = () => {
    if (!searchValue.trim()) return

    setSearchValue('')
    navigation.navigate('WordDefinition', {
      word: searchValue,
    })
  }

  return (
    <Layout
      pageTitle="Dictionnaire"
      backIcon={{
        onPress: (): void => BackHandler.exitApp(),
        type: 'exit',
      }}
    >
      <View style={styles.HomeContent}>
        <Text style={styles.SubTitle}>
          Chercher un mot
        </Text>
        <Text style={styles.Marks}>
          “Les mots sont éternels. Tu devrais les dire ou les écrires
          avec la conscience de leur éternité.”
        </Text>
        <Text style={styles.MarksAuthor}>
          - Khalil Gibran
        </Text>
        <View style={styles.InputWrapper}>
          <TextInput
            value={searchValue}
            onChangeText={(text) => setSearchValue(text)}
            placeholder="Rechercher..."
            placeholderTextColor="#fff"
            onSubmitEditing={redirectToWordDefinition}
            style={styles.SearchInput}
          />
          <TouchableOpacity
            onPress={redirectToWordDefinition}
            style={styles.SearchButton}
          >
            <Image 
              source={require('../../assets/icons/search.png')}
              style={styles.SearchIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.IllustrationWrapper}>
          <Image
            source={require('../../assets/images/man_reading_book.png')}
            resizeMode="contain"
            style={{
              ...styles.Illustration,
              // width,
            }}
          />
        </View>
      </View>
    </Layout>
  )
}

export default Home
