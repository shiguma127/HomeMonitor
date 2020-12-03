import {Bar} from "react-chartjs-2";
import React, {useState} from "react";
import {render} from "next/client";
import {Button, Card, CardContent, Grid, Typography} from "@material-ui/core";
import styles from "../../styles/Home.module.css";
import Icon from "@mdi/react";
import {mdiWater} from "@mdi/js";

const BarCard = (props)=> {
    const [data,setData] :any= useState(props.data);
    const [cnt,setCnt] = useState();
    const updateData = ()=>{
        let cp :any = {}
        Object.assign(cp,data)
        cp.datasets[0].data[0]++
        setData(cp)
    }
    return (
        <div>
            <Card variant={"outlined"} className={styles.fullCard}>
                <CardContent>
                    <Typography variant={"h6"}>
                        <Icon path={mdiWater}
                              size={1}
                        />
                        Humidity
                    </Typography>
                    <Typography variant={"h4"} align={"center"}>
                        {cnt}%
                    </Typography>
                    <Typography variant={"h4"} align={"center"}>
                        {props.data.datasets[0].data[0]}%
                    </Typography>
                </CardContent>
                <Bar data={props.data} options={props.options} height={150} width={60} redraw/>
            </Card>
            <Button variant="contained" onClick={updateData} >+</Button>
            <button onClick={()=>{console.log(data)}}>
                Click me
            </button>
        </div>
    );
}

export default BarCard
