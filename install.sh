#!/bin/bash
set -e
echo "------------ Running the install script ---------------"

# setting up nginx and hosting static files for viewer
sudo apt update
sudo apt install nginx
sudo systemctl start nginx
sudo systemctl enable nginx
sudo ufw allow 'Nginx Full'
sudo cp -r /opt/mtrk_viewer /var/www/mtrk_viewer
sudo cp /opt/mtrk_viewer/mtrk_viewer_nginx.conf /etc/nginx/sites-available
sudo ln -s /etc/nginx/sites-available/mtrk_viewer_nginx.conf /etc/nginx/sites-enabled
sudo systemctl reload nginx

cd /opt/mtrk_designer_gui

# Add local folder to PATH
# export PATH=$PATH:/opt/.local/bin

pip install virtualenv
virtualenv ./venv
source ./venv/bin/activate

pip install --isolated -r requirements.txt

echo "----------------- Installed requiremenents --------------------------"
echo "--------------- Starting the MTRK web app service -------------------"
# Add the service file and run the mtrk systemd service.
sudo cp /opt/mtrk_designer_gui/mtrk_web_app.service /etc/systemd/system
sudo systemctl daemon-reload
sudo systemctl start mtrk_web_app

echo "-------------- Done -----------------"