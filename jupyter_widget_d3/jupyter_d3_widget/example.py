'''
Change log:
- rename `class HelloWorld` as `Scatterplot`
- change HelloView and HelloModel to ScatterplotView and Scatterplot
'''
import ipywidgets as widgets
from traitlets import Unicode, List

# See js/lib/example.js for the frontend counterpart to this file.

@widgets.register
class Scatterplot(widgets.DOMWidget):
    """An example widget."""

    # Name of the widget view class in front-end
    _view_name = Unicode('ScatterplotView').tag(sync=True)

    # Name of the widget model class in front-end
    _model_name = Unicode('ScatterplotModel').tag(sync=True)

    # Name of the front-end module containing widget view
    _view_module = Unicode('jupyter_widget_d3').tag(sync=True)

    # Name of the front-end module containing widget model
    _model_module = Unicode('jupyter_widget_d3').tag(sync=True)

    # Version of the front-end module containing widget view
    _view_module_version = Unicode('^0.1.0').tag(sync=True)
    # Version of the front-end module containing widget model
    _model_module_version = Unicode('^0.1.0').tag(sync=True)

    # Widget specific property.
    # Widget properties are defined as traitlets. Any property tagged with `sync=True`
    # is automatically synced to the frontend *any* time it changes in Python.
    # It is synced back to Python from the frontend *any* time the model is touched.
    value = List([]).tag(sync=True)

    def initialize(self, value):
        self.value = value
