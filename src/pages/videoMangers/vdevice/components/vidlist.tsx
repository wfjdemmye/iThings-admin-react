import { CreateForm } from '@/pages/deviceMangers/device/components/createForm';
import { FlagStatus } from '@/utils/base';
import type { DEVICE_INFO } from '@/utils/const';
import { DEVICE_LOG_LEVEL_VALUE } from '@/utils/const';
import { timestampToDateStr } from '@/utils/date';
import { isOnlineEnum } from '@/utils/utils';

import { ProTable } from '@ant-design/pro-components';
import type { ProColumns } from '@ant-design/pro-table/lib/typing';
import { history } from '@umijs/max';
import { Button, Menu} from 'antd';
import React from 'react';

// const Vidlist: React.FC<Props> = ({ productInfo }) => {
const Vidlist: React.FC  = () => {

  /**
   * 列信息
   * */
  const columns: ProColumns<DEVICE_INFO>[] = [
    {
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '设备名称',
      dataIndex: 'deviceName',
    },
    {
      title: '设备别名',
      dataIndex: 'deviceAlias',
    },
    {
      title: '所属产品名称',
      dataIndex: 'productID',
    },
    {
      title: '所属产品ID',
      dataIndex: 'productID',

    },
    {
      title: '设备类型',
      dataIndex: 'productID',
      width: 80,
    },
    {
      title: '设备标签',
      dataIndex: 'tags',
    },
    {
      title: '固件版本',
      dataIndex: 'version',
    },
    {
      title: '日志级别',
      dataIndex: 'logLevel',
      valueType: 'select',
    },
    {
      title: '在线状态',
      dataIndex: 'isOnline',
      valueType: 'select',
      width: 80,
    },
    {
      title: '激活时间',
      key: 'firstLogin',
      dataIndex: 'firstLogin',
    },
    {
      title: '最后上线时间',
      key: 'lastLogin',
      dataIndex: 'lastLogin',
    },
    {
      title: '创建时间',
      key: 'createdTime',
      dataIndex: 'createdTime',

    },
    {
      title: '操作',
      valueType: 'option',
    },
  ];
  return (
    <ProTable<DEVICE_INFO>
      rowKey="secret"
      columns={columns}
      editable={{
        type: 'multiple',
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
      }}
      search={{
        span: 4,
        labelWidth: 'auto',
      }}
      options={{
        setting: {
          listsHeight: 400,
        },
      }}
      pagination={{
        pageSize: 10,
      }}
      dateFormatter="string"
    />
  );
};

export default Vidlist;
