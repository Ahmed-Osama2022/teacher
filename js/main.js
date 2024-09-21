/**
 * Glboal variables
 */
const teacherForm = document.getElementById('teacher-form');
const teacherFormDiv = document.getElementById('repeat');
const addBtn = document.getElementById('addBtn');
const submitBtn = document.getElementById('submit');

/**
 * Helper functions
 */
let index = 1;
addBtn.addEventListener('click', () => {
  /**
   * HTML templates
   */
  const separator = document.createElement('hr');
  separator.classList = 'mt-2';

  const menu1 = document.createElement('div');
  menu1.classList = 'row flex-row justify-content-center align-content-center mt-2 gap-3';
  menu1.innerHTML = `
  <select id="system" name="system-${
    index + 1
  }" class="form-select col-5" aria-label="Default select example">
                  <optgroup label="اختار نظام التعليم">
                        <option value="arabic" selected>عربي</option>
                        <option value="interntional">لغات</option>
                        <option value="Azhary">أزهري</option>
                    </optgroup>
                </select>

                <select id="material" name="material-${
                  index + 1
                }" class="form-select col-5" aria-label="Default select example">
                    <optgroup label="اختار الماده">
                        <option value="arabic" selected>لغه عربيه</option>
                        <option value="math">رياضيات</option>
                        <option value="science">علوم</option>
                    </optgroup>
                </select>`;

  const menu2 = document.createElement('div');
  menu2.classList = 'row flex-row justify-content-center align-content-center mt-2 gap-3';

  menu2.innerHTML = `
<select id="grade" name="grade-${
    index + 1
  }" class="form-select col-5" aria-label="Default select example">
                    <optgroup label="اختار الصف الدراسي">
                        <option value="first-high-school" selected>اولى ثانوي</option>
                        <option value="second-high-school">ثانيه ثانوي</option>
                        <option value="third-high-school">ثالثه ثانوي</option>
                    </optgroup>
                </select>

                <select id="nationality" name="national_ids-${index + 1}" class="form-select col-5"
                    aria-label="Default select example">
                    <optgroup label="اختار الجنسية">
                        <option value="egyptian" selected>مصري</option>
                        <option value="saudi">سعودي</option>
                    </optgroup>
                </select>
                `;
  // End Html Templates
  teacherFormDiv.appendChild(menu1);
  teacherFormDiv.appendChild(menu2);
  teacherFormDiv.appendChild(separator);
  // Increase the index of the values
  index++;
  // console.log(parentElement);
});

/**
 * Getting the data
 */
let national_ids = [];
let systems = [];
let materials = [];
let grades = [];

teacherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Create a FormData object from the form element
  const formData = new FormData(teacherForm);

  // Log each key-value pair from the form
  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);

    if (key.includes('system')) {
      systems.push(value);
    } else if (key.includes('national_ids')) {
      national_ids.push(value);
    } else if (key.includes('grade')) {
      grades.push(value);
    } else {
      materials.push(value);
    }
  }

  // Example: Convert form data to an object
  //   const formObject = Object.fromEntries(formData);
  //   console.log(formObject);

  // Convert FormData to an object
  const data = Object.fromEntries(formData.entries());

  //   console.log(data);

  console.log('\n\n============ Data ============');
  console.log(systems);
  console.log(materials);
  console.log(grades);
  console.log(systems);
});
