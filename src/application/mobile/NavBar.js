import { Box } from '@/infrastructure/components/Box'
import { Paragraph } from '@/infrastructure/components/Paragraph'
import { useStyles } from '@/infrastructure/hooks/useStyles'

function NavBar ({ navigation }) {
  const style = useStyles({
    NavBar: {
      width: '100%',
      height: 50,
      backgroundColor: 'lightgray'
    }
  })
  return (
    <Box style={style.NavBar}>
      <Paragraph>NavBar ...</Paragraph>
    </Box>
  )
}

export { NavBar }
