export type ApiResponse = Record<string, any>;

export enum ApiActionTypes {
  REQUEST = 'api/REQUEST',
  SUCCESS = 'api/SUCCESS',
  ERROR = 'api/ERROR'
}

export interface ApiState {
  readonly loading: boolean,
  readonly errors?: string
}
