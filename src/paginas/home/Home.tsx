import { Button, Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import './Home.css' 

let nome = 'a'

function Home(){
    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} >
                    <img className="img1" src="https://blog.freedom.ind.br/wp-content/uploads/2018/04/DOA%C3%87%C3%83O-DE-CADEIRA-DE-RODAS-BLOG.png" alt="" width="1000px" />
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                    <Box>
                        <h1 className="text-align-center">Produtos disponiveis</h1>
                    </Box>
                    <Box className="box1">
                        <img className="img2" src="https://images.tcdn.com.br/img/img_prod/1011547/cadeira_de_rodas_aco_90kg_1009_pneu_macico_ref_1632_jaguaribe_3399_1_bb2bf5fa0157777258d7f50b1bc439ce.jpg" alt="" width={150} />
                        <p className="text-aling-center">cadeira</p>
                        <p>Localização: Barra da Tijuca, rj</p>
                    </Box>
                    <Box className="box1">
                        <img className="img2" src="https://images.tcdn.com.br/img/img_prod/1011547/cadeira_de_rodas_aco_90kg_1009_pneu_macico_ref_1632_jaguaribe_3399_1_bb2bf5fa0157777258d7f50b1bc439ce.jpg" alt="" width={150} />
                        <p className="text-aling-center">cadeira</p>
                    </Box>
                    <Box className="box1"> 
                        <img className="img2" src="https://images.tcdn.com.br/img/img_prod/1011547/cadeira_de_rodas_aco_90kg_1009_pneu_macico_ref_1632_jaguaribe_3399_1_bb2bf5fa0157777258d7f50b1bc439ce.jpg" alt="" width={150} />
                        <p className="text-aling-center">cadeira</p>
                    </Box>
                    <Box className="box1"> 
                        <img className="img2" src="https://images.tcdn.com.br/img/img_prod/1011547/cadeira_de_rodas_aco_90kg_1009_pneu_macico_ref_1632_jaguaribe_3399_1_bb2bf5fa0157777258d7f50b1bc439ce.jpg" alt="" width={150} />
                        <p className="text-aling-center">cadeira</p>
                    </Box>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                    <Box className="box1">
                        <img className="img2" src="https://images.tcdn.com.br/img/img_prod/1011547/cadeira_de_rodas_aco_90kg_1009_pneu_macico_ref_1632_jaguaribe_3399_1_bb2bf5fa0157777258d7f50b1bc439ce.jpg" alt="" width={150} />
                        <p className="text-aling-center">cadeira</p>
                        <p>Localização: Barra da Tijuca, rj</p>
                    </Box>
                    <Box className="box1">
                        <a href=""><img className="img2" src="https://images.tcdn.com.br/img/img_prod/1011547/cadeira_de_rodas_aco_90kg_1009_pneu_macico_ref_1632_jaguaribe_3399_1_bb2bf5fa0157777258d7f50b1bc439ce.jpg" alt="" width={150} /></a>
                        <p className="text-aling-center">cadeira</p>
                    </Box>
                    <Box className="box1"> 
                        <img className="img2" src="https://images.tcdn.com.br/img/img_prod/1011547/cadeira_de_rodas_aco_90kg_1009_pneu_macico_ref_1632_jaguaribe_3399_1_bb2bf5fa0157777258d7f50b1bc439ce.jpg" alt="" width={150} />
                        <p className="text-aling-center">cadeira</p>
                    </Box>
                    <Box className="box1"> 
                        <img className="img2" src="https://images.tcdn.com.br/img/img_prod/1011547/cadeira_de_rodas_aco_90kg_1009_pneu_macico_ref_1632_jaguaribe_3399_1_bb2bf5fa0157777258d7f50b1bc439ce.jpg" alt="" width={150} />
                        <p className="text-aling-center">cadeira</p>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;