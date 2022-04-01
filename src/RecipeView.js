import React from "react";

function RecipeView ({recipe, deleteRecipes}) {
    
    return (
    <tr>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td><img src={recipe.photo} /></td>
            <td className="content_td"><p>{(recipe.ingredients)}</p></td>
            <td className="content_td"><p>{(recipe.preparation)}</p></td>
            <td><button name="delete" onClick={deleteRecipes}>Delete</button></td>
            </tr> 
    )
}


export default RecipeView