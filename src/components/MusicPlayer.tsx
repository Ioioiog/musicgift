import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
interface Track {
  id: number;
  title: string;
  artist: string;
  duration: number; // in seconds
  coverImage?: string;
}
interface MusicPlayerProps {
  tracks: Track[];
  className?: string;
}
const MusicPlayer = ({
  tracks,
  className
}: MusicPlayerProps) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentTrack = tracks[currentTrackIndex];

  // Initialize audio element
  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;

    // Set up event listeners
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', () => {
      setDuration(audio.duration);
    });
    audio.addEventListener('ended', handleNext);

    // Clean up
    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', () => {});
      audio.removeEventListener('ended', handleNext);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // When track changes
  useEffect(() => {
    if (audioRef.current) {
      // Simulate loading a track - in a real app, you'd load from a URL
      audioRef.current.src = `#track-${currentTrack.id}`;
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Playback prevented:", e));
      }
    }
  }, [currentTrackIndex, currentTrack]);
  const updateProgress = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || currentTrack.duration);
    }
  };
  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Playback prevented:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };
  const handlePrev = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
    } else {
      setCurrentTrackIndex(tracks.length - 1); // loop to the end
    }
  };
  const handleNext = () => {
    if (currentTrackIndex < tracks.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    } else {
      setCurrentTrackIndex(0); // loop to the beginning
    }
  };
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const progressBar = e.currentTarget;
      const pos = e.nativeEvent.offsetX / progressBar.offsetWidth;
      audioRef.current.currentTime = pos * duration;
    }
  };
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };
  return <div className={cn("w-full bg-dark-card border border-dark-border/50 rounded-lg p-4", className)}>
      <div className="flex items-center">
        <div className="flex-shrink-0 mr-4">
          <div className={cn("w-16 h-16 rounded bg-primary/20 flex items-center justify-center", currentTrack.coverImage ? "" : "animate-pulse-slow")}>
            {currentTrack.coverImage ? <img src={currentTrack.coverImage} alt={currentTrack.title} className="w-full h-full object-cover rounded" /> : <span className="text-xl text-primary">♪</span>}
          </div>
        </div>
        
        <div className="flex-grow min-w-0">
          <div className="text-lg font-semibold text-dark-text truncate">{currentTrack.title}</div>
          <div className="text-sm text-dark-text-muted truncate">{currentTrack.artist}</div>
          
          <div className="mt-2">
            <div className="audio-progress cursor-pointer" onClick={handleSeek}>
              <div className="audio-progress-bar" style={{
              width: `${progress / duration * 100}%`
            }} />
            </div>
            
            <div className="flex justify-between text-xs text-dark-text-muted mt-1">
              <span>{formatTime(progress)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>
        
        <div className="flex-shrink-0 ml-4 flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="p-1 hover:bg-dark-border/20 rounded-full" onClick={toggleMute}>
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </Button>
          
          <Button variant="ghost" size="sm" className="p-1 hover:bg-dark-border/20 rounded-full" onClick={handlePrev}>
            <SkipBack size={18} />
          </Button>
          
          <Button variant="ghost" size="sm" onClick={handlePlayPause} className="p-1 w-10 h-10 rounded-full text-white bg-orange-500 hover:bg-orange-400">
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </Button>
          
          <Button variant="ghost" size="sm" className="p-1 hover:bg-dark-border/20 rounded-full" onClick={handleNext}>
            <SkipForward size={18} />
          </Button>
        </div>
      </div>
    </div>;
};
export default MusicPlayer;