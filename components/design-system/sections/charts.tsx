"use client";

import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ComponentPreview } from "../component-preview";
import { Badge } from "@/components/ui/badge";

/* ——— K4Family palette for charts ——— */
const C = {
  teal:       "#087FA0",
  midnight:   "#12303C",
  forest:     "#20463D",
  goldenrod:  "#EBCC3D",
  gold:       "#DFC54E",
  cream:      "#FBF8F0",
};

/* ——— DEMO data ——— */
const lineData = [
  { month: "Jan", kidstory: 420, rani: 180, k4book: 310 },
  { month: "Feb", kidstory: 580, rani: 230, k4book: 390 },
  { month: "Mar", kidstory: 710, rani: 290, k4book: 460 },
  { month: "Apr", kidstory: 650, rani: 340, k4book: 500 },
  { month: "Mei", kidstory: 820, rani: 400, k4book: 560 },
  { month: "Jun", kidstory: 960, rani: 450, k4book: 640 },
  { month: "Jul", kidstory: 1100, rani: 510, k4book: 720 },
  { month: "Agu", kidstory: 1250, rani: 580, k4book: 810 },
];

const barData = [
  { category: "Kidstory", judul: 48 },
  { category: "RANI", judul: 32 },
  { category: "Parenting", judul: 27 },
  { category: "Sains", judul: 18 },
  { category: "Craft", judul: 12 },
  { category: "Alam", judul: 9 },
];

const areaData = [
  { quarter: "Q1 25", k4book: 1200, rani: 580 },
  { quarter: "Q2 25", k4book: 1800, rani: 870 },
  { quarter: "Q3 25", k4book: 2400, rani: 1100 },
  { quarter: "Q4 25", k4book: 3100, rani: 1500 },
  { quarter: "Q1 26", k4book: 3800, rani: 1900 },
  { quarter: "Q2 26", k4book: 4600, rani: 2400 },
];

const pieData = [
  { name: "K4Book", value: 38 },
  { name: "RANI", value: 25 },
  { name: "K4Craft", value: 12 },
  { name: "K4Farm", value: 9 },
  { name: "K4Studio", value: 8 },
  { name: "Lainnya", value: 8 },
];

const PIE_COLORS = [C.teal, C.midnight, C.forest, C.goldenrod, C.gold, "#94a3b8"];

/* ——— Tooltip shared style ——— */
const tooltipStyle = {
  backgroundColor: "#fff",
  border: "1px solid #EAE5DC",
  borderRadius: 12,
  boxShadow: "0 4px 16px rgba(18,48,60,0.08)",
  fontSize: 12,
  fontFamily: "Montserrat, sans-serif",
  color: "#12303C",
};

/* ——— Reusable axis label style ——— */
const axisStyle = { fontSize: 11, fill: "#12303C", fontFamily: "Montserrat, sans-serif" };

/* ——— CODE strings ——— */
const lineCode = `import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", kidstory: 420, rani: 180, k4book: 310 },
  // …more months
];

<ResponsiveContainer width="100%" height={300}>
  <LineChart data={data}>
    <CartesianGrid strokeDasharray="3 3" stroke="#EAE5DC" />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="kidstory" stroke="#087FA0" strokeWidth={2} dot={{ r: 4 }} />
    <Line type="monotone" dataKey="rani"     stroke="#20463D" strokeWidth={2} dot={{ r: 4 }} />
    <Line type="monotone" dataKey="k4book"   stroke="#12303C" strokeWidth={2} dot={{ r: 4 }} />
  </LineChart>
</ResponsiveContainer>`;

const barCode = `import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

<ResponsiveContainer width="100%" height={280}>
  <BarChart data={data} barSize={28}>
    <CartesianGrid strokeDasharray="3 3" stroke="#EAE5DC" vertical={false} />
    <XAxis dataKey="category" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="judul" fill="#087FA0" radius={[6, 6, 0, 0]} />
  </BarChart>
</ResponsiveContainer>`;

const areaCode = `import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

<ResponsiveContainer width="100%" height={280}>
  <AreaChart data={data}>
    <CartesianGrid strokeDasharray="3 3" stroke="#EAE5DC" />
    <XAxis dataKey="quarter" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Area type="monotone" dataKey="k4book" stroke="#087FA0" fill="#087FA0" fillOpacity={0.15} strokeWidth={2} />
    <Area type="monotone" dataKey="rani"   stroke="#20463D" fill="#20463D" fillOpacity={0.12} strokeWidth={2} />
  </AreaChart>
</ResponsiveContainer>`;

