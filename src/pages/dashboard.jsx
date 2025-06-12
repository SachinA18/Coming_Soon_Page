import { Chart } from "primereact/chart";
import { Knob } from "primereact/knob";

const Dashboard = () => {
    const lineData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Performance",
                data: [65, 59, 80, 81, 56, 55],
                fill: false,
                borderColor: "#42A5F5",
                tension: 0.4,
            },
        ],
    };

    const lineOptions = {
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="p-5" style={{ background: "#E5F6FF" }}>
            <div className="shadow-3 border-round-lg p-4 bg-white">
                <div className="flex justify-content-between align-items-center mb-4">
                    <div className="text-xl font-bold">Dashboard</div>
                    <i className="pi pi-user text-xl" />
                </div>

                <div className="grid">
                    <div className="col-6 md:col-3">
                        <div className="p-3 border-1 surface-border border-round">
                            <div className="text-2xl font-bold">1415</div>
                            <div className="text-sm">Visitors</div>
                        </div>
                    </div>
                    <div className="col-6 md:col-3">
                        <div className="p-3 border-1 surface-border border-round">
                            <div className="text-2xl font-bold">2057</div>
                            <div className="text-sm">Sales</div>
                        </div>
                    </div>
                    <div className="col-6 md:col-3">
                        <div className="p-3 border-1 surface-border border-round">
                            <div className="text-2xl font-bold">10%</div>
                            <div className="text-sm">Profit</div>
                        </div>
                    </div>
                    <div className="col-6 md:col-3">
                        <div className="p-3 border-1 surface-border border-round">
                            <div className="text-2xl font-bold">54%</div>
                            <div className="text-sm">Completed</div>
                        </div>
                    </div>
                    <div className="col-12 md:col-4">
                        <div className="p-3 border-1 surface-border border-round flex flex-column align-items-center">
                            <Chart type="line" data={lineData} options={lineOptions} height="10.8rem" />
                        </div>
                    </div>
                    <div className="col-12 md:col-4">
                        <div className="p-3 border-1 surface-border border-round flex flex-column align-items-center">
                            <Knob value={52} size={120} readOnly />
                            <div className="text-center mt-2">
                                <div className="text-xl font-bold">52%</div>
                                <div className="text-sm">24500 / 17200</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 md:col-4">
                        <div className="p-3 border-1 surface-border border-round flex flex-column align-items-center">
                            <Knob value={70} size={120} readOnly />
                            <div className="text-center mt-2">
                                <div className="text-xl font-bold">70%</div>
                                <div className="text-sm">35500 / 27200</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid mt-3">
                    <div className="col-12 md:col-12">
                        <div className="p-3 border-1 surface-border border-round grid">
                            <div className="col-12 mb-3">
                                <div className="text-sm font-medium mb-2">Recent Activity</div>
                                <div className="h-2rem surface-200 border-round w-full"></div>
                            </div>
                            <div className="col-6">
                                <div className="text-sm font-medium mb-2">Stats</div>
                                <div className="h-6rem surface-200 border-round w-full"></div>
                            </div>
                            <div className="col-6">
                                <div className="text-sm font-medium mb-2">More Charts</div>
                                <div className="h-6rem surface-200 border-round w-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;