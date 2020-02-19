#!/bin/bash

apt-get install curl

# curl -sL https://deb.nodesource.com/setup_12.x | bash -
# apt-get install -y -qq nodejs

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
nvm install v12.6.0

set -e
export PORT=8080
export ASPNETCORE_URLS=http://*:$PORT
dotnet "Web.Identity.dll"
