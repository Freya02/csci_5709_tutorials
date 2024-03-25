FROM openjdk:17-jdk

WORKDIR /app3

COPY target/*.jar app3.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app3.jar"]
