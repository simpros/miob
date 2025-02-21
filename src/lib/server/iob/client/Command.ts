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

import { HttpClient, RequestParams } from './http-client';

export class Command<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
	/**
	 * No description
	 *
	 * @tags commands
	 * @name GetStatesList
	 * @summary get the list of states for pattern (e.g. for system.adapter.admin.0.*). GUI can have problems by visualization of answer.
	 * @request GET:/command/getStates
	 * @secure
	 */
	getStatesList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name GetForeignStatesList
	 * @summary same as getStates
	 * @request GET:/command/getForeignStates
	 * @secure
	 */
	getForeignStatesList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name GetStateList
	 * @summary get state value by ID
	 * @request GET:/command/getState
	 * @secure
	 */
	getStateList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name SetStateList
	 * @summary set state value with JSON object (e.g. {"val": 1, "ack": true})
	 * @request GET:/command/setState
	 * @secure
	 */
	setStateList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name GetBinaryStateList
	 * @summary get binary state by ID
	 * @request GET:/command/getBinaryState
	 * @secure
	 */
	getBinaryStateList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name SetBinaryStateList
	 * @summary set binary state by ID
	 * @request GET:/command/setBinaryState
	 * @secure
	 */
	setBinaryStateList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name GetObjectList
	 * @summary get object by ID
	 * @request GET:/command/getObject
	 * @secure
	 */
	getObjectList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name GetObjectsList
	 * @summary get all states and rooms. GUI can have problems by visualization of answer.
	 * @request GET:/command/getObjects
	 * @secure
	 */
	getObjectsList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name GetObjectViewList
	 * @summary get specific objects, e.g. design=system, search=state, params={"startkey": "system.adapter.admin.", "endkey": "system.adapter.admin.é¦"}
	 * @request GET:/command/getObjectView
	 * @secure
	 */
	getObjectViewList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name SetObjectList
	 * @summary set object with JSON object (e.g. {"common": {"type": "boolean"}, "native": {}, "type": "state"})
	 * @request GET:/command/setObject
	 * @secure
	 */
	setObjectList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name DelObjectList
	 * @summary delete object by ID
	 * @request GET:/command/delObject
	 * @secure
	 */
	delObjectList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name ReadFileList
	 * @summary read file, e.g. adapter=vis.0, fileName=main/vis-views.json. Additionally, you can set option in query binary=true to get answer as file and not as json
	 * @request GET:/command/readFile
	 * @secure
	 */
	readFileList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name ReadFile64List
	 * @summary read file as base64 string, e.g. adapter=vis.0, fileName=main/vis-views.json. Additionally, you can set option in query binary=true to get answer as file and not as json
	 * @request GET:/command/readFile64
	 * @secure
	 */
	readFile64List = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name WriteFile64List
	 * @summary write file, e.g. adapter=vis.0, fileName=main/vis-test.json, data64=eyJhIjogMX0=
	 * @request GET:/command/writeFile64
	 * @secure
	 */
	writeFile64List = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name UnlinkList
	 * @summary delete file or folder
	 * @request GET:/command/unlink
	 * @secure
	 */
	unlinkList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name DeleteFileList
	 * @summary delete file
	 * @request GET:/command/deleteFile
	 * @secure
	 */
	deleteFileList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name DeleteFolderList
	 * @summary delete folder
	 * @request GET:/command/deleteFolder
	 * @secure
	 */
	deleteFolderList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name RenameFileList
	 * @summary rename file
	 * @request GET:/command/renameFile
	 * @secure
	 */
	renameFileList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name RenameList
	 * @summary rename file or folder
	 * @request GET:/command/rename
	 * @secure
	 */
	renameList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name MkdirList
	 * @summary create folder
	 * @request GET:/command/mkdir
	 * @secure
	 */
	mkdirList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name ReadDirList
	 * @summary read content of folder
	 * @request GET:/command/readDir
	 * @secure
	 */
	readDirList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name ChmodFileList
	 * @summary change file mode. E.g. adapter=vis.0, fileName=main/*, options = {"mode": 0x644}
	 * @request GET:/command/chmodFile
	 * @secure
	 */
	chmodFileList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name ChownFileList
	 * @summary change file owner. E.g. adapter=vis.0, fileName=main/*, options = {"owner": "newOwner", "ownerGroup": "newgroup"}
	 * @request GET:/command/chownFile
	 * @secure
	 */
	chownFileList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name FileExistsList
	 * @summary check if file exists
	 * @request GET:/command/fileExists
	 * @secure
	 */
	fileExistsList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name GetHostByIpList
	 * @summary read host information by IP. e.g. by localhost
	 * @request GET:/command/getHostByIp
	 * @secure
	 */
	getHostByIpList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name ReadLogsList
	 * @summary read file name and size of log files. You can read them with http://ipaddress:8093/<fileName>
	 * @request GET:/command/readLogs
	 * @secure
	 */
	readLogsList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name DelStateList
	 * @summary delete state and object. Same as delObject
	 * @request GET:/command/delState
	 * @secure
	 */
	delStateList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name GetRatingsList
	 * @summary read adapter ratings (as in admin)
	 * @request GET:/command/getRatings
	 * @secure
	 */
	getRatingsList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name GetCurrentInstanceList
	 * @summary read adapter namespace (always rest-api.0)
	 * @request GET:/command/getCurrentInstance
	 * @secure
	 */
	getCurrentInstanceList = (params: RequestParams = {}) =>
		this.request<void, any>({
			path: `/command/getCurrentInstance`,
			method: 'GET',
			secure: true,
			...params
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name DecryptList
	 * @summary decrypt string with system secret
	 * @request GET:/command/decrypt
	 * @secure
	 */
	decryptList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name EncryptList
	 * @summary encrypt string with system secret
	 * @request GET:/command/encrypt
	 * @secure
	 */
	encryptList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name GetAdaptersList
	 * @summary get objects of type "adapter". You can define optionally adapterName
	 * @request GET:/command/getAdapters
	 * @secure
	 */
	getAdaptersList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name UpdateLicensesList
	 * @summary read licenses from ioBroker.net portal
	 * @request GET:/command/updateLicenses
	 * @secure
	 */
	updateLicensesList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name GetCompactInstancesList
	 * @summary read list of instances with short information
	 * @request GET:/command/getCompactInstances
	 * @secure
	 */
	getCompactInstancesList = (params: RequestParams = {}) =>
		this.request<void, any>({
			path: `/command/getCompactInstances`,
			method: 'GET',
			secure: true,
			...params
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name GetCompactAdaptersList
	 * @summary read list of installed adapters with short information
	 * @request GET:/command/getCompactAdapters
	 * @secure
	 */
	getCompactAdaptersList = (params: RequestParams = {}) =>
		this.request<void, any>({
			path: `/command/getCompactAdapters`,
			method: 'GET',
			secure: true,
			...params
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name GetCompactInstalledList
	 * @summary read short information about installed adapters
	 * @request GET:/command/getCompactInstalled
	 * @secure
	 */
	getCompactInstalledList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name GetCompactSystemConfigList
	 * @summary read short system config
	 * @request GET:/command/getCompactSystemConfig
	 * @secure
	 */
	getCompactSystemConfigList = (params: RequestParams = {}) =>
		this.request<void, any>({
			path: `/command/getCompactSystemConfig`,
			method: 'GET',
			secure: true,
			...params
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name GetCompactSystemRepositoriesList
	 * @request GET:/command/getCompactSystemRepositories
	 * @secure
	 */
	getCompactSystemRepositoriesList = (params: RequestParams = {}) =>
		this.request<void, any>({
			path: `/command/getCompactSystemRepositories`,
			method: 'GET',
			secure: true,
			...params
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name GetCompactRepositoryList
	 * @summary read short repository
	 * @request GET:/command/getCompactRepository
	 * @secure
	 */
	getCompactRepositoryList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name GetCompactHostsList
	 * @summary get short information about hosts
	 * @request GET:/command/getCompactHosts
	 * @secure
	 */
	getCompactHostsList = (params: RequestParams = {}) =>
		this.request<void, any>({
			path: `/command/getCompactHosts`,
			method: 'GET',
			secure: true,
			...params
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name AddUserList
	 * @summary add new user
	 * @request GET:/command/addUser
	 * @secure
	 */
	addUserList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name DelUserList
	 * @summary delete user
	 * @request GET:/command/delUser
	 * @secure
	 */
	delUserList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name AddGroupList
	 * @summary create new group
	 * @request GET:/command/addGroup
	 * @secure
	 */
	addGroupList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name DelGroupList
	 * @summary delete group
	 * @request GET:/command/delGroup
	 * @secure
	 */
	delGroupList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name ChangePasswordList
	 * @summary change user password
	 * @request GET:/command/changePassword
	 * @secure
	 */
	changePasswordList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name GetAllObjectsList
	 * @summary read all objects as list. GUI can have problems by visualization of answer.
	 * @request GET:/command/getAllObjects
	 * @secure
	 */
	getAllObjectsList = (params: RequestParams = {}) =>
		this.request<void, any>({
			path: `/command/getAllObjects`,
			method: 'GET',
			secure: true,
			...params
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name ExtendObjectList
	 * @summary modify object by ID with JSON. (.e.g. {"common":{"enabled": true}})
	 * @request GET:/command/extendObject
	 * @secure
	 */
	extendObjectList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name GetForeignObjectsList
	 * @summary same as getObjects
	 * @request GET:/command/getForeignObjects
	 * @secure
	 */
	getForeignObjectsList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name DelObjectsList
	 * @summary delete objects by pattern
	 * @request GET:/command/delObjects
	 * @secure
	 */
	delObjectsList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name GetCommand
	 * @summary add log entry to ioBroker log
	 * @request GET:/command/log
	 * @secure
	 */
	getCommand = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name CheckFeatureSupportedList
	 * @summary check if feature is supported by js-controller.
	 * @request GET:/command/checkFeatureSupported
	 * @secure
	 */
	checkFeatureSupportedList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name GetHistoryList
	 * @summary read history. See for options: https://github.com/ioBroker/ioBroker.history/blob/master/docs/en/README.md#access-values-from-javascript-adapter
	 * @request GET:/command/getHistory
	 * @secure
	 */
	getHistoryList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name HttpGetList
	 * @summary read URL from server. You can set binary=true to get answer as file
	 * @request GET:/command/httpGet
	 * @secure
	 */
	httpGetList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name SendToList
	 * @summary send command to instance. E.g. adapterInstance=history.0, command=getHistory, message={"id": "system.adapter.admin.0.memRss","options": {"aggregate": "onchange", "addId": true}}
	 * @request GET:/command/sendTo
	 * @secure
	 */
	sendToList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name ListPermissionsList
	 * @summary read static information with function permissions
	 * @request GET:/command/listPermissions
	 * @secure
	 */
	listPermissionsList = (params: RequestParams = {}) =>
		this.request<void, any>({
			path: `/command/listPermissions`,
			method: 'GET',
			secure: true,
			...params
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name GetUserPermissionsList
	 * @summary read object with user permissions
	 * @request GET:/command/getUserPermissions
	 * @secure
	 */
	getUserPermissionsList = (params: RequestParams = {}) =>
		this.request<void, any>({
			path: `/command/getUserPermissions`,
			method: 'GET',
			secure: true,
			...params
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name GetVersionList
	 * @summary read adapter name and version
	 * @request GET:/command/getVersion
	 * @secure
	 */
	getVersionList = (params: RequestParams = {}) =>
		this.request<void, any>({
			path: `/command/getVersion`,
			method: 'GET',
			secure: true,
			...params
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name GetAdapterNameList
	 * @summary read adapter name (always rest-api)
	 * @request GET:/command/getAdapterName
	 * @secure
	 */
	getAdapterNameList = (params: RequestParams = {}) =>
		this.request<void, any>({
			path: `/command/getAdapterName`,
			method: 'GET',
			secure: true,
			...params
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name ClientSubscribeList
	 * @request GET:/command/clientSubscribe
	 * @secure
	 */
	clientSubscribeList = (
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
		});
	/**
	 * No description
	 *
	 * @tags commands
	 * @name GetAdapterInstancesList
	 * @summary get objects of type "instance". You can define optionally adapterName
	 * @request GET:/command/getAdapterInstances
	 * @secure
	 */
	getAdapterInstancesList = (
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
		});
}
