"use client"

import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { browser: "chrome", visitors: 50, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 80, fill: "var(--color-safari)" },
]

const chartConfig = {
  visitors: {
    label: "Github Commits ",
  },
  chrome: {
    label: "Github Commits",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "X posts ",
    color: "black",
  },
} satisfies ChartConfig

export function PieChartDemo({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader className="items-center pb-0">
        <CardTitle>X posts vs GitHub Commits</CardTitle>
        <CardDescription>January - August 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] gap-1 flex"
        >
          <PieChart className="rotate-45">
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
              className="-rotate-45"
            />
            <Pie data={chartData} dataKey="visitors" nameKey="browser" />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
