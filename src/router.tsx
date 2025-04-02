import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { AuthContext } from './auth'

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
  context: {
    auth: {} as AuthContext, // Proper type but will be overridden by the actual context
  },
})

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
    context: {
      auth: AuthContext
    }
  }
}