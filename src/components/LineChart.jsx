import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

const LineChart = ({ labelsX = [], datasets = [] }) => {
	const data = {
		labels: labelsX,
		datasets: datasets,
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
				labels: {
					font: {
						size: 20,
					},
					color: "white",
				},
			},
			tooltip: {
				enabled: true,
			},
			colors: {
				enabled: true,
			},
		},
		scales: {
			x: {
				ticks: {
					font: {
						size: 18,
					},
					color: "white",
				},
				border: {
					color: "white",
				},
			},
			y: {
				ticks: {
					font: {
						size: 18,
					},
					color: "white",
				},
				border: {
					color: "white",
				},
			},
		},
	};

	return <Line data={data} options={options} />;
};

export default LineChart;
