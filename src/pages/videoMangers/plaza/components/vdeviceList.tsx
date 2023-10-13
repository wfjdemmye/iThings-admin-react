import React, { useState } from 'react';

interface Props {
    mediaServerId:number;
}

interface VdeviceInfo{
    data:[];
    dataTotal:0;
    page:0;
    pageSize:9999;
}

const VdeviceList:React.FC<Props> = ({ mediaServerId }) => {
    const [VdeviceInfo,setVidInfo] = useState({});
    return (
        <div></div>
      );
}
// import React from 'react'

// export default function vdeviceList() {
//   return (
//     <div>vdeviceList</div>
//   )
// }
export default VdeviceList;


