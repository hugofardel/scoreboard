import { ChartLegend, ChartLegendContent, type ChartConfig } from "@/components/ui/chart";
import { useGameActions } from "@/hooks/useGameActions";
import type { Player } from "@/types/player";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { ChartContainer } from "./ui/chart";

type RechartsData = {
    round: string
    [playerName: string]: string | number
}

function MyChart() {
    const { players, rounds } = useGameActions();

    const chartConfig = players.reduce((config, player, index) => {
        config[player.name] = {
            label: player.name,
            color: `var(--color-chart-${(index % 5) + 1})`,
        }

        return config
    }, {} as ChartConfig);

    const data = transformScores(players);

    function transformScores(players: Player[]): RechartsData[] {
        return Array.from({ length: rounds }, (_, roundIndex) => {
            const roundData: RechartsData = { round: `Round ${roundIndex + 1}` };
            players.forEach(player => { roundData[player.name] = player.scores[roundIndex] ?? 0 });
            return roundData;
        })
    }

    return (
        <ChartContainer config={chartConfig} className="min-h-50 w-full">
            <LineChart accessibilityLayer data={data}>
                <CartesianGrid vertical={false} />
                <ChartLegend content={<ChartLegendContent />} />
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
                        stroke={`var(--color-chart-${(i % 5) + 1})`}
                        strokeWidth={2}
                    />
                ))}
            </LineChart>
        </ChartContainer>
    )
}

export default MyChart;