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

import { SendToData } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Sendto<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
	/**
	 * @description You can send message to instance that supports it
	 *
	 * @tags sendTo
	 * @name SendTo
	 * @summary Send message to instance
	 * @request GET:/sendto/{instance}
	 * @secure
	 */
	sendTo = (
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
		});
	/**
	 * @description You can send message to instance that supports it
	 *
	 * @tags sendTo
	 * @name SendToPost
	 * @summary Send message to instance as POST
	 * @request POST:/sendto/{instance}
	 * @secure
	 */
	sendToPost = (instance: string, data: SendToData, params: RequestParams = {}) =>
		this.request<void, void>({
			path: `/sendto/${instance}`,
			method: 'POST',
			body: data,
			secure: true,
			type: ContentType.Json,
			...params
		});
}
