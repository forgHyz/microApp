import styles from './index.css';
import { Layout, Menu } from 'antd';
import { Link } from 'umi';
const { Header, Content, Footer } = Layout;
 const menuData = [
  { route: '/', name: '主应用' },
  { route: '/home', name: 'HOME' },
  { route: '/umiWork', name: 'react应用' },
  { route: '/vueWork', name: 'vue应用' },
];

function BasicLayout(props) {
  const {
    location: { pathname },
    children,
  } = props;
  console.log(props)

  return (
    <Layout>
      <Header>
        <div className={styles.logo}>qiankun微前端 </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[pathname]}
          style={{ lineHeight: '64px' }}
        >
          {menuData.map(menu => (
            <Menu.Item key={`/${menu.route}`}>
              <Link to={menu.route}>{menu.name}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Umi - qiankun微前端</Footer>
    </Layout>
  );
}

export default BasicLayout;