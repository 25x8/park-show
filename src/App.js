import {WinnersPage} from "./components/WinnersPage/WinnersPage";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "./redux/feature/fetchData";
// import {useIdleTimer} from "react-idle-timer";
import {WaitScreen} from "./components/WaitScreen/WaitScreen";
import {selectAfkState} from "./redux/feature/slices/afkSlice";


function App() {
    const dispatch = useDispatch();
    const afkState = useSelector(state => selectAfkState(state));

    useEffect(() => {
        dispatch(fetchData())
    })

    // const handleOnIdle = event => {
    //     dispatch(changeAfkState(true));
    // }

    // const handleOnActive = event => {
    //     dispatch(changeAfkState(false));
    // }
    //
    // const handleOnAction = event => {
    //
    // }

    //  useIdleTimer({
    //     timeout: 25000,
    //     onIdle: handleOnIdle,
    //     onActive: handleOnActive,
    //     onAction: handleOnAction,
    //     debounce: 500
    // })

    return (
        <div>
            {afkState && <WaitScreen/>}
            <div className="App">
                <WinnersPage/>
            </div>
        </div>
    )
}

export default App;
