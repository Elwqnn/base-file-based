import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/about')({
  component: AboutComponent,
})

function AboutComponent() {
  return <div>Hello "/_auth/about"!</div>
}
