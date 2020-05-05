import React from 'react';

/* eslint-disable max-len */
import { Divider } from '@duik/it';

import SectionTitle from '../components/TopBar';
import Content from '../components/Content';
import TopBarTitle from '../components/TopBarTitle';
import ComponentTitle from '../components/ComponentTitle';

import cls from './styleguide-typography.module.scss';

const DocsStyleguideTypography = () => (
  <React.Fragment>
    <SectionTitle>
      <TopBarTitle>{'Typography'}</TopBarTitle>
      02
    </SectionTitle>
    <Content>
      <div className={cls.grid}>
        <div className={cls.titleWrapper}>
          <ComponentTitle>Font</ComponentTitle>
          <div className={cls.titleBig}>Roboto</div>
        </div>
        <div className={cls.titleWrapper}>
          <ComponentTitle>Font Weight</ComponentTitle>
          <div>
            <div
              className={cls.titleSmall}
              style={{
                fontWeight: 500,
              }}
            >
              Medium
            </div>
            <div className={cls.titleSmall}>Regular</div>
            <div
              className={cls.titleSmall}
              style={{
                fontWeight: 300,
              }}
            >
              Light
            </div>
          </div>
        </div>
      </div>
      <Divider margin />
      <ComponentTitle>Pre-defined sizes</ComponentTitle>
      <div className={cls.gridSizes}>
        {[36, 30, 26, 22, 20, 18, 16, 14, 12].map((size) => (
          <div key={size} className={cls.sizeWrapper}>
            <div
              className={cls.sizeDisplay}
              style={{
                fontSize: `${size}px`,
              }}
            >
              Aa
            </div>
            <div className={cls.size}>{`${size}PX`}</div>
          </div>
        ))}
      </div>
      <Divider margin />
      <ComponentTitle>Pre-defined sizes</ComponentTitle>
      <div className={cls.gridExamples}>
        <div className={cls.example1}>
          <h2>Citrus Lentil Salad</h2>
          <p>
            “Rinse the lentils under cold running water in a fine-mesh sieve
            until the water runs clear. Place the lentils in a medium saucepan
            and add enough cold water to cover by 3 inches (7.6 centimeters).
            Bring to a boil, then reduce the heat to medium-low, cover, and
            simmer for 20 to 30 minutes or until the lentils are tender.”
          </p>
        </div>
        <div className={cls.example2}>
          <h2>Barbecued Shrimp</h2>
          <p>
            “Rinse the shrimp and pat them dry with paper towels. Arrange them
            in a single layer in a 13-by-9-inch (33-by-23-centimeter) baking
            dish.
          </p>
          <p>
            Excerpt From: Williams, Nathan. “Kinfolk Table : Recipes for Small
            Gatherings (9781579655877).” iBooks.
          </p>
        </div>
        <div className={cls.example3}>
          <span>For the Hash</span>
          <h2>“Sweet Potato Hash with Sausage and Egg”</h2>
          <p>
            “This dish is a complete meal. But if you are looking for something
            a little lighter, the hash and poached egg can stand on their own
            without the sausage, and that way it’s vegetarian, too.
          </p>
        </div>
      </div>
    </Content>
  </React.Fragment>
);

export default DocsStyleguideTypography;
