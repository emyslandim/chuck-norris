import React, { useState, useEffect } from 'react';
import Card from '../../components/card/Card.jsx';
import Button from '../../components/button/Button.jsx';
import Select from '../../components/select/Select.jsx';
import './styles.css';
import Chuck from '../../assets/chuck.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FiArrowLeft } from 'react-icons/fi';
import { FiArrowRight } from 'react-icons/fi';
const Menu = () => {
    const [joke, setJoke] = useState("If you don't choose fast chuck will kick your ass");
    const [categoriesList, setCategoriesList] = useState([]);
    const [category, setCategory] = useState("Choose one");
    useEffect(() => {
        axios.get('https://api.chucknorris.io/jokes/categories').then(response => {
            setCategoriesList(response.data);
        })
    }, [categoriesList])

    function handleSelectedCategory(e) {
        const selectedCategory = e.target.value ? e.target.value : category;
        axios.get(`https://api.chucknorris.io/jokes/random?category=${selectedCategory}`).then(response => {
            setCategory(selectedCategory);
            setJoke(response.data.value);
        })
    }

    return (
        <>
            <section id="container">
                <div className="image-container">
                    <img className="chuck-image" src={Chuck} alt="God" />
                </div>
                <div id="form-container">
                    <div className="select-container">
                        <Select onChange={e => handleSelectedCategory(e)}>
                            <option defaultValue>Choose a category</option>
                            {
                                categoriesList.map(item => (
                                    <option key={item} value={item}>{item}</option>
                                ))

                            }
                        </Select>
                    </div>

                    <div className="card-container">
                        <Card title={`Category: ${category}`}>
                            {joke}
                        </Card>
                    </div>

                    <div className="button-container">
                        <Link to="/menu" style={{ textDecoration: 'none' }} hidden={category === "Choose one" ? true : false}>
                            <Button className="button" icon={<FiArrowRight />} text={'Next Joke'} onClick={handleSelectedCategory}/>
                        </Link>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Button className="button" icon={<FiArrowLeft />} text={'Go home'}/>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Menu;