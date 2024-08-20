// env.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
      MAILGUN_KEY: string;
      MAILGUN_DOMAIN: string;
      // Add other environment variables as needed
    }
  }
  