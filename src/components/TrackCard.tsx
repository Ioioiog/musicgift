
import { Play, Download, Share2, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface TrackCardProps {
  id: number;
  title: string;
  artist: string;
  imageUrl?: string;
  onPlay: () => void;
  className?: string;
}

const TrackCard = ({ id, title, artist, imageUrl, onPlay, className }: TrackCardProps) => {
  return (
    <div className={cn("track-card group", className)}>
      <div className="relative overflow-hidden rounded-md aspect-square mb-3 bg-dark-bg/50">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-primary/10">
            <span className="text-4xl text-primary">♪</span>
          </div>
        )}
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
          <Button 
            onClick={onPlay}
            className="play-button"
            variant="ghost"
            size="icon"
          >
            <Play className="w-5 h-5" />
            <span className="sr-only">Play {title}</span>
          </Button>
        </div>
      </div>
      
      <h3 className="font-mono font-semibold text-dark-text truncate">{title}</h3>
      <p className="text-sm text-dark-text-muted truncate">{artist}</p>
      
      <div className="mt-3 flex items-center justify-between">
        <div className="flex space-x-1">
          <Button variant="ghost" size="sm" className="p-1 text-dark-text-muted hover:text-primary">
            <Download size={16} />
            <span className="sr-only">Download</span>
          </Button>
          <Button variant="ghost" size="sm" className="p-1 text-dark-text-muted hover:text-primary">
            <Share2 size={16} />
            <span className="sr-only">Share</span>
          </Button>
        </div>
        
        <Button variant="ghost" size="sm" className="p-1 text-dark-text-muted hover:text-primary flex items-center text-xs">
          <span>View</span>
          <ExternalLink size={14} className="ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default TrackCard;
