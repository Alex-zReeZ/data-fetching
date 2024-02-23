import React from 'react';

interface Props {
    date: string;
}

const SplitDate: React.FC<Props> = ({ date }) => {
    if (!date) {
        return <p>No date provided</p>;
    }

    const parts = date.split("T");

    return (
        <div>
            <p> The {parts[0]} at {parts[1]}</p>
        </div>
    );
};

export default SplitDate;