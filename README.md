# Playwright bdd automation
### Projeto em desenvolvimento
### Project under development

## Configuração do ambiente

1. Clone o repositório e instale as dependências:

   ```bash
   npm install
   npx playwright install chromium
   ```

2. Crie um arquivo `.env` na raiz do projeto, utilizando o `.env.example` como referência.

3. Configure as credenciais de teste:

   ```env
   SAUCE_USERNAME=standard_user
   SAUCE_PASSWORD=secret_sauce
   ```

4. Execute os testes:

   ```bash
   npm test
   ```
   **Importante:** nunca versione o arquivo .env. Ele já está listado no .gitignore.



## Environment Setup

1. Clone the repository and install the dependencies:

   ```bash
   npm install
   npx playwright install chromium
   ```

2. Create a `.env` file in the project root, using `.env.example` as a reference.

3. Configure the test credentials:

   ```env
   SAUCE_USERNAME=standard_user
   SAUCE_PASSWORD=secret_sauce
   ```

4. Run the tests:

   ```bash
   npm test
   ```

**Important:** Never commit the `.env` file to version control. It is already listed in `.gitignore`.