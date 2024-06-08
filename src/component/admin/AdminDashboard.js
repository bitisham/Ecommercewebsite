import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Card } from "antd";
import { Chart as ChartJS ,BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip, ArcElement } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [500, 400, 600, 300, 800, 400, 700],
      backgroundColor: "rgb(255, 99, 132)",
      stack: "Stack 0",
    },
    {
      label: "Dataset 2",
      data: [400, 600, 700, 300, 200, 100, 800],
      backgroundColor: "rgb(75, 192, 192)",
      stack: "Stack 0",
    },
    {
      label: "Dataset 3",
      data: [300, 200, 100, 400, 700, 500, 600],
      backgroundColor: "rgb(53, 162, 235)",
      stack: "Stack 1",
    },
  ],
};
ChartJS.register(ArcElement                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               , Tooltip, Legend);

const piedata = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const AdminDashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-6">
        <Card title="Data Chart">
          <Bar options={options} data={data} />
        </Card>
      </div>
      <div className="col-span-6 flex justify-center">
        <Card title="Data Stock" className="w-full">
          <div className="w-full flex justify-center">
            <Pie data={piedata} />
          </div>
        </Card>
      </div>
    </div>
  );
};
export default AdminDashboard;
