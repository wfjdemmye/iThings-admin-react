import { useMemo, useState } from 'react';
import styles from '../index.less';

const SrvgmrStatic = () => {
  /** 获取流媒体服务器状态统计 */
  // const { data } = useRequest(postApiV1ThingsDeviceInfoCount, {
  //   onError: (error) => {
  //     message.error('获取设备统计错误:' + error.message);
  //   },
  // });

  const [data, setDataList] = useState({
    data: {
      deviceCount: {
        online: 1,
        offline: 9,
        inactive: 10,
        unknown: 0,
      },
      deviceTypeCount: {
        device: 0,
        gateway: 0,
        subset: 0,
        unknown: 0,
      },
    },
  });

  const deviceTotal = useMemo(() => {
    return (
      (data?.data.deviceCount.unknown || 0) +
        (data?.data.deviceCount.inactive || 0) +
        (data?.data.deviceCount.offline || 0) +
        (data?.data.deviceCount.online || 0) || 0
    );
  }, [data?.data]);

  return (
    <div className={styles['static-wrapper']}>
      <div className={styles.title}>服务器管理</div>

      <div className={styles['static-content']}>
        <div className={styles['static-item']}>
          <div>服务总数</div>
          <div className={styles.num}>{deviceTotal}</div>
        </div>
        <div className={styles['static-item']}>
          <div>
            <span className={styles['label-circle']} style={{ background: '#ff401a' }} />
            <span>未激活设备</span>
          </div>
          <div className={styles.num}>{data?.data.deviceCount.inactive}</div>
        </div>
        <div className={styles['static-item']}>
          <div>
            <span className={styles['label-circle']} style={{ background: '#00b354' }} />
            <span>当前在线</span>
          </div>
          <div className={styles.num}>{data?.data.deviceCount.online}</div>
        </div>
        <div className={styles['static-item']}>
          <div>
            <span className={styles['label-circle']} style={{ background: '#fadb14' }} />
            <span>当前离线</span>
          </div>
          <div className={styles.num}>{data?.data.deviceCount.offline}</div>
        </div>
      </div>
    </div>
  );
};

export default SrvgmrStatic;
