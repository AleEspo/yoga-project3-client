import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({ token: "", user: {} });

//1:56 aula terça 7/12

function AuthContextComponent(props) {
  const [loggedInUser, setLoggedInUser] = useState({
    token: "",
    user: {},
  });

  const [loading, setLoading] = useState (true)

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");

    //sem axios e express preciso transformar o Json no braço => parse() transforma JSON em JS (contrario de stringify)
    //nesta sintaxe, se o parse for vazio, vai dar um crush na applicação => || se não conseguir transformar o storedUser, transforma uma string vazia
    const parsedStoredUser = JSON.parse(storedUser || `""`);

    if (parsedStoredUser.token) {
      setLoggedInUser(parsedStoredUser);
      // criar outro Context pra navegar na Home ja com o valor loggedIn
      setLoading(false)
    } else {
      setLoggedInUser(null);
      setLoading(false)
    }
  }, []);

  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser, loading, setLoading }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export {AuthContext, AuthContextComponent}