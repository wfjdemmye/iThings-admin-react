import { ProTable } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-layout';
import React from 'react';
// import type { VdeviceInfo } from './data';

const Plaza: React.FC = () => {
  return (
    <PageContainer>
      {/* <GroupList flag="index" parentID="1" /> */}
      {/* <p>视频广场</p> */}
      {/* <ProTable></ProTable> */}
      <ProTable></ProTable>
      {/* this.state.data.map((item,i)=>(<MediaChannel key={i} mediaServerId={item.mediaServerId} />)) */}
    </PageContainer>
  );
};

export default Plaza;
