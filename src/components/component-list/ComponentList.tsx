import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, List } from 'antd';

const data = ['Home', 'Games', 'Github', 'StarMatch', 'GenericForm', 'NavBar'];

export function ComponentList() {
    return (
        <nav>
            <Divider orientation="left">Components List</Divider>
            <List
                size="large"
                bordered
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Link to={`/${item}`}>{item}</Link>
                    </List.Item>
                )}
            />
        </nav>
    );
}
