import React from 'react';
import { Button, Col, Row, Statistic } from 'antd';

const WorkStatistics: React.FC = () => (
    <Row gutter={16}>
        <Col span={12}>
            <Statistic title="Works" value={10} />
        </Col>
        <Col span={12}>
            <Statistic title="Images" value={112893} precision={2} />
        </Col>
    </Row>
);

export default WorkStatistics;