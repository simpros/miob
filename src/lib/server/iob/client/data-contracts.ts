/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface State {
	/** ID of the state */
	id?: string;
	/** Actual value */
	val?: any;
	/**
	 * Quality
	 * @format int32
	 */
	q?: number;
	/**
	 * Timestamp in ms from epoch of last update
	 * @format int64
	 */
	ts?: number;
	/**
	 * Timestamp in ms from epoch of last value change
	 * @format int64
	 */
	lc?: number;
	/** Is acknowledged. true = update, false = command */
	ack?: boolean;
	/** Instance, that wrote this value */
	from?: string;
	/** Expire in seconds */
	expire?: number;
	/** Always = state */
	type?: string;
	/** Common state description */
	common?: object;
	/** Native state description */
	native?: object;
}

export interface WriteState {
	/** Actual value */
	val?: any;
	/**
	 * Quality
	 * @format int32
	 */
	q?: number;
	/**
	 * Timestamp in ms from epoch of last update
	 * @format int64
	 */
	ts?: number;
	/**
	 * Timestamp in ms from epoch of last value change
	 * @format int64
	 */
	lc?: number;
	/** Is acknowledged. true = update, false = command */
	ack?: boolean;
	/** Expire in seconds */
	expire?: number;
}

export interface Object {
	/** ID of the state */
	_id?: string;
	/** Type of this object */
	type?:
		| 'state'
		| 'channel'
		| 'device'
		| 'enum'
		| 'instance'
		| 'adapter'
		| 'host'
		| 'chart'
		| 'script'
		| 'folder';
	/** Common state description */
	common?: object;
	/** Native state description */
	native?: object;
}

export type ObjectArray = Record<string, Object>;

export interface UrlHook {
	/** URL */
	url?: string;
	/** HTTP Method */
	method?: 'polling' | 'POST' | 'GET' | 'PUT' | 'PATCH';
}

export interface UrlHookWithPattern {
	/** URL */
	url?: string;
	/** If the updates must be delivered if the value changed */
	onchange?: boolean;
	/** Subscribe pattern like: "system.adapter.admin.0.*" */
	pattern: string;
	/** HTTP Method */
	method?: 'polling' | 'POST' | 'GET' | 'PUT' | 'PATCH';
}

export interface HistoryOptions {
	/** Start time in ms */
	start?: number;
	/** End time in ms */
	end?: number;
	/** number of values if aggregate is 'onchange' or number of intervals if other aggregate method. Count will be ignored if step is set, else default is 500 if not set */
	count?: number;
	/** if FROM field should be included in answer */
	from?: boolean;
	/** if ACK field should be included in answer */
	ack?: boolean;
	/** if Q field should be included in answer */
	q?: boolean;
	/** if ID field should be included in answer */
	addId?: boolean;
	/** do not return more entries than limit */
	limit?: number;
	/** if null values should be included (false), replaced by last not null value (true) or replaced with 0 (0) */
	ignoreNull?: boolean;
	/** By default additional border values are returned to optimize charting. Set this option to true if this is not wanted (e.g. for script data processing) */
	removeBorderValues?: boolean;
	/** The returned data are always sorted by timestamp ascending. When using aggregate none and also providing count or limit this means that normally the oldest entries are returned (unless no start data is provided). Set this option to true to get the newest entries instead. */
	returnNewestEntries?: boolean;
	/** Aggregation method */
	aggregate?:
		| 'minmax'
		| 'max'
		| 'min'
		| 'average'
		| 'total'
		| 'count'
		| 'percentile'
		| 'quantile'
		| 'integral'
		| 'none';
	/** (optional) when using aggregate method percentile defines the percentile level (0..100)(defaults to 50) */
	percentile?: number;
	/** (optional) when using aggregate method quantile defines the quantile level (0..1)(defaults to 0.5) */
	quantile?: number;
	/** (optional) when using aggregate method integral defines the unit in seconds (defaults to 60s). e.g. to get integral in hours for Wh or such, set to 3600. */
	integralUnit?: string;
	/** (optional) when using aggregate method integral defines the interpolation method (defaults to none). */
	integralInterpolation?: 'linear' | 'none';
}

export interface HistoryRequest {
	/** State ID */
	id: string;
	options?: HistoryOptions;
}

export interface HistoryEntry {
	/** Value */
	val?: any;
	/** Timestamp in ms */
	ts?: number;
	/** Acknowledge flag. Will be returned only if ACK set true in request options */
	ack?: boolean;
	/** Acknowledge flag. Will be returned only if FROM set true in request options */
	from?: boolean;
	/** Acknowledge flag. Will be returned only if Q set true in request options */
	q?: boolean;
	/** State ID. Will be returned only if addId set true in request options */
	id?: string;
}

export type HistoryResponse = HistoryEntry[];

export interface HistoryAddEntry {
	/** Value */
	val?: any;
	/** Timestamp in ms */
	ts?: number;
	/** Acknowledge flag. Will be returned only if ACK set true in request options */
	ack?: boolean;
	/** Acknowledge flag. Will be returned only if FROM set true in request options */
	from?: boolean;
	/** Acknowledge flag. Will be returned only if Q set true in request options */
	q?: boolean;
}

export interface HistoryAddRequest {
	/** State ID */
	id?: string;
	state?: HistoryAddEntry;
}

export interface HistoryAddResponse {
	/** true */
	success?: boolean;
	/** Error description */
	error?: string;
}

export interface EnumCommon {
	/** Name can be string or object */
	name?: string;
	/** Icon for category (optional) */
	icon?: string;
	/** Description can be string or object */
	desc?: string;
	members?: string[];
}

export interface EnumEntry {
	/** Enum ID */
	_id?: string;
	common?: EnumCommon;
	/** Always enum */
	type?: string;
}

export type EnumResponse = EnumEntry[];

export interface FileEntry {
	/** File name */
	file?: string;
	/** File size */
	stats?: {
		/** File size in bytes */
		size?: number;
	};
	/** Is directory */
	isDir?: boolean;
	/** Modification time in ms */
	modifiedAt?: number;
	/** Creation time in ms */
	createdAt?: number;
}

export type DirResponse = FileEntry[];

export interface SendToData {
	/** Message or command, like toScript */
	message?: string;
	/** String or JSON Object that will be sent */
	data?: object;
	/** If wait for answer */
	noAnswer?: boolean;
	/** Timeout for answer */
	timeout?: number;
}
