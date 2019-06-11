

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface IEnvironment {
  production: boolean;
  envName: string;
  REMOTE_CONFIG_URL: string;

  // Enables use of ng.profiler.timeChangeDetection(); in browser console
  enableDebugTools?: boolean;
  logLevel?: LogLevel;
  [key: string]: any;
}
