# amgsecret
Amigo Secreto

O Amigo Secreto é uma aplicação web simples que permite aos usuários cadastrar nomes de amigos em uma lista e, posteriormente, realizar um sorteio para definir quem será o "amigo secreto" de cada participante.

Funcionalidades

Adicionar Amigos: Os usuários podem inserir nomes na lista através de um campo de entrada e um botão dedicado.

Validação de Entrada: Para evitar erros, o sistema impede a adição de nomes vazios e exibe um alerta caso isso ocorra.

Exibição da Lista: Os amigos adicionados são exibidos dinamicamente na página.

Sorteio Aleatório: Com um clique, a aplicação seleciona aleatoriamente um nome da lista e exibe o resultado na tela.

Tecnologias Utilizadas

O projeto foi desenvolvido com:

HTML: Estruturação da página

CSS: Estilização para melhor experiência visual

JavaScript: Implementação da lógica para adicionar nomes e realizar o sorteio

Como Usar

Baixar o Projeto

Clone o repositório executando o seguinte comando no terminal:

 git clone <URL_DO_REPOSITORIO>

Rodar a Aplicação

O projeto não possui dependências externas. Basta abrir o arquivo index.html no navegador para executar.

Para uma experiência melhor, você pode utilizar a extensão Live Server no VSCode.

Interagir com a Aplicação

Insira os nomes dos amigos no campo de texto e clique em "Adicionar".

Visualize a lista de amigos na tela.

Realize o sorteio clicando no botão correspondente.

Contribuição

Caso queira contribuir com melhorias:

Criar uma Branch

git checkout -b minha-contribuicao

Fazer as Alterações e Enviar o Código

git add .
git commit -m "Descrição das alterações"
git push origin minha-contribuicao

Criar um Pull Request

Após enviar suas alterações, crie um Pull Request para revisão e possível inclusão no projeto.

Possíveis Problemas e Soluções

O sorteio não funciona? Verifique se há pelo menos um nome na lista. O sorteio só ocorre se houver participantes cadastrados.

A lista não está sendo atualizada? Confirme se o nome foi corretamente adicionado ao array de amigos e confira o console do navegador para possíveis erros no JavaScript.

Este projeto é aberto para modificações e pode ser adaptado conforme necessário.

