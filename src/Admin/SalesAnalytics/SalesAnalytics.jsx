import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 18000 },
  { month: "Mar", revenue: 15000 },
  { month: "Apr", revenue: 20000 },
  { month: "May", revenue: 22000 },
];

const packageTypes = [
  { name: "Eco Box", sales: 400 },
  { name: "Custom Box", sales: 300 },
  { name: "Standard Box", sales: 500 },
];

const customerData = [
  { name: "Repeat", value: 60 },
  { name: "New", value: 40 },
];

const COLORS = ["#00C49F", "#FF8042"];

const regionData = [
  { region: "North", orders: 200 },
  { region: "South", orders: 150 },
  { region: "East", orders: 100 },
  { region: "West", orders: 170 },
];

export default function SalesAnalytics() {
  return (
    <div className="p-6 space-y-10">
      <h1 className="text-3xl font-bold">📊 Sales Analytics Dashboard</h1>

      {/* Monthly Revenue Chart */}
      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-xl font-semibold mb-4">Monthly Revenue</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Top-Selling Packages */}
      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-xl font-semibold mb-4">Top-Selling Package Types</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={packageTypes}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Repeat vs New Customers */}
      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-xl font-semibold mb-4">Repeat vs New Customers</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={customerData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {customerData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Region-wise Orders Heatmap (Using BarChart for simplicity) */}
      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-xl font-semibold mb-4">Region-wise Orders</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={regionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="region" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="orders" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
