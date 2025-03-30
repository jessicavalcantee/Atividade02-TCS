FROM node:18-alpine 
WORKDIR /app 
COPY . . 
RUN yarn install --production 
CMD ["node", "src/index.js"] 
EXPOSE 3000

# Para construir uma imagem a partir de um Dockerfile, utilizamos o comando:
    # docker build -t atividade02-web .

    # Após a criação da imagem, podemos visualizar as imagens disponíveis no sistema com:
        # docker images

       #Para rodar um container baseado na imagem criada, usamos:
        #docker run -d -p 8080:80 --name atividade02-container atividade02-web

        # Se precisar parar um container em execução, utilize:
            #docker stop atividade02-container

            #Para remover um container parado, utilize:
                # docker rm atividade02-container

                #Após parar e remover um container, podemos iniciá-lo novamente com o mesmo comando de execução:
                    #docker run -d -p 8080:80 --name atividade02-container atividade02-web