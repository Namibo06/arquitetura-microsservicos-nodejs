### 🔷 O que é o projeto?
#### É uma forma simples e básica, para se testar a arquitetura de microsserviços com Node.js

-----------------------

### 📍 Requisitos (Windows)
- #### Erlang
- #### RabbitMQ (Pasta sbin deve estar nas variáveis de ambiente)
- #### Node.js
- #### NPM
- #### Lib AMQP | Pode rodar com o seguinte comando no terminal ``npm install amqp``

-----------------------

### 🔗 Como rodar o projeto
#### 1. Abra dois terminais
#### 2. Rode o comando abaixo para ir a pasta do payment service
``cd payment/payment-service``
#### Rode o comando abaixo para subir o servidor do payment
```javascript
node index.js;
```

<br> 

#### 3. Rode o comando abaixo para ir a pasta da order service
``cd order/order-service``
#### Rode o comando abaixo para subir o servidor da order
```javascript
node index.js;
```
