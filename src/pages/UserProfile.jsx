
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Footer from '../components/shared/FooterFanimals';
import { Container, Divider, } from 'semantic-ui-react'
import '../UserProfile.css';
import UserCardProfile from '../components/users/UserCardProfile';
import NewCardPet from '../components/users/NewCardPet'
import FeedUsers from '../components/users/FeedUsers';
import GridImages from '../components/users/GridImages';
import {windowStyle} from '../App'

const UserProfile = () => (
    <div className="superContainer">
        
        <Container style={windowStyle} className="container" fluid textAlign="center" >
            
            <div className="container-divs">
                <div className="card-container">
                    <div>
                        <UserCardProfile />
                    </div>
                </div>
                <div className="container-right">
                    <Divider horizontal inverted>
                        Mascotas
                    </Divider>
                    <div className="pet-conatiner">
                        <NewCardPet/>
                    </div>
                    <Divider horizontal inverted>
                        Galería
                    </Divider>
                    <br />
                    <div>
                        <GridImages />
                    </div>
                    <br />
                    <div className="comments">
                        <FeedUsers />
                    </div>
                </div>
            </div>
            <Footer />
        </Container >
    </div>
)

export default UserProfile;

