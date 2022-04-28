import React from "react";
import { Canvas, NodeData } from "reaflow";
import {BotData, createBotNode, createEdges, createModuleNode, createSocialMedia} from '../../const/graphModel';

interface IProps {
    botData: BotData;
    width?: number;
    height?: number;
}

const BotCreationChart = ({ botData, width=300, height=300 }: IProps) => {
    const nodes = [
      createBotNode(botData),
      createModuleNode(botData?.module),
      ...createSocialMedia(botData.networks),
    ];
      
    const edges = createEdges(nodes[0], nodes[1], nodes.slice(2));

    return (
      <Canvas fit disabled width={width} height={height + 20} nodes={nodes} edges={edges} />
    )
}

export default BotCreationChart;