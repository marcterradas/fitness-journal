import { SafeArea } from '@/infrastructure/components/SafeArea'

function Login ({ children }) {
  return (
    <SafeArea>
      {children}
    </SafeArea>
  )
}

export { Login }
