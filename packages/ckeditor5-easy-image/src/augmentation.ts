/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import type {
	EasyImage,
	CloudServicesUploadAdapter
} from './index.js';

declare module '@ckeditor/ckeditor5-core' {
	interface PluginsMap {
		[ EasyImage.pluginName ]: EasyImage;
		[ CloudServicesUploadAdapter.pluginName ]: CloudServicesUploadAdapter;
	}
}
