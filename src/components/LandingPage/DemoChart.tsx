"use client"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
  { month: "January", desktop: 60 },
  { month: "February", desktop: 100 },
  { month: "March", desktop: 180 },
  { month: "April", desktop: 90 },
  { month: "May", desktop: 150 },
  { month: "June", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function ChartDemo({ className }: { className?: string }) {
  return (
    <Card className={className}>
        <CardHeader>
            <CardTitle>Page Views</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent>
            <ChartContainer config={chartConfig}>
                <LineChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                    left: 12,
                    right: 12,
                    }}
                >
                    <CartesianGrid vertical={false} />
                    <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                    />
                    <Line
                    dataKey="desktop"
                    type="linear"
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                    dot={false}
                    />
                </LineChart>
            </ChartContainer>
        </CardContent>
    </Card>
  )
}
