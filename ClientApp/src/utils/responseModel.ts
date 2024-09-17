export interface ResponseModel {
    hasError: boolean;
    data: any;
    error: ErrorModel;
  }
  export interface ErrorModel {
    errorType: string;
    errors: ErrorDetail[];
  }

export interface ErrorDetail {
    name: string,
    messages: string[]
}