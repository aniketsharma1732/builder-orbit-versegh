import {
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line,
  ComposedChart,
} from "recharts";

const data = [
  { name: "Jan", income: 3200, momGrowth: 2000 },
  { name: "Feb", income: 4500, momGrowth: 4200 },
  { name: "Mar", income: 6100, momGrowth: 3000 },
  { name: "Apr", income: 3800, momGrowth: 5200 },
  { name: "May", income: 7000, momGrowth: 1500 },
  { name: "Jun", income: 5200, momGrowth: 6400 },
];

export default function IncomeChart() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ left: -10, right: 10, top: 10, bottom: 0 }}
        >
          <CartesianGrid stroke="#e5e7eb" vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fill: "#6b7280", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            yAxisId="left"
            tick={{ fill: "#6b7280", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v: number) => `$${v / 1000}k`}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tick={{ fill: "#6b7280", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip cursor={{ fill: "rgba(124,58,237,0.05)" }} />
          <Bar
            yAxisId="left"
            dataKey="income"
            radius={[6, 6, 0, 0]}
            barSize={28}
            fill="#8b5cf6"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="momGrowth"
            stroke="#7f1d1d"
            strokeWidth={3}
            dot={{ r: 3 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
      <div className="mt-2 flex items-center justify-between text-xs">
        <div className="flex items-center gap-1">
          <span className="h-3 w-3 rounded-sm bg-[#8b5cf6]" /> income
        </div>
        <div className="flex items-center gap-1">
          <span className="h-3 w-3 rounded-sm bg-[#7f1d1d]" /> momGrowth
        </div>
      </div>
    </div>
  );
}
