import React, {useContext} from 'react';
import { ShopContext } from './App';

function Main(props) {

    const alert = useContext(ShopContext);
    console.log(alert);

    return (
        <div>
            <h1>Salom React</h1>
        </div>
    );
}

export default Main;