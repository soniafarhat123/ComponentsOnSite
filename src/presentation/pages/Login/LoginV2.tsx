import React, { useState } from 'react';
import { IonPage } from '@ionic/react';
import '../../theme/LoginV2.css';
import { Icon, Image, Input } from '../../../lib/ionic-adapter-compo';
import { Button, ButtonFill, Card, IconPosition } from '../../components';
import { eyeOffOutline, eyeOutline } from 'ionicons/icons';

const Container = (props: any) => {
    return <div className={props.className}>{props.children}</div>;
};

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordToggleIcon, setPasswordToggleIcon] = useState(eyeOutline);
    const handlePasswordIcon = () => {
        setShowPassword(!showPassword);
        if (passwordToggleIcon == eyeOutline) {
            setShowPassword(!showPassword);
            setPasswordToggleIcon(eyeOffOutline);
        } else {
            setShowPassword(!showPassword);
            setPasswordToggleIcon(eyeOutline);
        }
    };
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
                    classNameCardContent="test"
                >
                    <Input
                        label="Username *"
                        labelPlacement="stacked"
                        required
                        value={username}
                        placeholder="Enter your username"
                        clearOnEdit={false}
                        onIonChange={(e) => setUsername(e.detail.value!)}
                        className="input-container"
                    />

                    <Container className="input-container">
                        <Input
                            label="Password"
                            labelPlacement="stacked"
                            required
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            placeholder="Enter your password"
                            onIonChange={(e) => setPassword(e.detail.value!)}
                        ></Input>
                        <Button
                            fill={ButtonFill.clear}
                            onClick={handlePasswordIcon}
                            className="icon-button"
                            icon={{
                                myIcon: (
                                    <Icon
                                        icon={passwordToggleIcon}
                                        color="medium"
                                        style={{
                                            fontSize: '1.16071rem',
                                            pointerEvents: 'auto',
                                        }}
                                    />
                                ),
                                position: IconPosition.only,
                            }}
                        />
                    </Container>
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
