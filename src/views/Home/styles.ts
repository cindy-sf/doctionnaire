import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  HomeContent: {
    paddingTop: 86,
    paddingRight: 44, 
    height: '100%',
  },
  SubTitle: {
    fontFamily: 'panamera-bold',
    fontSize: 16,
    color: '#fff',
    marginBottom: 12,
  },
  Marks: {
    fontFamily: 'katwijkmono-regular',
    fontSize: 16,
    color: '#a19f9f',
    marginBottom: 6,
  },
  MarksAuthor: {
    marginTop: 6,
    fontFamily: 'katwijkmono-regular',
    fontSize: 14,
    color: '#a19f9f',
    marginBottom: 36,
  },
  InputWrapper: {
    position: 'relative',
  },
  SearchInput: {
    width: 260,
    height: 55,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#fff',
    borderStyle: 'solid',
    color: '#fff',
    paddingLeft: 32,
    paddingRight: 52,
    fontFamily: 'roboto-italic',
  },
  SearchButton: {
    position: 'absolute',
    top: 15,
    right: 72,
  },
  SearchIcon: {
    width: 22,
    height: 22,
  },
  IllustrationWrapper: {
    marginLeft: 'auto',
    marginTop: 'auto',
  },
  Illustration: {
    width: 280,
    height: 280,
    marginRight: -66,
  },
})

export default styles
