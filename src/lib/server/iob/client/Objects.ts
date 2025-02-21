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

import { ObjectArray, UrlHook, UrlHookWithPattern } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Objects<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
	/**
	 * No description
	 *
	 * @tags object
	 * @name ListObjects
	 * @summary Get list of objects
	 * @request GET:/objects
	 * @secure
	 */
	listObjects = (
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
		});
	/**
	 * No description
	 *
	 * @tags state
	 * @name GetObjectsSubscribes
	 * @summary Read current subscribes
	 * @request GET:/objects/subscribe
	 * @secure
	 */
	getObjectsSubscribes = (
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
		});
	/**
	 * No description
	 *
	 * @tags object
	 * @name SubscribeObjects
	 * @summary Subscribe for objects updates
	 * @request POST:/objects/subscribe
	 * @secure
	 */
	subscribeObjects = (Subscribe: UrlHookWithPattern, params: RequestParams = {}) =>
		this.request<void, void>({
			path: `/objects/subscribe`,
			method: 'POST',
			body: Subscribe,
			secure: true,
			type: ContentType.Json,
			...params
		});
	/**
	 * @description If no filter provided, all the object subscribes will be cleared for this web hook
	 *
	 * @tags object
	 * @name UnsubscribeObjects
	 * @summary Unsubscribe from object updates
	 * @request DELETE:/objects/subscribe
	 * @secure
	 */
	unsubscribeObjects = (Unsubscribe: UrlHook, params: RequestParams = {}) =>
		this.request<void, void>({
			path: `/objects/subscribe`,
			method: 'DELETE',
			body: Unsubscribe,
			secure: true,
			type: ContentType.Json,
			...params
		});
}
