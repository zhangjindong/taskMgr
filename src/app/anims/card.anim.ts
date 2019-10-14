import {
  trigger,
  transition,
  state,
  style,
  animate,
  keyframes
} from '@angular/animations';

export const cardAnim = trigger('card', [
  state('out', style({ transform: 'scale(1)', boxShadow: 'none' })),
  state(
    'hover',
    style({
      transform: 'scale(1.05)',
      boxShadow: '0px 0px 5px 3px #ccc'
    })
  ),
  transition('out => hover', animate('100ms ease-in')),
  transition('hover => out', animate('100ms ease-out'))
]);

// animations: [
// angular中的动画其实就是把style 中的样式应用到dom元素，
// 只不过在不同的状态下，要把不同的样式应用上去。
// transition是状态改变动画过度的时间
// animate 参数为数字就是动画过度的时间，
//      如果是字符串， 前面的是过度时间，后面的是延迟时间
//      他后面还可以加入缓动函数
/*  trigger('square', [
      state(
        'green',
        style({
          'background-color': 'green',
          height: '50px',
          transform: 'translateX(0)'
        })
      ),
      state(
        'red',
        style({
          'background-color': 'red',
          height: '100px',
          transform: 'translateX(100%)'
        })
      ),
      transition('green => red', animate('.2s 1s')),
      transition('red => green', animate(500))
    ]) */
/* 
    // 缓动函数
    trigger('square', [
      state(
        'green',
        style({
          'background-color': 'green',
          height: '100px',
          transform: 'translateX(-100%)'
        })
      ),
      state(
        'red',
        style({
          'background-color': 'red',
          height: '100px',
          transform: 'translateX(100%)'
        })
      ),
      transition('green => red', animate('.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)')),
      transition('red => green', animate('.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)'))
    ]) */
/* 
    // 关键帧
    trigger('square', [
      state(
        'green',
        style({
          'background-color': 'green',
          height: '100px',
          transform: 'translateX(-100%)'
        })
      ),
      state(
        'red',
        style({
          'background-color': 'red',
          height: '100px',
          transform: 'translateX(100%)'
        })
      ),
      transition(
        'green => red',
        animate(
          1000,
          keyframes([
            style({ transform: 'translateX(-100%)' }),
            style({ transform: 'translateX(-98.46%)' }),
            style({ transform: 'translateX(-99.34%)' }),
            style({ transform: 'translateX(-93.75%)' }),
            style({ transform: 'translateX(-98.37%)' }),
            style({ transform: 'translateX(-75.02%)' }),
            style({ transform: 'translateX(-98.01%)' }),
            style({ transform: 'translateX(-43.56%)' }),
            style({ transform: 'translateX(-10.89%)' }),
            style({ transform: 'translateX(0%)' })
          ])
        )
      ),
      transition(
        'red => green',
        animate(
          1000,
          keyframes([
            style({ transform: 'translateX(0%)' }),
            style({ transform: 'translateX(-10.89%)' }),
            style({ transform: 'translateX(-43.56%)' }),
            style({ transform: 'translateX(-98.01%)' }),
            style({ transform: 'translateX(-75.02%)' }),
            style({ transform: 'translateX(-98.37%)' }),
            style({ transform: 'translateX(-93.75%)' }),
            style({ transform: 'translateX(-99.34%)' }),
            style({ transform: 'translateX(-98.46%)' }),
            style({ transform: 'translateX(-100%)' })
          ])
        )
      )
    ]) */
// ]
