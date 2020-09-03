# Customized UI in Jupyter

### How to render a visualization in jupyter widget using d3

- generate a template project using cookiecutter (follow the steps in [widget-cookiecutter](https://github.com/jupyter-widgets/widget-cookiecutter))

  - install cookiecutter

  ```
  $ pip install cookiecutter
  ```

  - generate template project for widget

  ```
  $ cookiecutter https://github.com/jupyter/widget-cookiecutter.git
  ```

  You will need to answer a few questions to generate the template project. For the `jupyter_widget_d3` example I include in this repo, I replied as below:

  ```
  author_name []: [my name]
  author_email []: [my email]
  github_project_name [jupyter-widget-example]: jupyter_widget_d3
  github_organization_name []:
  python_package_name [jupyter_widget_example]: jupyter_d3_widget
  npm_package_name [jupyter_widget_d3]: jupyter_widget_d3
  ```

  So the replies above enable the cookiecutter to make a project named `jupyter_widget_d3` and the python library you need to install is called `jupyter_d3_widget`. Here I just name them differently to make it clear where the names are used, you can definitely use the same name for you project and your library.

  

- Local Dev Installation for Classic Notebook (see the explanations in [the jupyter widget cookiecutter - local installation](https://github.com/jupyter-widgets/widget-cookiecutter#local-dev-installation-for-classic-notebook)). To make it simple, I include a script in  `jupyter_widget_d3/` folder. You can simply run the following command in `jupyter_widget_d3/` .

  ```
  source build.sh
  ```

  Please notice that if you install this widget for the first time, you will need to uncomment the last two lines in the script to enable this widget to be rendered in the jupyter notebook.

- Render the widget in jupyter notebook. You can check  the notebook [widget_usage.ipynb](https://github.com/nyuvis/jupyter_ui_example/blob/master/widget_usage.ipynb).

