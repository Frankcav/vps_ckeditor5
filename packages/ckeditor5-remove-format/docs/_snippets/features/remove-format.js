/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* globals ClassicEditor, console, window, document */

import { CS_CONFIG } from '@ckeditor/ckeditor5-cloud-services/tests/_utils/cloud-services-config.js';

ClassicEditor
	.create( document.querySelector( '#editor' ), {
		cloudServices: CS_CONFIG,
		toolbar: {
			items: [
				'undo', 'redo', '|', 'heading',
				'|', 'fontSize', 'fontFamily',
				'|', 'bold', 'italic', 'underline', 'strikethrough', 'code', 'subscript', 'superscript',
				'|', 'removeformat',
				'-', 'link', 'insertImage', 'insertTable', 'mediaEmbed',
				'|', 'alignment',
				'|', 'bulletedList', 'numberedList', 'outdent', 'indent'
			],
			shouldNotGroupWhenFull: true
		},
		image: {
			toolbar: [
				'imageStyle:inline', 'imageStyle:block', 'imageStyle:side', '|',
				'toggleImageCaption', 'imageTextAlternative', 'ckboxImageEdit'
			]
		},
		ckbox: {
			forceDemoLabel: true
		},
		ui: {
			viewportOffset: {
				top: window.getViewportTopOffsetConfig()
			}
		}
	} )
	.then( editor => {
		window.editor = editor;

		window.attachTourBalloon( {
			target: window.findToolbarItem( editor.ui.view.toolbar, item => item.label && item.label === 'Remove Format' ),
			text: 'Click to clear formatting.',
			editor
		} );
	} )
	.catch( err => {
		console.error( err.stack );
	} );
