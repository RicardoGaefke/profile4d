FROM mcr.microsoft.com/dotnet/core/sdk:3.0-alpine AS build

WORKDIR /app

COPY *.sln .
COPY src/. ./src/

WORKDIR /app/src/WebJob.Teste

RUN dotnet run
