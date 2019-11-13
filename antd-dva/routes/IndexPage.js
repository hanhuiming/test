import React from 'react';

// import { connect } from 'dva';
import { Layout,Breadcrumb} from 'antd';
// import styles from './IndexPage.css';
const { Header, Content, Sider } = Layout;
class IndexPage extends React.Component{
  render(){
    console.log('this.router...', this.props);
    return (
      // 先上下布局
      <Layout>
        <Header className="header">
          头部
        </Header>
        {/* 再左右布局 */}
      <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            侧边栏
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            < Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
           </Content>
          </Layout>
        </Layout>
      </Layout>
    )
    }
  }
export default IndexPage;
