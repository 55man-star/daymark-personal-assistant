import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.daymark.personalassistant',
  appName: 'Daymark',
  webDir: '.',
  bundledWebRuntime: false,
  plugins: {
    LocalNotifications: {
      smallIcon: 'ic_stat_daymark'
    }
  }
};

export default config;
