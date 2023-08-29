FROM node:16.18.0-alpine3.15
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories

# 字体初始化 https://wiki.alpinelinux.org/wiki/Fonts
# RUN apk add terminus-font ttf-inconsolata ttf-dejavu font-noto font-noto-cjk ttf-font-awesome font-noto-extra

# 中文字体 和 表情
# RUN apk add font-noto-emoji

# WORKDIR /usr/share/fonts
# RUN mkfontscale & mkfontdir & fc-cache -fv

# 安装 chromium
RUN apk add chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

# 设置工作目录，Docker镜像文件系统中的文件位置
RUN mkdir /guandata;
WORKDIR /guandata

COPY package.json .
COPY index.js .

RUN npm config set registry https://registry.npm.taobao.org && npm install

VOLUME /usr/local/lib/conf
VOLUME /usr/local/lib/logs

ENTRYPOINT cd /guandata; node index.js;