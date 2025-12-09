/* 1) Linha do tempo e suporte técnico

Nos últimos cinco anos o Node.js evoluiu de suporte experimental a ESM para um suporte oficial e cada vez mais maduro. Versões LTS lançadas a partir do ciclo Node 14/16 consolidaram recursos que tornaram ESM viável em produção, e o projeto Node discute modos “ESM-first” para facilitar migrações. Em paralelo, todos os navegadores modernos já oferecem suporte nativo a ES Modules, o que tornou ESM o padrão natural no front-end. 
Node.js
+1

2) Tendência de adoção: ESM subindo, CJS ainda largamente presente

A tendência geral é: novos projetos e runtimes modernos favorecem ESM, enquanto muitos pacotes legados do ecossistema npm permanecem em CommonJS. Estudos acadêmicos e análises de dependências mostram que uma parcela significativa do ecossistema (especialmente pacotes mais antigos) ainda usa CommonJS, o que explica por que a interoperabilidade e compatibilidade continuam sendo preocupações práticas ao migrar. Runtimes e ferramentas (Node, bundlers, Deno, Bun) empurraram o ecossistema para ESM, mas a transição é gradual. 
arXiv
+1

3) Interoperabilidade e dores reais na migração

Um ponto recorrente nos relatos da comunidade e em guias técnicos: interoperabilidade CJS ↔ ESM causa fricção — importações dinâmicas, require() vs import, module.exports vs export, e resolução de pacotes (campo type em package.json, extensões .cjs/.mjs) exigem cuidados. Ferramentas como bundlers (webpack, Rollup, esbuild) e práticas como “dual publish” (publicar builds CJS e ESM / usar exports condicionais) viraram soluções comuns. O Node também teve discussões/documentos públicos sobre modos ESM-first e como tratar pacotes que não especificam type. 
LogRocket Blog
+1

4) Como isso se traduziu em prática (exemplos aplicáveis)

Projetos novos: adotar ESM por padrão (usar import/export, configurar "type": "module" em package.json, usar import() para carregamento dinâmico). Isso facilita compatibilidade com ferramentas modernas e com navegadores. (Contexto: navegadores já suportam ESM.) 
caniuse.com

Bibliotecas públicas: usar estratégia “dual publishing” — fornecer builds ESM e CJS (ou usar exports condicionais em package.json) para alcançar tanto consumidores antigos (CJS) quanto novos (ESM). Isso reduz fricção de adoção. 
LogRocket Blog

Bases legadas (aplicações grandes): migrar por etapas — primeiro habilitar interoperabilidade (usar .cjs para módulos CommonJS persistentes, converter módulos pequenos para ESM, adicionar testes), ou encapsular funcionalidades novas em ESM e expor adaptadores para o restante do sistema. Estudos mostram que muitas dependências críticas ainda são CJS, por isso migração total exige planejamento. 
arXiv

5) Recomendações práticas (resumidas)

Para novo projeto: comece ESM (mais compatível com o futuro, browser-friendly).

Para biblioteca: publique ambos (ESM + CJS) ou use exports condicionais para não bloquear consumidores.

Para monólitos legados: faça migração incremental, mantenha CI com testes, e use ferramentas de build que saibam resolver interop (esbuild/rollup/webpack). Monitore dependências que só existem em CJS antes de decidir migrar tudo. */
module.exports = {};