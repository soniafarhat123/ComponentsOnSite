import React, { useState } from 'react';
import { IonPage } from '@ionic/react';
import '../../theme/Login.css';
import { Image, Input } from '../../../lib/ionic-adapter-compo';
import { Button, Card } from '../../components';

const Container = (props: any) => {
    return <div className={props.className}>{props.children}</div>;
};

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword] = useState(false);
    return (
        <IonPage className="login-page-container">
            <Container className="login-card-container">
                <Image
                    src="/assets/images/logo-OnSite.4873292a.png"
                    className="logo-image"
                    alt="logo OnSite"
                ></Image>
                <Card
                    cardHeader={true}
                    className="login-card"
                    classNameCardHeader="login-card-header"
                    subtitle="Sign in"
                    classNameCardSubTitle="login-card-subtitle"
                >
                    <Input
                        label="Username *"
                        labelPlacement="stacked"
                        required
                        value={username}
                        placeholder="Enter your username"
                        onIonChange={(e) => setUsername(e.detail.value!)}
                        className="input-container"
                    />

                    <Input
                        label="Password"
                        labelPlacement="stacked"
                        required
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        placeholder="Enter your password"
                        onIonChange={(e) => setPassword(e.detail.value!)}
                        className="input-container"
                    ></Input>

                    <Button
                        label="Sign In"
                        type="submit"
                        className="login-button"
                    ></Button>
                </Card>
            </Container>
        </IonPage>
    );
};

export default Login;
