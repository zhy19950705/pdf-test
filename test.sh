time=$(date "+%Y%m%d-%H%M%S")
echo "start build service-pagepdf-export:${time}"
docker build -t service-pagepdf-export:${time} .
# docker tag docker.io/library/service-pagepdf-export:${time}  registry.cn-hangzhou.aliyuncs.com/guandata/service-pagepdf-export:${time}
# docker push registry.cn-hangzhou.aliyuncs.com/guandata/service-pagepdf-export:${time}
docker run -d -p 6666:5500 service-pagepdf-export:${time}