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

import { State, UrlHook, UrlHookWithPattern } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class States<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
	/**
	 * No description
	 *
	 * @tags state
	 * @name ListStates
	 * @summary Get list of states
	 * @request GET:/states
	 * @secure
	 */
	listStates = (
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
		});
	/**
	 * No description
	 *
	 * @tags state
	 * @name GetStatesSubscribes
	 * @summary Read current subscribes
	 * @request GET:/states/subscribe
	 * @secure
	 */
	getStatesSubscribes = (
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
		});
	/**
	 * No description
	 *
	 * @tags state
	 * @name SubscribeStates
	 * @summary Subscribe for state updates
	 * @request POST:/states/subscribe
	 * @secure
	 */
	subscribeStates = (Subscribe: UrlHookWithPattern, params: RequestParams = {}) =>
		this.request<void, void>({
			path: `/states/subscribe`,
			method: 'POST',
			body: Subscribe,
			secure: true,
			type: ContentType.Json,
			...params
		});
	/**
	 * @description If no filter provided, all subscribes will be cleared for this web hook
	 *
	 * @tags state
	 * @name UnsubscribeStates
	 * @summary Unsubscribe from state updates.
	 * @request DELETE:/states/subscribe
	 * @secure
	 */
	unsubscribeStates = (UnSubscribe: UrlHook, params: RequestParams = {}) =>
		this.request<void, void>({
			path: `/states/subscribe`,
			method: 'DELETE',
			body: UnSubscribe,
			secure: true,
			type: ContentType.Json,
			...params
		});
}
