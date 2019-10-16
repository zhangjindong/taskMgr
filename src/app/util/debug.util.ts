import { MonoTypeOperatorFunction } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

// 区别于生产环境 、开发环境的debug
export function debug<T>(message: string): MonoTypeOperatorFunction<T> {
  return tap(
    next => {
      if (!environment.production) {
        console.log(message, next);
      }
    },
    err => {
      if (!environment.production) {
        console.error('ERROR >> ', message, err);
      }
    },
    () => {
      if (!environment.production) {
        console.log('Completed - ');
      }
    }
  );
}
