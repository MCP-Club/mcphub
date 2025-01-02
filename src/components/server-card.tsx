import type { ServerInfo } from '@/types/server'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function ServerCard({ server }: { server: ServerInfo }) {
  return (
    <Card className="bg-beige-card-background border-beige-border">
      <CardHeader>
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-beige-text-primary">{server.name}</h3>
          <Badge variant="secondary">{server.version}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-beige-text-secondary mb-4">{server.description}</p>
        <div className="flex flex-wrap gap-2">
          {server.tags.map((tag) => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between text-sm text-beige-text-secondary">
        <span>ID: {server.id}</span>
        {server.author && <span>By: {server.author}</span>}
      </CardFooter>
    </Card>
  )
}
