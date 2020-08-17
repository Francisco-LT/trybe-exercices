#!/bin/bash

#primeiramente ele dá o comando read para digitarmos uma variável, que vai ser um arquivo, um diretório ou qualquer outra coisa que esteja dentro da pasta que vocÊ está trabalhando.

#dentro do if, usamos o comando -f que verifica se é um arquivo e dá uma determinada resposta se for

#em seguida usamos o comando - d que cerifia se é um iretório e dá uma determinada resposte se for

# caso não seja nenhum dos dois, ele simplismente dá outra resposta.

#por fim ele usa o cmonado ls -l e verifica a permissão do seu arquivo caso seja ou dos arquivos dentro do seu diretório caso sejam.

  echo "Digite o caminho de um arquivo ou diretório:"
  read FILE
  if [ -f "$FILE" ]
    then
      echo "$FILE é um arquivo comum"
  elif [ -d "$FILE" ]
    then
      echo "$FILE é um diretório"
  else
      echo "$FILE é alguma outra coisa"
  fi
  ls -l $FILE
