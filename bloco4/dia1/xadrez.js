let xadrez = "BISPO"
switch (xadrez.toLowerCase()) {
    case "bispo":
    console.log("diagonal");
    break;
    case "cavalo":  
        console.log("L");
        break;
        case "torre":
            console.log("de lado ou frente e trás");
            case "peao":
                console.log("para frente");
                break;
                case "rei":
                    console.log("diagonal e para os lados");
                    break;
                    default:
                        console.log("você está jogando outro jogo");
}