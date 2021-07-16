import React from 'react'
import ReactDOM from 'react-dom'
import zh_CN from 'antd/lib/locale/zh_CN'
import reportWebVitals from './reportWebVitals'
import { ConfigProvider } from 'antd'
import App from './App'
import '@/style/base.scss'

ReactDOM.render(
  <ConfigProvider locale={zh_CN}>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
