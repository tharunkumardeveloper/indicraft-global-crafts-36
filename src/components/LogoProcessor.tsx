import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Download, Loader2 } from "lucide-react";
import { processVenmathiLogo, processIndicraftLogo, downloadProcessedLogo } from "@/utils/processLogos";
import { useToast } from "@/hooks/use-toast";

const LogoProcessor = () => {
  const [isProcessingVenmathi, setIsProcessingVenmathi] = useState(false);
  const [isProcessingIndicraft, setIsProcessingIndicraft] = useState(false);
  const [venmathiProcessed, setVenmathiProcessed] = useState<Blob | null>(null);
  const [indicraftProcessed, setIndicraftProcessed] = useState<Blob | null>(null);
  const { toast } = useToast();

  const handleProcessVenmathi = async () => {
    setIsProcessingVenmathi(true);
    try {
      const processedBlob = await processVenmathiLogo();
      setVenmathiProcessed(processedBlob);
      toast({
        title: "Success",
        description: "Venmathi logo processed successfully!",
      });
    } catch (error) {
      console.error('Error processing Venmathi logo:', error);
      toast({
        title: "Error",
        description: "Failed to process Venmathi logo. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessingVenmathi(false);
    }
  };

  const handleProcessIndicraft = async () => {
    setIsProcessingIndicraft(true);
    try {
      const processedBlob = await processIndicraftLogo();
      setIndicraftProcessed(processedBlob);
      toast({
        title: "Success",
        description: "Indicraft logo processed successfully!",
      });
    } catch (error) {
      console.error('Error processing Indicraft logo:', error);
      toast({
        title: "Error",
        description: "Failed to process Indicraft logo. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessingIndicraft(false);
    }
  };

  const handleDownloadVenmathi = () => {
    if (venmathiProcessed) {
      downloadProcessedLogo(venmathiProcessed, 'venmathi-logo-no-bg.png');
    }
  };

  const handleDownloadIndicraft = () => {
    if (indicraftProcessed) {
      downloadProcessedLogo(indicraftProcessed, 'indicraft-logo-dark-red-no-bg.png');
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-8">Logo Background Remover</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Venmathi Logo Card */}
        <Card>
          <CardHeader>
            <CardTitle>Venmathi Chatbot Logo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Remove background from the Venmathi full moon icon
            </p>
            <div className="flex flex-col space-y-2">
              <Button 
                onClick={handleProcessVenmathi}
                disabled={isProcessingVenmathi}
                className="w-full"
              >
                {isProcessingVenmathi ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Remove Background'
                )}
              </Button>
              
              {venmathiProcessed && (
                <Button 
                  onClick={handleDownloadVenmathi}
                  variant="outline"
                  className="w-full"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Processed Logo
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Indicraft Logo Card */}
        <Card>
          <CardHeader>
            <CardTitle>Indicraft Pot Logo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Remove background and change color to dark red
            </p>
            <div className="flex flex-col space-y-2">
              <Button 
                onClick={handleProcessIndicraft}
                disabled={isProcessingIndicraft}
                className="w-full"
              >
                {isProcessingIndicraft ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Remove Background & Change Color'
                )}
              </Button>
              
              {indicraftProcessed && (
                <Button 
                  onClick={handleDownloadIndicraft}
                  variant="outline"
                  className="w-full"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Processed Logo
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Preview Section */}
      {(venmathiProcessed || indicraftProcessed) && (
        <Card>
          <CardHeader>
            <CardTitle>Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {venmathiProcessed && (
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Venmathi Logo (No Background)</h3>
                  <div className="bg-checkerboard p-4 rounded-lg inline-block">
                    <img 
                      src={URL.createObjectURL(venmathiProcessed)} 
                      alt="Processed Venmathi Logo" 
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                </div>
              )}
              
              {indicraftProcessed && (
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Indicraft Logo (Dark Red, No Background)</h3>
                  <div className="bg-checkerboard p-4 rounded-lg inline-block">
                    <img 
                      src={URL.createObjectURL(indicraftProcessed)} 
                      alt="Processed Indicraft Logo" 
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default LogoProcessor;