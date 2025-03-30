# Usa uma imagem do Node.js
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos da aplicação para dentro do container
COPY . .

# Expõe a porta 3000 (ou a porta que sua aplicação usa)
EXPOSE 3000

# Comando para iniciar a aplicação (se houver um servidor, ajuste o comando)
CMD ["node", "gestaoFuncio.js"]
