import { Dayjs } from "dayjs"

export interface EquipmentSearchModel {
    equipmentCD: number | string,
    equipmentName: string,
    groupName: string,
    statusFlag: string,
    createDate:  Dayjs | null | undefined,
    updateDate:  Dayjs | null | undefined,
    createUID: string,
    updateUID: string
}

export const initEquipmentSearch: EquipmentSearchModel = {
    equipmentCD: '',
    equipmentName: '',
    groupName: '',
    statusFlag: '-1',
    createDate: null,
    updateDate: null,
    createUID: '',
    updateUID: ''
}