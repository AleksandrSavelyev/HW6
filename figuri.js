function square (num) {
    let write = '';

    for(i = 0; i < num; i++){
        for(let j = 0; j < num; j++) {
            write += ' *';
        }

        console.log(write);
        write = '';
    }
}

// square(6);

function emptuSquare (num) {
    let star = '';

    for(let i = 0; i < num; i++){
        star += ' *'
        for(let j = num - 2; j > 0; j--) {
            if(i === 0) {
                star += ' *';
            } else if (i === num - 1){
                star += ' *';
            } else {
                star += '  ';
            }
        }

        star +=' *'
        console.log(star);
        star = ''
    }
}

// emptuSquare(10);

function triangle (num) {
    let star = '';

    for(i = 0; i < num; i++) {
        for(j = 0; j <= i; j++ ) {
             star += ' *';
        }
        console.log(star);
        star = '';
    }    
}

// triangle(6);

function emptyTriangle(num) {
    let star = '';

    for(i = 0; i < num; i++) {
        for(j = 0; j <= i; j++ ) {
            if(j == 0) {
                star += ' *';
            } else if (j == i) {
                star += ' *';
            } else if(i == num -1) {
                star += ' *';
            }  else if(j != i) {
                star += '  ';
            } 
        }

        console.log(star);
        star = '';
    }
}
// emptyTriangle(10);

function hourglass (num) {
    let h = num / 2;

    function createConus(num){
        let space = "";
        let star = "";
        let i = h-1;

        while (i >= 0) {  
            space = "";
            star = "";

            for (let j = 0; j < num - i; j++) {
                space += "  ";
            }
            for (let j = 0; j < 2 * i + 1; j++) {
                star += " *";
            }

            console.log(space + star);
            i--;
        }
    }

    createConus(h);

    function createTriangle(num){
        let space = "";
        let star = "";
        let i = 0;

        while (i < num) {
            space = "";
            star = "";

            for (let j = 0; j < num - i; j++) {
                space += "  ";
            }
            for (let j = 0; j < 2 * i + 1; j++) {
                star += " *";
            }

            console.log(space + star);
            i++;
        }
    }

    createTriangle(h);
    console.log(" ");
}
// hourglass(6); 

function emptyHourglass (num) {
    let h = num / 2;
    function createConus(num){
        let space = "";
        let star = "";
        let i = h-1;

        while (i >= 0) {  
            space = "";
            star = "";

            for (let j = 0; j < num - i; j++) {
                space += "  ";
            }
            for (let j = 0; j < 2 * i + 1; j++) {
                if(j == 2*i) {
                    star += " *";
                } else if (j == 1){
                    star += " *";
                } else {
                    star += " -";
                }
            }

            console.log(space + star);
            i--;
        }
    }

    createConus(h);

    function createTriangle(num){
        let space = "";
        let star = "";
        let i = 0;

        while (i < num) {
            space = "";
            star = "";

            for (let j = 0; j < num - i; j++) {
                space += "  ";
            }
            for (let j = 0; j < 2 * i + 1; j++) {
                star += " *";
            }

            console.log(space + star);
            i++;
        }
    }

    createTriangle(h);
    console.log(" ");
}

emptyHourglass(10);