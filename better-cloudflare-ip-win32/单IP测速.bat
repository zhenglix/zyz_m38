chcp 936
@echo off
cd %~dp0
cls
set /p a=��������ѡ IP :
title  ���ڲ��� %a%
curl --resolve speed.cloudflare.com:443:%a% https://speed.cloudflare.com/__down?bytes=1000000000 -o nul --connect-timeout 5
pause
