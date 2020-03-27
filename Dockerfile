FROM mcr.microsoft.com/dotnet/core/sdk:3.0-alpine AS build

### git clone -b dev --depth 1 git@github.com:RicardoGaefke/profile4d.git

WORKDIR /app

COPY *.sln .
COPY src/. ./src/

WORKDIR /app/src/WebJob.Teste

RUN dotnet publish -c Release

WORKDIR /app/src/WebJob.Teste/bin/Release/netcoreapp3.0

ENTRYPOINT ["dotnet", "WebJob.Teste.dll"]
