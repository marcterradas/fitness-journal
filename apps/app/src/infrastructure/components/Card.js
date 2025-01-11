import { Card as PaperCard } from 'react-native-paper'

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
    <PaperCard
      {...props}
      style={styles.cardContainer}
      contentStyle={styles.cardContent}
    >
      {cover && <PaperCard.Cover source={cover} />}
      {title && <PaperCard.Title title={title} />}
      {content && <PaperCard.Content>{content}</PaperCard.Content>}
      {actions && <PaperCard.Actions>{actions}</PaperCard.Actions>}
    </PaperCard>
  )
}

export { Card }
