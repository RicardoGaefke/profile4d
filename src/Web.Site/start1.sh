#!/bin/bash

apt-get install curl
curl -sL https://deb.nodesource.com/setup_10.x | bash
apt-get install -y -qq nodejs

set -e
export PORT=8080
export ASPNETCORE_URLS=http://*:$PORT
dotnet "Web.Site.dll"
