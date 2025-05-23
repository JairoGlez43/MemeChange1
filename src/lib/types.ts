
export interface MemeCoin {
    address: string,
    coin:{
        bondingPairI: number,
        createdAt: string,
        description: string,
        id: number,
        imageUrl: string,
        name: string,
        updatedAt: string,
    },
    coinId: null,
    createdAt: string,
    creator: {
        address: string,
        airplane: string,
        createdAt: string,
        id: number,
        remainingGenerations: number,
        rewardPoints: number,
        updatedAt: string,
    },
    secondToken: string,
    state: string,
    updatedAt: string,
}
export interface FilteredMemeCoin {
    firstToken: string,
    creator: string,
    state: string,
    createdAt: string,
    address: string,
    coin: {
        name: string,
        description: string,
        imageUrl: string,
        createdAt: string,
    }
}

export type Coins = MemeCoin | FilteredMemeCoin;
export interface Data{
    items:Coins[] | [],
    total:number,
    hasMore: boolean,
}

export interface FetchingResult{
    data: Data,
    isLoading: boolean,
    error: string,
}

export type Status = 'active' | 'finished';

export interface FilterBarProps{
    value: string,
    setValue: (value: string) => void,
    status: string,
    setStatus: (status: string) => void,
}

export type FormData = {
    coinImage: File[],
    memecoinName: string,
    coinSymbol: string,
    description: string,
    firstToBuy: boolean,
}