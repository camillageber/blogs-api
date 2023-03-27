<img align="center" width="300" src="https://media1.giphy.com/media/cGQZ57EJb0y9SCohZ0/giphy.gif?cid=ecf05e47yrjq40y9mai5i22thy85e46p59q64qjjzx1hvh2g&rid=giphy.gif&ct=g"/>

# BlogsApi

This is a project with the goal of developing a Rest API and a database for producing content for a Blog.

<h2> About the project: </h2>
  
The application was developed in Node.js, using the sequelize package to make a CRUD of posts.
Also used here was the MySQL table relationship. 
To make a post you need a user and a login, so we worked on the relationship between 'user' and 'post';
It was necessary to use categories for the posts, so we worked on the relation of posts to 'categories' and from 'categories' to 'posts'.
<div>
  <p>Among the various routes the user can take is: </p>
  <ul>
    <li>Login :heavy_check_mark: </li> 
    <li>Create a new user :heavy_check_mark:</li>
    <li>Bring up all user information :heavy_check_mark:</li>
    <li>Bring up one user's information per id :heavy_check_mark: </li>
    <li>Create a post :heavy_check_mark:</li>
    <li>Bring up all the posts :heavy_check_mark:</li>
    <li>Bring up the information of a post by id :heavy_check_mark:</li>
    <li>Bring up all the above information with validated fields :heavy_check_mark:</li>
    <li>Bring up all the above information with validated fields :heavy_check_mark:</li>
  </ul>
</div>

----

<h3> Main Technologies </h3>

<div>
  <ul>
    <li> JavaScript </li>
    <li> MySQL </li>
    <li> Sequelize </li>
    <li> Docker </li>
    <li> JWT </li>
    <li> Joi </li>
    <li> Thunder Client</li>
    <li> Error Validation Middleware </li>
    <li> Authentication Middleware </li>
  </ul>
</div>

---
  
<h3> Guidelines for starting the project </h3>

 :warning: To start this project directly on your machine, you need to have already installed <i>MySQL</i> and <i>Node</i> locally. If not, proceed to the <strong>Docker</strong> step.

<summary><strong> Before you start developing</strong></summary>
<div>
  <ul>
    <br><li>Clone the repository</li>
    
        git clone git@github.com:camillageber/blogs-api.git
      
   <li>Enter the folder of the repository you just cloned</li>
        
        cd camillageber/blogs-api.git

   <li>Install the dependencies </li>
        
        npm install
        
   <li>Start the project</li>
   
        npm start
        
  </ul>
</div>


<details>
  <summary><strong>🐋 Running in Docker vs Locally</strong></summary>
  
## 👉 With Docker
 
  **:warning: Before you start, your docker-compose needs to be version 1.29 or higher. [See here](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) or [in the documentation](https://docs.docker.com/compose/install/) how to install it. In the first article, you can replace where it is with `1.26.0` with `1.29.2`.**]
  
   > :information_source: Run the `node` and `db` services with the `docker-compose up -d --build` command.

  - Remember to stop `mysql` if you are using it locally on the default port (`3306`), or adapt it if you want to use the containerized application;

  - These services will initialize a container called `blogs_api` and another called `blogs_api_db`;

  - From here you can run the `blogs_api` container via the CLI, or open it in VS Code;

  > :information_source: Use the `docker exec -it blogs_api bash` command.

  - This will give you access to the interactive terminal of the container created by compose, which is running in the background.

  > :information_source: Install the dependencies [**If any**] with `npm install` (Install into container)
  
   - **:warning: Warning:** If you choose to use Docker, **ALL** the commands available in `package.json` (npm start, npm test, npm run dev, ...) must be executed **INTER** the container, i.e., in the terminal that appears after executing the `docker exec` command above. 

  - **:warning: Warning:** The **git** inside the container is not configured with your credentials. Either do the commits outside the container or set up your git credentials inside the container.

  - **:warning: Warning:** Do not run the npm audit fix command! It updates several dependencies in the project, and this update creates conflicts with the evaluator.

</details>
  
  -----
  
  # The final result: 
<div>
   <img align="center" width="800" src="https://user-images.githubusercontent.com/88116437/228020593-671fae36-983a-4915-b06b-84bbb55bceb6.png" />
   <img align="center" width="800" src="https://user-images.githubusercontent.com/88116437/228020844-143a33d0-75ff-4acd-ab76-88d8ab4b0d7c.png" />
</div>

  
