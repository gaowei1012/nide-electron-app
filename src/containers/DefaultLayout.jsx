import React, { useState, useReducer } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { Layout, BackTop } from 'antd'
import avatar from '@/assets/images/user.jpg'
import routes from '@/routes'
import menus from './menu'
import _ from 'lodash'

import '@/style/layout.scss'

import AppHeader from './AppHeader.jsx'
import AppAside from './AppAside.jsx'
import AppFooter from './AppFooter.jsx'

const { Content } = Layout

const MENU_TOGGLE = 'menuToggle'

const reducer = (state, action) => {
  switch (action.type) {
    case MENU_TOGGLE:
      return { ...state, menuToggle: !state.menuToggle }
    default:
      return state
  }
}

let filterMenu = (menu, auth) => {
  let newmenu = []
  _.each(menu, (menu_item) => {
    if (_.includes(menu_item.auth, auth)) {
      if (menu_item.subs) {
        menu_item.subs = filterMenu(menu_item.subs, auth)
      }
      newmenu.push(menu_item)
    }
  })
  return newmenu
}

const getMenu = (menu) => {
  const sys_role_id = 1
  // 当auth存在时
  if (!sys_role_id) {
    return menu
  } else {
    return filterMenu(menu, sys_role_id)
  }
}

const DefaultLayout = (props) => {
  const sys_org_data = {}
  const [menu] = useState((prevState) => {
    if (sys_org_data == null) {
      props.history.push('/login')
      return []
    } else {
      return getMenu(menus)
    }
  })

  const [state, dispatch] = useReducer(reducer, { menuToggle: false })

  const menuClick = () => {
    dispatch({ type: 'menuToggle' })
  }

  const loginOut = () => {
    localStorage.clear()
    props.history.push('/login')
    // message.success('登出成功!')
    window.location.reload()
  }

  // 个人中心
  const userCenter = () => {
    props.history.push('/usercenter')
  }

  // 修改密码
  const changePassword = () => {
    props.history.push('/changepass')
  }

  return (
    <Layout className='app'>
      <BackTop />
      <AppAside menuToggle={state.menuToggle} menu={menu} navigation={props} />
      <Layout
        style={{
          marginLeft: state.menuToggle ? '80px' : '200px',
          minHeight: '100vh'
        }}>
        <AppHeader menuToggle={state.menuToggle} menuClick={menuClick} avatar={avatar} loginOut={loginOut} userCenter={userCenter} changePassword={changePassword} />
        <Content className='content'>
          <Switch>
            {routes.map((item) => {
              return <Route key={item.path} path={item.path} exact={item.exact} render={(props) => <item.component {...props} />} />
            })}
            <Redirect to='/home' />
          </Switch>
        </Content>
        <AppFooter />
      </Layout>
    </Layout>
  )
}

export default withRouter(DefaultLayout)
