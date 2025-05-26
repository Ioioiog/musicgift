
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';
import { Download, Loader2 } from 'lucide-react';

const LogoProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const processLogo = async () => {
    setIsProcessing(true);
    setError(null);
    
    try {
      // Create an image element from the uploaded logo
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = '/lovable-uploads/c8f42786-a7f3-4527-955f-e248ac2c088d.png';
      });
      
      console.log('Logo loaded successfully');
      
      // Remove background
      const processedBlob = await removeBackground(img);
      
      // Create URL for the processed image
      const url = URL.createObjectURL(processedBlob);
      setProcessedImageUrl(url);
      
    } catch (err) {
      console.error('Error processing logo:', err);
      setError(err instanceof Error ? err.message : 'Failed to process logo');
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadProcessedImage = () => {
    if (processedImageUrl) {
      const link = document.createElement('a');
      link.href = processedImageUrl;
      link.download = 'musicgift-logo-transparent.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Logo Background Removal</h1>
        <p className="text-muted-foreground">Convert your MusicGift logo to have a transparent background</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Original Logo */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Original Logo</h3>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/c8f42786-a7f3-4527-955f-e248ac2c088d.png" 
                alt="MusicGift Original Logo"
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          </CardContent>
        </Card>

        {/* Processed Logo */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Transparent Logo</h3>
            <div className="flex justify-center min-h-[200px] items-center">
              {processedImageUrl ? (
                <div className="space-y-4">
                  <div 
                    className="p-4 rounded-lg"
                    style={{
                      background: 'repeating-conic-gradient(#808080 0% 25%, transparent 0% 50%) 50% / 20px 20px'
                    }}
                  >
                    <img 
                      src={processedImageUrl} 
                      alt="MusicGift Transparent Logo"
                      className="max-w-full h-auto"
                    />
                  </div>
                  <Button 
                    onClick={downloadProcessedImage}
                    className="w-full"
                    variant="outline"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PNG
                  </Button>
                </div>
              ) : (
                <div className="text-center text-muted-foreground">
                  {isProcessing ? (
                    <div className="space-y-2">
                      <Loader2 className="w-8 h-8 animate-spin mx-auto" />
                      <p>Processing logo...</p>
                    </div>
                  ) : (
                    <p>Click "Remove Background" to process</p>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Button */}
      <div className="text-center">
        <Button 
          onClick={processLogo}
          disabled={isProcessing}
          size="lg"
          className="bg-primary hover:bg-primary/90"
        >
          {isProcessing ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Processing...
            </>
          ) : (
            'Remove Background'
          )}
        </Button>
      </div>

      {error && (
        <Card className="border-red-200">
          <CardContent className="p-4">
            <p className="text-red-600 text-center">{error}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default LogoProcessor;
