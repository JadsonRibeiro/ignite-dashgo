import { createServer, Factory, Model } from "miragejs";
import faker from "faker"

type User = {
    name: string;
    email: string;
    created_at: string; // Informar no formato usado no banco
}

export function makeServer() {
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({}) // Partial permite que nem todos campos sejam obrigatórios
        },

        factories: {
            user: Factory.extend({
                name(i: number) {
                    return `User ${i + 1}`
                },
                email() {
                    return faker.internet.email().toLowerCase()
                },
                createdAt() {
                    return faker.date.recent(10)
                }
            })
        },

        seeds(server) {
            server.createList('user', 200);
        },

        routes() {
            this.namespace = 'api';
            this.timing = 750;

            // Veja Shorthands na documentação do Mirage
            this.get('/users');
            this.post('/users');

            // Para não prejudicar rotas de api do NextJS
            this.namespace = '';
            this.passthrough();
        }
    });
    
    return server;
}