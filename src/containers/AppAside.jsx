import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import CustomMenu from '@/components/CustomMenu'
import logo from '@/assets/images/logo.png'

const { Sider } = Layout

const AppAside = (props) => {
  let { menuToggle, menu, navigation } = props
  const [title, setTitle] = useState('')
  useEffect(() => {
    // let title = localStorage.getItem('app_name')
    setTitle('投标数据分析')
  }, [])
  const goBackHome = () => {
    navigation.history.push('/home')
  }
  return (
    <Sider className='aside' collapsed={menuToggle}>
      <div className='logo'>
        <img className='img' onClick={goBackHome} src={logo} alt='启文达' />
        {title}
      </div>
      <CustomMenu menuToggle={menuToggle} menu={menu} />
    </Sider>
  )
}

AppAside.propTypes = {
  menuToggle: PropTypes.bool,
  menu: PropTypes.array.isRequired
}

export default AppAside
