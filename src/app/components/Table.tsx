import React from 'react';
import { ITasks } from '../../../types/task';
import Delete from './Delete';
import Edit from './Edit';

const Table = () => {

    let rows: ITasks[] = [
        {
            Id:'0',
            Task:"Waza",
            finalDate: new Date(),
        },
    ]
    return <div>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Date</th>
                        <th >Edit</th>
                        <th >Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr className="hover">
                        <td>Cy Ganderton</td>
                        <td>03/05/2024</td>
                        <td><Edit/></td>
                        <td><Delete/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
};

export default Table;