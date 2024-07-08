import React, {useState} from "react";
import DisplayGuardingList from "../guarding/DisplayGuardingList";

function DisplayListContainer() {
    const [resetKey, setResetKey] = useState(0);

    const handleReset = () => {
        setResetKey(prevKey => prevKey + 1);
    };

    return (
        <div>
            <DisplayGuardingList key={resetKey} doReset={handleReset} />
        </div>
    );
}

export default DisplayListContainer;