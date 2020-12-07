import {Bar} from "react-chartjs-2";
import React from "react";
import {Card, CardContent, Typography} from "@material-ui/core";
import styles from "../../styles/Home.module.css";

const BarCard = (props) => {
    return (
        <div>
            <Card variant={"outlined"} className={styles.fullCard} >
                <CardContent>
                    <Typography variant={"h6"}>
                        {props.data.datasets[0].label}
                    </Typography>
                    <Typography variant={"h3"} align={"center"}>
                        {props.data.datasets[0].data[0]}{props.unit}
                    </Typography>
                    <div>
                        <Bar data={props.data} options={props.options} height={300} width={150} redraw/>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
export default BarCard
