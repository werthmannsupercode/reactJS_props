import Lev32Props from './Lev32Props';

let faq = [
    {
        id: 0,
        question: "Für wen ist dieses Bootcamp? ∨",
        answer:
            "Für alle Menschen die motiviert sind Neues zu lernen! Du solltest außerdem über 18 Jahre alt sein und bestenfalls eine Leidenschaft für den Bereich IT mitbringen.",
    },
    {
        id: 1,
        question: "Welcher akademische Grad ist erforderlich? ∨",
        answer:
            "Lange Rede, kurzer Sinn – Keiner. Wir sind auf der Suche nach wunderbaren Querdenkern*innen, die motiviert sind ein neues Leben zu starten.",
    },
    {
        id: 2,
        question: "Ist Vorerfahrung im Bereich IT / Coding notwendig? ∨",
        answer:
            "Nein. Alles was du brauchst ist Zeit, Motivation und den Willen eines Bill Gates. 😉 Du solltest aber in der Lage sein, Songs von Britney Spears zu verstehen und zu übersetzen, da alle Programmiersprachen auf Englisch basieren.",
    },
    {
        id: 3,
        question: "Wie lange dauern die Bootcamps? ∨",
        answer:
            "Das kommt ganz auf das Kursformat an. Der Vollzeit Kurs ist 22 Wochen lang (5 Monate) und der Teilzeitkurs streckt sich über 30 Wochen (7 Monate).",
    }
]


const ListLev32Props = () => {
    return (
        <div className="sectionFAQ">
            <h1 className="headlineAkkordeon">FAQ</h1>
            <div className="divAkkordeon">{faq.map((elt) =>
                <Lev32Props
                    key={elt.id}
                    question={elt.question}
                    answer={elt.answer}
                />
            )}</div>

        </div>);
}

export default ListLev32Props;