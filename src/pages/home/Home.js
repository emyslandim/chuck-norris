import React from 'react';
import Card from '../../components/card/Card.jsx';
import Button from '../../components/button/Button.jsx';
import './styles.css';
import Chuck from '../../assets/chuck.png';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
const Home = () => {

    return (
        <>
            <section id="container">
                <div className="image-container">
                    <img className="chuck-image" src={Chuck} alt="God" />
                </div>
                <div id="form-container">
                    <div className="card-container">
                        <Card title="Are you ready?">
                            Welcome to chuck norris jokes api, here you will learn a little bit of all the knowledge that
                            chuck norris has. Enjoy!
                        </Card>
                    </div>
                    <Link to="/menu" style={{textDecoration: 'none'}}>
                    <div className="button-container">
                        <Button className="button" text={'lets go'} icon={<FiLogIn/>}/>
                    </div>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Home;