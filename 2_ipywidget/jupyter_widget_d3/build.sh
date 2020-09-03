cd jupyter_d3_widget
rm -r static
cd ../js
rm -r dist
npm install
cd ..
pip install -e .

# run for the first time
# jupyter nbextension install --py --symlink --sys-prefix jupyter_d3_widget
# jupyter nbextension enable --py --sys-prefix jupyter_d3_widget