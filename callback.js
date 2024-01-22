function explain_callback(name, age, task){
    console.log('Hello', name);
    console.log('your age', age)
    //washHand()
    //takeShower();
    task();
}

function washHand(){
    console.log('wash hand with soap')
}

function takeShower(){
    console.log('Take Shower');

}

function scrollFacebook(){
    console.log('scroll facebook but dont like any post');
}

explain_callback('Sogir Uddin', 17, washHand);
explain_callback('kobir Uddin', 13, takeShower);
explain_callback('mugir Uddin', 21, scrollFacebook);