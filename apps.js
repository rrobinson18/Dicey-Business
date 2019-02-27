class Die {
    constructor() {
        this.value;
        this.roll(); 
        this.div = $('<div class="box"></div>');
        $('.dice-container').append(this.div);
        this.div.css('display', 'inline-block');
        this.div.text(this.value);
        $('.secondBtn').click(() => {
            this.roll();
            this.div.text(this.value);
        });
        
    }

    roll() {
        this.value = Math.floor(Math.random() * 6 + 1);
       
        
    }
};

$('.btn').click(() => {
    let newDice = new Die();
    newDice.roll();
    // console.log(newDice.value);
});
