/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ENV: "DEV" | "STAGING" | "PROD";
  readonly VITE_APP_API_URL: string;
  readonly VITE_APP_SECRET_PASSPHRASE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}
