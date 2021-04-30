import {WinnersPage} from "./components/WinnersPage/WinnersPage";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {fetchData} from "./redux/feature/fetchData";
import {useIdleTimer} from "react-idle-timer";
import {WaitScreen} from "./components/WaitScreen/WaitScreen";


function App() {
    const dispatch = useDispatch();
    const [afk, setAfk] = useState(false);

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    const handleOnIdle = event => {
        setAfk(true);
    }

    const handleOnActive = event => {
        setAfk(false);
    }

    const handleOnAction = event => {

    }

    const {getRemainingTime, getLastActiveTime} = useIdleTimer({
        timeout: 6000,
        onIdle: handleOnIdle,
        onActive: handleOnActive,
        onAction: handleOnAction,
        debounce: 500
    })
    
    return (
        <div>
            {afk && <WaitScreen/>}
            <div className="App">
                <WinnersPage/>
            </div>
        </div>
    )
}

export default App;
