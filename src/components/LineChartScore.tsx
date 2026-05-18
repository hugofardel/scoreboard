import { ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { transformScoresToDataGraph } from "@/helpers";
import { useGameActions } from "@/hooks/useGameActions";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { ChartContainer } from "./ui/chart";

function LineChartScore() {
    const { players, rounds } = useGameActions();

    const chartConfig = players.reduce((config, player, index) => {
        config[player.name] = {
            label: player.name,
            color: `var(--chart-${(index % 5) + 1})`,
        }

        return config
    }, {} as ChartConfig);

    const data = transformScoresToDataGraph(players, rounds);

    return (
        <ChartContainer config={chartConfig} className="min-h-80 mt-12 md:mt-4 overflow-auto md:min-h-50 w-full">
            <LineChart accessibilityLayer data={data}>
                <CartesianGrid vertical={false} />
                <ChartLegend content={<ChartLegendContent />} />
                <ChartTooltip content={<ChartTooltipContent />} />

                <XAxis
                    dataKey="round"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                />

                <YAxis
                    width="auto"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                />

                {players.map((player, i) => (
                    <Line
                        key={player.id}
                        type="monotone"
                        dataKey={player.name}
                        stroke={`var(--chart-${(i % 5) + 1})`}
                        strokeWidth={2}
                    />
                ))}
            </LineChart>
        </ChartContainer>
    )
}

export default LineChartScore;