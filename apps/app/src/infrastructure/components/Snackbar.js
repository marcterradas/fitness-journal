import { Snackbar as PaperSnakbar } from 'react-native-paper'

function Snackbar (props) {
  return (
    <PaperSnakbar
      icon='close'
      {...props}
    />
  )
}

export { Snackbar }
