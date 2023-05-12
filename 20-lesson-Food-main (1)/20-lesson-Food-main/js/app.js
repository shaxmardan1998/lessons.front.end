const categoriesContent = document.querySelector('#categories')
const main = document.querySelector("#main")
let selectedCategory = 'Beef'

function fetchCategories() {
	fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
		.then(res => res.json())
		.then(data => renderCategories(data.categories))
		.catch(err => console.log(err))
}

function renderCategories(categories) {
	categoriesContent.innerHTML = ''
	categories.map(item => {
		categoriesContent.innerHTML += `
      <li
        onclick="fetchMeals(this)"
        data-category="${item.strCategory}"
        class='flex gap-4 p-4 shadow-sm rounded-md items-center cursor-pointer bg-slate-50 hover:shadow-md transform active:scale-95 border ${
					selectedCategory === item.strCategory ? 'border-blue-500' : ''
				}'>
        <img 
          class='rounded-md object-cover' 
          width='70' height='70' 
          src='${item.strCategoryThumb}' />
        <h1 
          class='text-2xl text-slate-700 w-full truncate'>
            ${item.strCategory}
        </h1>
      </li>
    `
	})
}

function fetchMeals(categoryElement) {
	selectedCategory = categoryElement?.dataset?.category
	fetch(
		`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryElement?.dataset?.category}`
	)
		.then(res => res.json())
		.then(data => {
			console.log(data)
			renderMeals(data.meals)
		})
		.catch(err => console.log(err))
}



function renderMeals(array) {
	main.innerHTML = `
	<h1 class='heading text-3xl text-slate-600 font-bold px-6 py-4 bg-white rounded-md shadow-md w-full'>${selectedCategory}</h1>
	`
	array.map(item => {
		main.innerHTML += `
		<div class="row grid grid-cols-3 mt-4 gap-4 overflow-y-auto">
			<div
				class="item bg-white shadow-md p-4 rounded-md cursor-pointer flex items-center justify-center gap-4 flex-col">
				<img class='rounded-md' src=${item.strMealThumb} alt="">
				<h1>${item.strMeal}</h1>
	  		</div>
		</div>
		`
	})
}


fetchMeals('Beef')
fetchCategories()
