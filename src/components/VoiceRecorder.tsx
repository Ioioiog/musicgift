
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Volume, VolumeX } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

interface VoiceRecorderProps {
  onSave: (url: string, duration: number, filename: string) => void;
}

export default function VoiceRecorder({ onSave }: VoiceRecorderProps) {
  const { theme } = useTheme();
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [duration, setDuration] = useState(0);
  const [recordingTime, setRecordingTime] = useState(0);
  const [filename, setFilename] = useState('');
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];
      
      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };
      
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const url = URL.createObjectURL(audioBlob);
        const fileName = `voice-message-${new Date().getTime()}.wav`;
        
        setAudioURL(url);
        setFilename(fileName);
        setIsRecording(false);
        
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
      };
      
      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);
      setAudioURL(null);
      
      timerRef.current = window.setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
      
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };
  
  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setDuration(recordingTime);
      
      // Stop all audio tracks
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
  };
  
  const handleSave = () => {
    if (audioURL) {
      onSave(audioURL, duration, filename);
    }
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={cn(
      "p-4 rounded-lg mt-3 mb-3",
      theme === 'dark' ? 'bg-black/50 border border-border/50' : 'bg-gray-50 border border-gray-200'
    )}>
      <h3 className="text-sm font-medium mb-2">Înregistrează mesajul tău vocal</h3>
      
      {isRecording ? (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Mic className="h-5 w-5 text-red-500 animate-pulse" />
            <span className="text-red-500">Se înregistrează... {formatTime(recordingTime)}</span>
          </div>
          <Progress value={(recordingTime / 60) * 100} className="h-1" />
          <div className="flex justify-between">
            <span className="text-xs text-muted-foreground">Max 60 secunde</span>
            <span className="text-xs text-muted-foreground">{formatTime(recordingTime)}/1:00</span>
          </div>
          <Button 
            onClick={stopRecording}
            variant="destructive"
            size="sm"
            className="mt-2 flex items-center gap-2"
          >
            <MicOff className="h-4 w-4" />
            Oprește înregistrarea
          </Button>
        </div>
      ) : audioURL ? (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Volume className="h-5 w-5 text-primary" />
            <span className="text-sm">Înregistrare finalizată: {formatTime(duration)}</span>
          </div>
          
          <audio ref={audioRef} src={audioURL} controls className="w-full h-8" />
          
          <div className="text-xs text-muted-foreground">
            Fișier: {filename}
          </div>
          
          <div className="flex gap-2 mt-2">
            <Button 
              onClick={startRecording} 
              variant="outline" 
              size="sm"
              className={theme === 'dark' ? 'bg-black/40' : ''}
            >
              Reînregistrează
            </Button>
            <Button 
              onClick={handleSave} 
              variant="default" 
              size="sm"
            >
              Salvează mesajul
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center py-3">
          <Button 
            onClick={startRecording} 
            variant="outline"
            className={cn(
              "flex items-center gap-2",
              theme === 'dark' ? 'bg-black/40 hover:bg-black/60' : ''
            )}
          >
            <Mic className="h-4 w-4" />
            Începe înregistrarea
          </Button>
          <p className="text-xs text-muted-foreground mt-2">Maxim 60 de secunde</p>
        </div>
      )}
    </div>
  );
}
