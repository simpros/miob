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

import { DirResponse } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Dir<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
	/**
	 * No description
	 *
	 * @tags file
	 * @name ReadDir
	 * @summary List directory
	 * @request GET:/dir/{objectId}/{dirName}
	 * @secure
	 */
	readDir = (objectId: string, dirName: string, params: RequestParams = {}) =>
		this.request<DirResponse, void>({
			path: `/dir/${objectId}/${dirName}`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params
		});
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
	readDir2 = (objectId: string, params: RequestParams = {}) =>
		this.request<DirResponse, void>({
			path: `/dir/${objectId}`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params
		});
}
