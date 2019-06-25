export const colors: {
  title: string;
  colors: {
    name: string;
    css: string;
    desc: string;
    d?: React.CSSProperties['backgroundColor'];
  }[];
}[] = [
  // colors by domain,
  {
    title: 'Colors',
    colors: [
      {
        d: '#38b249',
        name: '--green',
        css: '$color-green',
        desc: 'Green color'
      },
      {
        d: '#1665d8',
        name: '--blue',
        css: '$color-blue',
        desc: 'Blue color'
      },
      {
        d: '#6977ff',
        name: '--indigo',
        css: '$color-indigo',
        desc: 'Indigo color'
      },
      {
        d: '#facf55',
        name: '--yellow',
        css: '$color-yellow',
        desc: 'Yellow color'
      },
      {
        d: '#f6ab2f',
        name: '--orange',
        css: '$color-orange',
        desc: 'Orange color'
      },
      {
        d: '#e6492d',
        name: '--red',
        css: '$color-red',
        desc: 'Red color'
      }
    ]
  },
  {
    title: 'Colors by domain',
    colors: [
      {
        d: '#1665d8',
        name: '--primary',
        css: '$color-primary',
        desc: 'Primary (theme) color'
      },
      {
        d: '#38b249',
        name: '--success',
        css: '$color-success',
        desc: 'For displaying positive output or actions'
      },
      {
        d: '#f6ab2f',
        name: '--warning',
        css: '$color-warning',
        desc: 'For displaying negative output or actions'
      },
      {
        d: '#e6492d',
        name: '--danger',
        css: '$color-danger',
        desc: 'Displaying actions with an impact'
      },
      {
        d: '#6977ff',
        name: '--info',
        css: '$color-info',
        desc: 'Informative color'
      }
    ]
  },
  {
    title: 'Backgrounds',
    colors: [
      {
        name: '--bg-base',
        css: '$bg-base',
        desc: 'Base background color for your content.',
        d: '#FFFFFF'
      },
      {
        name: '--bg-main',
        css: '$bg-main',
        d: '#fbfbfd',
        desc:
          'Main background color for your content, which adds higher contrast.'
      },
      {
        name: '--bg-adverse-main',
        d: '#252529',
        css: '$bg-adverse-main',
        desc: 'Adverse color for the main background (e.g. white vs black)'
      }
    ]
  },
  {
    title: 'Text Colors',
    colors: [
      {
        name: '--text-main',
        d: '#3e3f42',
        css: '$text-main',
        desc: 'Main content color for the highest contrast, e.g. headlines.'
      },
      {
        name: '--text-base',
        d: '#6b6c6f',
        css: '$text-base',
        desc: 'Base text color, recommended for paragraphs.'
      },
      {
        name: '--text-secondary',
        d: '#9ea0a5',
        css: '$text-secondary',
        desc:
          'Secondary text color with less contrast, e.g. for less important typographic descriptions.'
      },
      {
        name: '--text-tertiary',
        d: '#cecfd2',
        css: '$text-tertiary',
        desc: 'Tertiary text color, e.g. for labels'
      },
      {
        name: '--text-on-color',
        d: '#FFFFFF',
        css: '$text-on-color',
        desc: 'Color of a text that is used on the colored background.'
      },
      {
        name: '--text-adverse-main',
        d: '#ffffff',
        css: '$text-adverse-main',
        desc: 'Same as text-main but adverse'
      },
      {
        name: '--text-adverse-base',
        d: '#fbfbfd',
        css: '$text-adverse-base',
        desc: 'Same as text-base but adverse'
      }
    ]
  },
  {
    title: 'Borders',
    colors: [
      {
        d: '#eaedf3',
        name: '--border-color-base',
        css: '$border-color-base',
        desc: 'Base border color with regular contrast, e.g. text inputs'
      },
      {
        d: '#d8dce6',
        name: '--border-color-main',
        css: '$border-color-main',
        desc: 'Border color with higher contrast, e.g. for hover state'
      },
      {
        d: '#bdc2d1',
        name: '--border-color-highlight',
        css: '$border-color-highlight',
        desc: 'Border color with highest contrast'
      },
      {
        d: '#2e2e33',
        name: '--border-color-adverse',
        css: '$border-color-adverse',
        desc: ''
      }
    ]
  }
];
