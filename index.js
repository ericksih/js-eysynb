// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const getUsers = () => {
  return new Promise((resolve, reject) => {
    return setTimeout(
      () => resolve([{ id: 'jon' }, { id: 'andrey' }, { id: 'tania' }]),
      1000
    );
  });
};

// Second promise relies on the resulting array of first promise
const getIdFromUser = (user) => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve(user.id), 3000);
  });
};

// Third promise relies on the result of the second promise
const capitalizeIds = (id) => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve(id.toUpperCase()), 4000);
  });
};

const runAsyncFunctions = async () => {
  const users = await getUsers();

  Promise.all(
    users.map(async (user) => {
      const userId = await getIdFromUser(user);
      console.log('3 detik setelah get user done ->', userId);

      const capitalizedId = await capitalizeIds(userId);
      console.log('4 detik setelah get id done ->', capitalizedId);
    })
  );

  console.log(users);
};

runAsyncFunctions();
