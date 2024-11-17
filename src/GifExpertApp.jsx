import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = ( valueIncoming ) => {
        setCategories([ valueIncoming, ...categories ]);
    }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onSentCategory= { (valueIncoming) => onAddCategory(valueIncoming) }
      />

      {/* listado de Gif */}
      <ol>
        { 
            categories.map( ( category ) => {
                return <li key={ i }>{ category }</li>
            })
        }

      </ol>
      {/* Gif Item */}
    </>
  );
};
