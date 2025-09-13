import { useState } from "react";
import Header from "@/components/dashboard/Header";
import KPI from "@/components/dashboard/KPI";
import PeriodSelector from "@/components/dashboard/PeriodSelector";
import IncomeChart from "@/components/dashboard/IncomeChart";
import InvoiceListItem from "@/components/dashboard/InvoiceListItem";
import UpdateStatusButton from "@/components/dashboard/UpdateStatusButton";
import { ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Index() {
  const [period, setPeriod] = useState<"1M" | "3M" | "1Y">("3M");
  const [invoicesOpen, setInvoicesOpen] = useState(true);
  const [firstStatus, setFirstStatus] = useState("Unpaid");

  const invoices = [
    { title: "Client Name", amount: "1,25,000", due: "2024-06-15", status: firstStatus },
    { title: "Client Name", amount: "1,25,000", due: "2024-06-15", status: "Disputed" },
    { title: "Income Trend", amount: "1,25,000", due: "2024-06-15", status: "Paid" },
    { title: "Income Trend", amount: "1,25,000", due: "2024-06-15", status: "Partially Paid" },
    { title: "Income Trend", amount: "1,25,000", due: "2024-06-15", status: "Overdue", icon: "bell" as const },
    { title: "Income Trend", amount: "1,25,000", due: "2024-06-15", status: "Awaited", icon: "bell" as const },
    { title: "Income Trend", amount: "1,25,000", due: "2024-06-15", status: "Draft", icon: "pencil" as const },
    { title: "Income Trend", amount: "1,25,000", due: "2024-06-15", status: "Paid" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 via-white to-white">
      <Header />
      <main className="mx-auto max-w-md px-4 pb-24">
        <section className="-mt-6">
          <Card className="rounded-3xl border-slate-200 p-5 shadow-sm">
            <div className="rounded-2xl shadow p-6 text-center bg-white">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-t from-[#5353ed] to-[#d90bcf] p-[6px]">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <span className="bg-gradient-to-t from-[#5353ed] to-[#d90bcf] bg-clip-text text-transparent font-semibold text-6xl pb-2">＋</span>
                  </div>
                </div>
                <h2 className="bg-gradient-to-t from-[#5353ed] to-[#d90bcf] bg-clip-text text-transparent mt-3 font-bold text-2xl leading-8">Create New Invoice</h2>
                <p className="text-sm text-gray-500">Start by creating and sending new invoice</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs text-purple-500 mt-2">Or Upload an existing invoice and set payment reminder</p>
            </div>

            <div className="mt-6">
              <PeriodSelector active={period} onChange={setPeriod} />
            </div>
          </Card>
        </section>

        <section className="mt-5 grid grid-cols-2 gap-3">
          <KPI label="Total Earnings" value="$1,25,000" />
          <KPI label="Payment Awaited" value="$25,000" />
          <KPI label="Payment Overdue" value="$25,000" />
        </section>

        <section className="mt-6">
          <Card className="rounded-3xl border-slate-200 p-5">
            <h3 className="text-base font-semibold">Income Trend</h3>
            <p className="mt-1 text-sm text-muted-foreground">Your monthly income and growth for the last 6 months.</p>
            <div className="mt-3">
              <IncomeChart />
            </div>
          </Card>
        </section>

        <section className="mt-6">
          <button className="mb-3 flex w-full items-center justify-between" onClick={() => setInvoicesOpen((v) => !v)} aria-expanded={invoicesOpen}>
            <h3 className="text-base font-semibold">Your Invoices</h3>
            <ChevronDown className={`h-5 w-5 transition-transform ${invoicesOpen ? "rotate-180" : "rotate-0"}`} />
          </button>
          {invoicesOpen && (
            <div className="space-y-3">
              {invoices.map((inv, idx) => (
                <InvoiceListItem
                  key={idx}
                  {...inv}
                  rightElement={idx === 0 ? (<UpdateStatusButton value={firstStatus} onChange={setFirstStatus} />) : undefined}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
