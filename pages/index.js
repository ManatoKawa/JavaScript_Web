import { useState } from 'react';

      function Test() {
        return <h1>ddddd</h1>;
      }

      /*-- function Header() {
        return <h1>Develop. Preview. Ship. 🚀</h1>;
      } */
      function Header({title}) {
        return <h1>{title}</h1>;
      }
      
      
      function Home2() {
        return (
          <div>
            {/* Nesting the Header component */}
            <Header title="title5555"/>
          </div>
        );
      }

      export default function HomePage() {
        const [likes, setLikes] = useState(0);
        const [pom, setPom] = useState("pom");
        const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
        function handleClick() {
            console.log('increment like count');
            setLikes(likes + 2);
            setPom(pom + 2);
          }
        return (
          <div>
            <Header title="Develop. Preview. Ship. 🚀" />
            <Header title="Develop. Preview. Ship. 🚙" />

            <ul>
              {names.map((name) => (
                <li>{name}</li>
              ))}
            </ul>
            <button onClick={handleClick}>Likes ({likes}{pom})</button>
            

          </div>
        );
      }
      
