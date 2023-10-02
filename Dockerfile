# Esse comando pega aversao do node
FROM node:alpine

# Esse comando  execulta comandos lionux
#RUN mkdir -p /home/node/server && chown -R node:node /home/node/server

# Esse comando entra no diretorio citado
WORKDIR /app

# Esse comando  execulta comandos lionux
#RUN mkdir -p node_modules && chown -R node:node node_modules

# Esse comando copia o arquivo package.json para o build

COPY package.json ./
COPY .env ./
COPY ./prisma ./

# Esse comando criar usuario
#USER node

# Esse comando instala todas as dependencias do projeto, citada em package.jso
RUN npm install
RUN npm install prisma @prisma/client
#RUN npx prisma migrate dev --name ts

# Esse comando instala o @prisma/client
#RUN npm install @prisma/client
#RUN npm install prisma
#RUN npx prisma init
#RUN touch .env
#RUN echo "DATABASE_URL="postgres://xhaoutpu:c-WVZMCcsQIM41KgAhsNp1Joem2iQCKO@babar.db.elephantsql.com/xhaoutpu"" > .env
#RUN echo "APP_PORT=3002" >> .env
#RUN echo "APP_KEY="123XerebebelGrasy*"" >> .env

#
#RUN npx prisma db pull
#
#RUN npx prisma dev
#
#RUN npx prisma deplay

# Esse comando copia todos os arquivos do projeto para o container
COPY . .

# Esse comando libera a porta que você dejeja usar
EXPOSE 3001
EXPOSE 3002
EXPOSE 5432

# Esse comando roda literalmente o nosso programa
#CMD ["npm","run", "init"]
#CMD ["npm","run", "dbpull"]
#CMD ["npm","run", "migrate"]
CMD ["npm","run", "dev"]

#COMANDO PARA CRIAR O CONTAINER
# => docker build -t api_estoque_contaoner .

#COMANDO PARA RODAR O CONATAINER EM SEGUNDO PLANO
# => docker run -dp 3000:3000 --name MyApi api_estoque_contaoner