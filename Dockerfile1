FROM mcr.microsoft.com/dotnet/core/sdk:3.1-alpine AS build

RUN apk add --update nodejs npm
RUN npm cache clear --force && npm install -g npm

WORKDIR /app

COPY *.sln .
COPY src/. ./src/

RUN node
RUN export PATH="$PATH:/usr/bin/node"
RUN dotnet restore Profile4d.sln

WORKDIR /app/src/Web.Site

RUN npm run production
RUN dotnet publish -c Release -o out


FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-alpine AS runtime
WORKDIR /
COPY --from=build /app/src/Web.Site/out ./
ENTRYPOINT ["dotnet", "Web.Site.dll"]