import Fastify from "fastify";

const server = Fastify()

async function main() {
    try {
        server.listen({ port: 8080 }, (err, address) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            console.log(`Server listening at ${address}`);
        })
    }
    catch (e) { }
}

main()