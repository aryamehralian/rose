#!/bin/bash

# Update the apt package index and upgrade installed packages
sudo apt-get update -y && sudo apt-get upgrade -y

# Install the curl package
sudo apt install curl -y

# Run the installation script for X UI from the GitHub repository
bash <(curl -Ls https://raw.githubusercontent.com/vaxilu/x-ui/master/install.sh)
