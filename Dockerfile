FROM openresty/openresty:1.21.4.1rc3-1-alpine-fat
RUN /usr/local/openresty/luajit/bin/luarocks install hashids
RUN /usr/local/openresty/luajit/bin/luarocks install lua-resty-ipmatcher