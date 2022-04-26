import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SocialNetwork } from "../../const/constants";
import { Networks } from "../Networks/Networks";

export interface Bot {
    name: string;
    description: string;
    SocialNetwork: SocialNetwork[];
    isActive: boolean;
}

interface IProps {
    bots: Bot[];
}

export const BotDetails = ({bots}: IProps) => 
<>
<table className="bp4-html-table details-table bp4-interactive">
    <thead>
        <tr>
            <th className="name">Bot Name</th>
            <th className="desc">Description</th>
            <th className="sn">Supported Social Networks</th>
            <th className="stat">Status</th>
        </tr>
    </thead>
    <tbody>
    { bots.map((x, i) => (
        <tr key={`bot-desc-${i}`}>
            <td>{x.name}</td>
            <td>{x.description}</td>
            <td className="sn"><Networks networks={x.SocialNetwork}/></td>
            <td>
                <div className='indicator'>
                    <FontAwesomeIcon icon={'circle'} color={x.isActive ? 'green' : 'red'}/>
                </div>
            </td>
        </tr>
    ))}
    </tbody>
</table>
<style jsx>{`
    table {
        max-width: fit-content;
    }

    th, tr:not(:last-child) > td {
        border-bottom: 1px solid;
        border-color: white;
    }

    th:not(:last-child), td:not(:last-child) {
        border-right: 1px solid;
        border-color: white
    }

    .name {
        width: 15%;
    }

    .desc {
        width: 25%;
    }

    .sn {
        width: 40%;
    }

    .indicator {
        display: flex;
        justify-content: center;
    }

    .details-table {
        width: 100%;
        height: 100%;
    }

    .details-table > tbody > tr > td {
        color: white; 
        border-color: white
    }

    .details-table > thead > tr > th {
        text-align: center;
        color: white;
    }
`}</style>
</>