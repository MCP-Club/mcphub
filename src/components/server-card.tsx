import type { ServerInfo } from '@/types/server'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function ServerCard({ server }: { server: ServerInfo }) {
  return (
    <Card className="bg-white border border-beige-input-border rounded-none shadow-none">
      <CardHeader>
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-beige-text-primary">{server.title}</h3>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm text-beige-text-secondary">{server.description}</p>
          <div className="flex flex-wrap gap-2">
            {server.tags.map((tag) => (
              <Badge key={tag} className='rounded-none bg-beige-text-primary text-white'>{tag}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between text-sm text-beige-text-secondary">
        <span className="font-mono">{server.id}</span>
        {server.creator && <span>By: {server.creator}</span>}
      </CardFooter>
    </Card>
  )
}
