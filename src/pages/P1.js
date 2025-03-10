import { useState } from "react";

export default function P1() {

    const articles = [
        {
            title: "Inflation Report",
            tags: ["economy", "finance", "politics"]
        },
        {
            title: "Travel Guide Rome",
            tags: ["books", "travel"]
        },
        {
            title: "New Regulations for Restaurants",
            tags: ["food", "politics", "economy"]
        },
    ];

    const allTags = articles.flatMap(article => article.tags);
    const uniqueTags = [...new Set(allTags)];

    const [active, setActive] = useState(Array(uniqueTags.length).fill(false));

    const invert = (index) => {
    const updated = [...active];
    updated[index] = !updated[index];
    setActive(updated);
    };

    var filteredArticles = articles.filter(item => {
        return item.tags.some(tag => active[uniqueTags.indexOf(tag)]);
    });

    filteredArticles = active.every(val => (val === false)) ? articles : filteredArticles;
    

    return(
        <div className="container">
            {uniqueTags.map((item, index) =>
                <Filter name={item} index={index} invert={invert} active={active}/>
            )}
            <br></br>
            {filteredArticles.map((item, index) =>
                <Card title={item.title} tags={item.tags}/>
            )}
        </div>
    );
}

function Filter({name, index, invert, active}) {
    return(
        <button
        className={`filter ${active[index] ? "active" : ""}`}
        onClick={
            () => {
                invert(index);
            }
        }>
           {name} 
        </button>
    );
}

function Card({title, tags}) {
    return(
        <div className="card">
            <h2 className="cardItem">{title}</h2>
            <h3 className="cardItem">tags: {tags.join(", ")}</h3>
        </div>
    );
}