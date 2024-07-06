let btn = document.getElementById("btn")

function getFacts() {
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
                facts.innerHTML = "Meaning : " + data[0].meanings[0].definitions[0].definition
                noun.innerHTML = "Part of Speech : " + data[0].meanings[0].partOfSpeech
                syn.innerHTML = "Synonyms : " + data[0].meanings[0].synonyms;

            }
            else {
                facts.innerHTML = data.message
                noun.innerHTML = ""
                syn.innerHTML = ""
            }

        })
}
btn.addEventListener("click", getFacts)
