import React, { useState } from 'react';
import { TabBar } from 'antd-mobile';

export const MenuBar = () => {
    const [selectedTab, setTab] = useState('redTab');
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
                    title="Life"
                    key="Life"
                    icon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                    }}
                    />
                    }
                    selectedIcon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                    }}
                    />
                    }
                    selected={selectedTab === 'blueTab'}
                    badge={1}
                    onPress={() => {
                        setTab('blueTab');
                    }}
                    data-seed="logId"
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                    }
                    selectedIcon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                    }
                    title="Friend"
                    key="Friend"
                    dot
                    selected={selectedTab === 'greenTab'}
                    onPress={() => {
                        setTab('greenTab');
                    }}
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                    selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                    title="My"
                    key="my"
                    selected={selectedTab === 'yellowTab'}
                    onPress={() => {
                        setTab('yellowTab');
                    }}
                >
                    {/* {this.renderContent('My')} */}
                </TabBar.Item>
            </TabBar>
        </>
    );
}

