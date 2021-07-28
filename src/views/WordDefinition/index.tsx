import React, { useState, useEffect } from 'react'
import { Text, ScrollView } from 'react-native'
import type { NavigationContainerRef, RouteProp } from '@react-navigation/native'

import Layout from '../../components/Layout'
import Definition from './components/Definition'
import Error from '../../components/Error'

import styles from './styles'

const API_KEY = 'FAKE_API_KEY'

const defs = [
  {
    id: '12354',
    nature: 'nature',
    source: 'Grand Dictionnaire de la langue française numérisé',
    attributionText: 'string',
    attributionUrl: 'string',
    mot: 'string',
    definition: 'Étage sommital de la forêt tropicale humide, qui abrite la majorité des espèces y vivant.',
    dicolinkUrl: 'string',
  },
  {
    id: '123546',
    nature: 'nature',
    source: 'Portail internet "Le Dictionnaire"',
    attributionText: 'string',
    attributionUrl: 'string',
    mot: 'string',
    definition: "Couche supérieure des forêts, notamment en forêts primaires ou tropicales, soumise au rayonnement solaire, caractérisée par la présence d'un écosystème particulièrement riche de biodiversité et de productivité biologique.",
    dicolinkUrl: 'string',
  },
]

interface Props {
  navigation: NavigationContainerRef
  route: RouteProp<
    {
      params: {
        word: string
      }
    },
    'params'
  >
}

interface Definitions {
  id: string
  nature: string
  source: string
  attributionText: string
  attributionUrl: string
  mot: string
  definition: string
  dicolinkUrl: string
}

const WordDefinition = ({ navigation, route }: Props) => {
  const [wordDefinitions, setWordDefinitions] = useState<Definitions[]>([])
  const [isDataFetching, setIsDataFetching] = useState<boolean>(false)
  const [hasError, setHasError] = useState<boolean>(false)

  const { word } = route.params

  useEffect(() => {
    fetchWordDefinitions()
  }, [])

  const fetchWordDefinitions = async () => {
    try {
      setIsDataFetching(true)
      setHasError(false)
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/fr/${word}`
      )
      const data = await response.json()

      setWordDefinitions(data[0].meanings[0].definitions)
    } catch (error) {
      console.log('error', error)
      setHasError(true)
    } finally {
      setIsDataFetching(false)
    }
  }

  if (hasError) {
    return <Error onButtonErrorPress={fetchWordDefinitions} />
  }
    
  
  if (isDataFetching || !wordDefinitions) return (
      <Layout
        backIcon={{
          onPress: (): void => navigation.goBack(),
          type: 'back',
        }}
        pageTitle="Chargement..."
      />
    )

  return (
    <Layout
      pageTitle={word}
      backIcon={{
        type: 'back',
        onPress: (): void => navigation.goBack(),
      }}
    >
      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        style={styles.ScrollZone}
      >
        <Text style={styles.SubTitle}>
          Définitions pour “{word}” :
        </Text>
        {wordDefinitions.map((def, index) => {
          const definitionNumber = index >= 9 ? index + 1 : `0${index + 1}`
          // console.lo<g('-------------------def', def)
          return (
            <Definition
              key={def.definition}
              def={def.definition}
              definitionNumber={definitionNumber}
              partOfSpeech="toto"
              // partOfSpeech={def.partOfSpeech}
            />
          )
        })}
      </ScrollView>
    </Layout>
  )
}

export default WordDefinition
