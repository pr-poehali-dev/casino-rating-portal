import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

interface RelatedPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

interface BlogRelatedPostsProps {
  currentPostId: number;
  category: string;
}

const allPosts: RelatedPost[] = [
  {
    id: 6,
    title: 'Sloty z wysokim RTP – co to znaczy?',
    excerpt: 'RTP to wskaźnik teoretycznego zwrotu w slotach. Dowiedz się, jak działa, co oznacza dla gracza.',
    category: 'Poradniki',
    date: '12 lutego 2026',
    readTime: '10 min',
    image: 'https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/b4e83b02-1d89-404e-abf2-a33af0aad675.jpg',
    slug: 'sloty-z-wysokim-rtp'
  },
  {
    id: 5,
    title: 'Czy bonus bez depozytu się opłaca?',
    excerpt: 'Bonus bez depozytu to promocja, która pozwala grać bez wpłaty. Sprawdź, czy rzeczywiście jest tak korzystny.',
    category: 'Bonusy',
    date: '11 lutego 2026',
    readTime: '8 min',
    image: 'https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/dd60a2d0-1760-4c47-9950-f0c271536e91.jpg',
    slug: 'czy-bonus-bez-depozytu-sie-oplaca'
  },
  {
    id: 4,
    title: 'Czym jest wagering i jak go obliczyć?',
    excerpt: 'Bonusy w kasynach online wyglądają kusząco, ale niemal każda promocja wiąże się z wageringiem.',
    category: 'Bonusy',
    date: '11 lutego 2026',
    readTime: '7 min',
    image: 'https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/b9bf7684-0c17-4bc2-949a-c531dfe9e221.jpg',
    slug: 'czym-jest-wagering'
  },
  {
    id: 1,
    title: 'Jak działa bonus powitalny w kasynie online?',
    excerpt: 'Rejestrując się w kasynie internetowym, niemal zawsze natkniesz się na ofertę skierowaną do nowych użytkowników.',
    category: 'Bonusy',
    date: '11 lutego 2026',
    readTime: '8 min',
    image: 'https://cdn.poehali.dev/projects/c2933cfb-9ddd-413a-a6ef-7b99d3f5e883/bucket/26909adb-1e22-47a8-ab0e-7cfc23d1a006.jpg',
    slug: 'jak-dziala-bonus-powitalny'
  }
];

export default function BlogRelatedPosts({ currentPostId, category }: BlogRelatedPostsProps) {
  const navigate = useNavigate();

  // Сначала пытаемся найти статьи из той же категории
  let relatedPosts = allPosts
    .filter(post => post.id !== currentPostId && post.category === category)
    .slice(0, 2);

  // Если не нашли статьи из той же категории, берем любые другие
  if (relatedPosts.length < 2) {
    const otherPosts = allPosts
      .filter(post => post.id !== currentPostId)
      .slice(0, 2);
    relatedPosts = otherPosts;
  }

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-12 border-t border-border">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Podobne artykuły</h2>
        <p className="text-foreground/70">Przeczytaj więcej na ten temat</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {relatedPosts.map((post) => (
          <Card 
            key={post.id}
            className="bg-card border-border hover:border-primary/50 transition-all hover:scale-105 cursor-pointer overflow-hidden group"
            onClick={() => navigate(`/blog/${post.slug}`)}
          >
            <div className="relative overflow-hidden h-48">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <Badge className="bg-primary/90 text-primary-foreground border-0">
                  {post.category}
                </Badge>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <CardHeader>
              <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
                {post.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-foreground/70 text-sm line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between text-xs text-foreground/60 pt-4 border-t border-border">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Icon name="Calendar" size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    {post.readTime}
                  </span>
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full border-primary/30 hover:bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
              >
                Czytaj więcej
                <Icon name="ArrowRight" className="ml-2" size={16} />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}