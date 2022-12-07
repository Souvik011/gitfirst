studentobj = {

	'yash': 26,

	'vaibhav': 24,

	'rajesh' : 25,

	};


    function findaverageage(studentObj){

        let totalAge = 0;
        let count = 0;
        Object.keys(studentobj).forEach(key => {
            totalAge = totalAge + Number(studentObj[key]);
            count++;
        })

        let averageAge = totalAge/count;
    
        
    
        return averageAge;
    
    }

    let x = findaverageage(studentobj);
    console.log(x);
