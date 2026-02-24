function sendCars(...allCarIds) {
    allCarIds.forEach(id=>console.log(id));
}

sendCars(100,200,300,400,500);

function sendbikes() {
    console.log('bike ids are',bk1,bk2,bk3,bk4,bk5);
}

const bikes=[10,20,30,40,50];
sendbikes(...bikes);
