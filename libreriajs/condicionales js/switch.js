let dia = 'lunes';
switch (dia) {
    case 'lunes':
        console.log('Inicio de semana.');
        break;
    case 'Viernes':
        console.log('Es casi fin de semana.');
    case 'sabado':
    case 'Domingo':
        console.log('Fin de semana.');
        break;
    default:
        console.log('Es un dia normal.');    
}