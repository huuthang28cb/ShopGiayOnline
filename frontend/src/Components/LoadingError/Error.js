import React from 'react'

const Message = ({ variant, children }) => {
    return (
        <div className={`arlet ${variant}`}>
            {children}
        </div>
    )
};

Message.defaultProps = {
    variant: "arlet-info",
};

export default Message