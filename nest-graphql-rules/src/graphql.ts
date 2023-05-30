
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Rule {
    id: string;
    name: string;
    description?: Nullable<string>;
    owner?: Nullable<string>;
    createdBy?: Nullable<string>;
    filter: JSON;
    action: JSON;
    activated: boolean;
    schedule: Schedule;
}

export interface Schedule {
    startDate?: Nullable<Date>;
    stopDate?: Nullable<Date>;
}

export interface IQuery {
    rules(): Nullable<Nullable<Rule>[]> | Promise<Nullable<Nullable<Rule>[]>>;
    rule(id: string): Nullable<Rule> | Promise<Nullable<Rule>>;
}

export type JSON = any;
type Nullable<T> = T | null;
