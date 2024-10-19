import { Box } from '@/infrastructure/components/Box'
import { Paragraph } from '@/infrastructure/components/Paragraph'
import { useStyles } from '@/infrastructure/hooks/useStyles'

function SideBar () {
  const styles = useStyles({
    SideBar: {
      width: 200,
      height: '100%',
      backgroundColor: 'lightgray'
    }
  })

  return (
    <Box style={styles.SideBar}>
      <Paragraph>SideBar ...</Paragraph>
    </Box>
  )
}

export { SideBar }
