import { Box } from '@/infrastructure/components/Box'
import { Paragraph } from '@/infrastructure/components/Paragraph'
import { useStyles } from '@/infrastructure/hooks/useStyles'

function ButtonBar () {
  const style = useStyles({
    ButtonBar: {
      width: '100%',
      height: 50,
      backgroundColor: 'lightgray'
    }
  })
  return (
    <Box style={style.ButtonBar}>
      <Paragraph>ButtonBar ...</Paragraph>
    </Box>
  )
}

export { ButtonBar }
