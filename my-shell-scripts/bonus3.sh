#!/bin/bash

#criamos a variáável DAY que recebe o valor  da data do dia

#usamos o for que pega a variável FILE e aplica na lista (ls) com todos os arquivos terminados em png (o comando %F coloca a data no formato %Y-%m-%d)

#o comando do pede para que todos esses arquivos da lista, terminados em png tenham seu nome modificados, e virem a data do dia - o seu antgo nome

DAY=$(date +%F)

  for FILE in `ls *.png`
   do
      mv $FILE ${DAY}-${FILE}
   done
