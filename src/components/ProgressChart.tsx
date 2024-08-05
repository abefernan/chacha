"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { User } from "@/types/user";
import { TrendingUp } from "lucide-react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const chartData = [
  { period: "current", chachas: 4, fill: "var(--color-current)" },
];

const chartConfig = {
  chachas: {
    label: "Chachas",
  },
  current: {
    label: "Current",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

type ProgressChartProps = {
  user: User;
};

export default function ProgressChart({ user }: ProgressChartProps) {
  return (
    <Card className="flex flex-col border-none shadow-none">
      <CardHeader className="items-center pb-0">
        <CardTitle className="self-start">
          <div className="flex gap-2 items-center">
            <Avatar>
              <AvatarImage src={user.pfpUrl} />
              <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <p>{user.name}</p>
              <p className="text-sm">{user.address}</p>
            </div>
          </div>
        </CardTitle>
        <CardDescription>Aug 5th - Aug 11th</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={250}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="chachas" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {chartData[0].chachas.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Chachas
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total chachas for the last week
        </div>
      </CardFooter>
    </Card>
  );
}
