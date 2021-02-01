import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {AppBar, Button, Grid, IconButton, Toolbar, Typography} from "@material-ui/core";
import Icon from "@mdi/react";
import {mdiThermometer} from '@mdi/js';
import React, {useEffect, useState} from "react";
import BarCard from "./components/BarCard";
import BarData from "../src/BarData";
import io from "socket.io-client";
import {func} from "prop-types";

const socket = io('localhost:8080')
let configs = []
const datas: BarData[] = []

const Home = () => {
    configs = require('../config/config.json').configs
    const inital = []
    configs.forEach(config => {
        inital.push(new BarData(config.id,config.label, config.color, config.unit, config.range.min, config.range.max))
    })
    const [datas,setDatas] = useState(inital)
    const add = function (id,value){
        const temp = []
        Object.assign(temp,datas)
        const index = temp.findIndex((data)=>data.id===id)
        temp[index].data.datasets[0].data[0]=value
        setDatas(temp)
    }
    useEffect(() => {
        socket.on('connect', () => {
            console.log('connected')
        })
        socket.on('update',(data)=>{
            add(data.id,data.value)
        })
    }, [])
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
                            <Grid item key={d.data.labels[0]}>
                                <BarCard data={d.data} options={d.options} label={d.getLabel()} current={d.getCurrentData()} unit={d.unit}> </BarCard>
                            </Grid>
                        )
                    })}
                </Grid>
            </main>
            <footer className={styles.footer}>
            </footer>
        </div>
    );
}
export default Home
