const amqp = require('amqplib');

async function consumeOrders(){
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    const queue = "orders";

    await channel.assertQueue(queue, { durable: false });
    console.log("💳 Esperando por pedidos...");

    channel.consume(queue, (msg) => {
        const order = JSON.parse(msg.content.toString());
        console.log("✅ Pagamento processado para o pedido: ", order);
    }, { noAck: true });
}

consumeOrders();