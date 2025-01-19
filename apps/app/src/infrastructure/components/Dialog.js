import { Dialog as PaperDialog, Portal } from 'react-native-paper'

import { Box } from '@/infrastructure/components/Box'
import { Button } from '@/infrastructure/components/Button'
import { Paragraph } from '@/infrastructure/components/Paragraph'
import { useStyles } from '@/infrastructure/hooks/useStyles'
import { useTranslation } from '@/infrastructure/i18n'
import { spacerHalf } from '@/infrastructure/styles'

function Dialog ({ visible, onDismiss, onConfirm, title, content }) {
  const { t } = useTranslation()

  const styles = useStyles({
    element: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      gap: spacerHalf
    }
  })

  return (
    <Portal>
      <PaperDialog
        visible={visible}
        onDismiss={onDismiss}
      >
        <PaperDialog.Title>
          {title}
        </PaperDialog.Title>
        <PaperDialog.Content>
          <Paragraph>
            {content}
          </Paragraph>
        </PaperDialog.Content>
        <PaperDialog.Actions>
          <Box style={styles.element}>
            <Button onPress={onDismiss}>
              {t('common.label.cancel')}
            </Button>
            <Button onPress={onConfirm}>
              {t('common.label.confirm')}
            </Button>
          </Box>
        </PaperDialog.Actions>
      </PaperDialog>
    </Portal>
  )
}

export { Dialog }
