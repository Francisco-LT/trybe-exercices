class TV:
    def __init__(self, tamanho):
        # dois undersocres são para classes privadas
        self.__volume = 50
        self.__canal = 1
        self.tamanho = tamanho
        self.ligada = False

    def aumentar_volume(self):
        if self.__volume <= 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume <= 99:
            self.__volume -= 1

    def modificar_canal(self, canal):
        if canal <= 1 or canal >= 99:
            raise ValueError("canal inexistente")
        else:
            return self.__canal

    def ligar_desligar(self):
        self.__ligada = not self.__ligada
