import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface BlogShareButtonsProps {
  title: string;
  url: string;
}

export default function BlogShareButtons({ title, url }: BlogShareButtonsProps) {
  const { toast } = useToast();

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'width=600,height=400');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank', 'width=600,height=400');
  };

  const shareOnWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    toast({
      title: "Link skopiowany!",
      description: "Link do artykułu został skopiowany do schowka.",
    });
  };

  return (
    <section className="py-8 border-t border-border">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">Podziel się artykułem</h3>
        <p className="text-foreground/70">Wyślij znajomym przydatną informację</p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button 
          onClick={shareOnFacebook}
          variant="outline"
          className="border-primary/30 hover:bg-[#1877f2] hover:text-white hover:border-[#1877f2] transition-all"
        >
          <Icon name="Facebook" className="mr-2" size={18} />
          Facebook
        </Button>

        <Button 
          onClick={shareOnTwitter}
          variant="outline"
          className="border-primary/30 hover:bg-[#1da1f2] hover:text-white hover:border-[#1da1f2] transition-all"
        >
          <Icon name="Twitter" className="mr-2" size={18} />
          Twitter
        </Button>

        <Button 
          onClick={shareOnWhatsApp}
          variant="outline"
          className="border-primary/30 hover:bg-[#25d366] hover:text-white hover:border-[#25d366] transition-all"
        >
          <Icon name="MessageCircle" className="mr-2" size={18} />
          WhatsApp
        </Button>

        <Button 
          onClick={copyLink}
          variant="outline"
          className="border-primary/30 hover:bg-primary/10 transition-all"
        >
          <Icon name="Copy" className="mr-2" size={18} />
          Kopiuj link
        </Button>
      </div>
    </section>
  );
}
