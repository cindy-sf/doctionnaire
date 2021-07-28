import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  LayoutWrapper: {
    backgroundColor: '#272322',
    flex: 1,
  },
  LayoutHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 22,
    justifyContent: 'space-between',
  },
  LayoutBackButton: {
    width: 82,
    height: 82,
    backgroundColor: '#E0D8F4',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 22,
    marginRight: 28
  },
  LayoutArrowIcon: { 
    width: 48,
    height: 48,
  },
  LayoutHomeIcon: { 
    width: 32,
    height: 32,
  },
  PageTitle: {
    fontFamily: 'panamera-bold',
    color: '#fff',
    textAlign: 'left',
    marginRight: 'auto',
    flex: 1,
    textTransform: 'capitalize',
    maxWidth: '78%',
    fontSize: 36,
  },
  LayoutContent: {
    paddingLeft: 22,
    paddingRight: 22, 
    flex: 1,
  }
})

export default styles
