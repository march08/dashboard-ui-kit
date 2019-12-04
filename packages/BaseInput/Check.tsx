import * as React from 'react';

import cls from './styles.scss';

/* eslint-disable max-len */
export const CheckboxIcon = () => (
  <svg
    className={cls['form-check-icon']}
    height="6px"
    version="1.1"
    viewBox="0 0 8 6"
    width="8px"
  >
    <defs />
    <g
      fill="none"
      fillRule="evenodd"
      id="Symbols"
      stroke="none"
      strokeWidth="1"
    >
      <g
        fill="#FFFFFF"
        id="Checkbox/Checked/Default"
        transform="translate(-4.000000, -5.000000)"
      >
        <g id="Checkbox/Checked">
          <path
            d="M6.65183265,10.8942434 L4.10636422,8.33133321 C3.96454526,8.1903244 3.96454526,7.96081005 4.10636422,7.81830114 L4.62054884,7.30601913 C4.76236779,7.16501031 4.99291451,7.16501031 5.13473346,7.30601913 L6.9092886,9.10013126 L10.8649465,5.10613163 C11.0067655,4.96512282 11.2373122,4.96512282 11.3791312,5.10613163 L11.8933158,5.6191637 C12.0351347,5.76017251 12.0351347,5.9904369 11.8933158,6.13069567 L7.16601727,10.8942434 C7.02419831,11.0352522 6.7936516,11.0352522 6.65183265,10.8942434"
            id="Check"
          />
        </g>
      </g>
    </g>
  </svg>
);

CheckboxIcon.displayName = 'CheckboxIcon';
