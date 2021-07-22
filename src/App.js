import { Menu } from 'antd';
import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import './assets/homePage.css'
import Blog from './components/Blog/Blog';
import HomePage from './components/Home Page';



function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            {new Array(5).fill(null).map((_, index) => {
              const key = index + 1;
              return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
            })}
          </Menu>
        </Header>
            <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/blog-post" component={Blog} />
          </Switch>

        <Footer style={{ textAlign: "center" }}>
          {" "}
          My Blog ©2021 created by SKR{" "}
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
