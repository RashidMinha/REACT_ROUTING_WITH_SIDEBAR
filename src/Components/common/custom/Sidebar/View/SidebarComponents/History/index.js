import React from "react";

const History = (props) => {
    const { show } = props
    if (show) {
        return (
            <>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <h2>
                        History
                    </h2>
                </div>
            </>
        )
    }
    return null
}

export default History