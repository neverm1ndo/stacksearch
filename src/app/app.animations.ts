import { trigger, animate, transition, style, query, state, keyframes, stagger } from '@angular/animations';
import { group } from '@angular/animations';

export const fade = trigger('fade', [
  transition('* => *', [
    query(
      ':enter',
      [style({ opacity: 0, transform: 'scale(0.98)' })],
      { optional: true }
    ),
    query(
      ':leave',
      [style({ opacity: 1 }), animate('0.35s', style({ opacity: 0, transform: 'scale(0.98)' }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0 }), animate('0.35s', style({ opacity: 1, transform: 'scale(1)' }))],
      { optional: true }
    )
  ])
]);
export const rollLeft = trigger('rollLeft', [
  state('*', style({transform: 'translateX(0%)'})),
  state('void', style({
    transform: 'translateX(-100%)'
  })),
      transition('void => *', [
        style({
          transform: 'translateX(-100%)'
        }),
        animate('0.23s cubic-bezier(0.4, 0.0, 0.2, 1)',
        keyframes([
          style({transform: 'translateX(-100%)'}),
          style({transform: 'translateX(0%)'})
        ]))
      ]),
      transition('* => void', [
        style({
          transform: 'translateX(0%)'
        }),
        animate('0.23s cubic-bezier(0.4, 0.0, 0.2, 1)',
        keyframes([
          style({transform: 'translateX(0%)'}),
          style({transform: 'translateX(-100%)'})
        ]))
      ])
  ]);
export const rollRight = trigger('rollRight', [
  state('*', style({transform: 'translateX(0%)'})),
  state('void', style({
    transform: 'translateX(100%)',
  })),
      transition('void => *', [
        style({
          transform: 'translateX(100%)'
        }),
        animate('0.23s cubic-bezier(0.4, 0.0, 0.2, 1)',
        keyframes([
          style({transform: 'translateX(100%)'}),
          style({transform: 'translateX(0%)'})
        ]))
      ]),
      transition('* => void', [
        style({
          transform: 'translateX(0%)',
        }),
        animate('0.23s cubic-bezier(0.4, 0.0, 0.2, 1)',
        keyframes([
          style({transform: 'translateX(0%)'}),
          style({transform: 'translateX(100%)'})
        ]))
      ])
  ]);
  export const alert = trigger('alert', [
    state('*', style({opacity: '1', height: '15px'})),
    state('void', style({
      opacity: '0', height: '0px'
    })),
        transition('void => *', [
          style({
           opacity: '0', height: '0px'
          }),
          animate('0.23s cubic-bezier(0.4, 0.0, 0.2, 1)',
          keyframes([
            style({opacity: '0', height: '0px'}),
            style({ opacity: '1', height: '15px'})
          ]))
        ]),
        transition('* => void', [
          style({
            opacity: '1', height: '15px'
          }),
          animate('0.23s cubic-bezier(0.4, 0.0, 0.2, 1)',
          keyframes([
            style({opacity: '1', height: '15px'}),
            style({opacity: '0', height: '0px'})
          ]))
        ])
    ]);
    export const research = trigger('research', [
      state('*', style({opacity: '1'})),
      state('void', style({
        opacity: '0'
      })),
          transition('void => *', [
            style({
             opacity: '0'
            }),
            animate('0s cubic-bezier(0.4, 0.0, 0.2, 1)',
            keyframes([
              style({opacity: '0'}),
              style({ opacity: '1'})
            ]))
          ]),
          transition('* => void', [
            style({
              opacity: '1'
            }),
            animate('0.25s cubic-bezier(0.4, 0.0, 0.2, 1)',
            keyframes([
              style({opacity: '1'}),
              style({opacity: '0'})
            ]))
          ])
      ]);
      export const quickview = trigger('quickview', [
        state('*', style({opacity: '1', transform: 'translateX(0)'})),
        state('void', style({
          opacity: '0', transform: 'translateX(100%)'
        })),
            transition('void => *', [
              style({
               opacity: '0', transform: 'translateX(100%)'
              }),
              animate('0.15s cubic-bezier(0.4, 0.0, 0.2, 1)',
              keyframes([
                style({opacity: '0', transform: 'translateX(100%)'}),
                style({ opacity: '1', transform: 'translateX(0)'})
              ]))
            ]),
            transition('* => void', [
              style({
                opacity: '1', transform: 'translateX(0)'
              }),
              animate('0.15s cubic-bezier(0.4, 0.0, 0.2, 1)',
              keyframes([
                style({opacity: '1', transform: 'translateX(0)'}),
                style({opacity: '0', transform: 'translateX(100%)'})
              ]))
            ])
        ]);
export const arr = trigger('array', [
        transition('* => *', [
          query(':enter', style({ opacity: 0 }), {optional: true}),
          query(':enter', stagger('300ms', [
            animate('1s ease-in', keyframes([
              style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
              style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
            ]))]), {optional: true})
        ])
      ])
