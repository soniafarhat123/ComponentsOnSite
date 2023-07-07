import React from 'react';
import '../../theme/operation.css';
import { IonPage } from '@ionic/react';
import { Header } from '../../components/Header';
import {
    Buttons,
    Content,
    Icon,
    ToolBar,
} from '../../../lib/ionic-adapter-compo';
import { Button, ButtonFill, IconPosition } from '../../components';
import { appsOutline, filter, power } from 'ionicons/icons';
import { SearchBar } from '../../components/SearchBar';

const Container = (props: any) => {
    return <div></div>;
};

const Operations: React.FC = () => {
    return (
        <IonPage>
            <Header
                title="Opérations"
                titleClassName="toolbar-title"
                buttons={{
                    myButtons: (
                        <>
                            <Buttons slot="end">
                                <Button
                                    icon={{
                                        myIcon: <Icon icon={appsOutline} />,
                                        position: IconPosition.only,
                                    }}
                                />
                                /
                                <Button
                                    icon={{
                                        myIcon: (
                                            <Icon icon={power} color="danger" />
                                        ),
                                        position: IconPosition.only,
                                    }}
                                />
                            </Buttons>
                            ,
                        </>
                    ),
                }}
            >
                <ToolBar>
                    <SearchBar
                        triButton={{
                            myTriButton: (
                                <Button
                                    buttonType={ButtonFill.clear}
                                    className="button-icon"
                                    icon={{
                                        myIcon: <Icon icon={filter} />,
                                        position: IconPosition.only,
                                    }}
                                />
                            ),
                        }}
                    ></SearchBar>
                </ToolBar>
            </Header>
            <Content className="container"></Content>
        </IonPage>
    );
};

export default Operations;
