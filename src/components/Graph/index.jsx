import { Card, Tabs } from "antd";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartWrap,
  GraphCardStyles,
  GraphSection,
} from "../../styles/Graph/GraphChart";

const { TabPane } = Tabs;
const GraphChart = (props) => {
  return (
    <GraphSection>
      <Card title={props.title} style={GraphCardStyles}>
        <Tabs defaultActiveKey="day">
          <TabPane tab="Day" key="day">
            <ChartWrap>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                  data={props.dayData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#e69222"
                    fill="#fccd91"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartWrap>
          </TabPane>
          <TabPane tab="Month" key="month">
            <ChartWrap>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                  data={props.monthData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#e69222"
                    fill="#fccd91"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartWrap>
          </TabPane>
          <TabPane tab="Year" key="year">
            <ChartWrap>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                  data={props.yearData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#e69222"
                    fill="#fccd91"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartWrap>
          </TabPane>
        </Tabs>
      </Card>
    </GraphSection>
  );
};

export default GraphChart;
