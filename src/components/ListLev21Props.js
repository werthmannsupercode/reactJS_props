import Lev21Props from './Lev21Props';

let list2 = [
    {
        id: 0,
        img: 'https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg',
        imgAlt: 'Kokusöl',
        title: 'cocooil',
        price: '30$'
    },
    {
        id: 1,
        img: 'https://www.haus.de/sites/default/files/styles/textbreite_2_spalten_tablet_klein/public/gutewahl/2020-03/Sofortbildkamera_Polaroid%20OneStep%2B-3.jpg?itok=QA7wdMps',
        imgAlt: 'Kamera',
        title: 'polaroid',
        price: '60$',
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1543363363-6dbd3125fb6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80',
        imgAlt: 'Shampoo',
        title: 'Maui Moisture',
        price: '20$',
    }
]

const ListLev21Props = () => {
    return (
        <div>
            <h1 className="headlineShop">SUPERSHOP</h1>
            <div className="divShop"> {list2.map((elt) =>
                <Lev21Props
                    key={elt.id}
                    img={elt.img}
                    title={elt.title}
                    price={elt.price}
                    imgAlt={elt.imgAlt} />
            )}</div>
        </div>
    );
}

export default ListLev21Props;