
import Number from './Number'
const Numbers = () => {
    const counts=[{
        "id":1,
        "label":"Optimized Smiles",
        "number":'2,500000',
        "duration":2
    },{
        "id":2,
        "label":"Satisfied Dentists",
        "number":'248,000',
        "duration":2
    },
    {
        "id":3,
        "label":"Worldwide Treatment Locations",
        "number":'27,000',
        "duration":2
    }
];
    return (
        <section className="numbers">
            <div className="container row">
                {counts.map((count)=>(
                    <Number data={count}></Number>
                ))}  
            </div>
        </section>
    )
}

export default Numbers
