export interface SignupRequestType {
  email: string;
  password: string;
  nickname: string;
  age: number | undefined;
}

export interface LoginRequestType {
  email: string;
  password: string;
}

export interface LoginResponseType {
  accessToken: string;
}
