import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {AppBar, Card, CardContent, Grid, IconButton, Toolbar, Typography} from "@material-ui/core";
import Icon from "@mdi/react";
import {mdiThermometer, mdiWater} from '@mdi/js';
import {Bar} from "react-chartjs-2";

const data = {
    labels: ['Red'],
    datasets: [
        {
            label: '',
            data: [59],
            backgroundColor: [
                'rgba(255, 99, 132, 255)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 0,
        },
    ],
}
const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    max: 100,
                    beginAtZero: true,
                },
            },
        ],
    },
}

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>HomeMonitor</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>

                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                        >
                            <Icon path={mdiThermometer}
                                  size={1}
                            />

                            <Typography variant="h6" noWrap>
                                HomeMonitor
                            </Typography>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Card variant={"outlined"}>
                    <CardContent>
                        <Typography variant={"h6"}>
                            <Icon path={mdiWater}
                                  size={1}
                            />
                            Humidity
                        </Typography>
                        <Typography variant={"h4"} align={"center"}>
                            59%
                        </Typography>
                        <Bar data={data} options={options}>
                        </Bar>
                    </CardContent>
                </Card>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{'         '}
                    <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo}/>
                </a>
            </footer>
        </div>
    );
}
