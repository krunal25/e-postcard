import { Response } from 'express';

enum StatusCode {
    SUCCESS = '200',
    FAILURE = '404',
    INTERNAL_ERROR = '500',
    FORBIDDEN = '403',
    RETRY = '10002',
    INVALID_ACCESS_TOKEN = '10003',
  }

  enum ResponseStatus {
    SUCCESS = 200,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500,
  }

  abstract class ApiResponse {
    constructor(
      protected statusCode: StatusCode,
      protected status?: ResponseStatus,
      protected message?: string,
    ) {}
  
    protected prepare<T extends ApiResponse>(res: Response, response: T): Response {
      return res.status(this.status || 500).json(response);
    }
  
    public send(res: Response): Response {
      return this.prepare<ApiResponse>(res, this);
    }
  
  }
  export class SuccessResponse<T> extends ApiResponse {
    constructor(message: string, private data: T) {
      super(StatusCode.SUCCESS, ResponseStatus.SUCCESS, message);
    }
  
    send(res: Response): Response {
      return super.prepare<SuccessResponse<T>>(res, this);
    }
}