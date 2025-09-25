"use client"

import { Sparkles, Heart, Upload } from 'lucide-react';
import { Button } from './components/ui/Button';
import { useEffect, useState } from 'react';
import { useAuth } from './contexts/AuthContext';
import { useRouter } from 'next/navigation';


export default function Home() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<'login' | 'signup'>('login');
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/gallery');
    }
  }, [user, router]);

  const openAuthModal = (tab: 'login' | 'signup') => {
    setAuthModalTab(tab);
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        // style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/90" />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <Sparkles className="h-12 w-12 text-primary mr-4 animate-pulse" />
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-medium text-muted-foreground mb-2">
                  Dress to Impress
                </div>
                <h1 className="text-7xl md:text-9xl font-black bg-gradient-primary bg-clip-text text-transparent animate-fade-in tracking-tight">
                  FITZ
                </h1>
              </div>
              <Sparkles className="h-12 w-12 text-accent ml-4 animate-pulse" />
            </div>
            
            <p className="text-xl md:text-2xl text-foreground/80 mb-4 animate-fade-in">
              Share Your Dress To Impress Outfits
            </p>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
              Create, share, and discover amazing outfit combinations inspired by Dress To Impress. 
              Vote for your favorites and get inspired by the community!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button 
                size="lg" 
                onClick={() => openAuthModal('signup')}
                className="text-lg px-8 py-6 bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-glow"
              >
                <Upload className="mr-2 h-5 w-5" />
                Start Creating
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => openAuthModal('login')}
                className="text-lg px-8 py-6 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 backdrop-blur-sm bg-background/80"
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-card/70 backdrop-blur-md relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Why Fitz?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-b from-primary/5 to-accent/5 border border-primary/20 hover:scale-105 transition-transform duration-300 backdrop-blur-sm shadow-card">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Upload className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Share Your Creations</h3>
              <p className="text-muted-foreground">
                Upload your best Dress To Impress outfits with detailed item breakdowns and color codes
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-b from-primary/5 to-accent/5 border border-primary/20 hover:scale-105 transition-transform duration-300 backdrop-blur-sm shadow-card">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Vote & Favorite</h3>
              <p className="text-muted-foreground">
                Like your favorite outfits and save them to your personal collection for inspiration
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-b from-primary/5 to-accent/5 border border-primary/20 hover:scale-105 transition-transform duration-300 backdrop-blur-sm shadow-card">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Inspired</h3>
              <p className="text-muted-foreground">
                Browse by categories, discover trending outfits, and find your next winning look
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 relative backdrop-blur-md">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Ready to Show Off Your Style?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the Fitz community and share your amazing outfit creations today!
          </p>
          <Button 
            size="lg" 
            onClick={() => openAuthModal('signup')}
            className="text-lg px-12 py-6 bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-glow"
          >
            Join Fitz Now
          </Button>
        </div>
      </div>

      {/* <AuthModals 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        defaultTab={authModalTab}
      /> */}
    </div>
  );
}
