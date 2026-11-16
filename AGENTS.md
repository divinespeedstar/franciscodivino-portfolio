# Francisco Divino — Portfolio

Landing page em Vite + React 18 + TypeScript + Tailwind 3 + Framer Motion. Todo o conteúdo fica em `src/App.tsx`; imagens em `public/visuals/`. Deploy na Vercel (`vercel.json` reescreve tudo para `index.html`). Não usa variáveis de ambiente nem segredos.

## Comandos

- `npm ci`: instala as dependências pelo `package-lock.json`
- `npm run dev`: servidor de desenvolvimento em http://localhost:5173 (ouve em `0.0.0.0`, então abre também pelo IP da rede local, útil para testar no celular)
- `npm run build`: checa tipos (`tsc -b`) e gera `dist/`
- `npm run preview`: serve o `dist/` gerado

## Ambiente (Mac)

- Node e npm ficam em `~/.local/bin` (PATH configurado no `~/.zprofile`). Num shell que não carregou o perfil, rode antes `export PATH="$HOME/.local/bin:$PATH"`.
- `gh` em `~/.local/bin/gh`, logado na conta GitHub `divinespeedstar`; o git usa o `gh` como credencial (HTTPS).
- O autor dos commits é configurado só neste repositório (`git config user.name` / `user.email`), não globalmente.
- A Vercel CLI não está instalada nem logada no Mac: deploy só pelo painel/integração da Vercel com o GitHub, ou instalando e logando a CLI antes.
- O projeto foi criado no Windows, mas não tem caminhos nem scripts específicos de lá; os arquivos de texto já estão com fim de linha LF.
