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

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
	/** set parameter to `true` for call `securityWorker` for this request */
	secure?: boolean;
	/** request path */
	path: string;
	/** content type of request body */
	type?: ContentType;
	/** query params */
	query?: QueryParamsType;
	/** format of response (i.e. response.json() -> format: "json") */
	format?: ResponseFormat;
	/** request body */
	body?: unknown;
	/** base url */
	baseUrl?: string;
	/** request cancellation token */
	cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> {
	baseUrl?: string;
	baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
	securityWorker?: (
		securityData: SecurityDataType | null
	) => Promise<RequestParams | void> | RequestParams | void;
	customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
	data: D;
	error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
	Json = 'application/json',
	FormData = 'multipart/form-data',
	UrlEncoded = 'application/x-www-form-urlencoded',
	Text = 'text/plain'
}

export class HttpClient<SecurityDataType = unknown> {
	public baseUrl: string = '/v1';
	private securityData: SecurityDataType | null = null;
	private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
	private abortControllers = new Map<CancelToken, AbortController>();
	private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

	private baseApiParams: RequestParams = {
		credentials: 'same-origin',
		headers: {},
		redirect: 'follow',
		referrerPolicy: 'no-referrer'
	};

	constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
		Object.assign(this, apiConfig);
	}

	public setSecurityData = (data: SecurityDataType | null) => {
		this.securityData = data;
	};

	protected encodeQueryParam(key: string, value: any) {
		const encodedKey = encodeURIComponent(key);
		return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
	}

	protected addQueryParam(query: QueryParamsType, key: string) {
		return this.encodeQueryParam(key, query[key]);
	}

	protected addArrayQueryParam(query: QueryParamsType, key: string) {
		const value = query[key];
		return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
	}

	protected toQueryString(rawQuery?: QueryParamsType): string {
		const query = rawQuery || {};
		const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key]);
		return keys
			.map((key) =>
				Array.isArray(query[key])
					? this.addArrayQueryParam(query, key)
					: this.addQueryParam(query, key)
			)
			.join('&');
	}

	protected addQueryParams(rawQuery?: QueryParamsType): string {
		const queryString = this.toQueryString(rawQuery);
		return queryString ? `?${queryString}` : '';
	}

	private contentFormatters: Record<ContentType, (input: any) => any> = {
		[ContentType.Json]: (input: any) =>
			input !== null && (typeof input === 'object' || typeof input === 'string')
				? JSON.stringify(input)
				: input,
		[ContentType.Text]: (input: any) =>
			input !== null && typeof input !== 'string' ? JSON.stringify(input) : input,
		[ContentType.FormData]: (input: any) =>
			Object.keys(input || {}).reduce((formData, key) => {
				const property = input[key];
				formData.append(
					key,
					property instanceof Blob
						? property
						: typeof property === 'object' && property !== null
							? JSON.stringify(property)
							: `${property}`
				);
				return formData;
			}, new FormData()),
		[ContentType.UrlEncoded]: (input: any) => this.toQueryString(input)
	};

	protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
		return {
			...this.baseApiParams,
			...params1,
			...(params2 || {}),
			headers: {
				...(this.baseApiParams.headers || {}),
				...(params1.headers || {}),
				...((params2 && params2.headers) || {})
			}
		};
	}

	protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
		if (this.abortControllers.has(cancelToken)) {
			const abortController = this.abortControllers.get(cancelToken);
			if (abortController) {
				return abortController.signal;
			}
			return void 0;
		}

		const abortController = new AbortController();
		this.abortControllers.set(cancelToken, abortController);
		return abortController.signal;
	};

	public abortRequest = (cancelToken: CancelToken) => {
		const abortController = this.abortControllers.get(cancelToken);

		if (abortController) {
			abortController.abort();
			this.abortControllers.delete(cancelToken);
		}
	};

	public request = async <T = any, E = any>({
		body,
		secure,
		path,
		type,
		query,
		format,
		baseUrl,
		cancelToken,
		...params
	}: FullRequestParams): Promise<HttpResponse<T, E>> => {
		const secureParams =
			((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
				this.securityWorker &&
				(await this.securityWorker(this.securityData))) ||
			{};
		const requestParams = this.mergeRequestParams(params, secureParams);
		const queryString = query && this.toQueryString(query);
		const payloadFormatter = this.contentFormatters[type || ContentType.Json];
		const responseFormat = format || requestParams.format;

		return this.customFetch(
			`${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
			{
				...requestParams,
				headers: {
					...(requestParams.headers || {}),
					...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {})
				},
				signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
				body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body)
			}
		).then(async (response) => {
			const r = response.clone() as HttpResponse<T, E>;
			r.data = null as unknown as T;
			r.error = null as unknown as E;

			const data = !responseFormat
				? r
				: await response[responseFormat]()
						.then((data) => {
							if (r.ok) {
								r.data = data;
							} else {
								r.error = data;
							}
							return r;
						})
						.catch((e) => {
							r.error = e;
							return r;
						});

			if (cancelToken) {
				this.abortControllers.delete(cancelToken);
			}

			if (!response.ok) throw data;
			return data;
		});
	};
}

/**
 * @title ioBroker Swagger UI
 * @version 2.0.3
 * @license Apache 2.0 (http://www.apache.org/licenses/LICENSE-2.0.html)
 * @baseUrl /v1
 * @externalDocs https://www.iobroker.net
 * @contact <admin@iobroker.net>
 *
 * This is a REST server for ioBroker.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
	state = {
		/**
		 * @description This path could be used for controlling of the state too. If you provide the value in request, so it will be handled as write request. For back compatibility with simple-api
		 *
		 * @tags state
		 * @name ReadState
		 * @summary Read value and all attributes of the state
		 * @request GET:/state/{stateId}
		 * @secure
		 */
		readState: (
			stateId: string,
			query?: {
				/** If with object information */
				withInfo?: boolean;
				/**
				 * Wait till the value written in ms
				 * @format int64
				 */
				timeout?: number;
				/** Value to write into state */
				value?: string;
			},
			params: RequestParams = {}
		) =>
			this.request<State, void>({
				path: `/state/${stateId}`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * No description
		 *
		 * @tags state
		 * @name UpdateState
		 * @summary Update the value of the state
		 * @request PATCH:/state/{stateId}
		 * @secure
		 */
		updateState: (
			stateId: string,
			data: WriteState,
			query?: {
				/**
				 * Wait till the value written in ms
				 * @format int64
				 */
				timeout?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<State, void>({
				path: `/state/${stateId}`,
				method: 'PATCH',
				query: query,
				body: data,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * No description
		 *
		 * @tags state
		 * @name ToggleState
		 * @summary Toggle value of the state
		 * @request GET:/state/{stateId}/toggle
		 * @secure
		 */
		toggleState: (
			stateId: string,
			query?: {
				/** Timeout in ms for the state will be updated again, e.g. for ack=true */
				timeout?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<State, void>({
				path: `/state/${stateId}/toggle`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags state
		 * @name PlainState
		 * @summary Get only value of the state.
		 * @request GET:/state/{stateId}/plain
		 * @secure
		 */
		plainState: (
			stateId: string,
			query?: {
				/** If value.toString() should be returned. Without this flag JSON.stringify(value) will be returned */
				extraPlain?: boolean;
			},
			params: RequestParams = {}
		) =>
			this.request<State, void>({
				path: `/state/${stateId}/plain`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * @description Subscribe on state changes
		 *
		 * @tags state
		 * @name SubscribeStateGet
		 * @summary Subscribe on state changes
		 * @request GET:/state/{stateId}/subscribe
		 * @secure
		 */
		subscribeStateGet: (
			stateId: string,
			query: {
				/** method=polling forces subscribe via long polling */
				method: 'polling' | 'POST' | 'GET' | 'PUT' | 'PATCH';
				/** If the updates must be delivered if the value changed */
				onchange?: boolean;
				/** Minimal delta to trigger the event */
				delta?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<State, void>({
				path: `/state/${stateId}/subscribe`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Subscribe on state changes
		 *
		 * @tags state
		 * @name SubscribeState
		 * @summary Subscribe on state changes
		 * @request POST:/state/{stateId}/subscribe
		 * @secure
		 */
		subscribeState: (
			stateId: string,
			subscribe: UrlHook,
			query?: {
				/** method=polling forces subscribe via long polling */
				method?: string;
			},
			params: RequestParams = {}
		) =>
			this.request<State, void>({
				path: `/state/${stateId}/subscribe`,
				method: 'POST',
				query: query,
				body: subscribe,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params
			}),

		/**
		 * @description Unsubscribe on state changes
		 *
		 * @tags state
		 * @name UnsubscribeState
		 * @summary Unsubscribe from state changes
		 * @request DELETE:/state/{stateId}/subscribe
		 * @secure
		 */
		unsubscribeState: (stateId: string, subscribe: UrlHook, params: RequestParams = {}) =>
			this.request<void, void>({
				path: `/state/${stateId}/subscribe`,
				method: 'DELETE',
				body: subscribe,
				secure: true,
				type: ContentType.Json,
				...params
			})
	};
	binary = {
		/**
		 * No description
		 *
		 * @tags binary
		 * @name ReadBinaryState
		 * @summary Read value of the binary state as stream
		 * @request GET:/binary/{stateId}
		 * @secure
		 */
		readBinaryState: (stateId: string, params: RequestParams = {}) =>
			this.request<void, void>({
				path: `/binary/${stateId}`,
				method: 'GET',
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags binary
		 * @name WriteBinaryState
		 * @summary Update the value of the state
		 * @request PATCH:/binary/{stateId}
		 * @secure
		 */
		writeBinaryState: (stateId: string, data: File, params: RequestParams = {}) =>
			this.request<State, void>({
				path: `/binary/${stateId}`,
				method: 'PATCH',
				body: data,
				secure: true,
				format: 'json',
				...params
			})
	};
	states = {
		/**
		 * No description
		 *
		 * @tags state
		 * @name ListStates
		 * @summary Get list of states
		 * @request GET:/states
		 * @secure
		 */
		listStates: (
			query: {
				/** Filter, like modbus.0.* */
				filter: string;
			},
			params: RequestParams = {}
		) =>
			this.request<Record<string, State>, void>({
				path: `/states`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * No description
		 *
		 * @tags state
		 * @name GetStatesSubscribes
		 * @summary Read current subscribes
		 * @request GET:/states/subscribe
		 * @secure
		 */
		getStatesSubscribes: (
			query: {
				/** The same method as by subscription */
				method: 'polling' | 'POST' | 'GET' | 'PUT' | 'PATCH';
				/** The same URL as by subscription. By polling it must be omitted */
				url?: string;
				/** Only if method=polling: session ID */
				sid?: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, void>({
				path: `/states/subscribe`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags state
		 * @name SubscribeStates
		 * @summary Subscribe for state updates
		 * @request POST:/states/subscribe
		 * @secure
		 */
		subscribeStates: (Subscribe: UrlHookWithPattern, params: RequestParams = {}) =>
			this.request<void, void>({
				path: `/states/subscribe`,
				method: 'POST',
				body: Subscribe,
				secure: true,
				type: ContentType.Json,
				...params
			}),

		/**
		 * @description If no filter provided, all subscribes will be cleared for this web hook
		 *
		 * @tags state
		 * @name UnsubscribeStates
		 * @summary Unsubscribe from state updates.
		 * @request DELETE:/states/subscribe
		 * @secure
		 */
		unsubscribeStates: (UnSubscribe: UrlHook, params: RequestParams = {}) =>
			this.request<void, void>({
				path: `/states/subscribe`,
				method: 'DELETE',
				body: UnSubscribe,
				secure: true,
				type: ContentType.Json,
				...params
			})
	};
	object = {
		/**
		 * No description
		 *
		 * @tags object
		 * @name ReadObject
		 * @summary Read object
		 * @request GET:/object/{objectId}
		 * @secure
		 */
		readObject: (objectId: string, params: RequestParams = {}) =>
			this.request<Object, void>({
				path: `/object/${objectId}`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Create new object. If object already exists, the error will be returned
		 *
		 * @tags object
		 * @name CreateObject
		 * @summary Create the object
		 * @request POST:/object/{objectId}
		 * @secure
		 */
		createObject: (objectId: string, value: Object, params: RequestParams = {}) =>
			this.request<Object, void>({
				path: `/object/${objectId}`,
				method: 'POST',
				body: value,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params
			}),

		/**
		 * @description To delete the parts of the object, set the value to 'null', like {"common": {"desc": null} to delete the "common.desc". If object does not exist it will be created
		 *
		 * @tags object
		 * @name UpdateObject
		 * @summary Update the object
		 * @request PUT:/object/{objectId}
		 * @secure
		 */
		updateObject: (objectId: string, value: Object, params: RequestParams = {}) =>
			this.request<Object, void>({
				path: `/object/${objectId}`,
				method: 'PUT',
				body: value,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params
			}),

		/**
		 * No description
		 *
		 * @tags object
		 * @name DeleteObject
		 * @summary Delete object
		 * @request DELETE:/object/{objectId}
		 * @secure
		 */
		deleteObject: (objectId: string, params: RequestParams = {}) =>
			this.request<void, void>({
				path: `/object/${objectId}`,
				method: 'DELETE',
				secure: true,
				...params
			}),

		/**
		 * @description Subscribe on object changes
		 *
		 * @tags object
		 * @name SubscribeObject
		 * @summary Subscribe on object changes
		 * @request POST:/object/{objectId}/subscribe
		 * @secure
		 */
		subscribeObject: (objectId: string, url: UrlHook, params: RequestParams = {}) =>
			this.request<Object, void>({
				path: `/object/${objectId}/subscribe`,
				method: 'POST',
				body: url,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params
			}),

		/**
		 * @description Unsubscribe on object changes
		 *
		 * @tags object
		 * @name UnsubscribeObject
		 * @summary Unsubscribe from object changes
		 * @request DELETE:/object/{objectId}/subscribe
		 * @secure
		 */
		unsubscribeObject: (objectId: string, subscribe: UrlHook, params: RequestParams = {}) =>
			this.request<void, void>({
				path: `/object/${objectId}/subscribe`,
				method: 'DELETE',
				body: subscribe,
				secure: true,
				type: ContentType.Json,
				...params
			})
	};
	objects = {
		/**
		 * No description
		 *
		 * @tags object
		 * @name ListObjects
		 * @summary Get list of objects
		 * @request GET:/objects
		 * @secure
		 */
		listObjects: (
			query: {
				/** Filter, like modbus.0.* */
				filter: string;
				/** Type of objects */
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
			},
			params: RequestParams = {}
		) =>
			this.request<ObjectArray, void>({
				path: `/objects`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * No description
		 *
		 * @tags state
		 * @name GetObjectsSubscribes
		 * @summary Read current subscribes
		 * @request GET:/objects/subscribe
		 * @secure
		 */
		getObjectsSubscribes: (
			query: {
				/** method=polling forces subscribe via long polling */
				method: 'polling' | 'POST' | 'GET' | 'PUT' | 'PATCH';
				/** The same URL as by subscription. By polling it must be omitted */
				url?: string;
				/** Only if method=polling: session ID */
				sid?: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, void>({
				path: `/objects/subscribe`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags object
		 * @name SubscribeObjects
		 * @summary Subscribe for objects updates
		 * @request POST:/objects/subscribe
		 * @secure
		 */
		subscribeObjects: (Subscribe: UrlHookWithPattern, params: RequestParams = {}) =>
			this.request<void, void>({
				path: `/objects/subscribe`,
				method: 'POST',
				body: Subscribe,
				secure: true,
				type: ContentType.Json,
				...params
			}),

		/**
		 * @description If no filter provided, all the object subscribes will be cleared for this web hook
		 *
		 * @tags object
		 * @name UnsubscribeObjects
		 * @summary Unsubscribe from object updates
		 * @request DELETE:/objects/subscribe
		 * @secure
		 */
		unsubscribeObjects: (Unsubscribe: UrlHook, params: RequestParams = {}) =>
			this.request<void, void>({
				path: `/objects/subscribe`,
				method: 'DELETE',
				body: Unsubscribe,
				secure: true,
				type: ContentType.Json,
				...params
			})
	};
	getHistory = {
		/**
		 * No description
		 *
		 * @tags history
		 * @name PostHistory
		 * @summary Reads history
		 * @request POST:/getHistory
		 * @secure
		 */
		postHistory: (Options: HistoryRequest, params: RequestParams = {}) =>
			this.request<HistoryResponse, void>({
				path: `/getHistory`,
				method: 'POST',
				body: Options,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params
			}),

		/**
		 * No description
		 *
		 * @tags history
		 * @name GetHistory
		 * @summary Reads history
		 * @request GET:/getHistory/{stateId}
		 * @secure
		 */
		getHistory: (
			stateId: string,
			query?: {
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
			},
			params: RequestParams = {}
		) =>
			this.request<HistoryResponse, void>({
				path: `/getHistory/${stateId}`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			})
	};
	addHistory = {
		/**
		 * No description
		 *
		 * @tags history
		 * @name AddHistoryByPost
		 * @summary Add entry to history
		 * @request POST:/addHistory
		 * @secure
		 */
		addHistoryByPost: (Options: HistoryAddRequest, params: RequestParams = {}) =>
			this.request<HistoryAddResponse, void>({
				path: `/addHistory`,
				method: 'POST',
				body: Options,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params
			}),

		/**
		 * No description
		 *
		 * @tags history
		 * @name AddHistoryByGet
		 * @summary Add entry to history
		 * @request GET:/addHistory/{stateId}
		 * @secure
		 */
		addHistoryByGet: (
			stateId: string,
			query: {
				/** Value */
				val: number;
				/** Timestamp in ms. If empty current time is used */
				ts?: number;
				/** Acknowledge flag */
				ack?: number;
				/** Quality flag */
				q?: number;
				/** From which instance */
				from?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<HistoryAddResponse, void>({
				path: `/addHistory/${stateId}`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			})
	};
	enum = {
		/**
		 * No description
		 *
		 * @tags enum
		 * @name ReadMainEnums
		 * @summary Reads categories of enums
		 * @request GET:/enum
		 * @secure
		 */
		readMainEnums: (params: RequestParams = {}) =>
			this.request<void, any>({
				path: `/enum`,
				method: 'GET',
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags enum
		 * @name ReadEnums
		 * @summary Reads enums of specific type
		 * @request GET:/enum/{enumId}
		 * @secure
		 */
		readEnums: (enumId: string, params: RequestParams = {}) =>
			this.request<EnumResponse, void>({
				path: `/enum/${enumId}`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params
			})
	};
	sendto = {
		/**
		 * @description You can send message to instance that supports it
		 *
		 * @tags sendTo
		 * @name SendTo
		 * @summary Send message to instance
		 * @request GET:/sendto/{instance}
		 * @secure
		 */
		sendTo: (
			instance: string,
			query: {
				/** Command name, like toScript */
				message: string;
				/** Data to be sent to instance. JSON or string */
				data?: string;
				/** Do not wait for answer or no answer */
				noResponse?: boolean;
				/** Timeout for answer */
				timeout?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<void, void>({
				path: `/sendto/${instance}`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * @description You can send message to instance that supports it
		 *
		 * @tags sendTo
		 * @name SendToPost
		 * @summary Send message to instance as POST
		 * @request POST:/sendto/{instance}
		 * @secure
		 */
		sendToPost: (instance: string, data: SendToData, params: RequestParams = {}) =>
			this.request<void, void>({
				path: `/sendto/${instance}`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				...params
			})
	};
	file = {
		/**
		 * No description
		 *
		 * @tags file
		 * @name ReadFile
		 * @summary Reads file
		 * @request GET:/file/{objectId}/{fileName}
		 * @secure
		 */
		readFile: (objectId: string, fileName: string, params: RequestParams = {}) =>
			this.request<void, void>({
				path: `/file/${objectId}/${fileName}`,
				method: 'GET',
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags file
		 * @name WriteFile
		 * @summary Writes file
		 * @request POST:/file/{objectId}/{fileName}
		 * @secure
		 */
		writeFile: (
			objectId: string,
			fileName: string,
			data: {
				/** File content */
				file: File;
			},
			params: RequestParams = {}
		) =>
			this.request<void, void>({
				path: `/file/${objectId}/${fileName}`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.FormData,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags file
		 * @name DeleteFile
		 * @summary deletes file
		 * @request DELETE:/file/{objectId}/{fileName}
		 * @secure
		 */
		deleteFile: (objectId: string, fileName: string, params: RequestParams = {}) =>
			this.request<void, void>({
				path: `/file/${objectId}/${fileName}`,
				method: 'DELETE',
				secure: true,
				...params
			})
	};
	dir = {
		/**
		 * No description
		 *
		 * @tags file
		 * @name ReadDir
		 * @summary List directory
		 * @request GET:/dir/{objectId}/{dirName}
		 * @secure
		 */
		readDir: (objectId: string, dirName: string, params: RequestParams = {}) =>
			this.request<DirResponse, void>({
				path: `/dir/${objectId}/${dirName}`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * No description
		 *
		 * @tags file
		 * @name ReadDir2
		 * @summary List directory
		 * @request GET:/dir/{objectId}
		 * @originalName readDir
		 * @duplicate
		 * @secure
		 */
		readDir2: (objectId: string, params: RequestParams = {}) =>
			this.request<DirResponse, void>({
				path: `/dir/${objectId}`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params
			})
	};
	command = {
		/**
		 * No description
		 *
		 * @tags commands
		 * @name GetStatesList
		 * @summary get the list of states for pattern (e.g. for system.adapter.admin.0.*). GUI can have problems by visualization of answer.
		 * @request GET:/command/getStates
		 * @secure
		 */
		getStatesList: (
			query: {
				pattern: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/getStates`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name GetForeignStatesList
		 * @summary same as getStates
		 * @request GET:/command/getForeignStates
		 * @secure
		 */
		getForeignStatesList: (
			query: {
				pattern: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/getForeignStates`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name GetStateList
		 * @summary get state value by ID
		 * @request GET:/command/getState
		 * @secure
		 */
		getStateList: (
			query: {
				id: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/getState`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name SetStateList
		 * @summary set state value with JSON object (e.g. {"val": 1, "ack": true})
		 * @request GET:/command/setState
		 * @secure
		 */
		setStateList: (
			query: {
				id: string;
				state: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/setState`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name GetBinaryStateList
		 * @summary get binary state by ID
		 * @request GET:/command/getBinaryState
		 * @secure
		 */
		getBinaryStateList: (
			query: {
				id: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/getBinaryState`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name SetBinaryStateList
		 * @summary set binary state by ID
		 * @request GET:/command/setBinaryState
		 * @secure
		 */
		setBinaryStateList: (
			query: {
				id: string;
				base64: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/setBinaryState`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name GetObjectList
		 * @summary get object by ID
		 * @request GET:/command/getObject
		 * @secure
		 */
		getObjectList: (
			query: {
				id: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/getObject`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name GetObjectsList
		 * @summary get all states and rooms. GUI can have problems by visualization of answer.
		 * @request GET:/command/getObjects
		 * @secure
		 */
		getObjectsList: (
			query: {
				list: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/getObjects`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name GetObjectViewList
		 * @summary get specific objects, e.g. design=system, search=state, params={"startkey": "system.adapter.admin.", "endkey": "system.adapter.admin.é¦"}
		 * @request GET:/command/getObjectView
		 * @secure
		 */
		getObjectViewList: (
			query: {
				design: string;
				search: string;
				/** JSON object */
				params: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/getObjectView`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name SetObjectList
		 * @summary set object with JSON object (e.g. {"common": {"type": "boolean"}, "native": {}, "type": "state"})
		 * @request GET:/command/setObject
		 * @secure
		 */
		setObjectList: (
			query: {
				id: string;
				/** JSON object */
				obj: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/setObject`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name DelObjectList
		 * @summary delete object by ID
		 * @request GET:/command/delObject
		 * @secure
		 */
		delObjectList: (
			query: {
				id: string;
				/** JSON object */
				options?: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/delObject`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name ReadFileList
		 * @summary read file, e.g. adapter=vis.0, fileName=main/vis-views.json. Additionally, you can set option in query binary=true to get answer as file and not as json
		 * @request GET:/command/readFile
		 * @secure
		 */
		readFileList: (
			query: {
				adapter: string;
				fileName: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/readFile`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name ReadFile64List
		 * @summary read file as base64 string, e.g. adapter=vis.0, fileName=main/vis-views.json. Additionally, you can set option in query binary=true to get answer as file and not as json
		 * @request GET:/command/readFile64
		 * @secure
		 */
		readFile64List: (
			query: {
				adapter: string;
				fileName: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/readFile64`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name WriteFile64List
		 * @summary write file, e.g. adapter=vis.0, fileName=main/vis-test.json, data64=eyJhIjogMX0=
		 * @request GET:/command/writeFile64
		 * @secure
		 */
		writeFile64List: (
			query: {
				adapter: string;
				fileName: string;
				data64: string;
				/** JSON object */
				options?: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/writeFile64`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name UnlinkList
		 * @summary delete file or folder
		 * @request GET:/command/unlink
		 * @secure
		 */
		unlinkList: (
			query: {
				adapter: string;
				name: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/unlink`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name DeleteFileList
		 * @summary delete file
		 * @request GET:/command/deleteFile
		 * @secure
		 */
		deleteFileList: (
			query: {
				adapter: string;
				name: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/deleteFile`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name DeleteFolderList
		 * @summary delete folder
		 * @request GET:/command/deleteFolder
		 * @secure
		 */
		deleteFolderList: (
			query: {
				adapter: string;
				name: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/deleteFolder`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name RenameFileList
		 * @summary rename file
		 * @request GET:/command/renameFile
		 * @secure
		 */
		renameFileList: (
			query: {
				adapter: string;
				oldName: string;
				newName: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/renameFile`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name RenameList
		 * @summary rename file or folder
		 * @request GET:/command/rename
		 * @secure
		 */
		renameList: (
			query: {
				adapter: string;
				oldName: string;
				newName: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/rename`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name MkdirList
		 * @summary create folder
		 * @request GET:/command/mkdir
		 * @secure
		 */
		mkdirList: (
			query: {
				adapter: string;
				dirName: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/mkdir`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name ReadDirList
		 * @summary read content of folder
		 * @request GET:/command/readDir
		 * @secure
		 */
		readDirList: (
			query: {
				adapter: string;
				dirName: string;
				/** JSON object */
				options?: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/readDir`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name ChmodFileList
		 * @summary change file mode. E.g. adapter=vis.0, fileName=main/*, options = {"mode": 0x644}
		 * @request GET:/command/chmodFile
		 * @secure
		 */
		chmodFileList: (
			query: {
				adapter: string;
				fileName: string;
				/** JSON object */
				options: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/chmodFile`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name ChownFileList
		 * @summary change file owner. E.g. adapter=vis.0, fileName=main/*, options = {"owner": "newOwner", "ownerGroup": "newgroup"}
		 * @request GET:/command/chownFile
		 * @secure
		 */
		chownFileList: (
			query: {
				adapter: string;
				fileName: string;
				/** JSON object */
				options: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/chownFile`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name FileExistsList
		 * @summary check if file exists
		 * @request GET:/command/fileExists
		 * @secure
		 */
		fileExistsList: (
			query: {
				adapter: string;
				fileName: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/fileExists`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name GetHostByIpList
		 * @summary read host information by IP. e.g. by localhost
		 * @request GET:/command/getHostByIp
		 * @secure
		 */
		getHostByIpList: (
			query: {
				ip: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/getHostByIp`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name ReadLogsList
		 * @summary read file name and size of log files. You can read them with http://ipaddress:8093/<fileName>
		 * @request GET:/command/readLogs
		 * @secure
		 */
		readLogsList: (
			query: {
				host: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/readLogs`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name DelStateList
		 * @summary delete state and object. Same as delObject
		 * @request GET:/command/delState
		 * @secure
		 */
		delStateList: (
			query: {
				id: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/delState`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name GetRatingsList
		 * @summary read adapter ratings (as in admin)
		 * @request GET:/command/getRatings
		 * @secure
		 */
		getRatingsList: (
			query?: {
				update?: boolean;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/getRatings`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name GetCurrentInstanceList
		 * @summary read adapter namespace (always rest-api.0)
		 * @request GET:/command/getCurrentInstance
		 * @secure
		 */
		getCurrentInstanceList: (params: RequestParams = {}) =>
			this.request<void, any>({
				path: `/command/getCurrentInstance`,
				method: 'GET',
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name DecryptList
		 * @summary decrypt string with system secret
		 * @request GET:/command/decrypt
		 * @secure
		 */
		decryptList: (
			query: {
				encryptedText: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/decrypt`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name EncryptList
		 * @summary encrypt string with system secret
		 * @request GET:/command/encrypt
		 * @secure
		 */
		encryptList: (
			query: {
				plainText: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/encrypt`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name GetAdaptersList
		 * @summary get objects of type "adapter". You can define optionally adapterName
		 * @request GET:/command/getAdapters
		 * @secure
		 */
		getAdaptersList: (
			query?: {
				adapterName?: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/getAdapters`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name UpdateLicensesList
		 * @summary read licenses from ioBroker.net portal
		 * @request GET:/command/updateLicenses
		 * @secure
		 */
		updateLicensesList: (
			query: {
				login: string;
				password: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/updateLicenses`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name GetCompactInstancesList
		 * @summary read list of instances with short information
		 * @request GET:/command/getCompactInstances
		 * @secure
		 */
		getCompactInstancesList: (params: RequestParams = {}) =>
			this.request<void, any>({
				path: `/command/getCompactInstances`,
				method: 'GET',
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name GetCompactAdaptersList
		 * @summary read list of installed adapters with short information
		 * @request GET:/command/getCompactAdapters
		 * @secure
		 */
		getCompactAdaptersList: (params: RequestParams = {}) =>
			this.request<void, any>({
				path: `/command/getCompactAdapters`,
				method: 'GET',
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name GetCompactInstalledList
		 * @summary read short information about installed adapters
		 * @request GET:/command/getCompactInstalled
		 * @secure
		 */
		getCompactInstalledList: (
			query: {
				host: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/getCompactInstalled`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name GetCompactSystemConfigList
		 * @summary read short system config
		 * @request GET:/command/getCompactSystemConfig
		 * @secure
		 */
		getCompactSystemConfigList: (params: RequestParams = {}) =>
			this.request<void, any>({
				path: `/command/getCompactSystemConfig`,
				method: 'GET',
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name GetCompactSystemRepositoriesList
		 * @request GET:/command/getCompactSystemRepositories
		 * @secure
		 */
		getCompactSystemRepositoriesList: (params: RequestParams = {}) =>
			this.request<void, any>({
				path: `/command/getCompactSystemRepositories`,
				method: 'GET',
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name GetCompactRepositoryList
		 * @summary read short repository
		 * @request GET:/command/getCompactRepository
		 * @secure
		 */
		getCompactRepositoryList: (
			query: {
				host: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/getCompactRepository`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name GetCompactHostsList
		 * @summary get short information about hosts
		 * @request GET:/command/getCompactHosts
		 * @secure
		 */
		getCompactHostsList: (params: RequestParams = {}) =>
			this.request<void, any>({
				path: `/command/getCompactHosts`,
				method: 'GET',
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name AddUserList
		 * @summary add new user
		 * @request GET:/command/addUser
		 * @secure
		 */
		addUserList: (
			query: {
				user: string;
				pass: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/addUser`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name DelUserList
		 * @summary delete user
		 * @request GET:/command/delUser
		 * @secure
		 */
		delUserList: (
			query: {
				user: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/delUser`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name AddGroupList
		 * @summary create new group
		 * @request GET:/command/addGroup
		 * @secure
		 */
		addGroupList: (
			query: {
				group: string;
				desc: string;
				acl: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/addGroup`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name DelGroupList
		 * @summary delete group
		 * @request GET:/command/delGroup
		 * @secure
		 */
		delGroupList: (
			query: {
				group: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/delGroup`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name ChangePasswordList
		 * @summary change user password
		 * @request GET:/command/changePassword
		 * @secure
		 */
		changePasswordList: (
			query: {
				user: string;
				pass: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/changePassword`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name GetAllObjectsList
		 * @summary read all objects as list. GUI can have problems by visualization of answer.
		 * @request GET:/command/getAllObjects
		 * @secure
		 */
		getAllObjectsList: (params: RequestParams = {}) =>
			this.request<void, any>({
				path: `/command/getAllObjects`,
				method: 'GET',
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name ExtendObjectList
		 * @summary modify object by ID with JSON. (.e.g. {"common":{"enabled": true}})
		 * @request GET:/command/extendObject
		 * @secure
		 */
		extendObjectList: (
			query: {
				id: string;
				/** JSON object */
				obj: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/extendObject`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name GetForeignObjectsList
		 * @summary same as getObjects
		 * @request GET:/command/getForeignObjects
		 * @secure
		 */
		getForeignObjectsList: (
			query: {
				pattern: string;
				type: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/getForeignObjects`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name DelObjectsList
		 * @summary delete objects by pattern
		 * @request GET:/command/delObjects
		 * @secure
		 */
		delObjectsList: (
			query: {
				id: string;
				/** JSON object */
				options?: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/delObjects`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name GetCommand
		 * @summary add log entry to ioBroker log
		 * @request GET:/command/log
		 * @secure
		 */
		getCommand: (
			query: {
				text: string;
				level?: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/log`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name CheckFeatureSupportedList
		 * @summary check if feature is supported by js-controller.
		 * @request GET:/command/checkFeatureSupported
		 * @secure
		 */
		checkFeatureSupportedList: (
			query: {
				feature:
					| 'ALIAS'
					| 'ALIAS_SEPARATE_READ_WRITE_ID'
					| 'ADAPTER_GETPORT_BIND'
					| 'ADAPTER_DEL_OBJECT_RECURSIVE'
					| 'ADAPTER_SET_OBJECT_SETS_DEFAULT_VALUE'
					| 'ADAPTER_AUTO_DECRYPT_NATIVE'
					| 'PLUGINS'
					| 'CONTROLLER_NPM_AUTO_REBUILD'
					| 'CONTROLLER_READWRITE_BASE_SETTINGS'
					| 'CONTROLLER_MULTI_REPO'
					| 'CONTROLLER_LICENSE_MANAGER'
					| 'DEL_INSTANCE_CUSTOM';
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/checkFeatureSupported`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name GetHistoryList
		 * @summary read history. See for options: https://github.com/ioBroker/ioBroker.history/blob/master/docs/en/README.md#access-values-from-javascript-adapter
		 * @request GET:/command/getHistory
		 * @secure
		 */
		getHistoryList: (
			query: {
				id: string;
				/** JSON object */
				options?: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/getHistory`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name HttpGetList
		 * @summary read URL from server. You can set binary=true to get answer as file
		 * @request GET:/command/httpGet
		 * @secure
		 */
		httpGetList: (
			query: {
				url: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/httpGet`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name SendToList
		 * @summary send command to instance. E.g. adapterInstance=history.0, command=getHistory, message={"id": "system.adapter.admin.0.memRss","options": {"aggregate": "onchange", "addId": true}}
		 * @request GET:/command/sendTo
		 * @secure
		 */
		sendToList: (
			query: {
				adapterInstance: string;
				command: string;
				/** JSON object */
				message: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/sendTo`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name ListPermissionsList
		 * @summary read static information with function permissions
		 * @request GET:/command/listPermissions
		 * @secure
		 */
		listPermissionsList: (params: RequestParams = {}) =>
			this.request<void, any>({
				path: `/command/listPermissions`,
				method: 'GET',
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name GetUserPermissionsList
		 * @summary read object with user permissions
		 * @request GET:/command/getUserPermissions
		 * @secure
		 */
		getUserPermissionsList: (params: RequestParams = {}) =>
			this.request<void, any>({
				path: `/command/getUserPermissions`,
				method: 'GET',
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name GetVersionList
		 * @summary read adapter name and version
		 * @request GET:/command/getVersion
		 * @secure
		 */
		getVersionList: (params: RequestParams = {}) =>
			this.request<void, any>({
				path: `/command/getVersion`,
				method: 'GET',
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name GetAdapterNameList
		 * @summary read adapter name (always rest-api)
		 * @request GET:/command/getAdapterName
		 * @secure
		 */
		getAdapterNameList: (params: RequestParams = {}) =>
			this.request<void, any>({
				path: `/command/getAdapterName`,
				method: 'GET',
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name ClientSubscribeList
		 * @request GET:/command/clientSubscribe
		 * @secure
		 */
		clientSubscribeList: (
			query: {
				targetInstance: string;
				messageType: string;
				data: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/clientSubscribe`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags commands
		 * @name GetAdapterInstancesList
		 * @summary get objects of type "instance". You can define optionally adapterName
		 * @request GET:/command/getAdapterInstances
		 * @secure
		 */
		getAdapterInstancesList: (
			query?: {
				adapterName?: string;
			},
			params: RequestParams = {}
		) =>
			this.request<void, any>({
				path: `/command/getAdapterInstances`,
				method: 'GET',
				query: query,
				secure: true,
				...params
			})
	};
}
