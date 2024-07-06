let btn = document.getElementById("btn")

function getFacts() {
    try {
        let search = document.getElementById("search")
        let facts = document.getElementById("facts")
        let noun = document.getElementById("noun")
        let syn = document.getElementById("syn")
        let value = search.value
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`)
            .then((result) => {
                return result.json()
            }).then((data) => {
                if (data[0]) {
                    console.log(data);
                    console.log(data[0].meanings[0].definitions);
                    // console.log(data[0].meanings[0].partOfSpeech);
                    console.log(data[0].meanings[0].synonyms);
                    facts.innerHTML = "Meaning : " + data[0].meanings[0].definitions[0].definition
                    // console.log(data[0].meanings[0].partOfSpeech);
                    noun.innerHTML = "Part of Speech : " + data[0].meanings[0].partOfSpeech
                    syn.innerHTML = "Synonyms : " + data[0].meanings[0].synonyms;

                }
                else {
                    facts.innerHTML = data.message
                    noun.innerHTML=""
                    syn.innerHTML=""
                }

            })
    }
    catch (error) {
        console.log(error.message);
        let facts = document.getElementById("facts")
        facts.innerHTML = "Sorry,We could not find the word"
    }

}

btn.addEventListener("click", getFacts)
