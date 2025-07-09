# Usa a imagem oficial Node Alpine (mais leve)
FROM node:18-alpine

# Criar diretório de trabalho
WORKDIR /app

# Copia os arquivos de manifesto do pacote para aproveitar o cache do Docker.
# As dependências só serão reinstaladas se o package.json mudar.
COPY package*.json ./

# Instala apenas as dependências de produção para manter a imagem final menor.
RUN npm install --only=production

# Copia o restante do código-fonte da aplicação.
COPY . .

# Expor a porta da API
EXPOSE 3002

# Comando para rodar a API
CMD ["node", "src/server.js"]
