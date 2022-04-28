import React from "react";
import { Canvas, NodeData } from "reaflow";
import {BotData, createBotNode, createEdges, createModuleNode, createSocialMedia} from '../../const/graphModel';

interface IProps {
    botData: BotData
}

const BotCreationChart = ({ botData }: IProps) => {
    const nodes = [
      createBotNode(botData),
      createModuleNode(botData?.module),
      ...createSocialMedia(botData.networks),
    ];
      
    const edges = createEdges(nodes[0], nodes[1], nodes.slice(2));

    return (
        <div>
        <Canvas fit disabled width={800} height={600} nodes={nodes} edges={edges} />
        </div>
    )
}

export default BotCreationChart;