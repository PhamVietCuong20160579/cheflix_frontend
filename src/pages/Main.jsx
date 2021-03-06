import React from 'react';
import { Layout, Menu } from 'antd';

import { Header, Sidebar } from '../components';
import { Route, Switch, Redirect } from 'react-router-dom';

import Profile from './Profile';

const { Content } = Layout;

function Main() {
    return (
        <div>
            <Layout>
                <Header />
                <Layout>
                    <Sidebar />
                    <Content style={{ marginLeft: 200, marginTop: 64, minHeight: '100vh' }}>
                        <Switch>
                            <Route path={"/home"}>
                                Home
                            </Route>
                            <Route path="/enrolled">
                                Enrolled
                            </Route>
                            <Route path="/opened">
                                Opened
                            </Route>
                            <Route path="/profile">
                                <Profile />
                            </Route>
                            <Route exact path="/">
                                <Redirect to="/home" />
                            </Route>
                            <Route>
                                404
                            </Route>
                        </Switch>
                    </Content>
                </Layout>
                </Layout>
        </div>
    );
}

export default Main;
