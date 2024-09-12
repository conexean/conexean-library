# Sua Biblioteca de Componentes React

Uma biblioteca de componentes React com TypeScript e Tailwind CSS.

## Estrutura do Projeto

```
sua-biblioteca/
├── src/
│   ├── components/
│   │   └── Input/
│   │       ├── Input.tsx
│   │       ├── Input.test.tsx
│   │       └── Input.stories.tsx
│   ├── index.ts
│   └── react-app-env.d.ts
├── .storybook/
├── dist/
├── package.json
├── tsconfig.json
├── rollup.config.js
└── README.md
```

## Instalação

```bash
npm install sua-biblioteca
```

ou

```bash
yarn add sua-biblioteca
```

## Uso

```jsx
import React from 'react';
import { Input } from 'sua-biblioteca';

function App() {
  return (
    <div>
      <Input 
        name="example" 
        id="example" 
        label="Exemplo de Input" 
        mask="(##) #####-####"
      />
    </div>
  );
}

export default App;
```

Nota: Esta biblioteca utiliza Tailwind CSS. Certifique-se de que seu projeto tem o Tailwind CSS configurado.

## Componentes Disponíveis

### Input

Um componente de input com suporte para máscaras e tratamento de erros.

Propriedades:

- `name` (string, obrigatório): Nome do input
- `id` (string, obrigatório): ID do input
- `label` (string, opcional): Rótulo do input
- `inputClass` (string, opcional): Classes CSS adicionais para o input
- `errors` (string, opcional): Mensagem de erro
- `mask` (string, opcional): Máscara para formatação do input

## Desenvolvimento

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Configuração do Ambiente de Desenvolvimento

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/sua-biblioteca.git
   cd sua-biblioteca
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Para iniciar o Storybook:
   ```bash
   npm run storybook
   ```

### Criando um Novo Componente

1. Crie uma nova pasta para o componente em `src/components/`:
   ```bash
   mkdir src/components/NomeDoComponente
   ```

2. Crie os arquivos do componente:
   - `NomeDoComponente.tsx`: O componente React
   - `NomeDoComponente.test.tsx`: Testes do componente
   - `NomeDoComponente.stories.tsx`: Histórias do Storybook

3. Implemente o componente em `NomeDoComponente.tsx`:
   ```tsx
   import React from 'react';

   interface NomeDoComponenteProps {
     // Defina as props aqui
   }

   const NomeDoComponente: React.FC<NomeDoComponenteProps> = (props) => {
     // Implemente o componente aqui
   };

   export default NomeDoComponente;
   ```

4. Escreva testes em `NomeDoComponente.test.tsx`:
   ```tsx
   import React from 'react';
   import { render } from '@testing-library/react';
   import NomeDoComponente from './NomeDoComponente';

   describe('NomeDoComponente', () => {
     it('renders correctly', () => {
       // Implemente os testes aqui
     });
   });
   ```

5. Crie histórias em `NomeDoComponente.stories.tsx`:
   ```tsx
   import React from 'react';
   import { Meta, StoryFn } from '@storybook/react';
   import NomeDoComponente from './NomeDoComponente';

   export default {
     title: 'Components/NomeDoComponente',
     component: NomeDoComponente,
   } as Meta<typeof NomeDoComponente>;

   const Template: StoryFn<typeof NomeDoComponente> = (args) => <NomeDoComponente {...args} />;

   export const Default = Template.bind({});
   Default.args = {
     // Defina os args padrão aqui
   };
   ```

6. Exporte o novo componente em `src/index.ts`:
   ```typescript
   export { default as NomeDoComponente } from './components/NomeDoComponente/NomeDoComponente';
   ```

### Build

Para criar uma build da biblioteca:

```bash
npm run build
```

### Publicação

1. Atualize a versão no `package.json`:
   ```bash
   npm version patch  # para pequenas correções
   npm version minor  # para novas funcionalidades
   npm version major  # para mudanças que quebram compatibilidade
   ```

2. Publique no npm:
   ```bash
   npm publish
   ```

## Contribuindo

Contribuições são bem-vindas! Por favor, siga estas etapas:

1. Fork o projeto
2. Crie sua branch de feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## Contato

Seu Nome - [@seutwitter](https://twitter.com/seutwitter) - email@exemplo.com

Link do Projeto: [https://github.com/seu-usuario/sua-biblioteca](https://github.com/seu-usuario/sua-biblioteca)