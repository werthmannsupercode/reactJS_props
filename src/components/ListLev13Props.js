import Lev13Props from './Lev13Props';

let list = [
    {
        id: 1,
        before: 'images/check.png',
        beforeAlt: 'check',
        text: 'Hit the gym',
        after: 'images/gym.png',
        afterAlt: 'gym',
        style: 'line-through'
    },
    {
        id: 2,
        before: 'images/check.png',
        beforeAlt: 'check',
        text: 'Pay bills',
        after: 'images/bill.png',
        afterAlt: 'bill',
        style: 'line-through'
    },
    {
        id: 3,
        before: 'images/doing.png',
        beforeAlt: 'Baustelle',
        text: 'Meet George',
        after: 'images/dance.png',
        afterAlt: 'dance',
        style: 'none'
    },
    {
        id: 4,
        before: 'images/doing.png',
        beforeAlt: 'Baustelle',
        text: 'Buy eggs',
        after: 'images/eat.png',
        afterAlt: 'eat',
        style: 'none'
    },
    {
        id: 5,
        before: 'images/no.png',
        beforeAlt: 'x',
        text: 'Read a book',
        after: 'images/book.png',
        afterAlt: 'book',
        style: 'underline'
    },
    {
        id: 6,
        before: 'images/no.png',
        beforeAlt: 'x',
        text: 'Organize office',
        after: 'images/organize.png',
        afterAlt: 'office',
        style: 'underline'
    }
];

const ListLev13 = () => {
    return (
        <div>
            <h1 className="h1"><span className="span">T</span>o do list</h1>
            <ul className="ul">{list.map((elt) =>
                <Lev13Props
                    key={elt.id}
                    before={elt.before}
                    beforeAlt={elt.beforeAlt}
                    text={elt.text}
                    after={elt.after}
                    afterAlt={elt.afterAlt}
                    style={elt.style} />)
            }</ul>
        </div>
    );
}

export default ListLev13;