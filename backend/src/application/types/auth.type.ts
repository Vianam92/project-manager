export type SignInInput = {
    email: string;
    password: string;
  };
  
  export type SignInOutput = {
    user_token: string;
    refresh_token: string;
  };
  
  export type SignUpInput = {
    email: string;
    username: string;
    password: string;
    role: "member";
  };
  
  export type SignUpOutput = {
    id: string;
    email: string;
  };