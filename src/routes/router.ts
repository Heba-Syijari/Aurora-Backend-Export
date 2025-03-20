import {
  Router as ExpressRouter,
  NextFunction,
  Request,
  Response,
} from "express";

export type RouterHandler = (
  request: Request,
  response: Response,
  next: NextFunction
) => void;

export class Router {
  private router: ExpressRouter;

  constructor() {
    this.router = ExpressRouter();
  }

  get instance(): ExpressRouter {
    return this.router;
  }

  get(path: string, ...handlers: RouterHandler[]) {
    this.router.get(path, ...handlers);
  }

  post(path: string, ...handlers: RouterHandler[]) {
    this.router.post(path, ...handlers);
  }
  
}
