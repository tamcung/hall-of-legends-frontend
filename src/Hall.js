import { useEffect,useState } from 'react'
import { Layout, Menu, Row, Input, List } from 'antd';
import './Hall.css';
import HeroCard from './components/HeroCard';
import {getHeroList} from './api'

const { Header, Content, Footer } = Layout;
const { Search } = Input;

function Hall() {
    const [heroes,setHeroes] = useState([]);
    const [keyword,setKeyword] = useState('');
    const [pagination,setPagination] = useState({current:1,size:8,total:0});
    const {current,size,total} = pagination;
    const fetchHeroes = async(keyword='',current=1,size=8) => {
        const {data,pager} = await getHeroList(keyword,current,size);
        setHeroes(data);
        setPagination(pager)
    };
    const handleSearch = (val) => {
        setKeyword(val);
        fetchHeroes(val,1,8);
    }
    useEffect(()=>{
        fetchHeroes();
    },[]);
    return (
        <Layout className="layout">
            <Header>
                {/* <div className="logo" /> */}
                <Search placeholder="输入英雄名" enterButton className="search" size="middle" onSearch={handleSearch} />
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="home">{'首页'}</Menu.Item>
                </Menu>
            </Header>

            <Content>
                <div className="site-layout-content">
                    <Row>
                        <List style={{width:'100%'}}
                            grid={{
                                gutter: 16,
                                xs: 1,
                                sm: 2,
                                md: 2,
                                lg: 3,
                                xl: 4,
                                xxl: 4,
                            }}
                            dataSource={heroes}
                            pagination={{
                                current,
                                pageSize: size,
                                total: total,
                                onChange: page => {
                                    fetchHeroes(keyword,page,size);
                                },
                            }}
                            renderItem={item => (
                                <List.Item key={item.id}>
                                    <HeroCard data={item} />
                                </List.Item>
                            )}
                        />
                    </Row>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>英雄殿堂 ©2020 Created by 二仙桥职业技术学院</Footer>
        </Layout>
    )
}

export default Hall;

