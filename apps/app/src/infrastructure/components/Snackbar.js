import { Snackbar as CustomSnackbar } from 'react-native-paper'

function Snackbar (props) {
  return (
    <CustomSnackbar
      icon='close'
      {...props}
    />
  )
}

export { Snackbar }
