import React from 'react';

const Card = ({ classname, backgroundColor, children }) => {
    return (
        <div className={`${classname} relative inline-block ${backgroundColor} md:w-full sm:w-full xs:w-full xss:w-full m-auto mr-5 mb-[-8px] mt-[50px] `}>
            {children}
        </div>
    );
}

export default Card;
