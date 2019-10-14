import {
  trigger,
  transition,
  state,
  style,
  animate,
  keyframes,
  group,
  stagger,
  query
} from '@angular/animations';
// stagger 的作用是 如果query到多个元素 ，将顺序分别动画，而不是一起动画
export const listAnimation = trigger('listAnim', [
  transition('* => *', [
    query(':enter', style({ opacity: 0 }), { optional: true }),
    query(':enter', stagger(100, [animate('1s', style({ opacity: 1 }))]), {
      optional: true
    }),
    query(':leave', style({ opacity: 1 }), { optional: true }),
    query(':leave', stagger(200, [animate('1s', style({ opacity: 0 }))]), {
      optional: true
    })
  ])
]);
