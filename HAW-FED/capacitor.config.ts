import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hawhaw.dev',
  appName: 'haw-fed',
  webDir: 'dist/haw-fed',
  server: {
    androidScheme: 'https'
  }
};

export default config;
