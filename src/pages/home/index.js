import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Input, Radio } from 'antd';

const { Search } = Input;
import reqwest from 'reqwest';
import connect from 'app/store/connect';
import style from './style';
import HomeSelector from 'app/selectors/home';
import * as HomeActions from 'app/actions/home';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '20%',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>详情</a>,
  },
];

const getRandomuserParams = params => {
  return {
    results: params.pagination.pageSize,
    page: params.pagination.current,
    ...params,
  };
};


@connect(HomeSelector, HomeActions)
export default class Home extends Component {
  state = {
    tags: [
      {
        name:'全部',
        value: '1'
      },
      {
        name:'基础属性',
        value: '2'
      },
      {
        name:'行为属性',
        value: '3'
      },
      {
        name:'偏好属性',
        value: '4'
      },
      {
        name:'用户价值及生命周期',
        value: '5'
      }
    ],
    data: [],
    pagination: {
      current: 1,
      pageSize: 10,
    },
    loading: false,
  };

  componentDidMount() {
    const { pagination } = this.state;
    this.fetch({ pagination });
  }

  handleTableChange = (pagination, filters, sorter) => {
    this.fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
  };

  

  fetch = (params = {}) => {
    this.setState({ loading: true });
    reqwest({
      url: 'https://randomuser.me/api',
      method: 'get',
      type: 'json',
      data: getRandomuserParams(params),
    }).then(data => {
      console.log(data);
      this.setState({
        loading: false,
        data: data.results,
        pagination: {
          ...params.pagination,
          total: 200,
          // 200 is mock data, you should read it from server
          // total: data.totalCount,
        },
      });
    });
  };

  onSearch = value => console.log(value);

  onChange = event => console.log(event);
  renderTag = () => {
    const { tags } = this.state
   return <Radio.Group className="tag-main" defaultValue="a" size="middle" onChange={event=>this.onChange(event)}>
      {
        tags.map(item=><Radio.Button className="tag-item" key={item.name} value={item.value}>{item.name}</Radio.Button>)
      }
    </Radio.Group>
  }
  render() {
    const { data, pagination, loading } = this.state;
    return (
      <>
        <div className="top-main">
          <Search
            placeholder="input search text"
            allowClear
            autoSize
            onSearch={value=>this.onSearch(value)}
            size="middle"
          />
          { this.renderTag() }
        </div>
        <Table
          columns={columns}
          rowKey={record => record.login.uuid}
          dataSource={data}
          pagination={pagination}
          loading={loading}
          onChange={this.handleTableChange}
        />
      </>
    );
  }
}
