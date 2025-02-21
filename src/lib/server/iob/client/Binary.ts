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

import { State } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Binary<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
	/**
	 * No description
	 *
	 * @tags binary
	 * @name ReadBinaryState
	 * @summary Read value of the binary state as stream
	 * @request GET:/binary/{stateId}
	 * @secure
	 */
	readBinaryState = (stateId: string, params: RequestParams = {}) =>
		this.request<void, void>({
			path: `/binary/${stateId}`,
			method: 'GET',
			secure: true,
			...params
		});
	/**
	 * No description
	 *
	 * @tags binary
	 * @name WriteBinaryState
	 * @summary Update the value of the state
	 * @request PATCH:/binary/{stateId}
	 * @secure
	 */
	writeBinaryState = (stateId: string, data: File, params: RequestParams = {}) =>
		this.request<State, void>({
			path: `/binary/${stateId}`,
			method: 'PATCH',
			body: data,
			secure: true,
			format: 'json',
			...params
		});
}
