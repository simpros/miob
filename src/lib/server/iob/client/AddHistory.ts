/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { HistoryAddRequest, HistoryAddResponse } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class AddHistory<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
	/**
	 * No description
	 *
	 * @tags history
	 * @name AddHistoryByPost
	 * @summary Add entry to history
	 * @request POST:/addHistory
	 * @secure
	 */
	addHistoryByPost = (Options: HistoryAddRequest, params: RequestParams = {}) =>
		this.request<HistoryAddResponse, void>({
			path: `/addHistory`,
			method: 'POST',
			body: Options,
			secure: true,
			type: ContentType.Json,
			format: 'json',
			...params
		});
	/**
	 * No description
	 *
	 * @tags history
	 * @name AddHistoryByGet
	 * @summary Add entry to history
	 * @request GET:/addHistory/{stateId}
	 * @secure
	 */
	addHistoryByGet = (
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
		});
}
