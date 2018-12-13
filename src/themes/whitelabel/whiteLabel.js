import base from '../base';

const whiteLabel = {
  ...base,
  colorAccent: '#fff',
  colorDefault: '#000',
  fontSize: 14,

  paddings: {
    none: 0,
    small: '12px',
    normal: '24px',
    bigger: '36px',
    large: '48px',
    huge: '60px',
  },

  breakpoints: {
    desktop: { maxScreenWidth: '100000px', fontSize: '24px' },
    tabletLarge: { maxScreenWidth: '972px', fontSize: '24px' },
    tabletSmall: { maxScreenWidth: '684px', fontSize: '24px' },
    mobileLarge: { maxScreenWidth: '491px', fontSize: '24px' },
    mobileMedium: { maxScreenWidth: '444px', fontSize: '24px' },
    mobileSmall: { maxScreenWidth: '300px', fontSize: '24px' },
    mobileLargeLandscape: { maxScreenWidth: '736px', maxScreenHeight: '414px' }
  },
};

export default whiteLabel;
