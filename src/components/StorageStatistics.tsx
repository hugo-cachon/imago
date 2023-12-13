import React from 'react';
import { Progress, Tooltip } from 'antd';

const StorageStatistics: React.FC = () => (
    <>
        <Tooltip title="storage">
            <Progress percent={100} success={{ percent: 30 }} />
        </Tooltip>
    </>
);

export default StorageStatistics;