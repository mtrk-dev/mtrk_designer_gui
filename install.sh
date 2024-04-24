#!/bin/bash
set -e
echo "------------ Running the install script ---------------"
cd /opt/mtrk_designer_gui/app

# Add local folder to PATH
# export PATH=$PATH:/opt/.local/bin

pip install virtualenv
virtualenv ./venv
source ./venv/bin/activate

pip install -r mtrk_designer_api/requirements.txt

echo "----------------- Installed requiremenents --------------------------"
echo "--------------- Starting the MTRK web app service -------------------"
# Add the service file and run the mtrk systemd service.
sudo cp /opt/mtrk_designer_gui/mtrk_web_app.service /etc/systemd/system
sudo systemctl daemon-reload
sudo systemctl start mtrk_web_app

echo "-------------- Done -----------------"