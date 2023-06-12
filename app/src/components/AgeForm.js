import {useState} from 'react'

function AgeForm () {
    //initialisation des states 
    const [yearsSinceBirth, setyearsSinceBirth] = useState("");
    const [monthsSinceBirth, setmonthsSinceBirth] = useState("");
    const [daysSinceBirth, setdaysSinceBirth] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();

        const DateDeNaissance = new Date(event.target.elements.dateNaissance.value)
        if (!DateDeNaissance) {
            console.log("Veuillez renseigner une date de naissance valide.");
            return;
          }
        const today = new Date();

        //calcul du nombre d'années
        const year = today.getUTCFullYear();
        const annee =  DateDeNaissance.getUTCFullYear();
        const age = year - annee
        setyearsSinceBirth(age)

        //calcul du nombre de mois 
        const mois = (DateDeNaissance.getMonth() + 1)
        const mon_mois = (year - annee) * 12 + (today.getMonth() - mois ) 
        setmonthsSinceBirth(mon_mois)

        //calcul du nombre de jour
       // const jour = DateDeNaissance.getDate()
        const mon_jour = Math.floor((today - DateDeNaissance) / (1000 * 60 * 60 * 24));
        setdaysSinceBirth(mon_jour)
    }  

    return (
        <div data-testid="age-form">
        <form onSubmit={handleSubmit}>
          <label>
          Entrez votre date de naissance : 
            <input type="date" name="dateNaissance" data-testid="dateNaissance" required />
          </label>
          <button type="submit">Calculer</button>
        </form>

        <p data-testid="yearsSinceBirth">{yearsSinceBirth} ans</p>
        <p data-testid="monthsSinceBirth">{monthsSinceBirth} mois sont passés depuis le jour de votre naissance</p>
        <p data-testid="daysSinceBirth">Il s'est écoulé {daysSinceBirth} jours</p>

      </div>
    )
}

export default AgeForm;