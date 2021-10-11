import { createServer } from "miragejs";

export const cardMock = {
  balance: 3000,
  first_name: 'John',
  last_name: 'Does',
  card_number: '4242424242424242',
  exp_year: '22',
  exp_month: '12',
  cvv: '123',
  brand: 'visa',
}

if (window.server) {
  server.shutdown()
}

export const server = () => {
  window.server = createServer({
    routes() {
      this.get("./api/card", () => {
        return {
          data: {
            ...cardMock,
            spending_limit: false,
          },
        }
      });
      this.post("./api/card", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        const spending = attrs.limit ? {
          spending: 1000,
          limit: attrs.limit,
        } : {};
        return {
          data: {
            ...cardMock,
            spending_limit: !!attrs.limit,
            ...spending
          },
        }
      })
    },
  });
}