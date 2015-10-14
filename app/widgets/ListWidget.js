define([
    'dojo/_base/declare',
    'dojo/dom-style',
    'dojo/on',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/text!./templates/list.html'
    ], function(declare, domStyle, on, _WidgetBase, _TemplateMixin, template){
   return declare([_WidgetBase, _TemplateMixin], {
        templateString: template,
        postCreate: function(){
            this.inherited(arguments);
            domStyle.set(this.domNode, 'backgroundColor', '#ffff');
            //this.own(
            //    on(this.domNode, mouse.enter, hitch(this, '_changeBackground', '#0000')),
            //    on(this.domNode, mouse.leave, hitch(this, '_changeBackground', '#FFFF'))
            //);
        },
        _changeBackground: function(color){

        },
       show: function(){
           domStyle.set(this.domNode, 'display', 'block');
       },
       hide: function(){
           domStyle.set(this.domNode, 'display', 'none');
       }
   });
});
