import { Card as CustomCard } from 'react-native-paper'

import { useStyles } from '@/infrastructure/hooks/useStyles'
import { borderRadius, spacer } from '@/infrastructure/styles'

function Card ({ title, content, actions, cover, ...props }) {
  const styles = useStyles({
    cardContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'auto',
      width: '100%',
      padding: spacer,
      borderRadius
    },
    cardContent: {
      display: 'flex',
      height: 'auto',
      gap: spacer,
      width: '100%'
    }
  })
  return (
    <CustomCard
      {...props}
      style={styles.cardContainer}
      contentStyle={styles.cardContent}
    >
      {cover && <CustomCard.Cover source={cover} />}
      {title && <CustomCard.Title title={title} />}
      {content && <CustomCard.Content>{content}</CustomCard.Content>}
      {actions && <CustomCard.Actions>{actions}</CustomCard.Actions>}
    </CustomCard>
  )
}

export { Card }
