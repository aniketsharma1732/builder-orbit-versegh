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
  { name: "Jan", income: 3500, momGrowth: 20 },
  { name: "Feb", income: 4800, momGrowth: 40 },
  { name: "Mar", income: 7000, momGrowth: 50 },
  { name: "Apr", income: 3000, momGrowth: -70 },
  { name: "May", income: 5500, momGrowth: 60 },
  { name: "Jun", income: 4000, momGrowth: -100 },
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
            axisLine={{ stroke: "#8b5cf6" }}
            tickLine={false}
            domain={[0, 8000]}
            ticks={[0, 2000, 4000, 6000, 8000]}
            tickFormatter={(v: number) => `$${v / 1000}k`}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tick={{ fill: "#6b7280", fontSize: 12 }}
            axisLine={{ stroke: "#7f1d1d" }}
            tickLine={false}
            domain={[-100, 100]}
            ticks={[-100, -50, 0, 50, 100]}
            tickFormatter={(v: number) => `${v}%`}
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
            dot={{ r: 4, stroke: "#7f1d1d", fill: "#7f1d1d" }}
            activeDot={{ r: 5 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
      <div className="mt-2 flex items-center justify-center gap-6 text-xs">
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
