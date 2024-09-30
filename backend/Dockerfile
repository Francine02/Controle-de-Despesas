# Imagem base do OpenJDK
FROM openjdk:17-jdk-slim

# Diretório de trabalho
WORKDIR /app

# Copia o arquivo JAR do projeto para o contêiner
COPY ./target/ControledeDespesas.jar /app/ControledeDespesas.jar

# Expõe a porta
EXPOSE 8080

# Comando para executar
ENTRYPOINT ["java", "-jar", "/app/ControledeDespesas.jar"]
