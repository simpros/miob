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

import { State, UrlHook, WriteState } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class State<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
	/**
	 * @description This path could be used for controlling of the state too. If you provide the value in request, so it will be handled as write request. For back compatibility with simple-api
	 *
	 * @tags state
	 * @name ReadState
	 * @summary Read value and all attributes of the state
	 * @request GET:/state/{stateId}
	 * @secure
	 */
	readState = (
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
		});
	/**
	 * No description
	 *
	 * @tags state
	 * @name UpdateState
	 * @summary Update the value of the state
	 * @request PATCH:/state/{stateId}
	 * @secure
	 */
	updateState = (
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
		});
	/**
	 * No description
	 *
	 * @tags state
	 * @name ToggleState
	 * @summary Toggle value of the state
	 * @request GET:/state/{stateId}/toggle
	 * @secure
	 */
	toggleState = (
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
		});
	/**
	 * No description
	 *
	 * @tags state
	 * @name PlainState
	 * @summary Get only value of the state.
	 * @request GET:/state/{stateId}/plain
	 * @secure
	 */
	plainState = (
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
		});
	/**
	 * @description Subscribe on state changes
	 *
	 * @tags state
	 * @name SubscribeStateGet
	 * @summary Subscribe on state changes
	 * @request GET:/state/{stateId}/subscribe
	 * @secure
	 */
	subscribeStateGet = (
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
		});
	/**
	 * @description Subscribe on state changes
	 *
	 * @tags state
	 * @name SubscribeState
	 * @summary Subscribe on state changes
	 * @request POST:/state/{stateId}/subscribe
	 * @secure
	 */
	subscribeState = (
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
		});
	/**
	 * @description Unsubscribe on state changes
	 *
	 * @tags state
	 * @name UnsubscribeState
	 * @summary Unsubscribe from state changes
	 * @request DELETE:/state/{stateId}/subscribe
	 * @secure
	 */
	unsubscribeState = (stateId: string, subscribe: UrlHook, params: RequestParams = {}) =>
		this.request<void, void>({
			path: `/state/${stateId}/subscribe`,
			method: 'DELETE',
			body: subscribe,
			secure: true,
			type: ContentType.Json,
			...params
		});
}
