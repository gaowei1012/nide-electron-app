import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Dropdown, Layout, Avatar, Badge } from 'antd'
import { LoginOutlined, MenuFoldOutlined, MessageOutlined, MenuUnfoldOutlined, EditOutlined } from '@ant-design/icons'

const { Header } = Layout

const AppHeader = (props) => {
  let { menuClick, avatar, menuToggle, loginOut, changePassword, apply_for_token } = props
  const menu = (
    <Menu>
      {/* <Menu.ItemGroup title='用户设置'>
                <Menu.Divider />
                <Menu.Item>
                    <Icon type='edit' />
                    个人设置
                </Menu.Item>
                <Menu.Item>
                    <Icon type='setting' theme='filled' />
                    系统设置
                </Menu.Item>
            </Menu.ItemGroup> */}
      {/* <Menu.Divider /> */}
      <Menu.Item>
        <span onClick={changePassword} style={{ display: 'inline-block', width: '100%' }}>
          <EditOutlined /> 修改密码
        </span>
      </Menu.Item>
      <Menu.Item>
        <span style={{ display: 'inline-block', width: '100%' }} onClick={loginOut}>
          <LoginOutlined /> 退出登录
        </span>
      </Menu.Item>
      {/* <Menu.Item>
                <span style={{ display: 'inline-block', width: '100%' }} onClick={apply_for_token}>
                    <AlignCenterOutlined /> 申请token
                </span>
            </Menu.Item> */}
    </Menu>
  )
  return (
    <Header className='header'>
      <div className='left'>
        <div style={{ cursor: 'pointer' }} onClick={menuClick}>
          {menuToggle ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
      </div>
      <div className='right'>
        {/* <div className='mr15'>
                    <a rel='noopener noreferrer' href='https://github.com/ltadpoles/react-admin' target='_blank'>
                        <Icon type='github' style={{ color: '#000' }} />
                    </a>
                </div> */}
        {/* <div className='mr15'>
          <Badge dot={true} offset={[-2, 0]}>
            <a href='javascript:;' style={{ color: '#000' }}>
              <MessageOutlined />
            </a>
          </Badge>
        </div> */}
        <div>
          <Dropdown overlay={menu} overlayStyle={{ width: '20rem' }}>
            <div className='ant-dropdown-link'>
              <Avatar icon='user' src={avatar} alt='avatar' style={{ cursor: 'pointer' }} />
            </div>
          </Dropdown>
        </div>
      </div>
    </Header>
  )
}

AppHeader.propTypes = {
  menuClick: PropTypes.func,
  avatar: PropTypes.string,
  menuToggle: PropTypes.bool,
  loginOut: PropTypes.func
}

export default AppHeader
