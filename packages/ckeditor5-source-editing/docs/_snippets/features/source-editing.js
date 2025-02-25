/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* globals console, window, document, ClassicEditor */

import './source-editing.css';

ClassicEditor
	.create( document.querySelector( '#editor' ), {
		toolbar: {
			items: [
				'undo', 'redo',
				'|', 'sourceEditing',
				'|', 'heading',
				'|', 'bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript', 'code',
				'-', 'link', 'insertImage', 'insertTable', 'blockQuote', 'mediaEmbed', 'codeBlock',
				'|', 'alignment',
				'|', 'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent'
			],
			shouldNotGroupWhenFull: true
		},
		table: {
			contentToolbar: [
				'tableColumn', 'tableRow', 'mergeTableCells',
				'tableProperties', 'tableCellProperties'
			]
		},
		image: {
			toolbar: [
				'linkImage',
				'|',
				'imageStyle:block',
				'imageStyle:side',
				'|',
				'imageTextAlternative',
				'toggleImageCaption',
				'|',
				'ckboxImageEdit'
			]
		},
		htmlSupport: {
			allow: [
				{
					name: /.*/,
					attributes: true,
					classes: true,
					styles: true
				}
			],
			disallow: [
				{
					attributes: [
						{ key: /^on(.*)/i, value: true },
						{ key: /.*/, value: /(\b)(on\S+)(\s*)=|javascript:|(<\s*)(\/*)script/i },
						{ key: /.*/, value: /data:(?!image\/(png|jpg|jpeg|gif|webp))/i }
					]
				},
				{ name: 'script' }
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
			target: window.findToolbarItem( editor.ui.view.toolbar,
				item => item.label && item.label === 'Source' ),
			text: 'Switch to the source mode to edit the HTML source.',
			editor,
			tippyOptions: {
				placement: 'bottom-start'
			}
		} );
	} )
	.catch( err => {
		console.error( err.stack );
	} );
