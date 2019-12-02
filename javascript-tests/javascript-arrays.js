window.onload = () => {

        const elfCode = {
        appendToList: (list, value) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
    }
};
    const numbersAction = document.getElementById('numbers-action');
    const numbersDisplay = document.getElementById('numbers-display');

    const arrays = {
        numbers: [15,14,13,12,11,10,9,8,7,6,5]
    };

    arrays.numbers.sort((a,b) => a - b);


    numbersAction.onclick = () => {
        for (let number of arrays.numbers) {
            console.log(number);
            elfCode.appendToList(numbersDisplay, number);
    };

    const languageAction = document.getElementById('language-action');
    const languageDisplay = document.getElementById('language-display');
    
    const array = {
        language: ['JavaScript', 'HTML', 'CSS', 'C#', 'Python', 'C/C++'],
    }
    languageAction.onclick = () => {
        for (let language of array.language) {
            console.log(language);
            elfCode.appendToList(languageDisplay, language);
        };
    }
   
    const languagePopularityAction = document.getElementById('languagePopularity-action');
    const languagePopularityDisplay = document.getElementById('languagePopularity-display');
    
    const array1 = {
        languagePopularity: ['JavaScript: Rank 1', 'HTML: Rank 2', 'CSS: Rank 3', 'Python: Rank 4', 'C#: Rank 5', 'C/C++: Rank 6']
    }
    
    languagePopularityAction.onclick = () => {
        for (let languagePopularity of array1.languagePopularity) {
            console.log(languagePopularity);
            elfCode.appendToList(languagePopularityDisplay, languagePopularity);
        };
    }
};
};


