#!/bin/bash

#o comando $@ armazena o valor de  todos os parâmetros passados;

#este exerciio é exatamente igual ao exercicio 6, porém usa-se  o comando $@ para aceitar quantos parÂmetros quisermos e usa-se o comando for para ler tôdos esses parâmetros 

#dentro do if, usamos o comando -f que verifica se é um arquivo e dá uma determinada resposta se for

#em seguida usamos o comando - d que cerifia se é um iretório e dá uma determinada resposte se for

# caso não seja nenhum dos dois, ele simplismente dá outra resposta.

#por fim ele usa o cmonado ls -l e verifica a permissão do seu arquivo caso seja ou dos arquivos dentro do seu diretório caso sejam.

FILES=$@

  for FILE in $FILES
    do
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
    done
