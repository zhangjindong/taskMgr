import {
  trigger,
  transition,
  state,
  style,
  animate,
  keyframes
} from '@angular/animations';

export const itemAnim = trigger('item', [
  state('in', style({ borderLeftWidth: '3px' })),
  state('out', style({ borderLeftWidth: '8px' })),
  transition('in => out', animate('100ms ease-in')),
  transition('out => in', animate('100ms ease-out'))
]);
