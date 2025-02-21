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

import { Object, UrlHook } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Object<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
	/**
	 * No description
	 *
	 * @tags object
	 * @name ReadObject
	 * @summary Read object
	 * @request GET:/object/{objectId}
	 * @secure
	 */
	readObject = (objectId: string, params: RequestParams = {}) =>
		this.request<Object, void>({
			path: `/object/${objectId}`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params
		});
	/**
	 * @description Create new object. If object already exists, the error will be returned
	 *
	 * @tags object
	 * @name CreateObject
	 * @summary Create the object
	 * @request POST:/object/{objectId}
	 * @secure
	 */
	createObject = (objectId: string, value: Object, params: RequestParams = {}) =>
		this.request<Object, void>({
			path: `/object/${objectId}`,
			method: 'POST',
			body: value,
			secure: true,
			type: ContentType.Json,
			format: 'json',
			...params
		});
	/**
	 * @description To delete the parts of the object, set the value to 'null', like {"common": {"desc": null} to delete the "common.desc". If object does not exist it will be created
	 *
	 * @tags object
	 * @name UpdateObject
	 * @summary Update the object
	 * @request PUT:/object/{objectId}
	 * @secure
	 */
	updateObject = (objectId: string, value: Object, params: RequestParams = {}) =>
		this.request<Object, void>({
			path: `/object/${objectId}`,
			method: 'PUT',
			body: value,
			secure: true,
			type: ContentType.Json,
			format: 'json',
			...params
		});
	/**
	 * No description
	 *
	 * @tags object
	 * @name DeleteObject
	 * @summary Delete object
	 * @request DELETE:/object/{objectId}
	 * @secure
	 */
	deleteObject = (objectId: string, params: RequestParams = {}) =>
		this.request<void, void>({
			path: `/object/${objectId}`,
			method: 'DELETE',
			secure: true,
			...params
		});
	/**
	 * @description Subscribe on object changes
	 *
	 * @tags object
	 * @name SubscribeObject
	 * @summary Subscribe on object changes
	 * @request POST:/object/{objectId}/subscribe
	 * @secure
	 */
	subscribeObject = (objectId: string, url: UrlHook, params: RequestParams = {}) =>
		this.request<Object, void>({
			path: `/object/${objectId}/subscribe`,
			method: 'POST',
			body: url,
			secure: true,
			type: ContentType.Json,
			format: 'json',
			...params
		});
	/**
	 * @description Unsubscribe on object changes
	 *
	 * @tags object
	 * @name UnsubscribeObject
	 * @summary Unsubscribe from object changes
	 * @request DELETE:/object/{objectId}/subscribe
	 * @secure
	 */
	unsubscribeObject = (objectId: string, subscribe: UrlHook, params: RequestParams = {}) =>
		this.request<void, void>({
			path: `/object/${objectId}/subscribe`,
			method: 'DELETE',
			body: subscribe,
			secure: true,
			type: ContentType.Json,
			...params
		});
}
