import { Card as CustomCard } from 'react-native-paper'

function Card ({ title, content, actions, cover, ...props }) {
  return (
    <CustomCard {...props}>
      {cover && <CustomCard.Cover source={cover} />}
      {title && <CustomCard.Title title={title} />}
      {content && <CustomCard.Content>{content}</CustomCard.Content>}
      {actions && <CustomCard.Actions>{actions}</CustomCard.Actions>}
    </CustomCard>
  )
}

export { Card }
