import React, { useState } from 'react';
import {
    IonApp,
    IonContent,
    IonRouterOutlet,
    setupIonicReact,
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './presentation/theme/variables.css';
import useSwitchDarkMode from './core/dark_light_mode/useSwitchDarkMode';
import { Redirect, Route } from 'react-router-dom';
import {
    Button,
    ButtonFill,
    IconPosition,
    TypeColor,
} from './presentation/components/Button';
import {
    caretUpSharp,
    eyeOffOutline,
    eyeOutline,
    filter,
    logoIonic,
} from 'ionicons/icons';
import { Icon, Image, Input, Popover } from './lib/ionic-adapter-compo';
import { Card } from './presentation/components';
import { IonReactRouter } from '@ionic/react-router';
import Login from './presentation/pages/Login/Login';
import { SearchBar } from './presentation/components/SearchBar';
import { List } from './presentation/components/List';
import { Item, LinesType } from './presentation/components/Item';
import './presentation/theme/test.css';

setupIonicReact();

function App() {
    const [darkMode, toggleDarkMode] = useSwitchDarkMode();
    const [showPopover, setShowPopover] = useState(false);

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordToggleIcon, setPasswordToggleIcon] = useState(eyeOutline);
    const handleActionClick = () => {
        console.log('Action clicked!');
    };
    const handleButtonClick = () => {
        console.log('Button clicked!');
    };
    const handlePasswordIcon = () => {
        setShowPassword(!showPassword);
        if (passwordToggleIcon == eyeOutline) {
            setPasswordToggleIcon(eyeOffOutline);
        } else {
            setPasswordToggleIcon(eyeOutline);
        }
    };

    return (
        <IonApp>
            {/* <IonContent>
                <button onClick={hello} type="button">
                    hello world !!
                </button>
                <IonList>
                    <IonItem lines="none">
                        <IonIcon slot="start" icon={darkMode ? sunny : moon} />
                        <IonLabel>
                            {darkMode
                                ? 'Switch to Light Mode'
                                : 'Switch to Dark Mode'}
                        </IonLabel>
                        <IonToggle
                            slot="end"
                            name="darkMode"
                            aria-label="toggle"
                            checked={darkMode}
                            onIonChange={toggleDarkMode}
                        />
                    </IonItem>
                    <IonItem lines="none">
                        <IonIcon
                            slot="start"
                            icon={darkMode ? sunny : moon}
                            onClick={toggleDarkMode}
                        />
                        <IonLabel>
                            {darkMode
                                ? 'Switch to Light Mode'
                                : 'Switch to Dark Mode'}
                        </IonLabel>
                    </IonItem>
                </IonList>
            </IonContent> */}
            {/* <style>{`

  .ion-cards {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 16px;
  }

 
`}</style> */}

            <IonContent>
                {/* <Button
                    color={TypeColor.primary}
                    fill={ButtonFill.outline}
                    icon={{
                        myIcon: <Icon icon={logoIonic} />,
                        position: IconPosition.only,
                    }}
                ></Button>
                <Button
                    color={TypeColor.dark}
                    icon={{
                        myIcon: <Icon icon={logoIonic} />,
                        position: IconPosition.only,
                    }}
                ></Button>
                <Button
                    color={TypeColor.medium}
                    fill={ButtonFill.clear}
                    label="Click me ! "
                    icon={{
                        myIcon: <Icon icon={logoIonic} />,
                        position: IconPosition.start,
                    }}
                    // onClick={() => console.log('hello')}
                    actions={[
                        {
                            item: <Icon icon={logoIonic} />,
                            call: () => {
                                console.log('helloworld');
                            },
                        },
                        {
                            item: <Icon icon={logoIonic} />,
                            call: () => {},
                        },
                    ]}
                ></Button>
                <div className="ion-cards">
                    <Card
                        cardHeader={true}
                        title="Formulaire1"
                        subtitle="hello world"
                        img={
                            'https://ionicframework.com/docs/img/demos/card-media.png'
                        }
                        styleCardHeader={{
                            paddingBottom: '0px',
                            paddingTop: '5px',
                        }}
                        onClickCard={() => {
                            console.log('helliw');
                        }}
                        className="ion-card"
                    ></Card>
                    <Card
                        cardHeader={true}
                        title="Formulaire2"
                        styleCardHeader={{
                            paddingBottom: '0px',
                            paddingTop: '5px',
                        }}
                        subtitle="hello world"
                        img={
                            'https://ionicframework.com/docs/img/demos/card-media.png'
                        }
                        className="ion-card"
                    ></Card>
                    <Card
                        cardHeader={true}
                        title="Formulaire3"
                        styleCardHeader={{
                            paddingBottom: '0px',
                            paddingTop: '5px',
                        }}
                        img={
                            'https://ionicframework.com/docs/img/demos/card-media.png'
                        }
                        className="ion-card"
                    ></Card>
                </div> */}

               
                
                {/* <>
                    <SearchBar
                        triButton={{
                            myTriButton: (
                                <Button
                                    fill={ButtonFill.clear}
                                    className="button-icon"
                                    id="popover-button-tri"
                                    onClick={handleButtonClick}
                                    icon={{
                                        myIcon: (
                                            <Icon
                                                icon={filter}
                                                slot="icon-only"
                                            />
                                        ),
                                        position: IconPosition.only,
                                    }}
                                    actions={[
                                        {
                                            item: (
                                                <Popover
                                                    trigger="popover-button-tri"
                                                    dismissOnSelect={false}
                                                    side="bottom"
                                                    alignment="center"
                                                    showBackdrop={false}
                                                    className="pop-width"
                                                >
                                                    <IonContent scrollY={true}>
                                                        <List
                                                            lines="full"
                                                            className="ion-list-padding"
                                                        >
                                                            <Item
                                                                button
                                                                onClick={() => {
                                                                    console.log(
                                                                        'hello'
                                                                    );
                                                                }}
                                                            >
                                                                <Icon
                                                                    icon={
                                                                        caretUpSharp
                                                                    }
                                                                    size="small"
                                                                    color="primary"
                                                                    slot="start"
                                                                ></Icon>
                                                                test
                                                            </Item>
                                                        </List>
                                                    </IonContent>
                                                </Popover>
                                            ),
                                        },
                                    ]}
                                />
                            ),
                        }}
                    />
                </> */}
            </IonContent>

            <IonReactRouter>
                <IonRouterOutlet>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/login" />
                    </Route>
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    );
}

export default App;
/**
 *
 * <IonReactRouter>
 *       <IonRouterOutlet>
 *         <Route exact path="/home">
 *           <Home />
 *         </Route>
 *         <Route exact path="/">
 *           <Redirect to="/home" />
 *         </Route>
 *       </IonRouterOutlet>
 *     </IonReactRouter>
 */
