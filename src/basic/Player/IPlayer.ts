import { IOptions } from "../Filter/IFilter";

export default interface IPlayer {
    changeVolume(): any;
    changeTime(value: string): any;
    Context: any;
    pause(): any;
    stop(): any;
    play(value?: number): any;
    setData(buffer: ArrayBuffer): any;
    Filters: any;
    DurationBuffer: any;
    CurrentTimeBuffer: any;
    Source: any;
    Buffer: any;
    createStandartFilters(): any;
    createFilter(option: IOptions): any;
} 