import React, { useState } from "react";

function RecipeCreate({recipes, setRecipes}) {
    
    const initialFormState= {
        name: '',
        cuisine: '',
        photo: '',
        ingredients: '',
        preparation: '',      
    }
    
   const [formData, setFormData] = useState({...initialFormState});
   const handleChange = ({ target }) => {  
       setFormData({ ...formData, [target.name]: target.value, });
    }
   
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData.name, formData.cuisine, formData.ingredients, formData.preparation);
        setRecipes([...recipes, formData])
        setFormData({...initialFormState });
    };
    
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
              <td>
              <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={handleChange}
                  value={formData.name}
                  placeholder="Name"
                  required/>
                  </td>
              <td>
              <input
                  id="cuisine"
                  name="cuisine"
                  type="text"
                  onChange={handleChange}
                  value={formData.cuisine}
                  placeholder="Cuisine"
                  required/>
                  </td>
              <td>
              <input
                  id="photo"
                  name="photo"
                  type="url"
                  onChange={handleChange}
                  value={formData.photo}
                  placeholder="URL"
                  required/>
                  </td>
              <td >
              <textarea
                  id="ingredients"
                  name="ingredients"
                  type="text"
                  onChange={handleChange}
                  value={formData.ingredients}
                  placeholder="Ingredients"
                  required/>
                  </td>
            <td>
              <textarea
                  id="preparation"
                  name="preparation"
                  type="text"
                  onChange={handleChange}
                  value={formData.preparation}
                  placeholder="Preparation"
                  required/>
                  </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
