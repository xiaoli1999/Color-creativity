FROM nginx:alpine
MAINTAINER seezt<seezt@vip.qq.com>
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/  /usr/share/nginx/html/
EXPOSE 8405
CMD ["nginx", "-g", "daemon off;"]
