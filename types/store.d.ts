export type AuthStore = {
  token?: string;
  user?: any;
  
  SET_USER: (user: any) => void;
  SET_TOKEN: (token: string) => void;
  GET_USER: () => any;
  GET_TOKEN: () => string | undefined;
  IS_AUTHENTICATED: () => boolean;
  CLEAR_AUTH: () => void;
};