const amqp = require('amqplib');

async function publishOrder(){
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    
    const queue = "orders";
    const order = { orderId: 3, product: "Teclado mecânico T-Dagger", price: 220 };

    await channel.assertQueue(queue, { durable: false });
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(order)));

    console.log("📦 Pedido enviado: ", order);
    setTimeout(() => { connection.close() }, 500);
}

publishOrder();