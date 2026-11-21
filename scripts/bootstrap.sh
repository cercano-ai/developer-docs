#!/bin/sh
set -eu
cd "$(dirname "$0")/.."
revision=5a580a656bb305532fda485b91fa18d291b84eda
version=0.14.262-docs.5a580a6
if [ -x .tools/bin/chloroplast ]; then exit 0; fi
mkdir -p .tools/chloroplast-src .tools/packages
source_repo=${CHLOROPLAST_SOURCE:-../../wilderness_labs/Chloroplast}
if [ ! -d "$source_repo/.git" ]; then
  git clone https://github.com/WildernessLabs/Chloroplast.git .tools/upstream
  source_repo=.tools/upstream
fi
git -C "$source_repo" archive --output="$(pwd)/.tools/chloroplast-source.tar" "$revision"
tar -xf .tools/chloroplast-source.tar -C .tools/chloroplast-src
dotnet pack .tools/chloroplast-src/toolsrc/Chloroplast.Tool/Chloroplast.Tool.csproj -c Release -o .tools/packages -p:Version="$version"
dotnet tool install Chloroplast.Tool --version "$version" --tool-path .tools/bin --add-source "$(pwd)/.tools/packages"
