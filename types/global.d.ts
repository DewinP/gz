export {};

declare global {
  interface CustomJwtSessionClaims {
    email: string;
    full_name: string;
    metadata: {
      isAdmin: boolean;
    };
  }
}
