define([
		'dojo/_base/declare',
		'dojo/dom',
		'dojo/dom-construct',
		'dijit/form/CheckBox',
		'dojo/on',
		'dijit/form/Button',
		'dijit/form/TextBox',
		'dojo/keys',
		'dijit/layout/BorderContainer',
		'dijit/layout/ContentPane',
		'dojo/query',
		'dojo/NodeList-traverse',
		'dojo/domReady!'
	], function(declare, dom, domConstruct, CheckBox, on, Button, TextBox, keys, BorderContainer, ContentPane, query){
	return declare('domUtils', null, {
		init: function(searchFunction){
			var borderContainer = new BorderContainer({
				style: 'height:700px; width: 1050px;'
			});
			var contentLeft = new ContentPane({
				content: [domConstruct.create("div", {id: 'user_list', style: 'float:top;height:50%;', innerHTML: 'Filter users</br>'}),
							domConstruct.create("div",{id: 'tag_list', style: 'float:bottom;height:50%;', innerHTML: 'Filter Tags</br>'})
						],
				region: "left",
				style: "width:300px"
			});
			borderContainer.addChild(contentLeft);

			var	contentCenter = new ContentPane({
				content: "<ul id='tweetlist'></ul>",
				region: "center"
			});
			borderContainer.addChild(contentCenter);

			var	textBox = new TextBox({
				id: 'searchBox',
				placeHolder: 'Enter handle',
				onKeyDown: function(event){
					if (event.keyCode == keys.ENTER) {
						searchFunction(this.get('value'));
					}
				}
			});

			var searchButton = new Button({
				id: 'searchButton',
				label: 'Search',
				onClick: function(){
					searchFunction(textBox.get('value'));
				}
			});

			var contentBottom = new ContentPane({
				content: [textBox.domNode, searchButton.domNode],
				region: "bottom"
			});
			borderContainer.addChild(contentBottom);

			borderContainer.placeAt(dom.byId('mainBody'));
			borderContainer.startup();
		},
		updateCheckBox: function(elementID, name, updateList) {
			console.log(updateList);
			new CheckBox({
				id: 'chk_' + name,
				Cvalue: name,
				checked: false,
				class: elementID,
				onChange: function () {
					updateList(this, elementID);
				}
			}).placeAt(elementID);
			var usrLabel = domConstruct.create('label', {for: 'chk_' + name, innerHTML: name});
			dom.byId(elementID).appendChild(usrLabel);
			domConstruct.place("<br />", usrLabel, "after");
		}
	});	
});