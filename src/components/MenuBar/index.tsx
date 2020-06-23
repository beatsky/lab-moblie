import React, { useState } from 'react';
import { history } from 'umi';
import { TabBar } from 'antd-mobile';
import '@/assets/font/iconfont.css';

const routerJump = (path: string) => {
    history.push(path)
}

export const MenuBar = () => {
    const [selectedTab, setTab] = useState('blueTab');
    const [hidden, setHidden] = useState(false);

    return (
        <>
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={hidden}
            >
                <TabBar.Item
                    title="Menu"
                    key="Menu"
                    icon={<i className="iconfont icon-mulu"></i>}
                    selectedIcon={<i className="iconfont icon-mulu"></i>}
                    selected={selectedTab === 'blueTab'}
                    onPress={() => {
                        setTab('blueTab');
                        routerJump('/');
                    }}
                    data-seed="logId"
                >
                </TabBar.Item>
                <TabBar.Item
                    title="Mine"
                    key="my"
                    icon={<i className="iconfont icon-icon_principal"></i>}
                    selectedIcon={<i className="iconfont icon-icon_principal"></i>}
                    selected={selectedTab === 'yellowTab'}
                    onPress={() => {
                        setTab('yellowTab');
                        routerJump('/mine');
                    }}
                >
                </TabBar.Item>
            </TabBar>
        </>
    );
}

