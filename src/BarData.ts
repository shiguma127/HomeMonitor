class BarData {
    unit =  ""
    options = {
        maintainAspectRatio: false,
        responsive: true,
        animation: false,
        legend: {
            display: false,
        },
        scales: {
            xAxes: [
                {
                    ticks: {
                        display: false,
                    }
                }
            ],
            yAxes: [
                {
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        display: true,
                        max: 100,
                        min: 0
                    },
                },
            ],
        },
    };

    data =  {
        labels: ['label'],
        datasets: [
            {
                label: 'label',
                data: [0],
                barThickness: 35,
                backgroundColor: [
                    'rgba(255, 99, 132, 255)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 0,
                borderSkipped: 'end',
            },
        ],
    };
    constructor(label,color ,unit,min,max) {
        this.data.labels = [label]
        this.data.datasets[0].label =　label
        this.data.datasets[0].backgroundColor = color
        this.data.datasets[0].borderColor = color
        this.unit = unit
        this.options.scales.yAxes[0].ticks.min=min
        this.options.scales.yAxes[0].ticks.max=max
    }

}

export default BarData
