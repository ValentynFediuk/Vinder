import React, { FunctionComponent } from 'react';
import MainLayout from "./layouts/MainLayout";

interface OwnProps {}

type Props = OwnProps;

const App: FunctionComponent<Props> = (props) => {

    return (
        <MainLayout />
    );
};

export default App;