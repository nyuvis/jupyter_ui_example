jupyter_widget_d3
===============================

my_jupyter_d3

Installation
------------

To install use pip:

    $ pip install jupyter_d3_widget
    $ jupyter nbextension enable --py --sys-prefix jupyter_d3_widget

To install for jupyterlab

    $ jupyter labextension install jupyter_d3_widget

For a development installation (requires npm),

    $ git clone https://github.com//jupyter_widget_d3.git
    $ cd jupyter_widget_d3
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --sys-prefix jupyter_d3_widget
    $ jupyter nbextension enable --py --sys-prefix jupyter_d3_widget
    $ jupyter labextension install js

When actively developing your extension, build Jupyter Lab with the command:

    $ jupyter lab --watch

This takes a minute or so to get started, but then automatically rebuilds JupyterLab when your javascript changes.

Note on first `jupyter lab --watch`, you may need to touch a file to get Jupyter Lab to open.

