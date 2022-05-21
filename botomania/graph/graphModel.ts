import { NodeData, EdgeData } from 'reaflow'
import { capitalizeFirstLetter } from '../../ts-lib/strings'
import type { Module, SocialNetwork } from '../server/botCreationData'

export interface BotData {
    name: string
    description: string
    module?: Module
    networks: SocialNetwork[]
}

export const createInitial = (): BotData => ({
    name: 'Enter your bots name',
    description: '',
    module: undefined,
    networks: [] as SocialNetwork[],
})

export const createBotNode = (node: BotData): NodeData => ({
    id: '1',
    text: node.description ? `${node.name} - ${node.description}` : node.name,
    width: 400,
    height: 70,
})

export const createModuleNode = (node?: Module): NodeData => ({
    id: '2',
    text: capitalizeFirstLetter(node ?? 'Select a Module'),
    width: 150,
    height: 70,
})

export const createSocialMedia = (nodes: SocialNetwork[]): NodeData[] =>
    nodes.map((x, i) => ({
        id: `${2 + i + 1}`,
        text: x,
        width: 75,
        height: 30,
    }))

export const createEdges = (
    bot: NodeData,
    module: NodeData,
    sn: NodeData[]
) => {
    const botMod: EdgeData = {
        id: `${bot.id}-${module.id}`,
        from: bot.id,
        to: module.id,
    }

    const modToSn: EdgeData[] = sn.map(
        (x, i): EdgeData => ({
            id: `${module.id}-${x.id}`,
            from: module.id,
            to: x.id,
        })
    )

    return [botMod, ...modToSn]
}
