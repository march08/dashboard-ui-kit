
import React from 'react'

import {
  Avatar,
} from '@duik/it'


import * as images from 'assets'


import SectionTitle from '../components/TopBar'
import Content from '../components/Content'
import ComponentTitle from '../components/ComponentTitle'
import TopBarTitle from '../components/TopBarTitle'

import cls from './styleguide-buttons.module.scss'

const DocsStyleguideAvatars = () => (
  <React.Fragment>
    <SectionTitle>
      <TopBarTitle
        name="Avatar"
        to="avatar"
      >
        Avatars
      </TopBarTitle>
        04
    </SectionTitle>
    <Content>
      <div className={ cls.groupDivider }>
        <div>
          <ComponentTitle>
            Picture Avatar
          </ComponentTitle>
          <div className={ cls.avatarGroup }>
            <div className={ cls.avatarWrapper }>
              <Avatar
                imgUrl={ images.a11 }
                xxl
              />
              <p>
                100px
              </p>
            </div>
            <div className={ cls.avatarWrapper }>
              <Avatar
                imgUrl={ images.a08 }
                xl
              />
              <p>
                80px
              </p>
            </div>
            <div className={ cls.avatarWrapper }>
              <Avatar
                imgUrl={ images.a15 }
                xl
              />
              <p>
                60px
              </p>
            </div>
            <div className={ cls.avatarWrapper }>
              <Avatar
                imgUrl={ images.a21 }
              />
              <p>
                38px
              </p>
            </div>
            <div className={ cls.avatarWrapper }>
              <Avatar
                imgUrl={ images.a01 }
                sm
              />
              <p>
                28px
              </p>
            </div>
          </div>

        </div>

        {/* placeholders */}
        <div>
          <ComponentTitle>
            Placeholder Avatar
          </ComponentTitle>
          <div className={ cls.avatarGroup }>
            <div className={ cls.avatarWrapper }>
              <Avatar
                avatarPlaceholder={ {
                  content: 'AF',
                  color: 'blue',
                } }
                xxl
              />
              <p>
                100px
              </p>
            </div>
            <div className={ cls.avatarWrapper }>
              <Avatar
                avatarPlaceholder={ {
                  content: 'AF',
                  color: 'orange',
                } }
                xl
              />
              <p>
                80px
              </p>
            </div>
            <div className={ cls.avatarWrapper }>
              <Avatar
                avatarPlaceholder={ {
                  content: 'AF',
                  color: 'green',
                } }
                xl
              />
              <p>
                60px
              </p>
            </div>
            <div className={ cls.avatarWrapper }>
              <Avatar
                avatarPlaceholder={ {
                  content: 'AF',
                  color: 'red',
                } }
              />
              <p>
                38px
              </p>
            </div>
            <div className={ cls.avatarWrapper }>
              <Avatar
                avatarPlaceholder={ {
                  content: 'AF',
                  color: 'indigo',
                } }
                sm
              />
              <p>
                28px
              </p>
            </div>
          </div>

        </div>
      </div>
    </Content>
  </React.Fragment>
)


export default DocsStyleguideAvatars