const pieCode = `import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#087FA0", "#12303C", "#20463D", "#EBCC3D", "#DFC54E", "#94a3b8"];

<ResponsiveContainer width="100%" height={300}>
  <PieChart>
    <Pie data={data} cx="50%" cy="50%" innerRadius={70} outerRadius={110} paddingAngle={3} dataKey="value">
      {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
</ResponsiveContainer>`;

/* ——— Section ——— */
export const ChartsSection: React.FC = () => {
  const [activeLineKey, setActiveLineKey] = useState<string | null>(null);

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087FA0]/10 text-[#087FA0] text-xs font-semibold uppercase tracking-wider mb-2">
          <span>Data Visualization</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#12303C] tracking-tight font-montserrat">
          K4Family Chart System
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl leading-relaxed">
          Visualisasi data menggunakan Recharts dengan palet warna resmi K4Family. Semua data di bawah adalah <strong>DEMO</strong> — bukan data nyata.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge variant="teal" size="sm">Recharts</Badge>
          <Badge variant="outline" size="sm">Responsive Container</Badge>
          <Badge variant="outline" size="sm">K4Family Palette</Badge>
          <Badge variant="cream" size="sm" dot>DEMO DATA</Badge>
        </div>
      </div>

      {/* Color legend */}
      <div className="p-5 rounded-2xl border border-[#EAE5DC] bg-white">
        <p className="text-xs font-bold text-[#12303C]/60 uppercase tracking-wider mb-3">Chart Color Tokens</p>
        <div className="flex flex-wrap gap-4">
          {[
            { color: C.teal,      name: "Ocean Teal",       hex: "#087FA0" },
            { color: C.midnight,  name: "Midnight Blue",    hex: "#12303C" },
            { color: C.forest,    name: "Forest Green",     hex: "#20463D" },
            { color: C.goldenrod, name: "Bright Goldenrod", hex: "#EBCC3D" },
            { color: C.gold,      name: "Muted Gold",       hex: "#DFC54E" },
          ].map((item) => (
            <div key={item.hex} className="flex items-center gap-2">
              <div
                className="w-5 h-5 rounded-md border border-black/10 shadow-xs flex-shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <div>
                <p className="text-xs font-semibold text-[#12303C]">{item.name}</p>
                <p className="text-[10px] font-mono text-[#12303C]/60">{item.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 1. Line Chart */}
      <ComponentPreview
        title="A. Line Chart — Monthly Content Views"
        description="Tren konten dilihat per bulan: Kidstory (Teal), RANI (Forest), K4Book (Midnight). DEMO DATA."
        code={lineCode}
        hideDeviceSwitcher
      >
        <div className="w-full space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#12303C]">Tren Penayangan Konten</span>
            <Badge variant="cream" size="sm" dot>DEMO DATA</Badge>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={lineData}
              onMouseLeave={() => setActiveLineKey(null)}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#EAE5DC" />
              <XAxis dataKey="month" tick={axisStyle} axisLine={false} tickLine={false} />
              <YAxis tick={axisStyle} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend
                wrapperStyle={{ fontSize: 12, fontFamily: "Montserrat, sans-serif" }}
              />
              <Line
                type="monotone"
                dataKey="kidstory"
                name="Kidstory"
                stroke={C.teal}
                strokeWidth={2.5}
                dot={{ r: 4, fill: C.teal, strokeWidth: 0 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="rani"
                name="RANI"
                stroke={C.forest}
                strokeWidth={2.5}
                dot={{ r: 4, fill: C.forest, strokeWidth: 0 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="k4book"
                name="K4Book"
                stroke={C.midnight}
                strokeWidth={2.5}
                dot={{ r: 4, fill: C.midnight, strokeWidth: 0 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </ComponentPreview>

      {/* 2. Bar Chart */}
      <ComponentPreview
        title="B. Bar Chart — Katalog K4Book per Kategori"
        description="Distribusi judul buku berdasarkan kategori konten. DEMO DATA."
        code={barCode}
        hideDeviceSwitcher
      >
        <div className="w-full space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#12303C]">Jumlah Judul per Kategori</span>
            <Badge variant="cream" size="sm" dot>DEMO DATA</Badge>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={barData} barSize={32}>
              <CartesianGrid strokeDasharray="3 3" stroke="#EAE5DC" vertical={false} />
              <XAxis dataKey="category" tick={axisStyle} axisLine={false} tickLine={false} />
              <YAxis tick={axisStyle} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "#087FA0", fillOpacity: 0.06 }} />
              <Bar dataKey="judul" name="Jumlah Judul" fill={C.teal} radius={[6, 6, 0, 0]}>
                {barData.map((_, i) => (
                  <Cell
                    key={i}
                    fill={i % 2 === 0 ? C.teal : C.midnight}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </ComponentPreview>

      {/* 3. Area Chart */}
      <ComponentPreview
        title="C. Area Chart — Pertumbuhan Ekosistem (Kumulatif)"
        description="Pertumbuhan pengguna aktif K4Book dan RANI per kuartal. DEMO DATA."
        code={areaCode}
        hideDeviceSwitcher
      >
        <div className="w-full space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#12303C]">Pertumbuhan Pengguna Aktif</span>
            <Badge variant="cream" size="sm" dot>DEMO DATA</Badge>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={areaData}>
              <defs>
                <linearGradient id="k4bookGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={C.teal} stopOpacity={0.2} />
                  <stop offset="95%" stopColor={C.teal} stopOpacity={0.01} />
                </linearGradient>
                <linearGradient id="raniGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={C.forest} stopOpacity={0.2} />
                  <stop offset="95%" stopColor={C.forest} stopOpacity={0.01} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#EAE5DC" />
              <XAxis dataKey="quarter" tick={axisStyle} axisLine={false} tickLine={false} />
              <YAxis tick={axisStyle} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend wrapperStyle={{ fontSize: 12, fontFamily: "Montserrat, sans-serif" }} />
              <Area
                type="monotone"
                dataKey="k4book"
                name="K4Book"
                stroke={C.teal}
                strokeWidth={2.5}
                fill="url(#k4bookGrad)"
              />
              <Area
                type="monotone"
                dataKey="rani"
                name="RANI"
                stroke={C.forest}
                strokeWidth={2.5}
                fill="url(#raniGrad)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </ComponentPreview>

      {/* 4. Donut / Pie Chart */}
      <ComponentPreview
        title="D. Donut Chart — Distribusi Lini Bisnis"
        description="Porsi traffic ekosistem per brand K4Family. DEMO DATA."
        code={pieCode}
        hideDeviceSwitcher
      >
        <div className="w-full space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#12303C]">Traffic Ekosistem per Brand</span>
            <Badge variant="cream" size="sm" dot>DEMO DATA</Badge>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={3}
                  dataKey="value"
                  stroke="none"
                >
                  {pieData.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={tooltipStyle}
                  formatter={(value: any) => [`${value}%`, "Porsi"]}
                />
                <Legend
                  iconType="circle"
                  iconSize={10}
                  wrapperStyle={{ fontSize: 12, fontFamily: "Montserrat, sans-serif" }}
                />
              </PieChart>
            </ResponsiveContainer>

            {/* Legend table */}
            <div className="flex-shrink-0 w-full sm:w-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="text-[#12303C]/50">
                    <th className="text-left pb-2 font-semibold pr-6">Brand</th>
                    <th className="text-right pb-2 font-semibold">Share</th>
                  </tr>
                </thead>
                <tbody>
                  {pieData.map((item, i) => (
                    <tr key={item.name} className="border-t border-[#EAE5DC]">
                      <td className="py-1.5 pr-6">
                        <div className="flex items-center gap-2">
                          <span
                            className="inline-block w-2.5 h-2.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: PIE_COLORS[i] }}
                          />
                          <span className="text-[#12303C] font-medium">{item.name}</span>
                        </div>
                      </td>
                      <td className="py-1.5 text-right font-mono text-[#12303C]/80">{item.value}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </ComponentPreview>

      {/* Usage guide */}
      <div className="p-6 rounded-2xl border border-[#EAE5DC] bg-white space-y-4">
        <h3 className="text-base font-bold text-[#12303C] font-montserrat">Chart Usage Rules</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#12303C]/80">
          <div className="space-y-2">
            <p className="font-semibold text-[#12303C]">Kapan menggunakan:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Line Chart → tren waktu (views, pengguna aktif)</li>
              <li>Bar Chart → perbandingan kategori (judul, SKU)</li>
              <li>Area Chart → pertumbuhan kumulatif ekosistem</li>
              <li>Donut Chart → komposisi / distribusi porsi</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-[#12303C]">Aturan warna:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Selalu pakai palette resmi K4Family</li>
              <li>Gunakan <code className="bg-[#F4F6F5] px-1 rounded">#087FA0</code> untuk data utama</li>
              <li>Tambahkan label &quot;DEMO DATA&quot; pada semua chart non-produksi</li>
              <li>Gunakan <code className="bg-[#F4F6F5] px-1 rounded">ResponsiveContainer</code> selalu</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

