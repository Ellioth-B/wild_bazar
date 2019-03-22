$test = setInterval(function(){ drawKhaos(2, 2); }, 50);
$x = 1;
$opacity = 1;

var ctx = $('.logo')[0].getContext("2d");

function drawKhaos($startCoordX, $startCoordY){
  ctx.beginPath();
  switch($x){
    case 1:
      ctx.rect($startCoordX, $startCoordY, 8, 8);
      break;
     case 2:
      ctx.rect($startCoordX, $startCoordY+10, 8, 8);
      break;
        case 3:
      ctx.rect($startCoordX, $startCoordY+20, 8, 8);
      break;
        case 4:
      ctx.rect($startCoordX, $startCoordY+30, 8, 8);
      break;
        case 5:
      ctx.rect($startCoordX+10, $startCoordY+30, 8, 8);
      break;
        case 6:
      ctx.rect($startCoordX+20, $startCoordY+30, 8, 8);
      break;
        case 7:
      ctx.rect($startCoordX+30, $startCoordY+30, 8, 8);
      break;
        case 8:
      ctx.rect($startCoordX+30, $startCoordY+20, 8, 8);
      break;
        case 9:
      ctx.rect($startCoordX+30, $startCoordY+10, 8, 8);
      break;
         case 10:
      ctx.rect($startCoordX+30, $startCoordY, 8, 8);
      break;
         case 11:
      ctx.rect($startCoordX+15, $startCoordY+20, 8, 8);
      break;
         case 12:
      ctx.rect($startCoordX+45, $startCoordY+30, 8, 8);
      break;
        case 13:
      ctx.rect($startCoordX+45, $startCoordY+20, 8, 8);
      break;
        case 14:
      ctx.rect($startCoordX+45, $startCoordY+10, 8, 8);
      break;
        case 15:
      ctx.rect($startCoordX+45, $startCoordY, 8, 8);
      break;
        case 16:
      ctx.rect($startCoordX+60, $startCoordY+30, 8, 8);
      break;
        case 17:
      ctx.rect($startCoordX+60, $startCoordY+20, 8, 8);
      break;
        case 18:
      ctx.rect($startCoordX+60, $startCoordY+10, 8, 8);
      break;
       case 19:
      ctx.rect($startCoordX+60, $startCoordY, 8, 8);
      break;
       case 20:
      ctx.rect($startCoordX+70, $startCoordY+30, 8, 8);
      break;
        case 21:
      ctx.rect($startCoordX+80, $startCoordY+30, 8, 8);
      break;
        case 22:
      ctx.rect($startCoordX+95, $startCoordY+30, 8, 8);
      break;
        case 23:
      ctx.rect($startCoordX+95, $startCoordY+20, 8, 8);
      break;
      case 24:
      ctx.rect($startCoordX+95, $startCoordY+10, 8, 8);
      break;
      case 25:
      ctx.rect($startCoordX+95, $startCoordY, 8, 8);
      break;
      case 26:
      ctx.rect($startCoordX+105, $startCoordY+30, 8, 8);
      break;
      case 27:
      ctx.rect($startCoordX+115, $startCoordY+20, 8, 8);
      break;
      case 28:
      ctx.rect($startCoordX+115, $startCoordY+10, 8, 8);
      break;
      case 29:
      ctx.rect($startCoordX+105, $startCoordY, 8, 8);
      break;
     
      case 30:
      ctx.rect($startCoordX+130, $startCoordY+30, 8, 8);
      break;
      case 31:
      ctx.rect($startCoordX+130, $startCoordY+20, 8, 8);
      break;
      case 32:
      ctx.rect($startCoordX+130, $startCoordY+10, 8, 8);
      break;
      case 33:
      ctx.rect($startCoordX+130, $startCoordY, 8, 8);
      break;
      case 34:
      ctx.rect($startCoordX+140, $startCoordY+30, 8, 8);
      break;
      case 35:
      ctx.rect($startCoordX+150, $startCoordY+30, 8, 8);
      break;
      case 36:
      ctx.rect($startCoordX+160, $startCoordY+30, 8, 8);
      break;
      case 38:
      ctx.rect($startCoordX+160, $startCoordY+20, 8, 8);
      break;
         case 39:
      ctx.rect($startCoordX+160, $startCoordY+10, 8, 8);
      break;
         case 40:
      ctx.rect($startCoordX+160, $startCoordY, 8, 8);
      break;
         case 41:
      ctx.rect($startCoordX+145, $startCoordY+20, 8, 8);
      break;
          case 42:
      ctx.rect($startCoordX+175, $startCoordY+30, 8, 8);
      break;
      case 43:
      ctx.rect($startCoordX+175, $startCoordY+20, 8, 8);
      break;
      case 44:
      ctx.rect($startCoordX+175, $startCoordY+10, 8, 8);
      break;
      case 45:
      ctx.rect($startCoordX+175, $startCoordY, 8, 8);
      break;
      case 46:
      ctx.rect($startCoordX+185, $startCoordY, 8, 8);
      break;
      case 47:
      ctx.rect($startCoordX+195, $startCoordY, 8, 8);
      break;
      case 48:
      ctx.rect($startCoordX+195, $startCoordY+10, 8, 8);
      break;
      case 49:
      ctx.rect($startCoordX+195, $startCoordY+20, 8, 8);
      break;
      case 50:
      ctx.rect($startCoordX+195, $startCoordY+30, 8, 8);
      break;
      case 51:
      ctx.rect($startCoordX+185, $startCoordY+20, 8, 8);
      break;
      case 52:
      ctx.rect($startCoordX+210, $startCoordY+30, 8, 8);
      break;
      case 53:
      ctx.rect($startCoordX+210, $startCoordY+20, 8, 8);
      break;
       case 54:
      ctx.rect($startCoordX+210, $startCoordY+10, 8, 8);
      break;
         case 55:
      ctx.rect($startCoordX+210, $startCoordY, 8, 8);
      break;
         case 56:
      ctx.rect($startCoordX+220, $startCoordY, 8, 8);
      break;
         case 57:
      ctx.rect($startCoordX+230, $startCoordY, 8, 8);
      break;
         case 58:
      ctx.rect($startCoordX+230, $startCoordY+10, 8, 8);
      break;
         case 59:
      ctx.rect($startCoordX+220, $startCoordY+20, 8, 8);
      break;
         case 60:
      ctx.rect($startCoordX+230, $startCoordY+30, 8, 8);
      break;
         case 61:
      ctx.rect($startCoordX+245, $startCoordY+30, 8, 8);
      break;
          case 62:
      ctx.rect($startCoordX+245, $startCoordY+20, 8, 8);
      break;
          case 63:
      ctx.rect($startCoordX+245, $startCoordY+10, 8, 8);
      break;
          case 64:
      ctx.rect($startCoordX+245, $startCoordY, 8, 8);
      break;
          case 65:
      ctx.rect($startCoordX+255, $startCoordY+30, 8, 8);
      break;
          case 66:
      ctx.rect($startCoordX+265, $startCoordY+30, 8, 8);
      break;
          case 67:
      ctx.rect($startCoordX+255, $startCoordY+15, 8, 8);
      break;
          case 68:
      ctx.rect($startCoordX+255, $startCoordY, 8, 8);
      break;
          case 69:
      ctx.rect($startCoordX+265, $startCoordY, 8, 8);
      break;
      
      
  }
  ctx.closePath();
  ctx.fillStyle = 'rgba(0,173,181,'+$opacity+')';
  $opacity /= 1.025;
  ctx.fill();
  $x++;
  if ($x > 75){
    clearInterval($test);
  }
}
