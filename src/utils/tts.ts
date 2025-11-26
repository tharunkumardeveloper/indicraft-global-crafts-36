// Text-to-Speech utility using Web Speech API
class TTSManager {
  private synth: SpeechSynthesis;
  private voice: SpeechSynthesisVoice | null = null;
  private isSpeaking: boolean = false;
  private queue: string[] = [];

  constructor() {
    this.synth = window.speechSynthesis;
    this.initVoice();
  }

  private initVoice() {
    const setVoice = () => {
      const voices = this.synth.getVoices();
      
      // Prefer Microsoft Edge voices (natural sounding)
      const preferredVoices = [
        'Microsoft Zira - English (United States)',
        'Microsoft Aria Online (Natural) - English (United States)',
        'Google US English Female',
        'en-US-AriaNeural',
        'en-IN-NeerjaNeural', // Indian English female
      ];

      for (const preferred of preferredVoices) {
        const found = voices.find(v => v.name.includes(preferred) || v.name === preferred);
        if (found) {
          this.voice = found;
          console.log('Selected TTS voice:', found.name);
          return;
        }
      }

      // Fallback to any English female voice
      this.voice = voices.find(v => 
        v.lang.startsWith('en') && v.name.toLowerCase().includes('female')
      ) || voices.find(v => v.lang.startsWith('en')) || voices[0];
      
      if (this.voice) {
        console.log('Fallback TTS voice:', this.voice.name);
      }
    };

    if (this.synth.getVoices().length > 0) {
      setVoice();
    } else {
      this.synth.addEventListener('voiceschanged', setVoice);
    }
  }

  speak(text: string, rate: number = 1.3) {
    if (!text.trim()) return;

    // Cancel any ongoing speech
    this.synth.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    if (this.voice) {
      utterance.voice = this.voice;
    }
    
    utterance.rate = rate; // 1.3 = slightly faster than normal (1.0)
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
    utterance.lang = 'en-US';

    utterance.onstart = () => {
      this.isSpeaking = true;
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      this.processQueue();
    };

    utterance.onerror = (event) => {
      console.error('TTS Error:', event);
      this.isSpeaking = false;
      this.processQueue();
    };

    this.synth.speak(utterance);
  }

  speakStreaming(text: string, rate: number = 1.3) {
    // For streaming responses, speak sentence by sentence
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    
    sentences.forEach(sentence => {
      if (sentence.trim().length > 3) {
        this.queue.push(sentence.trim());
      }
    });

    if (!this.isSpeaking) {
      this.processQueue();
    }
  }

  private processQueue() {
    if (this.queue.length > 0 && !this.isSpeaking) {
      const nextText = this.queue.shift();
      if (nextText) {
        this.speak(nextText);
      }
    }
  }

  stop() {
    this.synth.cancel();
    this.queue = [];
    this.isSpeaking = false;
  }

  pause() {
    this.synth.pause();
  }

  resume() {
    this.synth.resume();
  }

  getAvailableVoices(): SpeechSynthesisVoice[] {
    return this.synth.getVoices();
  }
}

export const ttsManager = new TTSManager();
