import { Appbar as PaperAppbar } from 'react-native-paper'

function Appbar ({ navigation }) {
  return (
    <PaperAppbar.Header>
      <PaperAppbar.Content
        title='title'
      />
    </PaperAppbar.Header>
  )
}

export { Appbar }
