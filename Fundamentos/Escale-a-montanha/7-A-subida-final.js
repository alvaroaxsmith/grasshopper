// Você está quase no pico, mas deve escalar os últimos 3 metros para chegar ao topo. Tomara que a otherBackpack tenha uma corda dentro da propriedade equipment.

for (var element of otherBackpack.equipment) {
    if (element === 'rope') {
      print('A corda foi encontrada');
    } else {
      print('A corda não foi encontrada');
    }
  }