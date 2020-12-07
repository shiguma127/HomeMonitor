import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {AppBar, Button, Grid, IconButton, Toolbar, Typography} from "@material-ui/core";
import Icon from "@mdi/react";
import {mdiThermometer} from '@mdi/js';
import React from "react";
import BarCard from "./components/BarCard";
import BarData from "../src/BarData";

let configs = []
const datas = []

class Home extends React.Component<any, any> {
    constructor(props) {
        super(props);
        configs = require('../config/config.json').configs
        configs.forEach(config => {
            datas.push(new BarData(config.label, config.color, config.unit, config.range.min, config.range.max))
        })
        console.log(datas)
        this.state = {datas: datas}
    }

    render() {
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
                        {datas.map(d => {
                            return (
                                <Grid item>
                                    <BarCard data={d.data} options={d.options} unit={d.unit}> </BarCard>
                                </Grid>
                            )
                        })}
                    </Grid>
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
}

export default Home
