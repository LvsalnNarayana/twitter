import React from 'react';
import styles from './home.module.css';
// import Grid from '@mui/material/Grid';
// import Container from '@mui/material/Container'
import MenuSidebar from '../../components/menu-sidebar/MenuSidebar';

const Home = () => {
    return (
        <>
            {/* <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={3}>
                        <MenuSidebar />
                    </Grid>
                    <Grid item xs={6}>
                        <p>xs=4</p>
                    </Grid>
                    <Grid item xs={3}>
                        <p>xs=4</p>
                    </Grid>
                </Grid>
            </Container> */}

            <div className={styles.main_container}>
                <div className={styles.sidebar_container}>
                    <MenuSidebar/>
                </div>
                <div className={styles.action_container}></div>
                <div className={styles.trending_container}></div>
            </div>
        </>
    );
}

export default Home