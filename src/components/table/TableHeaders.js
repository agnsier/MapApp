import React from 'react';

export const TableHeaders = ({data}) => (
    <tr>
        {data.map((header, key) => (<th key={`TableHeader-${key}`}>{header.name}</th>))}
    </tr>
);