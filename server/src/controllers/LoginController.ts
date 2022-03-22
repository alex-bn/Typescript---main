import { NextFunction, Request, Response } from 'express';
import { get, post } from './decorators/routes';
import { controller } from './decorators/controller';
import { use } from './decorators';
import { bodyValidator } from './decorators';
// import { get, controller } from './decorators'; // we can also use the condensed version of import using the index file..

// test use
// function logger(req: Request, res: Response, next: NextFunction) {
//   console.log('request was made');
//   next();
// }

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

@controller('/auth')
class LoginController {
  // @get('/')
  // add(a: number, b: number): number {
  //   return a + b;
  // } // due to RouteHandlerDescriptor will now show an error

  @get('/login')
  // @use(logger)
  getLogin(req: Request, res: Response) {
    res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
  `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: RequestWithBody, res: Response) {
    const { email, password } = req.body;

    if (email && password && email === 'a@a.com' && password === 'pass') {
      req.session = { loggedIn: true };

      res.redirect('/');
    } else {
      res.send('Invalid email or password');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}
