import { Box } from '@/infrastructure/components/Box'
import { Paragraph } from '@/infrastructure/components/Paragraph'
import { useStyles } from '@/infrastructure/hooks/useStyles'
import { spacerHalf } from '@/infrastructure/styles'

function NavBar ({ navigation }) {
  const style = useStyles({
    NavBar: {
      width: '100%',
      height: 50,
      backgroundColor: 'lightgray',
      padding: spacerHalf
    }
  })
  return (
    <Box style={style.NavBar}>
      <Paragraph>NavBar ...</Paragraph>
    </Box>
  )
}

export { NavBar }
