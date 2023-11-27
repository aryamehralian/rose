#!/bin/bash

# Command to install the 'socat' package using apt-get
sudo apt-get install socat

# Command to fetch and install acme.sh
curl https://get.acme.sh | sh

# Command to set the default certificate authority (CA) to Let's Encrypt
~/.acme.sh/acme.sh --set-default-ca --server letsencrypt

# Command to register an account with the provided email
~/.acme.sh/acme.sh --register-account -m info@domain.com

# Command to issue a certificate for the domain a.domain.com using the standalone method
~/.acme.sh/acme.sh --issue -d a.domain.com --standalone

# Command to install the certificate for the domain a.domain.com and save the private key and fullchain file
~/.acme.sh/acme.sh --installcert -d a.domain.com --key-file /root/private.key --fullchain-file /root/cert.crt
