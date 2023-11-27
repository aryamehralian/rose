#!/bin/bash

# Update and upgrade system
apt-get update -y
apt-get upgrade -y

# Enable IP forwarding
sysctl net.ipv4.ip_forward=1

# Set up iptables rules with new IP addresses
iptables -t nat -A PREROUTING -p tcp --dport 22 -j DNAT --to-destination IRANIAN_IP_ADDRESS
iptables -t nat -A PREROUTING -j DNAT --to-destination OUTSIDE_IRAN_IP_ADDRESS
iptables -t nat -A POSTROUTING -j MASQUERADE
