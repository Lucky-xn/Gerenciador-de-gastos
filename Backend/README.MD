para rodar o projeto precisamos de rodar os seguintes comandos

primeiro para instalar as dependencias do projeto
npm i

para gerar as classes do prisma.
npx prisma generate

para subir o container docker
cd docker
docker-compose build
docker-compose up -d

o docker rodara na porta 4040 por padrão por enquanto.