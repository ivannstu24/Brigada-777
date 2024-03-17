// ������砥� ����� readline ��� ࠡ��� � ������/�뢮���
const readline = require('readline');


// ������� ����䥩� ��� �⥭�� �� �⠭���⭮�� ����� � ����� � �⠭����� �뢮�
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//�㭪�� ��� ���᫥��� ��ࠬ��஢ ���㦭���
function calculateCircleParameters(radius, alpha)
{
  const circleLength = 2 * Math.PI * radius; //���᫥��� ����� ���㦭���
  const circleArea = Math.PI * radius * radius; //���᫥��� ���頤� ��㣠
  const circleSector = (Math.PI * radius * radius * alpha)/360; //���᫥��� ���頤� ��㣮���� ᥪ��
  return { circleLength, circleArea, circleSector };
}


rl.question('������ ࠤ��� ���㦭��� : ', (radius) => {
  rl.question('������ �ࠤ���� ���� 㣫� �㣨, �� ������ ���ࠥ��� ᥪ�� : ', (alpha) => {
// ����塞 ��ࠬ���� ���㦭���
    const circle = calculateCircleParameters(parseFloat(radius), parseFloat(alpha));
    console.log(`����� ���㦭���: ${circle.cicleLength}`);
    console.log(`���頤� ��㣠: ${circle.circleArea}`);
    console.log(`���頤� ��㣮���� ᥪ��: ${circle.circleSector}`);

    rl.close();
  });
});

