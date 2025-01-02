import type { ServerInfo } from '@/types/server'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import githubLogo from '@/assets/github.svg';

export function ServerCard({ server }: { server: ServerInfo }) {
  return (
    <Card className="bg-white border border-beige-input-border rounded-none shadow-none">
      <CardHeader>
        <div className="flex justify-between items-start">
          <h3 className="text-lg text-beige-text-primary">{server.title}</h3>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm text-beige-text-secondary">{server.description}</p>
          <div className="flex flex-wrap gap-2">
            {server.tags.map((tag) => (
              <Badge key={tag} className='rounded-none bg-beige-text-secondary text-white'>{tag}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between text-sm text-beige-text-secondary">
        <a 
          href={`/servers/${encodeURIComponent(server.id)}`}
          className="font-mono hover:text-orange-600 transition-colors"
        >
          {server.id}
        </a>
        {server.sources?.github && (
          <a
            href={server.sources.github}
            className="inline-flex items-end gap-2 text-beige-text-secondary hover:text-orange-600 group duration-200 transition-colors"
          >
            <div className="relative w-5 h-5">
              <Image
                src={githubLogo}
                alt="GitHub"
                fill
                className="object-contain duration-200 group-hover:[filter:invert(40%)_sepia(98%)_saturate(1785%)_hue-rotate(346deg)_brightness(98%)_contrast(88%)] transition-[filter]"
              />
            </div>
            <span>GitHub</span>
          </a>
        )}
      </CardFooter>
    </Card>
  )
}
