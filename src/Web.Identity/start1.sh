#!/bin/bash

apt-get install curl
curl -sL https://deb.nodesource.com/setup_12.x | bash
apt-get install -y -qq nodejs

set -e
export PORT=8080
export ASPNETCORE_URLS=http://*:$PORT
dotnet "Web.Identity.dll"
