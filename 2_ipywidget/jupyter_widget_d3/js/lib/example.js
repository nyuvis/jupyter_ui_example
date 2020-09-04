/* 
Change log:
- import the scatterplot as d3_scatterplot
- rename HelloModel and HelloView as ScatterplotModel and ScatterplotView
*/
var widgets = require('@jupyter-widgets/base');
var d3_scatterplot = require('./scatterplot.js');
var _ = require('lodash');

// See example.py for the kernel counterpart to this file.


// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including
//
//  - `_view_name`
//  - `_view_module`
//  - `_view_module_version`
//
//  - `_model_name`
//  - `_model_module`
//  - `_model_module_version`
//
//  when different from the base class.

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be specified.
var ScatterplotModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name : 'ScatterplotModel',
        _view_name : 'ScatterplotView',
        _model_module : 'jupyter_widget_d3',
        _view_module : 'jupyter_widget_d3',
        _model_module_version : '0.1.0',
        _view_module_version : '0.1.0',
        value : [],
        clicked_dot: -1,
    })
});


// Custom View. Renders the widget model.
var ScatterplotView = widgets.DOMWidgetView.extend({
    // Defines how the widget gets rendered into the DOM
    render: function() {
        // explicit
        let that = this;

        this.loadAndCreateToolElement();


        // Observe changes in the value traitlet in Python, and define
        // a custom callback.
        that.model.on('change:value', that.value_changed, that);

        // debug in browser
        window.dom = that.el;
    },

    value_changed: function() {
        let that = this;
        d3_projection.render_scatterplot(that);
    },

    loadAndCreateToolElement: function() {
        let that = this;

        // scatterplot rendering
        d3_scatterplot.create(that);
    },
});


module.exports = {
    ScatterplotModel: ScatterplotModel,
    ScatterplotView: ScatterplotView
};
