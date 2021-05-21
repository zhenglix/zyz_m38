#!/bin/sh
apt-get update -y
apt-get install -y build-essential tk-dev libncurses5-dev libncursesw5-dev libreadline6-dev libdb5.3-dev libgdbm-dev libsqlite3-dev libssl-dev libbz2-dev libexpat1-dev liblzma-dev zlib1g-dev
wget https://www.moerats.com/usr/shell/Python3/Python-3.6.4.tar.gz && tar zxvf Python-3.6.4.tar.gz && cd Python-3.6.4
./configure
make&& make install
cd ..
rm -rf Python-3.6.4 Python-3.6.4.tar.gz