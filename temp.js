<% projects.forEach(function(project) { %>
      <div class="project">
        <h4><%= project.title %></h4>
        <img src="./images/<%= project.img %>" alt="screenshot">
        <p><%= project.description %></p>
        <p>Tech: <%= project.tech %></p>
        <% if (project.demo) { %>
          <a href="<%= project.demo %>">Live</a>
        <% } %>
        <a href="<%= project.github %>">Github</a>
      </div>
    <% }); %>





      <section id="home">





  </section>






  <ul>
    <li>JavaScript</li>
    <li>Vue&#47;js</li>
    <li> Node/Express&#47;js</li>
    <li> jQuery</li>
    <li>Handlebars  </li>
  </ul>


  <ul>
        <li>JavaScript</li>
        <li>Vue.js</li>
        <li> Node/Express.js</li>
        <li> jQuery</li>
        <li>Handlebars  </li>
      </ul>
      <ul>
        <li>Ruby </li>
        <li>Ruby on Rails </li>
        <li>Sinatra </li>
        <li>PostgreSQL </li>
        <li>ERB, Haml  </li>
      </ul>

          <li>HTML </li>
      <li>CSS, Sass </li>
            <li>Bootstrap </li>
