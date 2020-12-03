import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {AppBar, Button, Card, CardContent, Grid, IconButton, Toolbar, Typography} from "@material-ui/core";
import Icon from "@mdi/react";
import {mdiThermometer, mdiWater} from '@mdi/js';
import {Bar} from "react-chartjs-2";
import {display} from "@material-ui/system";
import React from "react";
import BarCard from "./components/BarCard";

const func = function () {

}
const data2 = {
    labels: ['aaa'],
    datasets: [
        {
            label:'aaa',
            data: [59],
            barThickness: 35,
            backgroundColor: [
                'rgb(99,224,255)'
            ],
            borderColor: [
                'rgba(99,224,255 1)'
            ],
            borderWidth: 0,
            borderSkipped:'end',
        },
    ],
}

const data = {
    labels: ['aaa'],
    datasets: [
        {
            label:'aaa',
            data: [100],
            barThickness: 35,
            backgroundColor: [
                'rgba(255, 99, 132, 255)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 0,
            borderSkipped:'end',
        },
    ],
}
const options = {
    maintainAspectRatio: true,
    responsive: true,
    animation:false,
    legend:{
        display:false,
    },
    scales: {
        xAxes:[
            {
                ticks: {
                    display:false,
                }
            }
        ],
        yAxes: [
            {
                gridLines: {
                    display:false
                },
                ticks: {
                    display: true,
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
                <Grid container spacing={4}>
                    <Grid item>
                        <Card variant={"outlined"} className={styles.fullCard}>
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
                                <Bar data={data2} options={options} height={150} width={60} redraw={true}/>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <BarCard data={data2} options={options}> </BarCard>
                    </Grid>
                </Grid>
                <Button variant="contained" onClick={function() { data2.datasets[0].data[0]+=1}}>Default</Button>
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
