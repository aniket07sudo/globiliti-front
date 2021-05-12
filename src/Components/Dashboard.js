import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, Route,Redirect,withRouter } from 'react-router-dom';
import {  connect} from 'react-redux';
import Oval from '../Assets/Oval.png';
import {ReactComponent as Logout } from '../Assets/logout.svg';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import {ReactComponent as Logo} from '../Assets/Logo.svg';
import {ReactComponent as CirPlus} from '../Assets/circleplus.svg';
import Image1 from '../Assets/image1.jpeg';
import ProtectedRoute from './ProtectedRoute';
import { authLogout} from '../Store/Action/auth';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import Home from './Home';
import Impact from './Impact';

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    current:'app'
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  logout = () => {
    this.props.Logout();
    console.log(this.props);
    this.props.history.push("/login");
    
  }

  render() {
    return (
        
      <Layout >        
        <Sider width="15rem" style={{
        overflow: 'auto',
        height: '100vh',
        position: 'relative',
        left: 0,
      }}
       trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" style={{justifyContent:this.state.collapsed ? 'center' : ''}}>
            {!this.state.collapsed && <Logo />}
            
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}

          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              Home<Link to="/home" />
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              My Pilots<Link to="/inbox" />
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              Inbox
            </Menu.Item>
          </Menu>
          <div className="divider"></div>
          <div className="team-members-container">
            <div className="team-members" style={{justifyContent:this.state.collapsed ? 'center' : ''}}>
                {!this.state.collapsed && <span>Add Team Members</span>}
                <CirPlus />
            </div>
            <div className="members" style={{justifyContent:this.state.collapsed ? 'center' : ''}}>
            {!this.state.collapsed ? (
                    <>
                    <img src={Oval} className="member_img" />
                <div className="member-body">
                    <span>Chen Ying</span>
                    <div>Counselor</div>
                </div>
                </>
                
                ) : 
                <img src={Oval} className="member_img" />
                }
            </div>
            <div className="members" style={{justifyContent:this.state.collapsed ? 'center' : ''}}>
            {!this.state.collapsed ? (
                    <>
                    <img src={Oval} className="member_img" />
                <div className="member-body">
                    <span>Chen Ying</span>
                    <div>Counselor</div>
                </div>
                </>
                
                ) : 
                <img src={Oval} className="member_img" />
                }
            </div>
            <div className="members" style={{justifyContent:this.state.collapsed ? 'center' : ''}}>
            {!this.state.collapsed ? (
                    <>
                    <img src={Oval} className="member_img" />
                <div className="member-body">
                    <span>Chen Ying</span>
                    <div>Counselor</div>
                </div>
                </>
                
                ) : 
                <img src={Oval} className="member_img" />
                }
            </div>
            <div className="members" style={{justifyContent:this.state.collapsed ? 'center' : ''}}>
                {!this.state.collapsed ? (
                    <>
                    <img src={Oval} className="member_img" />
                <div className="member-body">
                    <span>Chen Ying</span>
                    <div>Counselor</div>
                </div>
                </>
                
                ) : 
                <img src={Oval} className="member_img" />
                }
                
            </div>
            </div> 
        </Sider>

        
        <Layout className="site-layout" style={{position:'relative',top:'0',width:'100%'}}>
          <Header className="site-layout-background" style={{ padding: 0 ,marginBottom:'1.4rem'}}>
            {/* {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })} */}
            <div className="nav">
            <div className="nav_container">
            <div className="nav_image">
            <img src={Image1} />
            </div>
                <div className="nav_menu">
                    <div className="nav_menu-title">
                        Shenzhen Houde Academy 
                    </div>
                    
                </div>
                <div className="logout" onClick={this.logout}>
                <Logout />
            </div>
            </div>
            <div className="nav_menu-main">
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="mail"  icon={<MailOutlined />}>
          DISCOVER<Link to="/" />
        </Menu.Item>
        <Menu.Item key="app" icon={<AppstoreOutlined />}>
          IMPACT BOARD<Link to="/impact" />
        </Menu.Item>
        <Menu.Item key="pods" icon={<AppstoreOutlined />}>
          LEARNING PODS<Link to="/" />
        </Menu.Item>
        </Menu>
                    </div>
            </div>
          </Header>
          
          <Content
            className="site-layout-background"
            style={{
            //   margin: '24px 16px',
            overflow:'scroll',
              padding: 24,
              minHeight: 280,
              backgroundColor:'#ECECEC'
            }}
          >
            <ProtectedRoute path="/home" component={Home} exact />
            <ProtectedRoute path="/" component={Impact} exact />
            {/* <Route path="/impact" component={Impact} exact /> */}
            <ProtectedRoute path="/inbox" component={Impact} exact />
            <ProtectedRoute path="/impact" component={Impact} exact />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    Logout:() => dispatch(authLogout())
  }
}

export default connect(null,mapDispatchToProps)(withRouter(SiderDemo));